import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? '';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = isGithubActions && repositoryName ? `/${repositoryName}` : '';
const defaultSiteUrl =
  isGithubActions && repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io/${repositoryName}`
    : 'https://domainedelapistoule.com';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  },
};

export default nextConfig;
