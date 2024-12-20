import type { Index } from "@/gen/scip_pb";
import { CreateIndexUseCase } from "@/usecase/createIndex/CreateIndexUseCase";
import { ProvideCompletionItemsUseCase } from "@/usecase/provideCompletionItems/ProvideCompletionItemsUseCase";
import {
	type Connection,
	type LanguageServiceContext,
	type LanguageServicePluginInstance,
	MessageType,
	ShowMessageNotification,
} from "@volar/language-server";
import { URI } from "vscode-uri";

export class LanguageServicePluginInstanceCreator {
	private initializationStarted = false;
	private index: Index;
	constructor(private connection: Connection) {}

	// Use arrow function to keep `this` in the defined scope
	execute = (
		context: LanguageServiceContext,
	): LanguageServicePluginInstance => {
		return {
			provideCompletionItems: async (...args) =>
				await this.runWithInitialization(async () =>
					new ProvideCompletionItemsUseCase(this.index).execute(...args),
				),
		};
	};

	async runWithInitialization<T>(callback: () => T): Promise<T> {
		if (!this.initializationStarted) {
			await this.initialize();
		}
		return callback();
	}

	async initialize() {
		this.initializationStarted = true;
		const progress = await this.connection.window.createWorkDoneProgress();
		progress.begin("initializing...");
		this.connection.workspace.getWorkspaceFolders();
		const workspaceFolders = await this.getWorkspaceFolders();
		// TODO: ワークスペースが複数あるときの対応
		this.index = new CreateIndexUseCase().execute(workspaceFolders[0]);
		await new Promise((res) => setTimeout(res, 1000));
		progress.done();
		this.connection.sendNotification(ShowMessageNotification.type, {
			type: MessageType.Info,
			message: "Laravel Language Server initialized.",
		});
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
