import Link from 'next/link'
import Date from './date'
import utilStyles from '../styles/utils.module.css'

export function PostList ({allPostsData}) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2>記事</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title}) => (
          <li key={id} className={utilStyles.listItem}>
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
  )
};
