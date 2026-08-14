const BASE_URL = 'https://gexclub.com';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/about',
    '/hackathons',
    '/community',
    '/projects',
    '/blog',
    '/faq',
    '/login',
    '/register',
  ];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
