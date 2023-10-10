import i18n, { type Config } from 'sveltekit-i18n';

type Params = {
    year: number
}

const config: Config<Partial<Params>> = ({
    loaders: [
        {
            locale: 'es',
            key: 'common',
            loader: async () => (
                await import('./es/common.json')
            ).default,
        },
        {
            locale: 'es',
            key: 'home',
            loader: async () => (
                await import('./es/home.json')
            ).default,
        },
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
