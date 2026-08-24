import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Все запросы, начинающиеся с /api
        destination: 'http://localhost:3002/:path*', // Перенаправляем на Express (укажи свой порт)
      },
    ];
  },
};

export default nextConfig;
