<template>
    <div class="container mx-auto">
        <div class="my-10">
            <slot />
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';

export default {
    components: {
        Link
    }
}
</script>
