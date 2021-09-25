import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData, getAllTagsData } from '../lib/posts'
import { Pagination } from '../components/pagination'
import { Profile } from '../components/profile'
import { PostList } from '../components/post_list'
import { TagList } from '../components/tag_list'

export default function Home({ allPostsData, allTags }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Profile />
      <PostList allPostsData={allPostsData} />
      <Pagination />
      <TagList allTagsData={allTags} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allTags = getAllTagsData()
  return {
    props: {
      allPostsData,
      allTags
    }
  }
}
