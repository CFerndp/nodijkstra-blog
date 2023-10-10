<script lang="ts">
    import {t, locale} from "$lib/i18n/translations";
    import {LightSwitch} from '@skeletonlabs/skeleton';

    let lang = locale.get()

    const onChangeLanguage = () => {
        locale.set(lang)
    }
</script>

<header class="flex justify-around items-center text-center border-b-2 border-primary-900 pb-2">
    <a href="/">
        <img class="h-20 mr-2 lg:h-24" src="/logo.png" alt="NoDijkstra Logo"/>
    </a>
    <div>
        <h1 class="hidden md:block h1">{$t('common.header.title')}</h1>
        <h2 class="hidden md:block h3 mt-2 underline italic">{$t('common.header.subtitle')}</h2>
    </div>
    <div class="flex flex-col gap-2 justify-center items-end">
        <LightSwitch/>
        <label class="label text-start">
            <select class="select" bind:value={lang} on:change={onChangeLanguage}>
                <option value="es">{$t('common.header.languages.es')}</option>
                <option value="en">{$t('common.header.languages.en')}</option>
            </select>
        </label>
    </div>
</header>
