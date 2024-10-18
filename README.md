# Laravel Language Server
laravelとbladeというかbladeで補完したいのだ。

## ロードマップ

- [ ] 文法としてわかっているスニペットを補完候補に追加
    - 追加中
- [ ] `{{ }}`の中での補完
- [ ] ディレクティブの引数の中での補完
- [ ] Goto Definition
- [ ] Diagnostics
- [ ] 補完のdocumentation、detailの追加

## 試しすとき

Neovim

```lua
local util = require("lspconfig.util")
local configs = require("lspconfig.configs")

-- ここにこのリポジトリのパスを書いておく
local server_path = vim.fn.expand("~/ghq/github.com/eetann/laravel-ls/")

configs["laravel-ls"] = {
	default_config = {
		cmd = { "node", server_path .. "dist/server.js", "--stdio" },
		filetypes = { "blade", "php" },
		root_dir = util.root_pattern("composer.json"),
		settings = {},
	},
}

local lspconfig = require("lspconfig")
lspconfig["laravel-ls"].setup{
  capabilities = capabilities
}
```

```sh
pnpm install
pnpm run build
```
