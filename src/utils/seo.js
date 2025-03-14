// Exemple d'outil de génération des métadonnées SEO
export function generateSeoMeta({ metaTitle, metaDescription, primaryKeyword, secondaryKeywords }) {
    return {
      title: metaTitle || 'MyTrends',
      description: metaDescription || '',
      keywords: [primaryKeyword].concat(secondaryKeywords || []).join(', '),
    };
  }