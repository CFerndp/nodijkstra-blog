<script>
    import {t} from '$lib/i18n/translations';
    import {Contact, Repo, Instagram, LinkedIn} from "$components";

    const year = new Date().getFullYear();
</script>
<footer class="text-center flex items-center justify-center">
    <div class="p-5 hidden md:block">
        <p>{$t('common.footer.title', {year})}</p>
        <p><a target="_blank" class="underline hover:text-blue-600"
              href="mailto:cristian.fernandez.del.pozo@gmail.com">{$t('common.footer.name')}</a></p>
    </div>
        <a class="m-3" target="_blank" href="https://github.com/CFerndp">
            <span><Repo/></span>
        </a>
        <a class="m-3"  target="_blank" href="https://www.linkedin.com/in/cferndp/">
            <span><LinkedIn/></span>
        </a>
        <a class="m-3"  target="_blank" href="https://www.instagram.com/nodijkstra">
            <span><Instagram/></span>
        </a>
        <a class="m-3"  href="/contact">
            <span><Contact/></span>
        </a>
</footer>
