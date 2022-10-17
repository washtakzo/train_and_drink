/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.theanimedaily.com",
      "links.papareact.com",
      "web.archive.org",
      "4kwallpapers.com",
      "www.wallsauce.com",
      "static01.nyt.com",
      "www.greenretreats.co.uk",
      "images.ctfassets.net",
      "joycustom.com",
      "media.istockphoto.com",
      "www.gannett-cdn.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoid2FzaHRha3pvIiwiYSI6ImNsOHg0Z2VqeTAwcnkzb3BjcmpxZ2MyYXcifQ.93-v3XMT8XnW9xIlCskhEg",
  },
};

module.exports = nextConfig;
