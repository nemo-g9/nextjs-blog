import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export function TagList ({allTagsData}) {
  return (
    <section>
      <h2>タグ</h2>
      {allTagsData.map((tag) => (
        <Link href={`/tags/${tag}`}>
          <a className={utilStyles.tag}>{tag}</a>
        </Link>
      ))}
    </section>
  )
};