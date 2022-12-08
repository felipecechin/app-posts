/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['sample-posts-frontend-test.s3.amazonaws.com'],
    }
}

module.exports = nextConfig
