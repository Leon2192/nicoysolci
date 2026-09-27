import { defineConfig, loadEnv } from 'vite';
import { invitation } from './src/config/invitation.js';

// Los metadatos se generan en el HTML: los lectores de enlaces no necesitan React.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const configuredUrl = env.SITE_URL || invitation.social.siteUrl || env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL;
  const siteUrl = configuredUrl
    ? new URL(configuredUrl.includes('://') ? configuredUrl : `https://${configuredUrl}`).origin
    : '';
  const title = `${invitation.couple.first} & ${invitation.couple.second} · Nos casamos`;
  const social = invitation.social;
  const imageUrl = siteUrl ? new URL(social.image, siteUrl).href : social.image;
  const meta = (key, content) => ({ tag: 'meta', attrs: { [key.startsWith('og:') ? 'property' : 'name']: key, content: String(content) }, injectTo: 'head' });
  const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

  return {
    plugins: [{
      name: 'invitation-social-metadata',
      transformIndexHtml(html) {
        return {
          html: html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`),
          tags: [
            meta('description', social.description),
            meta('og:type', 'website'),
            meta('og:locale', 'es_AR'),
            meta('og:title', title),
            meta('og:description', social.description),
            meta('og:image', imageUrl),
            meta('og:image:type', 'image/png'),
            meta('og:image:width', social.imageWidth),
            meta('og:image:height', social.imageHeight),
            meta('og:image:alt', social.imageAlt),
            meta('twitter:card', 'summary'),
            meta('twitter:title', title),
            meta('twitter:description', social.description),
            meta('twitter:image', imageUrl),
            meta('twitter:image:alt', social.imageAlt),
            ...(siteUrl ? [meta('og:url', `${siteUrl}/`), { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' }] : []),
          ],
        };
      },
    }],
  };
});
