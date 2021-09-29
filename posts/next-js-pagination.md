---
title: 'next-js-pagination'
date: '2021-09-29'
tags: 
- Next.js
- ブログ
---

Next.jsのチュートリアルで作ったブログにページネーション機能を実装しました。1ページあたり、5記事が表示されるようになっています。

特にライブラリなどは使わずに、ゴリ押しで実装しました。react-paginateなど、使えそうなライブラリはあったのですが、JavaScriptとReactがよくわからないせいでうまく扱えませんでした。

わからないものは使わない方がいいですね。

ということで実装です。

## 関数まわり

全部の記事データを取得する関数はありますが、ファイルの中身必要ないので、記事数のみを取得する関数を作っておきます

/lib/posts.js
```javascript
export function getPostsQuantity() {
  const files = fs.readdirSync(postsDirectory)
  return files.length
}
```

また、1ページ当たりの記事データを取得する関数も作っておきます。全部記事を取ってきて、sliceするだけです。

lib/posts.js
```javascript
export function getPostsDataPerPage(index, perPage) {
  const allPosts = getSortedPostsData()
  const postPerPage = allPosts.slice((index -1) * perPage, index * perPage)
  return postPerPage
}
```

## 各ページ

今回は、/page/1, /page/2 のようなルーティングにしてみました。なので、ディレクトリ構成として、 `pages/page/[id].js` というファイルで作成しました。

pages/page/[id].js
```javascript
import Link from "next/link"
import Layout from "../../components/layout"
import { PostList } from "../../components/post_list"
import { getPostsDataPerPage, getPostsQuantity } from "../../lib/posts"

export default function Page({ postsPerData, page_num, maxPage }) {
  return (
    <Layout>
      <PostList PostsData={postsPerData} />

      {page_num !== 1 && 
        <Link href={`/page/${ page_num - 1}`}>
          <a>← Prev</a>
        </Link>
      }

      <br />

      {page_num !== maxPage &&
        <Link href={`/page/${ page_num + 1}`}>
          <a>Next →</a>
        </Link>
      }

    </Layout>
  )
}

export async function getStaticPaths() {
  const PER_PAGE = 5
  const postsQuantity = getPostsQuantity()
  const maxPage = Math.ceil(postsQuantity / PER_PAGE)
  const pages = [...Array(maxPage).keys()].map(i => (i + 1).toString())
  const paths = pages.map(pageNumber => {
    return {
      params: {
        id: pageNumber
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const PER_PAGE = 5
  const page_num = Number(params.id)
  const postsPerData = await getPostsDataPerPage(page_num, PER_PAGE)
  const postsQuantity = getPostsQuantity()
  const maxPage = Math.ceil(postsQuantity / PER_PAGE)
  return {
    props: {
      postsPerData,
      page_num,
      maxPage
    }
  }
}
```

ここの部分は、1ページ目で「Prev」が表示されないようにしています。

```javascript
{page_num !== 1 && 
  <Link href={`/page/${ page_num - 1}`}>
    <a>← Prev</a>
  </Link>
}
```

同様に、最後のページで「Next」が表示されないようにしています。

```javascript
{page_num !== maxPage &&
  <Link href={`/page/${ page_num + 1}`}>
    <a>Next →</a>
  </Link>
}
```

重複する処理があるので、そのうち共通化したいですね。

## おわりに

わからないものは無理して使わずに、普通に実装した方が勉強になるし早いですね。おわり。