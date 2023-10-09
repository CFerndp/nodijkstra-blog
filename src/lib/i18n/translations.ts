import i18n from 'sveltekit-i18n';

const config = ({
    loaders: [
        {
            locale: 'es',
            key: 'common',
            loader: async () => (
                await import('./es/common.json')
            ).default,
        },
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
