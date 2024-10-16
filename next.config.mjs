/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://vercel.live',
        port: '',
        pathname: '/link/next-pull-request-reviewer.vercel.app',
        search: '?via=project-screenshot&p=1',
      },
    ],
  },
};

export default nextConfig;
