import {
	type CompletionItem,
	CompletionItemKind,
	InsertTextFormat,
} from "vscode-languageserver";

// ref: https://laravel.com/docs/11.x/blade#displaying-data
export const bladeDirective: CompletionItem[] = [
	{
		label: "@verbatim",
		kind: CompletionItemKind.Function,
		detail: "Begin verbatim directive",
		documentation:
			"Start a block of code that will be output as-is, without Blade parsing.",
		insertText: "@verbatim",
	},
	{
		label: "@endverbatim",
		kind: CompletionItemKind.Function,
		detail: "End verbatim directive",
		documentation:
			"End a block of code that will be output as-is, without Blade parsing.",
		insertText: "@endverbatim",
	},
	{
		label: "@verbatim",
		kind: CompletionItemKind.Snippet,
		detail: "@verbatim ~ @endverbatim",
		documentation: "@verbatim\n    ${1}\n@endverbatim",
		insertText: "@verbatim\n    ${1}\n@endverbatim",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@if",
		kind: CompletionItemKind.Function,
		detail: "Begin if directive",
		documentation: "Start an if statement.",
		insertText: "@if (${1:condition})",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@elseif",
		kind: CompletionItemKind.Function,
		detail: "Begin elseif directive",
		documentation: "Start an elseif statement.",
		insertText: "@elseif (${1:condition})",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@else",
		kind: CompletionItemKind.Function,
		detail: "Begin else directive",
		documentation: "Start an else statement.",
		insertText: "@else",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@endif",
		kind: CompletionItemKind.Function,
		detail: "End if directive",
		documentation: "End an if statement.",
		insertText: "@endif",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@if",
		kind: CompletionItemKind.Snippet,
		detail: "@if ~ @endif",
		documentation: "@if (${1:condition})\n    ${2}\n@endif",
		insertText: "@if (${1:condition})\n    ${2}\n@endif",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@elseif",
		kind: CompletionItemKind.Snippet,
		detail: "@if ~ @elseif ~ @endif",
		documentation:
			"@if (${1:condition})\n    ${2}\n@elseif (${3:condition})\n    ${4}\n@endif",
		insertText:
			"@if (${1:condition})\n    ${2}\n@elseif (${3:condition})\n    ${4}\n@endif",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@unless",
		kind: CompletionItemKind.Function,
		detail: "Begin unless directive",
		documentation: "Start an unless statement.",
		insertText: "@unless (${1:condition})",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@endunless",
		kind: CompletionItemKind.Function,
		detail: "End unless directive",
		documentation: "End an unless statement.",
		insertText: "@endunless",
		insertTextFormat: InsertTextFormat.PlainText,
	},
	{
		label: "@unless",
		kind: CompletionItemKind.Snippet,
		detail: "@unless ~ @endunless",
		documentation: "@unless (${1:condition})\n    ${2}\n@endunless",
		insertText: "@unless (${1:condition})\n    ${2}\n@endunless",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@isset",
		kind: CompletionItemKind.Function,
		detail: "Begin isset directive",
		documentation: "Check if a variable exists and is not null.",
		insertText: "@isset(${1:variable})\n    ${2}\n@endisset",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@endisset",
		kind: CompletionItemKind.Function,
		detail: "End isset directive",
		documentation: "End the isset directive.",
		insertText: "@endisset",
	},
	{
		label: "@empty",
		kind: CompletionItemKind.Function,
		detail: "Begin empty directive",
		documentation:
			"Start a block of code that will be executed if the variable is empty.",
		insertText: "@empty",
	},
	{
		label: "@endempty",
		kind: CompletionItemKind.Function,
		detail: "End empty directive",
		documentation:
			"End a block of code that will be executed if the variable is empty.",
		insertText: "@endempty",
	},
	{
		label: "@empty",
		kind: CompletionItemKind.Snippet,
		detail: "@empty ~ @endempty",
		documentation: "@empty\n    ${1}\n@endempty",
		insertText: "@empty\n    ${1}\n@endempty",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@auth",
		kind: CompletionItemKind.Function,
		detail: "Begin auth directive",
		documentation:
			"Start a block of code that will be output only when the user is authenticated.",
		insertText: "@auth",
	},
	{
		label: "@endauth",
		kind: CompletionItemKind.Function,
		detail: "End auth directive",
		documentation:
			"End a block of code that will be output only when the user is authenticated.",
		insertText: "@endauth",
	},
	{
		label: "@auth",
		kind: CompletionItemKind.Snippet,
		detail: "@auth ~ @endauth",
		documentation: "@auth\n    ${1}\n@endauth",
		insertText: "@auth\n    ${1}\n@endauth",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@guest",
		kind: CompletionItemKind.Function,
		detail: "Begin guest directive",
		documentation:
			"Start a block of code that will be output only when the user is not authenticated.",
		insertText: "@guest",
	},
	{
		label: "@endguest",
		kind: CompletionItemKind.Function,
		detail: "End guest directive",
		documentation:
			"End a block of code that will be output only when the user is not authenticated.",
		insertText: "@endguest",
	},
	{
		label: "@guest",
		kind: CompletionItemKind.Snippet,
		detail: "@guest ~ @endguest",
		documentation: "@guest\n    ${1}\n@endguest",
		insertText: "@guest\n    ${1}\n@endguest",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@production",
		kind: CompletionItemKind.Function,
		detail: "Output the content of the block only in production environments",
		documentation:
			"This directive outputs the content of the block only in production environments.",
		insertText: "@production",
	},
	{
		label: "@endproduction",
		kind: CompletionItemKind.Function,
		detail: "End production directive",
		documentation: "Ends the production directive.",
		insertText: "@endproduction",
	},
	{
		label: "@production",
		kind: CompletionItemKind.Snippet,
		detail: "@production ~ @endproduction",
		documentation: "@production\n    ${1}\n@endproduction",
		insertText: "@production\n    ${1}\n@endproduction",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@env",
		kind: CompletionItemKind.Function,
		detail: "Output the value of an environment variable",
		documentation:
			"@env(['staging', 'production'])    // The application is running in 'staging' or 'production'...\n@endenv",
		insertText: "@env('${1}')",
	},
	{
		label: "@endenv",
		kind: CompletionItemKind.Function,
		detail: "Ends the env directive",
		documentation:
			"@env(['staging', 'production'])    // The application is running in 'staging' or 'production'...\n@endenv",
		insertText: "@endenv",
	},
	{
		label: "@env",
		kind: CompletionItemKind.Snippet,
		detail: "@env('value') ~ @endenv",
		documentation: "@env('${1}')\n    ${2}\n@endenv",
		insertText: "@env('${1}')\n    ${2}\n@endenv",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@hasSection",
		kind: CompletionItemKind.Function,
		detail: "Check if the given section exists in the configuration file.",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
		insertText: "@hasSection('${1}')",
	},
	{
		label: "@hasSection",
		kind: CompletionItemKind.Snippet,
		detail: "@hasSection('section') ~ @endhasSection",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
		insertText: "@hasSection('${1}')\n    ${2}\n@endhasSection",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@endhasSection",
		kind: CompletionItemKind.Function,
		detail: "Ends the hasSection directive",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
		insertText: "@endhasSection",
	},
];
