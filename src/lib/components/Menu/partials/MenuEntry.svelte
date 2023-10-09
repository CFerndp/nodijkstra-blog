<script lang="ts">
    export let icon: string;
    export let link: string;
    export let title: string;
</script>

<a href={link}>
    <span class="badge bg-primary-500">{icon}</span>
    <span class="flex-auto hidden lg:block">{title}</span>
</a>
