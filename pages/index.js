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
        <p>nemog（ねもぐ）です。開発をしたり、絵を描いたりして生きています。</p>
        <h2>記事</h2>
        <ul className={utilStyles.list}>
          {console.log(allPostsData)}
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
        {/* <ul className={utilStyles.list}>
          {console.log(allTags)}
          {allTags.map(tag => (
            <li className={utilStyles.listItem}>
              <Link href={`/tags/${tag}`}>
                <a>{tag}</a>
              </Link>
            </li>
          ))}
        </ul> */}
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
