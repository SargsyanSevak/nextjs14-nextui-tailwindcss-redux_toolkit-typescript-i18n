import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['hy', 'ru', 'en'];
export const defaultLocale = "hy"
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as string)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});