import {
	createConnection,
	createServer,
	createSimpleProject,
} from "@volar/language-server/node";
import { create as createCssService } from "volar-service-css";
import { create as createHtmlService } from "volar-service-html";
import { createBladeService } from "./blade-service";
import { laravelLanguagePlugin } from "./languagePlugin";

const connection = createConnection();
const server = createServer(connection);

connection.listen();

connection.onInitialize((params) => {
	return server.initialize(
		params,
		createSimpleProject([laravelLanguagePlugin]),
		[createBladeService(), createHtmlService(), createCssService()],
	);
});

connection.onInitialized(server.initialized);
connection.onShutdown(server.shutdown);
