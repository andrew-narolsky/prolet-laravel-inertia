<template>
    <option :key="category.id" :value="category.id">{{ depth + ' ' + category.name }}</option>
    <Option v-for="category in category.children" :category="category" :depth="depth + '-'"/>
</template>

<script>
export default {
    name: 'Option',
    props: {
        category: Object,
        depth: String
    }
}
</script>
