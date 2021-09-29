import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData, getAllTagsData } from '../lib/posts'
import { Pagination } from '../components/pagination'
import { Profile } from '../components/profile'
import { PostList } from '../components/post_list'
import { TagList } from '../components/tag_list'

export default function Home({ PostsData, allTags }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Profile />
      <PostList PostsData={PostsData} />
      <Link href='/page/1'>
        <a> → 記事一覧へ</a>
      </Link>
      <TagList allTagsData={allTags} />
    </Layout>
  )
}

export async function getStaticProps() {
  const AllPostsData = getSortedPostsData()
  const PostsData = AllPostsData.slice(0, 5)
  const allTags = getAllTagsData()
  return {
    props: {
      PostsData,
      allTags
    }
  }
}
