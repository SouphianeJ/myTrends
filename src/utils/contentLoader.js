import fs from 'fs'
import path from 'path'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.json$/, '')
    return getArticleBySlug(slug)
  })
}

export function getArticleBySlug(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const article = JSON.parse(fileContents)
  return {
    slug,
    ...article,
  }
}

export function getAllArticleSlugs() {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.json$/, ''),
      },
    }
  })
}

export function getArticlesByCategory(category) {
  const articles = getAllArticles()
  return articles.filter((article) => article.metadata.category.toLowerCase() === category.toLowerCase())
}

export function getAllCategories() {
  const articles = getAllArticles()
  const categories = new Set(articles.map((article) => article.metadata.category.toLowerCase()))
  return Array.from(categories)
}
