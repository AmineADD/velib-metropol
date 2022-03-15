/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAP_API: process.env.MAP_API,
  }
}

module.exports = nextConfig
