/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://aleksa.vercel.app',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false // (optional)
  // ...other options
};
