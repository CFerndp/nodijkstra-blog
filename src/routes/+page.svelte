<script lang="ts">
    import {t} from "$lib/i18n/translations";
    import {EasterCat} from "$components";

    let isEasterEggVisible = false;


    const showEasterEgg = () => {
        console.log('Miau!')
        isEasterEggVisible = !isEasterEggVisible;
    }
</script>

{#if isEasterEggVisible}
    <EasterCat />
{/if}

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="space-y-5">
        <h1 class="h1">{$t('home.title')}</h1>

        <p>{$t('home.p1')}</p>
        <p>{$t('home.p2')}</p>
        <p>{$t('home.p3')}</p>
        <p>{$t('home.p4')}</p>
        <h2 class="h2">{$t('home.subtitle')}</h2>
        <ol class="list">
            <li>
                <span class="badge bg-primary-500">1.</span>
                <span class="flex-auto">{$t('home.list.1')}</span>
            </li>
            <li>
                <span class="badge bg-primary-500">2.</span>
                <span class="flex-auto">{$t('home.list.2')}</span>
            </li>
            <li>
                <span class="badge bg-primary-500">3.</span>
                <span class="flex-auto">{$t('home.list.3')}</span>
            </li>
            <li>
                <span class="badge bg-primary-500">4.</span>
                <span class="flex-auto">{$t('home.list.4')}</span>
            </li>
        </ol>
        <p>{$t('home.footer')} <button on:click={showEasterEgg} class="underline hover:text-blue-600">{$t('home.easter')}</button></p>
    </div>
</div>

