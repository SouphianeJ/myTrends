import DefaultLayout from '../../layouts/DefaultLayout';
import ArticleList from '../../components/ArticleList';
import { getArticlesByCategory, getAllCategories } from '../../utils/contentLoader';

export default function Category({ category, articles }) {
  return (
    <DefaultLayout>
      <h1>{category}</h1>
      <ArticleList articles={articles} />
    </DefaultLayout>
  );
}

export async function getStaticPaths() {
  const categories = getAllCategories();
  const paths = categories.map((category) => ({
    params: { slug: category },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const articles = getArticlesByCategory(params.slug);
  return {
    props: {
      category: params.slug,
      articles: articles || [], // Assurez-vous d'avoir un tableau même en cas d'erreur
    },
  };
}
