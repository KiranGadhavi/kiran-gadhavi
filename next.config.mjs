/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.shields.io", "media.giphy.com"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
