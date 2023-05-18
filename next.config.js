/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
            {
                source: "/creator/auth/login",
                has: [
                    {
                        type: "cookie",
                        key: "authorized",
                        value: "true",
                    },
                ],
                permanent: true,
                destination: "/creator",
            },
            {
                source: "/:path(creator|individual)",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
            {
                source: "/:path(creator|individual)/faqs",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
            {
                source: "/:path(creator|individual)/payout",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
            {
                source: "/:path(creator|individual)/settings",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
            {
                source: "/:path(creator|individual)/upload-video",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
            {
                source: "/:path(creator|individual)/videos",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
            {
                source: "/:path(creator|individual)/connections",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
            {
                source: "/:path(creator|individual)/referrals",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
            {
                source: "/:path(creator|individual)/recommendations",
                missing: [
                    {
                        type: "cookie",
                        key: "authorized",
                    },
                ],
                permanent: true,
                destination: "/:path/auth/login",
            },
        ];
    },
};

module.exports = nextConfig;
