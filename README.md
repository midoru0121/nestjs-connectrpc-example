# exp-nestjs-connectrpc


このプロジェクトでは Turborepo という Vercel社のモノレポ開発ツールを用いています。

`apps以下` に各アプリケーションが配置されます。
`packages以下` に上記のappsで使い回す共有ライブラリーを配置します。

今回は packages 以下に、 proto ファイルを配置して、 bufでビルドを行い、ビルドの成果物を `connect-ec-client` (フロントエンド) と `nestapp` (バックエンド) で使い回す構成の叩き台です。

`apps配下の各package.json`  のdependencies に下記のように定義することで、pakcages以下の共有成果物を読み込んで、使いまわせるようにします。

```
// package.json

...
    "@repo/connectrpc": "workspace:*",
...

```

* フロントエンド: http://localhost:5173 で起動
* バックエンド: http://localhost:3000 で起動


## 動かし方

```
# packages/connectrpc以下にある .proto ファイルを buf でビルドします。
# ビルドすることで、
pnpm build
```

```
# フロントエンドとバックエンドを起動します。
pnpm dev
```

フロントエンドにアクセスします。

http://localhost:5173


