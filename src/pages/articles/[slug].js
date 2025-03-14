import DefaultLayout from '../../layouts/DefaultLayout'
import SeoMeta from '../../components/global/SeoMeta'
import { getArticleBySlug, getAllArticleSlugs } from '../../utils/contentLoader'

export default function Article({ article }) {
  return (
    <DefaultLayout>
      <SeoMeta metadata={article.seo} />
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </DefaultLayout>
  )
}

export async function getStaticPaths() {
  const paths = getAllArticleSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug)
  return {
    props: {
      article,
    },
  }
}
