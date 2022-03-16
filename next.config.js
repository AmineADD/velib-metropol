/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAP_API: process.env.MAP_API,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
  }
}

module.exports = nextConfig
