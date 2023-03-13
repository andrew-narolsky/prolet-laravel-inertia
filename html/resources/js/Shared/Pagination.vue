<template>
    <ul v-if="links.length > 3" class="pagination pagination-sm m-0 float-right">
        <li v-for="(link, k) in links" class="page-item"
            :class="{'active': link.active}">
            <Link v-if="link.label === 'pagination.previous'"
                  :href="link.url"
                  v-html="'Попередня'"
                  class="page-link"
            />
            <Link v-else-if="link.label === 'pagination.next'"
                  :href="link.url"
                  v-html="'Наступна'"
                  class="page-link"
            />
            <Link v-else
                  :href="link.url"
                  :disabled="link.url === null"
                  v-html="link.label"
                  class="page-link"
            />
        </li>
    </ul>
</template>

<script>
import {Link} from '@inertiajs/vue3'

export default {
    components: {
        Link,
    },
    props: {
        links: Array,
    }
};
</script>
