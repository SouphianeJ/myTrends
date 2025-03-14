import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <Link href={`/articles/${article.slug}`} passHref>
        <a>
          <h2>{article.articleTemplate.structure.title.mainTitle}</h2>
          <p>{article.articleTemplate.seo.metaDescription}</p>
        </a>
      </Link>
    </div>
  );
}
