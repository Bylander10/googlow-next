/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "logosmarcas.net",
                pathname: "**"
            }
        ]
    }
};

export default nextConfig;
