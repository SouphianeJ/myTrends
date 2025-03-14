import Link from 'next/link'

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <Link href={`/article/${article.slug}`}>
        <a>
          <h2>{article.title}</h2>
          <p>{article.seo.metaDescription}</p>
        </a>
      </Link>
    </div>
  )
}
