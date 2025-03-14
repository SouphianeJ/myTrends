import ArticleCard from './ArticleCard'

export default function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}
