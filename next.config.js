/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.theanimedaily.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;
