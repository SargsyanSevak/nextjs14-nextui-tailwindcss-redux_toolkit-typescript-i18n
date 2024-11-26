import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['hy', 'ru', 'en'],
  defaultLocale: 'hy',
});


export const config = {
  matcher: ['/', '/(hy|ru|en)/:path*']
};