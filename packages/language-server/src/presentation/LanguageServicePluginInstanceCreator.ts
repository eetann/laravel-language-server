import { ProvideCompletionItemsUseCase } from "@/usecase/provideCompletionItems/ProvideCompletionItemsUseCase";
import {
	type Connection,
	type LanguageServiceContext,
	type LanguageServicePluginInstance,
	MessageType,
	ShowMessageNotification,
} from "@volar/language-server";

export class LanguageServicePluginInstanceCreator {
	private initializationStarted = false;
	constructor(private connection: Connection) {}

	// Use arrow function to keep `this` in the defined scope
	execute = (
		context: LanguageServiceContext,
	): LanguageServicePluginInstance => {
		return {
			provideCompletionItems: async (...args) =>
				await this.runWithInitialization(async () =>
					new ProvideCompletionItemsUseCase().execute(...args),
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
		// ここでindexする
		this.connection.sendNotification(ShowMessageNotification.type, {
			type: MessageType.Info,
			message: "initialized!",
		});
	}
}
