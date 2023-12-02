/** @type {import('next').NextConfig} */
// const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, } = require("next/constants");

const nextConfig = {
    distDir: "build",
    output: "export",
    images: { unoptimized: true },
};

module.exports = (phase) => {
    /* if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
          const withPWA = require("@ducanh2912/next-pwa").default({
              dest: "public",
          });
          return withPWA(nextConfig);
      } */
    return nextConfig;
};
