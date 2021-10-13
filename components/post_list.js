import Link from 'next/link'
import Date from './date'
import utilStyles from '../styles/utils.module.css'

export const PostList = ({PostsData}) => {
  return (
    <section>
      <h2 className={`${utilStyles.headingXl}`}>記事</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {PostsData.map(({ id, date, title}) => (
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
    </section>
  )
};
