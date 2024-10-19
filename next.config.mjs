import nextMdx from '@next/mdx';

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  // options: {}
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMdx(nextConfig);
