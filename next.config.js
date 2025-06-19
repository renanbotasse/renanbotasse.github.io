/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // habilita next export
  images: {
    unoptimized: true, // necessário se você estiver usando <Image /> do next/image
  },
  trailingSlash: true, // recomendado para exportações estáticas
};

module.exports = nextConfig;
