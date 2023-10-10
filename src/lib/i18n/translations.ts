import i18n, {type Config} from 'sveltekit-i18n';
import {browser} from "$app/environment";

type Params = {
    year: number
}

const defaultLocale = 'en';

const spanishLoaders = [{
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
    {
        locale: 'es',
        key: 'resume',
        loader: async () => (
            await import('./es/resume.json')
        ).default,
    }
];

const englishLoaders = [{
        locale: 'en',
        key: 'common',
        loader: async () => (
            await import('./en/common.json')
        ).default,
    },
    {
        locale: 'en',
        key: 'home',
        loader: async () => (
            await import('./en/home.json')
        ).default,
    },
    {
        locale: 'en',
        key: 'resume',
        loader: async () => (
            await import('./en/resume.json')
        ).default,
    }
];

const config: Config<Partial<Params>> = ({
    initLocale: browser ? window.navigator.language : defaultLocale,
    loaders: [
        ...spanishLoaders,
        ...englishLoaders
    ],
});

export const {t, locale, locales, loading, loadTranslations} = new i18n(config);
