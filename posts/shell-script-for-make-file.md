---
title: 'ブログ記事のテンプレを作るためのシェルスクリプトを書きました'
date: '2021-07-19'
tags: 
- シェルスクリプト
---

初めてレベルでシェルスクリプトを書いてみました。なかなか難しかったです。

記事を作成するときに、ファイルの作成、メタデータの書き込み、今日の日付を入れてくれます。

```bash
#!/bin/bash

if [ $# -ne 1 ]; then
  echo '引数が１つ必要です'
  exit 1
fi

touch posts/$1.md

today=$(date "+%Y-%m-%d")

echo '---'>>posts/$1.md
echo 'title: '"'${1}'">>posts/$1.md
echo 'date: '"'${today}'">>posts/$1.md
echo 'tags: '>>posts/$1.md
echo '- '>>posts/$1.md
echo '---'>>posts/$1.md

exit 0
```

シングルクォートのエスケープの仕方や、変数の展開など、知らないことだらけですね。

そして、コードブロックに何も装飾がされていないので読みにくいですね……。
