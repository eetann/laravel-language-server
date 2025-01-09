# laravel-language-server language-server本体

## TODO
- [ ] php側のviewで渡された変数をblade側で補完候補として表示
    - [x] `view("foo/index", compact("books"))`
    - [x] viewの第2引数が配列: `view('book/index', ['books' => $books])`
    - [x] viewの第2引数が`compact`: `view('book/index', compact('books'))`
    - [ ] `with`で渡す: `view('book/index')->with('books', $books)`
    - [ ] 補完のdocumentationに表示
        - [x] 変数がプリミティブ型
        - [x] 変数が配列
        - [ ] 変数がモデル（`App\Models\Book`のようなやつ）
            - パーサーを修正しないとだめなやつが結構あるのでどうしたものか……
            - [ ] `?->`のようなnullsafe operatorに対応する
            - [ ] `$query->{$method}(...array_values($value), boolean: $boolean);`みたいなvariadic(...)の後に変数置いても大丈夫なようにする

- [ ] for関係で配列の中身の要素の型を反映
- [ ] bladeの変数でDefinitionの確認（辿れる場合のみ）
- [ ] bladeからviewの場所を特定するコマンド

## スキームの作成
すでにやったからもうやらなくていいけど、もしsourcegraph/scip側で変更があれば再度この手順を実行する。

```sh
curl https://raw.githubusercontent.com/sourcegraph/scip/refs/heads/main/scip.proto > scip.proto
```

```sh
pnpm exec buf generate
```
