<script setup>
import CreatureList from "../data/creatures.json";
import { useRoute } from "vue-router";

const route = useRoute();
const paramId = route.params.id * 1;
console.log("the id is", paramId);
const item = CreatureList.find(item => {
    return pet.id === paramId;
})
</script>
<template>
<h1>{{pet.name}}</h1>
<p>{{pet.body}}</p>
<img :src="pet.image" :alt="pet.name" />
</template>
