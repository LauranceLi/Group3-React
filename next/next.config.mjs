/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'avatars.githubusercontent.com'], // 添加允许的图像域名
  },
};

export default nextConfig;
