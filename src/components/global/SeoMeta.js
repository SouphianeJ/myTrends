import Head from 'next/head';

export default function SeoMeta({ metadata }) {
  return (
    <Head>
      <title>{metadata.metaTitle}</title>
      <meta name="description" content={metadata.metaDescription} />
      <meta
        name="keywords"
        content={[metadata.primaryKeyword].concat(metadata.secondaryKeywords || []).join(', ')}
      />
    </Head>
  );
}