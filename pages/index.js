import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, getAllTagsData } from '../lib/posts'

export default function Home({ allPostsData, allTags }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>nemog（ねもぐ）です。コードを書いて生きています</p>
        <Link href={'/profile'}>
          <a>プロフィール</a>
        </Link>
        <h2>記事</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title}) =>(
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <h3>タグ</h3>
        {allTags.map(tag => (
          <Link href={`/tags/${tag}`}>
            <a className={utilStyles.tag}>{tag}</a>
          </Link>
        ))}
      </section>
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
