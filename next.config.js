/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ["llamaindex"], // Puts LlamaIndex in actual NodeJS mode with NextJS App Router
    },
  };

module.exports = nextConfig
