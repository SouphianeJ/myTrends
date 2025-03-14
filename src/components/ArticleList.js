import ArticleCard from './ArticleCard'

export default function ArticleList({ articles }) {
    if (!Array.isArray(articles)) {
      console.error("Articles n'est pas un tableau :", articles);
      return <div>Erreur : Aucun article trouvé</div>;
    }
    return (
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    );
  }
  
