<script>
    import {t} from '$lib/i18n/translations';
    import { LightSwitch } from '@skeletonlabs/skeleton';

</script>

<header class="flex justify-around items-center text-center">
    <a href="/">
        <img class="h-24 mr-2" src="/logo.png" alt="NoDijkstra Logo"/>
    </a>
    <div>
        <h1 class="hidden md:block h1">{$t('common.header.title')}</h1>
        <h2 class="hidden md:block h3 mt-2 underline italic">{$t('common.header.subtitle')}</h2>
    </div>
    <LightSwitch />
</header>
