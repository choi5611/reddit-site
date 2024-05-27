/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.gravatar.com",
      "localhost",
      "ec2-3-34-91-234.ap-northeast-2.compute.amazonaws.com",
    ],
  },
};

export default nextConfig;
