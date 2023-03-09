<template>
    <Head :title="title" />
    <ul>
        <li>
            <Link :href="route('home')">Home</Link>
        </li>
    </ul>

    <h1>{{ title }}</h1>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3';
export default {
    components: {
        Head,
        Link
    },
    props: {
        title: String
    },
}
</script>
