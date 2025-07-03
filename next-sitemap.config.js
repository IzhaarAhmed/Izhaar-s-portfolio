/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://izhaarahmed.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
} 