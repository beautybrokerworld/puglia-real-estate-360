import { defineConfig } from 'astro/config';
export default defineConfig({site:process.env.SITE_URL || 'https://www.pugliarealestate360.com',output:'static',trailingSlash:'always'});
