/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        pathname: "**", // 모든 경로 허용
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**", // 모든 경로 허용
      },
      {
        protocol: "http",
        hostname: "ec2-3-34-91-234.ap-northeast-2.compute.amazonaws.com",
        pathname: "**", // 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
