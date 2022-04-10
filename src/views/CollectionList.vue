<script setup>
    import CreatureList from "../data/creatures.json";
    import ItemRow from "../components/ItemRow.vue";
    console.log(CreatureList);
</script>
<template>
    <h1>Collection List</h1>
    <ItemRow v-for="(item, index) in CreatureList" :key="index" :item="item" />
</template>