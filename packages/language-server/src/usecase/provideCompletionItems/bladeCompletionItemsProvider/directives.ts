import {
	type CompletionItem,
	CompletionItemKind,
	InsertTextFormat,
} from "@volar/language-server";

// ref: https://laravel.com/docs/11.x/blade#displaying-data
export const bladeDirective: CompletionItem[] = [
	{
		label: "@break",
		kind: CompletionItemKind.Function,
		detail: "Break the statement",
		insertText: "_break",
		filterText: "break",
		documentation: "",
	},
	{
		label: "@continue",
		kind: CompletionItemKind.Function,
		detail: "Continues the loop iteration",
		filterText: "_continue",
		insertText: "continue",
		documentation: "",
	},
	{
		label: "@continue",
		kind: CompletionItemKind.Snippet,
		detail: "@continue",
		documentation: "```blade\n@continue\n```",
		filterText: "continue",
		insertText: "continue",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@verbatim",
		kind: CompletionItemKind.Function,
		detail: "Begin verbatim directive",
		documentation:
			"Start a block of code that will be output as-is, without Blade parsing.",
		filterText: "verbatim",
		insertText: "_verbatim",
	},
	{
		label: "@endverbatim",
		kind: CompletionItemKind.Function,
		detail: "End verbatim directive",
		documentation:
			"End a block of code that will be output as-is, without Blade parsing.",
		filterText: "endverbatim",
		insertText: "endverbatim",
	},
	{
		label: "@verbatim",
		kind: CompletionItemKind.Snippet,
		detail: "@verbatim ~ @endverbatim",
		documentation: "@verbatim\n    ${1}\n@endverbatim",
		filterText: "verbatim",
		insertText: "verbatim\n    ${1}\n@endverbatim",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@if",
		kind: CompletionItemKind.Function,
		detail: "Begin if directive",
		documentation: "Start an if statement.",
		insertTextFormat: InsertTextFormat.PlainText,
		filterText: "if",
		insertText: "_if",
	},
	{
		label: "@elseif",
		kind: CompletionItemKind.Function,
		detail: "Begin elseif directive",
		documentation: "Start an elseif statement.",
		insertTextFormat: InsertTextFormat.PlainText,
		filterText: "elseif",
		insertText: "_elseif",
	},
	{
		label: "@else",
		kind: CompletionItemKind.Function,
		detail: "Begin else directive",
		documentation: "Start an else statement.",
		insertTextFormat: InsertTextFormat.PlainText,
		filterText: "else",
		insertText: "_else",
	},
	{
		label: "@endif",
		kind: CompletionItemKind.Function,
		detail: "End if directive",
		documentation: "End an if statement.",
		insertTextFormat: InsertTextFormat.PlainText,
		filterText: "endif",
		insertText: "endif",
	},
	{
		label: "@if",
		kind: CompletionItemKind.Snippet,
		detail: "@if ~ @endif",
		documentation: "@if (${1:condition})\n    ${2}\n@endif",
		filterText: "if",
		insertText: "if (${1:condition})\n    ${2}\n@endif",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@elseif",
		kind: CompletionItemKind.Snippet,
		detail: "@if ~ @elseif ~ @endif",
		documentation:
			"@if (${1:condition})\n    ${2}\n@elseif (${3:condition})\n    ${4}\n@endif",
		filterText: "elseif",
		insertText:
			"if (${1:condition})\n    ${2}\n@elseif (${3:condition})\n    ${4}\n@endif",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@unless",
		kind: CompletionItemKind.Function,
		detail: "Begin unless directive",
		documentation: "Start an unless statement.",
		insertTextFormat: InsertTextFormat.PlainText,
		filterText: "unless",
		insertText: "_unless",
	},
	{
		label: "@endunless",
		kind: CompletionItemKind.Function,
		detail: "End unless directive",
		documentation: "End an unless statement.",
		insertTextFormat: InsertTextFormat.PlainText,
		filterText: "endunless",
		insertText: "endunless",
	},
	{
		label: "@unless",
		kind: CompletionItemKind.Snippet,
		detail: "@unless ~ @endunless",
		documentation: "@unless (${1:condition})\n    ${2}\n@endunless",
		filterText: "unless",
		insertText: "unless (${1:condition})\n    ${2}\n@endunless",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@isset",
		kind: CompletionItemKind.Snippet,
		detail: "Begin isset directive",
		documentation: "Check if a variable exists and is not null.",
		filterText: "isset",
		insertText: "isset(${1:variable})\n    ${2}\n@endisset",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@endisset",
		kind: CompletionItemKind.Function,
		detail: "End isset directive",
		documentation: "End the isset directive.",
		filterText: "endisset",
		insertText: "endisset",
	},
	{
		label: "@isset",
		kind: CompletionItemKind.Snippet,
		detail: "@isset ~ @endisset",
		documentation: "Check if a variable exists and is not null.",
		filterText: "isset",
		insertText: "isset(${1:variable})\n    ${2}\n@endisset",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@empty",
		kind: CompletionItemKind.Function,
		detail: "Begin empty directive",
		documentation:
			"Start a block of code that will be executed if the variable is empty.",
		filterText: "empty",
		insertText: "_empty",
	},
	{
		label: "@endempty",
		kind: CompletionItemKind.Function,
		detail: "End empty directive",
		documentation:
			"End a block of code that will be executed if the variable is empty.",
		filterText: "endempty",
		insertText: "endempty",
	},
	{
		label: "@empty",
		kind: CompletionItemKind.Snippet,
		detail: "@empty ~ @endempty",
		documentation: "@empty\n    ${1}\n@endempty",
		filterText: "empty",
		insertText: "empty\n    ${1}\n@endempty",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@auth",
		kind: CompletionItemKind.Function,
		detail: "Begin auth directive",
		documentation:
			"Start a block of code that will be output only when the user is authenticated.",
		filterText: "_auth",
		insertText: "auth",
	},
	{
		label: "@endauth",
		kind: CompletionItemKind.Function,
		detail: "End auth directive",
		documentation:
			"End a block of code that will be output only when the user is authenticated.",
		filterText: "endauth",
		insertText: "endauth",
	},
	{
		label: "@auth",
		kind: CompletionItemKind.Snippet,
		detail: "@auth ~ @endauth",
		documentation: "@auth\n    ${1}\n@endauth",
		filterText: "auth",
		insertText: "auth\n    ${1}\n@endauth",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@guest",
		kind: CompletionItemKind.Function,
		detail: "Begin guest directive",
		documentation:
			"Start a block of code that will be output only when the user is not authenticated.",
		filterText: "guest",
		insertText: "_guest",
	},
	{
		label: "@endguest",
		kind: CompletionItemKind.Function,
		detail: "End guest directive",
		documentation:
			"End a block of code that will be output only when the user is not authenticated.",
		filterText: "endguest",
		insertText: "endguest",
	},
	{
		label: "@guest",
		kind: CompletionItemKind.Snippet,
		detail: "@guest ~ @endguest",
		documentation: "@guest\n    ${1}\n@endguest",
		filterText: "guest",
		insertText: "guest\n    ${1}\n@endguest",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@production",
		kind: CompletionItemKind.Function,
		detail: "Output the content of the block only in production environments",
		documentation:
			"This directive outputs the content of the block only in production environments.",
		filterText: "production",
		insertText: "_production",
	},
	{
		label: "@endproduction",
		kind: CompletionItemKind.Function,
		detail: "End production directive",
		documentation: "Ends the production directive.",
		filterText: "endproduction",
		insertText: "endproduction",
	},
	{
		label: "@production",
		kind: CompletionItemKind.Snippet,
		detail: "@production ~ @endproduction",
		documentation: "@production\n    ${1}\n@endproduction",
		filterText: "production",
		insertText: "production\n    ${1}\n@endproduction",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@env",
		kind: CompletionItemKind.Function,
		detail: "Output the value of an environment variable",
		documentation: "",
		filterText: "env",
		insertText: "_env",
	},
	{
		label: "@endenv",
		kind: CompletionItemKind.Function,
		detail: "Ends the env directive",
		documentation: "",
		filterText: "endenv",
		insertText: "endenv",
	},
	{
		label: "@env",
		kind: CompletionItemKind.Snippet,
		detail: "@env('value') ~ @endenv",
		documentation: "```blade\n@env('${1}')\n    ${2}\n@endenv\n```",
		filterText: "env",
		insertText: "env('${1}')\n    ${2}\n@endenv",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@hasSection",
		kind: CompletionItemKind.Function,
		detail: "Check if the given section exists in the configuration file.",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
		filterText: "hasSection",
		insertText: "_hasSection",
	},
	{
		label: "@hasSection",
		kind: CompletionItemKind.Snippet,
		detail: "@hasSection('section') ~ @endhasSection",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
		filterText: "hasSection",
		insertText: "hasSection('${1}')\n    ${2}\n@endhasSection",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@endhasSection",
		kind: CompletionItemKind.Function,
		detail: "Ends the hasSection directive",
		documentation:
			"The hasSection directive checks if the given section exists in the configuration file.\n\n```blade\n@hasSection('database')\n    // The database section exists in the configuration file.\n@endhasSection\n```",
		filterText: "endhasSection",
		insertText: "endhasSection",
	},
	{
		label: "@sectionMissing",
		kind: CompletionItemKind.Function,
		detail: "Define a section with default content",
		documentation: "",
		filterText: "sectionMissing",
		insertText: "_sectionMissing",
	},
	{
		label: "@sectionMissing",
		kind: CompletionItemKind.Snippet,
		detail: "Define a section with default content",
		documentation:
			"@sectionMissing('navigation')\n    <div class='pull-right'>\n        @include('default-navigation')\n    </div>\n@endif",
		filterText: "sectionMissing",
		insertText: "sectionMissing('${1}', '${2}')\n    ${3}\n@endif",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@session",
		kind: CompletionItemKind.Function,
		detail: "Retrieve a session value",
		documentation: "",
		filterText: "session",
		insertText: "_session",
	},
	{
		label: "@endsession",
		kind: CompletionItemKind.Function,
		detail: "Ends the session directive",
		documentation: "",
		filterText: "endsession",
		insertText: "endsession",
	},
	{
		label: "@session",
		kind: CompletionItemKind.Snippet,
		detail: "@session('key') ~ @endsession",
		documentation: "@session('${1}')\n    ${2}\n@endsession",
		filterText: "session",
		insertText: "session('${1}')\n    ${2}\n@endsession",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@switch",
		kind: CompletionItemKind.Function,
		detail: "Start a switch statement",
		documentation: "",
		filterText: "switch",
		insertText: "_switch",
	},
	{
		label: "@endswitch",
		kind: CompletionItemKind.Function,
		detail: "Ends the switch statement",
		documentation: "",
		filterText: "endswitch",
		insertText: "endswitch",
	},
	{
		label: "@switch",
		kind: CompletionItemKind.Snippet,
		detail: "@switch($expression) ~ @endswitch",
		documentation:
			"```blade\n@switch($expression)\n    @case(${1})\n        ${2}\n        @break\n    @default\n        ${3}\n@endswitch\n```",
		filterText: "switch",
		insertText:
			"switch(${1})\n    @case(${2})\n        ${3}\n        @break\n    @default\n        ${4}\n@endswitch",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@case",
		kind: CompletionItemKind.Function,
		detail: "case the switch statement",
		documentation: "",
		filterText: "case",
		insertText: "_case",
	},
	{
		label: "@default",
		kind: CompletionItemKind.Function,
		detail: "Default the switch statement",
		documentation: "",
		filterText: "default",
		insertText: "_default",
	},
	{
		label: "@for",
		kind: CompletionItemKind.Function,
		detail: "Loop over a given collection",
		documentation: "",
		filterText: "for",
		insertText: "_for",
	},
	{
		label: "@endfor",
		kind: CompletionItemKind.Function,
		detail: "Ends the for directive",
		documentation: "",
		filterText: "endfor",
		insertText: "endfor",
	},
	{
		label: "@for",
		kind: CompletionItemKind.Snippet,
		detail: "@for($loop, $item in $collection) ~ @endfor",
		documentation:
			"```blade\n@for($i = 0; $i < 10; $i++)\n    {{ $i }}\n@endfor\n```",
		filterText: "for",
		insertText:
			"for(${1:$i = 0}; ${2:$i < 10}; ${3:$i++})\n    ${2: {{ $i }}}\n@endfor",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@foreach",
		kind: CompletionItemKind.Function,
		detail: "Loop over a collection",
		documentation: "",
		filterText: "foreach",
		insertText: "_foreach",
	},
	{
		label: "@endforeach",
		kind: CompletionItemKind.Function,
		detail: "Ends the foreach directive",
		documentation: "",
		filterText: "endforeach",
		insertText: "endforeach",
	},
	{
		label: "@foreach",
		kind: CompletionItemKind.Snippet,
		detail: "@foreach($items as $item) ~ @endforeach",
		documentation:
			"```blade\n@foreach(${1:items} as ${2:item})\n    ${3}\n@endforeach\n```",
		filterText: "foreach",
		insertText: "foreach(${1:items} as ${2:item})\n    ${3}\n@endforeach",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@forelse",
		kind: CompletionItemKind.Function,
		detail: "Loop over a collection of items",
		documentation: "",
		filterText: "forelse",
		insertText: "_forelse",
	},
	{
		label: "@endforelse",
		kind: CompletionItemKind.Function,
		detail: "Ends the forelse directive",
		documentation: "",
		filterText: "endforelse",
		insertText: "endforelse",
	},
	{
		label: "@forelse",
		kind: CompletionItemKind.Snippet,
		detail: "@forelse($collection as $item) ~ @empty ~ @endforelse",
		documentation:
			"```blade\n@forelse($collection as $item)\n    ${}\n@empty\n    ${}\n@endforelse\n```",
		filterText: "forelse",
		insertText:
			"forelse(${1:collection} as ${2:item})\n    ${3}\n@empty\n    ${4}\n@endforelse",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@while",
		kind: CompletionItemKind.Function,
		detail: "Loop through a given condition",
		documentation: "",
		filterText: "while",
		insertText: "_while",
	},
	{
		label: "@endwhile",
		kind: CompletionItemKind.Function,
		detail: "Ends the while directive",
		documentation: "",
		filterText: "endwhile",
		insertText: "endwhile",
	},
	{
		label: "@while",
		kind: CompletionItemKind.Snippet,
		detail: "@while(condition) ~ @endwhile",
		documentation: "```blade\n@while(${1})\n    ${2}\n@endwhile\n```",
		filterText: "while",
		insertText: "while(${1})\n    ${2}\n@endwhile",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@php",
		kind: CompletionItemKind.Function,
		detail: "Inline PHP code",
		documentation: "",
		filterText: "php",
		insertText: "_php",
	},
	{
		label: "@endphp",
		kind: CompletionItemKind.Function,
		detail: "Ends the PHP directive",
		documentation: "",
		filterText: "endphp",
		insertText: "endphp",
	},
	{
		label: "@php",
		kind: CompletionItemKind.Snippet,
		detail: "@php ~ @endphp",
		documentation: "```blade\n@php\n    ${1}\n@endphp\n```",
		filterText: "php",
		insertText: "php\n    ${1}\n@endphp",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@include",
		kind: CompletionItemKind.Function,
		detail: "Include a view file",
		documentation: "",
		filterText: "include",
		insertText: "_include",
	},
	{
		label: "@include",
		kind: CompletionItemKind.Snippet,
		detail: "@include('path/to/view', ['key' => 'value'])",
		documentation: "```blade\n@include('${1}', [${2}])\n```",
		filterText: "include",
		insertText: "include('${1}', [${2}])",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@includeIf",
		kind: CompletionItemKind.Function,
		detail: "Include a view if a condition is true",
		documentation: "",
		filterText: "includeIf",
		insertText: "_includeIf",
	},
	{
		label: "@includeIf",
		kind: CompletionItemKind.Snippet,
		detail: "@includeIf('path/to/view, ['key' => 'value'])",
		documentation: "```blade\n@includeIf(${1}, [${2}])\n```",
		filterText: "includeIf",
		insertText: "includeIf(${1}, [${2}])",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@includeWhen",
		kind: CompletionItemKind.Function,
		detail: "Includes a view if a condition is met",
		documentation: "",
		filterText: "includeWhen",
		insertText: "_includeWhen",
	},
	{
		label: "@includeWhen",
		kind: CompletionItemKind.Snippet,
		detail: "@includeWhen('condition', 'view', ['key' => 'value'])",
		documentation: "```blade\n@includeWhen(${1}, '${2}, [${3}])\n```",
		filterText: "includeWhen",
		insertText: "includeWhen(${1}, '${2}, [${3}])",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@includeUnless",
		kind: CompletionItemKind.Function,
		detail: "Includes a view if a condition is not met",
		documentation: "",
		filterText: "includeUnless",
		insertText: "_includeUnless",
	},
	{
		label: "@includeUnless",
		kind: CompletionItemKind.Snippet,
		detail: "@includeUnless('condition', 'view', ['key' => 'value'])",
		documentation: "```blade\n@includeUnless(${1}, '${2}, [${3}])\n```",
		filterText: "includeUnless",
		insertText: "includeUnless(${1}, '${2}, [${3}])",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@each",
		kind: CompletionItemKind.Function,
		detail: "Loop over a collection of data",
		documentation: "",
		filterText: "each",
		insertText: "_each",
	},
	{
		label: "@each",
		kind: CompletionItemKind.Snippet,
		detail: "@each('path/to/view, $items, 'item')",
		documentation: "```blade\n@each('${1}', ${2}, '${3}')\n```",
		filterText: "each",
		insertText: "each('${1}', ${2}, '${3}')",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	// ディレクティブ以外を別ファイルに作る
	// ループ内の時$loop
];

// TODO: 条件付き
export const classDirective: CompletionItem[] = [
	{
		label: "@class",
		kind: CompletionItemKind.Function,
		detail: "Add a CSS class to an element",
		documentation: "",
		filterText: "class",
		insertText: "_class",
	},
	{
		label: "@endclass",
		kind: CompletionItemKind.Function,
		detail: "Ends the class directive",
		documentation: "",
		filterText: "endclass",
		insertText: "endclass",
	},
	{
		label: "@class",
		kind: CompletionItemKind.Snippet,
		detail: "@class(['class1', 'class2'])",
		documentation: "```blade\n@class([$1])\n```",
		filterText: "class",
		insertText: "class([$1])",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@style",
		kind: CompletionItemKind.Function,
		detail: "Output inline CSS styles",
		documentation: "",
		filterText: "style",
		insertText: "_style",
	},
	{
		label: "@style",
		kind: CompletionItemKind.Snippet,
		detail: "@style([$1])",
		documentation: "```blade\n@style([$1])\n```",
		filterText: "style",
		insertText: "style([$1])",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	// https://laravel.com/docs/11.x/blade#additional-attributes
	{
		label: "@checked",
		kind: CompletionItemKind.Function,
		detail: "Check if a value is true",
		documentation: "",
		filterText: "checked",
		insertText: "_checked",
	},
	{
		label: "@checked",
		kind: CompletionItemKind.Snippet,
		detail: "@checked(value)",
		documentation: "```blade\n@checked(${1})\n```",
		filterText: "checked",
		insertText: "checked(${1})",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@selected",
		kind: CompletionItemKind.Function,
		detail: "Check if a given option is selected",
		documentation: "",
		filterText: "selected",
		insertText: "_selected",
	},
	{
		label: "@selected",
		kind: CompletionItemKind.Snippet,
		detail: "@selected('value')",
		documentation: "```blade\n@selected(${1})\n```",
		filterText: "selected",
		insertText: "selected(${1})",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@disabled",
		kind: CompletionItemKind.Function,
		detail: "Outputs the content of the block if the given condition is false",
		documentation: "",
		filterText: "disabled",
		insertText: "_disabled",
	},
	{
		label: "@disabled",
		kind: CompletionItemKind.Snippet,
		detail: "@disabled('condition')",
		documentation: "```blade\n@disabled(${1})\n```",
		filterText: "disabled",
		insertText: "disabled(${1})",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@readonly",
		kind: CompletionItemKind.Function,
		detail: "Output the value of a readonly variable",
		documentation: "",
		filterText: "readonly",
		insertText: "_readonly",
	},
	{
		label: "@readonly",
		kind: CompletionItemKind.Snippet,
		detail: "@readonly()",
		documentation: "```blade\n@readonly(${1})\n```",
		filterText: "readonly",
		insertText: "readonly(${1})",
		insertTextFormat: InsertTextFormat.Snippet,
	},
	{
		label: "@required",
		kind: CompletionItemKind.Function,
		detail: "Check if a variable is required",
		documentation: "",
		filterText: "required",
		insertText: "_required",
	},
	{
		label: "@required",
		kind: CompletionItemKind.Snippet,
		detail: "@required('value')",
		documentation: "```blade\n@required(${1})\n```",
		filterText: "required",
		insertText: "required(${1})",
		insertTextFormat: InsertTextFormat.Snippet,
	},
];
