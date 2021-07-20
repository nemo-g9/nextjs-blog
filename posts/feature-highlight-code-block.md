---
title: 'コードブロックをハイライトしてくれるようにしました'
date: '2021-07-20'
tags: 
- Next.js
- フロントエンド
---

題名の通り、コードブロックに色が付きました！めでたい。

変更点はこんな感じでした。すごく簡単に色が付けられてすごい。ちょっと手間取った部分もあるけど。

Next.jsの公式チュートリアルほぼそのままなので、参考になると思います。

/lib/posts.js
```javascript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js' // 追加

// 中略

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents)

  // マークダウンを HTML 文字列に変換するために remark を使う
  const processedContent = await remark()
    .use(html)
    .use(highlight) // 追加
    .process(matterResult.content)

    const contentHtml = processedContent.toString()

  // データを id と組み合わせる
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
```

/pages/_app.js
```javascript
import '../styles/global.css'
import 'highlight.js/styles/base16/darcula.css' // 好みのスタイルを追加

export default function App({ Component, pageProps}) {
  return <Component {...pageProps} />
}
```

ハイライトはたくさんの種類が用意されています。

- [highlight.js/src/styles/base16 at main · highlightjs/highlight.js](https://github.com/highlightjs/highlight.js/tree/main/src/styles/base16)
- [highlight.js demo](https://highlightjs.org/static/demo/)

詰まった点として、インポートするスタイルがbase16配下のフォルダじゃないものを選ぶと、テキストののみのハイライトになります。

最初、上手くスタイルかかってないじゃん！ってなってました。暗めのを選んでいるとだいぶヤバい感じになります。

[![Image from Gyazo](https://i.gyazo.com/13acb85fb50662809f45b10a4355a58d.png)](https://gyazo.com/13acb85fb50662809f45b10a4355a58d)

あと、シェルスクリプトを書いたときに、コードブロックの初めにshellって書いたんですけど、上手くハイライトされずに、うーんとなっていたところ、bashとするときれいにかかりました。なるほどね～

参考にさせていただいたサイト

- [Next.js のための Remark / Rehype 入門 - Qiita](https://qiita.com/sankentou/items/f8eadb5722f3b39bbbf8#%E3%82%B7%E3%83%B3%E3%82%BF%E3%83%83%E3%82%AF%E3%82%B9%E3%83%8F%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%88%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B)
- [Next.js + TypeScript + VercelでJamstackなブログを作る その2 - meta/syntax highlight/RSS/Deploy - zenpachi blog](https://blog.zenpachi.dev/posts/nextjs-blog-02/)