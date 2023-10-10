<script lang="ts">
    import {t} from "$lib/i18n/translations";
    import {Routes} from "$constants/routes";

    import MenuEntry from "./partials/MenuEntry.svelte";
</script>

<nav class="list-nav md:w-40">
    <ul>
        <li>
            <MenuEntry link={Routes.Home} title={$t("common.menu.home")} icon="🏠"/>
            <MenuEntry link={Routes.Resume} title={$t("common.menu.resume")} icon="📄"/>
            <MenuEntry link={Routes.Blog} title={$t("common.menu.blog")} icon="📝"/>
            <MenuEntry link={Routes.About} title={$t("common.menu.about")} icon="👨"/>
            <MenuEntry link={Routes.Contact} title={$t("common.menu.contact")} icon="📞"/>
        </li>
    </ul>
</nav>
