import DefaultLayout from '../layouts/DefaultLayout'
import ArticleList from '../components/ArticleList'
import { getAllArticles } from '../utils/contentLoader'

export default function Home({ articles }) {
  return (
    <DefaultLayout>
      <h1>Welcome to MyTrends</h1>
      <ArticleList articles={articles} />
    </DefaultLayout>
  )
}

export async function getStaticProps() {
    const articles = getAllArticles();
    console.log("Articles récupérés pour la page d'accueil :", articles.map(a => a.slug));
    return {
      props: {
        articles,
      },
    };
  }
  
