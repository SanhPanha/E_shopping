/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["store.istad.co", "hips.hearstapps.com"],
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
    remotePatterns: [
      {
        hostname: "188.166.229.56",
      },
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

export default nextConfig;
