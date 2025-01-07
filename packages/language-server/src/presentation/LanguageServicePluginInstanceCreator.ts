import type { Index } from "@/domain/model/scip";
import { CreateIndexUseCase } from "@/usecase/createIndex/CreateIndexUseCase";
import { ProvideCompletionItemsUseCase } from "@/usecase/provideCompletionItems/ProvideCompletionItemsUseCase";
import {
	type Connection,
	DidChangeWatchedFilesNotification,
	DidOpenTextDocumentNotification,
	FileChangeType,
	type LanguageServiceContext,
	type LanguageServicePluginInstance,
	MessageType,
	ShowMessageNotification,
} from "@volar/language-server";
import { URI } from "vscode-uri";

export class LanguageServicePluginInstanceCreator {
	private initializationStarted = false;
	private index: Index;
	constructor(private connection: Connection) {
		this.connection.onNotification(
			DidOpenTextDocumentNotification.type,
			async () => {
				if (!this.initializationStarted) {
					await this.initialize();
				}
			},
		);
	}

	// Use arrow function to keep `this` in the defined scope
	execute = (
		_context: LanguageServiceContext,
	): LanguageServicePluginInstance => {
		return {
			provideCompletionItems: (...args) =>
				new ProvideCompletionItemsUseCase(this.index).execute(...args),
		};
	};

	async initialize() {
		console.debug("initialize start");
		this.initializationStarted = true;
		const progress = await this.connection.window.createWorkDoneProgress();
		progress.begin("initializing...");
		this.connection.workspace.getWorkspaceFolders();
		const workspaceFolders = await this.getWorkspaceFolders();
		// TODO: ワークスペースが複数あるときの対応
		// TODO: ファイルが変更された時のindexの扱い
		this.index = new CreateIndexUseCase().execute(workspaceFolders[0]);
		this.connection.onNotification(
			DidChangeWatchedFilesNotification.type,
			(params) => {
				for (const change of params.changes) {
					switch (change.type) {
						case FileChangeType.Created:
							console.log(`File created: ${change.uri}`);
							break;
						case FileChangeType.Changed:
							console.log(`File changed: ${change.uri}`);
							break;
						case FileChangeType.Deleted:
							console.log(`File deleted: ${change.uri}`);
							break;
						default:
							break;
					}
				}
			},
		);
		progress.done();
		this.connection.sendNotification(ShowMessageNotification.type, {
			type: MessageType.Info,
			message: "Laravel Language Server initialized.",
		});
		console.debug("initialize end");
	}

	async getWorkspaceFolders() {
		const workspaceFolders: string[] = [];
		const folders =
			(await this.connection.workspace.getWorkspaceFolders()) ?? [];
		for (const folder of folders) {
			workspaceFolders.push(URI.parse(folder.uri).fsPath);
		}
		return workspaceFolders;
	}
}
