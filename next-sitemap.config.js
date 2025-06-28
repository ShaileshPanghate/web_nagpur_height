/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nagpurheights.com',
  generateRobotsTxt: true, // ✅ Will also generate robots.txt for you
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/api/*'], // Exclude private routes
};
