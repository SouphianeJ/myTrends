/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.resolve.fallback = { fs: false };
      return config;
    },
    i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'fr',
    },
    images: {
      domains: ['example.com'],
    },
    async redirects() {
      return [
        {
          source: '/old-path/:slug',
          destination: '/new-path/:slug',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;