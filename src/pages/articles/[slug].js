import DefaultLayout from '../../layouts/DefaultLayout';
import SeoMeta from '../../components/global/SeoMeta';
import { getArticleBySlug, getAllArticleSlugs, parseArticleContent } from '../../utils/contentLoader';

export default function Article({ article }) {
  if (!article) {
    return (
      <DefaultLayout>
        <h1>Article non trouvé</h1>
        <p>L'article demandé n'existe pas.</p>
      </DefaultLayout>
    );
  }

  const htmlContent = parseArticleContent(article);

  return (
    <DefaultLayout>
      <SeoMeta metadata={article.articleTemplate.seo} />
      <h1>{article.articleTemplate.structure.title.mainTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </DefaultLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllArticleSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);
  return {
    props: {
      article: article ? { ...article } : null,
    },
  };
}
