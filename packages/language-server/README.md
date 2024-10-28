# スキームの作成
すでにやったからもうやらなくていいけど、もしsourcegraph/scip側で変更があれば再度この手順を実行する。

```sh
curl https://raw.githubusercontent.com/sourcegraph/scip/refs/heads/main/scip.proto > scip.proto
```

```sh
pnpm exec buf generate
```
