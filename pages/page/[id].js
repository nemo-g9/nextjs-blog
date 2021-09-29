import Link from "next/link"
import Layout from "../../components/layout"
import { PostList } from "../../components/post_list"
import { getPostsDataPerPage, getPostsQuantity } from "../../lib/posts"

export default function Page({ postsPerData, page_num }) {
  return (
    <Layout>
      <PostList PostsData={postsPerData} />

      {page_num !== 1 && 
        <Link href={`/page/${ page_num - 1}`}>
          <a>← Prev</a>
        </Link>
      }

      <br />

      <Link href={`/page/${ page_num + 1}`}>
        <a>Next →</a>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const PER_PAGE = 5
  const postsQuantity = getPostsQuantity()
  const pages = [...Array(Math.ceil(postsQuantity / PER_PAGE)).keys()].map(i => (i + 1).toString())
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
  return {
    props: {
      postsPerData,
      page_num
    }
  }
}