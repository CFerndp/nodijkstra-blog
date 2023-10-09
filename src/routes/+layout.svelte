<script lang="ts">
	import '../app.pcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import {AppShell, storePopup} from '@skeletonlabs/skeleton';
    import {Header, Footer} from "$components";
    import Menu from "$components/Menu/Menu.svelte";

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell class="min-h-screen p-12">
    <svelte:fragment slot="header"><Header /></svelte:fragment>
    <svelte:fragment slot="sidebarLeft"><Menu /></svelte:fragment>
    <slot />
    <svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
