import i18n, { type Config } from 'sveltekit-i18n';
import {browser} from "$app/environment";

type Params = {
    year: number
}

const defaultLocale = 'en';

const config: Config<Partial<Params>> = ({
    initLocale:  browser ? window.navigator.language : defaultLocale,
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
        {
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
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
