import Layout from "../components/layout";

export default function Profile() {
  return (
    <Layout>
      <h1>nemog のプロフィール</h1>
      <p>東京でWebのエンジニアをしています。</p>
      <p>趣味は、ゲーム、アニメ、ガジェット、自転車、カメラなどです。</p>
      <h2>リンク集</h2>
      <ul>
        <li><a href="https://twitter.com/nemog9_" target="_blank" rel="noopener noreferer">Twitter</a></li>
        <li><a href="https://github.com/nemog9" target="_blank" rel="noopener noreferer">GitHub</a></li>
        <li><a href="https://www.youtube.com/channel/UCw_spPQfZEes2cC-0Q-bkgg" target="_blank" rel="noopener noreferer">YouTube</a></li>
        <li><a href="https://scrapbox.io/nemog9-blog/" target="_blank" rel="noopener noreferer">Scrapbox</a></li>
      </ul>
    </Layout>
  )
}