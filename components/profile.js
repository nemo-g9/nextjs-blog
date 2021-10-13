import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const Profile = () => {
  return (
  <section className={`${utilStyles.textCenter}`}>
    <p>nemog です。コードを書いて生きています</p>
    <Link href={'/profile'}>
      <a> → プロフィール</a>
    </Link>
  </section>
)};
