# Laravel Language Server
laravelとbladeというかbladeで補完したいのだ。

**パーサーを修正しないといけないので一旦凍結**。

## ロードマップ

- [x] 文法としてわかっているスニペットを補完候補に追加
- [x] view関数で渡された引数をblade側で表示
- [ ] view関数で渡された引数の型情報を取得する
    - 一部のみ対応済み
- [ ] ディレクティブの引数の中での補完
- [ ] Goto Definition
- [ ] Diagnostics
- [ ] 補完のdocumentation、detailの追加

## 試すとき

Neovim

```lua
local util = require("lspconfig.util")
local configs = require("lspconfig.configs")

-- ここにこのリポジトリのパスを書いておく
local server_path = vim.fn.expand("~/ghq/github.com/eetann/laravel-language-server/")

configs["laravel-language-server"] = {
	default_config = {
		cmd = { "node", server_path .. "packages/language-server/bin/laravel-language-server.js", "--stdio" },
		filetypes = { "blade", "php" },
		root_dir = util.root_pattern("composer.json"),
		settings = {},
	},
}

local lspconfig = require("lspconfig")
lspconfig["laravel-language-server"].setup{
  capabilities = capabilities
}
```

```sh
pnpm install
pnpm run build
```

### 試す用のリポジトリ

```sh
cd packages/laravel-sample/
```

## VSCodeでVolar Labsを動かす
このリポジトリをVSCodeで開いて、debug and runから`Launch Extension`


## VSCodeで動かす

```sh
cd packages/vscode
pnpm run build
```
TODO: この後はまだわからない
