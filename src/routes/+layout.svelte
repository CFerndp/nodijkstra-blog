<script lang="ts">
    import '../app.pcss';

    // Floating UI for Popups
    import {computePosition, autoUpdate, flip, shift, offset, arrow} from '@floating-ui/dom';
    import {AppShell, storePopup} from '@skeletonlabs/skeleton';
    import {Header, Footer} from "$components";
    import Menu from "$components/Menu/Menu.svelte";

    storePopup.set({computePosition, autoUpdate, flip, shift, offset, arrow});
</script>

<AppShell class="p-2 md:p-6 lg:p-12">
    <svelte:fragment slot="header">
        <Header/>
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
        <section class="mt-4 p-2 h-max">
            <Menu/>
        </section>
    </svelte:fragment>
    <section class="m-4 p-2 h-max">
        <slot/>
    </section>
    <svelte:fragment slot="footer">
        <Footer/>
    </svelte:fragment>
</AppShell>
