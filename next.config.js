const isDev = process.env.NODE_ENV !== 'production'
const clientUrl = isDev ? 'http://localhost:3000' : 'https://xcmg-frontend.vercel.app'
const serverUrl = 'https://xcmg.devseonet.com/graphql'
const domain = 'xcmg.devseonet.com'

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @import "@/styles/breakpoints.scss";
    `,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [`${clientUrl}`, `${domain}`],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },

  env: {
    SERVER_URL: `${serverUrl}`,
  },
}

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
})

module.exports = withPWA(nextConfig)
