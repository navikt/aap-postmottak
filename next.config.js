/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  output: 'standalone',
  assetPrefix: process.env.ASSET_PREFIX ?? undefined,

  experimental: {
    instrumentationHook: true,
    optimizePackageImports: ['@navikt/ds-react', '@navikt/aksel-icons'],
  },
};

module.exports = nextConfig;
