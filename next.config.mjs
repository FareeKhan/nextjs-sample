// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// next.config.mjs
const nextConfig = {
    async headers() {
      return [
        {
          source: "/.well-known/apple-app-site-association",
          headers: [
            {
              key: "Content-Type",
              value: "application/json",
            },
            {
              key: "Content-Disposition",
              value: "inline",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  
  