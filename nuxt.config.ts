export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
    experimental: {
      wasm: true
    }
  },
  routeRules: {
    // all routes (by default) will be revalidated every 60 seconds, in the background
    "/**": { isr: 60 },
    // Specific API routes should not be cached
    "/api/**": { cors: true, headers: { "cache-control": "s-maxage=60" } },
  },
  runtimeConfig: {
    nitro: { envPrefix: "VERCEL_" },
    region: process.env.VERCEL_REGION || 'unknown',
  },
});
