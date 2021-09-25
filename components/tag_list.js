import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export function TagList ({allTagsData}) {
  return (
    <section>
      <h3>タグ</h3>
      {allTagsData.map((tag) => (
        <Link href={`/tags/${tag}`}>
          <a className={utilStyles.tag}>{tag}</a>
        </Link>
      ))}
    </section>
  )
};