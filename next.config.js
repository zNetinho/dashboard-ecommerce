/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["radio93fm.com.br"]
    },
    experimental: {
        serverAction: true
    }
};

module.exports = nextConfig;
