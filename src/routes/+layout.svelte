<script lang="ts">
	import '../app.pcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import {AppShell, storePopup} from '@skeletonlabs/skeleton';
    import Header from "$components/Header/Header.svelte";
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>


<AppShell>
    <svelte:fragment slot="header"><Header /></svelte:fragment>
    <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
    <!-- (sidebarRight) -->
    <svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
    <!-- Router Slot -->
    <slot />
    <!-- ---- / ---- -->
    <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
    <svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
