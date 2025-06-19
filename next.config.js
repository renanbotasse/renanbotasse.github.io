/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/renanbotasse.github.io',
  assetPrefix: '/renanbotasse.github.io/',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
