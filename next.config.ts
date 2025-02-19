import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/postmottak',
  trailingSlash: true,
  reactStrictMode: true,
  output: 'standalone',
  assetPrefix: process.env.ASSET_PREFIX ?? undefined,

  experimental: {
    optimizePackageImports: ['@navikt/ds-react', '@navikt/aksel-icons'],
  },
};

module.exports = nextConfig;
