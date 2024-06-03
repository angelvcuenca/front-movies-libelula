/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                port: "",
                hostname: "**",
            }
        ]
    },
    reactStrictMode: true
};

export default nextConfig;
