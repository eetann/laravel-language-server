import { TextDocument } from "vscode-languageserver-textdocument";
import {
	type CompletionItem,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	type Range,
	TextDocumentSyncKind,
	TextDocuments,
	createConnection,
} from "vscode-languageserver/node";
import { onCompletion } from "./completion";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);
connection.console.info(`Laravel LSP running in node ${process.version}`);

const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize(() => {
	setupDocumentsListeners();

	return {
		capabilities: {
			textDocumentSync: {
				openClose: true,
				change: TextDocumentSyncKind.Incremental,
				willSaveWaitUntil: false,
				save: {
					includeText: false,
				},
			},
			completionProvider: {
				triggerCharacters: ["$", "@"],
				resolveProvider: true,
			},
		},
	};
});

function validate(doc: TextDocument) {
	const text = doc.getText();

	const pattern = /\b[A-Z]{2,}\b/g;
	let m: RegExpExecArray | null;

	const diagnostics: Diagnostic[] = [];

	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	while ((m = pattern.exec(text)) !== null) {
		const range: Range = {
			start: doc.positionAt(m.index),
			end: doc.positionAt(m.index + m[0].length),
		};
		const diagnostic: Diagnostic = Diagnostic.create(
			range,
			`${m[0]} is all uppercase.`,
			DiagnosticSeverity.Warning,
			"",
			"sample",
		);
		diagnostics.push(diagnostic);
	}

	connection.sendDiagnostics({ uri: doc.uri, diagnostics });
}

function setupDocumentsListeners() {
	documents.listen(connection);

	documents.onDidOpen((event) => {
		validate(event.document);
	});
	documents.onDidChangeContent((event) => {
		validate(event.document);
	});

	documents.onDidClose((close) => {
		connection.sendDiagnostics({ uri: close.document.uri, diagnostics: [] });
	});
}

connection.onCompletion(onCompletion);

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
	if (item.data === 1) {
		item.detail = "TypeScript details";
		item.documentation = "TypeScript documentation";
	} else if (item.data === 2) {
		item.detail = "JavaScript details";
		item.documentation = "JavaScript documentation";
	}
	return item;
});

connection.listen();
