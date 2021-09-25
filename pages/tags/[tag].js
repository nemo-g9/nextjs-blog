import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import Date from "../../components/date";
import { getAllTagsForParams, getPostsAssociatedTag } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css'

export default function Tag({ tag, postsData }) {
  return (
    <Layout>
      <Head>
        <title>{tag} | {siteTitle}</title>
      </Head>
      <h2>tag: {tag} の記事一覧</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title}) =>(
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
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllTagsForParams()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const tag = params.tag
  const postsData = getPostsAssociatedTag(tag)
  return {
    props: {
      tag,
      postsData
    }
  }
}