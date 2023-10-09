import { loadTranslations } from '$lib/i18n/translations';

export const load = async ({ url }: { url: URL }) => {
    const { pathname } = url;
    const initLocale = 'es';

    console.log('pathname', pathname);

    await loadTranslations(initLocale, pathname);

    return {};
}
