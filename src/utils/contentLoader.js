import fs from 'fs';
import path from 'path';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllArticles() {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames.map((fileName) => {
      const slug = fileName.replace(/\.json$/, '');
      return getArticleBySlug(slug);
    });
  } catch (error) {
    console.error("Erreur lors de la lecture du répertoire des articles :", error);
    return []; // Retourner un tableau vide en cas d'erreur
  }
}

export function getArticleBySlug(slug) {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const article = JSON.parse(fileContents);
    return {
      slug,
      ...article,
    };
  } catch (error) {
    console.error(`Erreur lors de la lecture de l'article avec le slug "${slug}" :`, error);
    return null; // Retourner null si l'article n'est pas trouvé
  }
}

export function getAllArticleSlugs() {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames.map((fileName) => ({
      params: {
        slug: fileName.replace(/\.json$/, ''),
      },
    }));
  } catch (error) {
    console.error("Erreur lors de la lecture du répertoire des articles pour les slugs :", error);
    return []; // Retourner un tableau vide en cas d'erreur
  }
}

export function getArticlesByCategory(category) {
  const articles = getAllArticles();
  if (!articles) return []; // Gérer le cas où getAllArticles retourne null
  return articles.filter((article) =>
    article && article.articleTemplate && article.articleTemplate.metadata && article.articleTemplate.metadata.category
      ? article.articleTemplate.metadata.category.toLowerCase() === category.toLowerCase()
      : false
  );
}

export function getAllCategories() {
  const articles = getAllArticles();
  if (!articles) return []; // Gérer le cas où getAllArticles retourne null
  const categories = new Set(
    articles
      .filter(article => article && article.articleTemplate && article.articleTemplate.metadata && article.articleTemplate.metadata.category)
      .map((article) => article.articleTemplate.metadata.category.toLowerCase())
  );
  return Array.from(categories);
}

export function parseArticleContent(articleData) {
  try {
    const content = articleData.articleTemplate.structure;
    let htmlContent = '';

    // Introduction
    if (content.introduction && content.introduction.elements) {
      content.introduction.elements.forEach(paragraph => {
        htmlContent += `<p>${paragraph}</p>`;
      });
    }

    // Corps de l'article
    if (content.body && content.body.sections) {
      content.body.sections.forEach(section => {
        htmlContent += `<h2>${section.heading}</h2>`;
        if (section.subheadings) {
          section.subheadings.forEach(subheading => {
            htmlContent += `<h3>${subheading.title}</h3>`;
            if (subheading.content && subheading.content.include) {
              subheading.content.include.forEach(paragraph => {
                htmlContent += `<p>${paragraph}</p>`;
              });
            }
          });
        }
      });
    }

    // Conclusion
    if (content.conclusion && content.conclusion.elements) {
      content.conclusion.elements.forEach(paragraph => {
        htmlContent += `<p>${paragraph}</p>`;
      });
    }

    return htmlContent;
  } catch (error) {
    console.error("Erreur lors de l'analyse du contenu de l'article :", error);
    return "<p>Erreur lors du chargement du contenu.</p>";
  }
}
