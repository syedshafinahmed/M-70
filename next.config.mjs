/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "www.themealdb.com",
        hostname: "*",
        // pathname: "/images/media/meals/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "randomuser.me",
      //   pathname: "/api/portraits/**",
      // },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
