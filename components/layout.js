import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'nemog'
export const siteTitle = 'nemog blog'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="nemogのブログです"
        />
        <meta
          property="og:image"
          content="/public/images/profile.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DotGothic16&display=swap" rel="stylesheet"></link>
      </Head>
      <header className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>nemog blog</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
    
  )
}