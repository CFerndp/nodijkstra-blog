import { loadTranslations } from '$lib/i18n/translations';

export const load = async ({ url }: { url: URL }) => {
    const { pathname } = url;
    const initLocale = 'es';

    await loadTranslations(initLocale, pathname);

    return {};
}
