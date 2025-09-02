import createMDX from '@next/mdx';

const isProjectPage = true; // set false if deploying to username.github.io root
const base = isProjectPage ? '/finops-site' : '';

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: { unoptimized: true },
  basePath: base || undefined,
  assetPrefix: base ? `${base}/` : undefined,
  trailingSlash: true,
  experimental: { mdxRs: true }
});

export default nextConfig;
