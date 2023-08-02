/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverActions: true,
    },
    async headers() {
        source: '/api/:path*',
            {
                headers: [
                    {
                        source: '/api/(.*)',
                        headers: [
                            {
                                key: 'Access-Control-Allow-Credentials',
                                value: 'true',
                            },
                            { key: 'Access-Control-Allow-Origin', value: '*' }, // Change this to specific domain for better security
                            {
                                key: 'Access-Control-Allow-Methods',
                                value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                            },
                            {
                                key: 'Access-Control-Allow-Headers',
                                value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                            },
                        ],
                    },
                ],
            };
    },
};

module.exports = nextConfig;
