<script setup>
import {RouterLink}
const props = defineProps(["item", "index"]);
console.log("the item, props.item");
</script>

<template>
<RouterLink :to="'/collection'+item.id">
    <div 
        class="petRow"
        v-bind:class="{
        petRow: true,
        odd: index % 2 !== 0,
    }"
    >               
        <div class="pet-name">{{ pet.name }}</div>
        <div class="pet-age">{{ pet.age }}</div>
        <div class="pet-animal">{{ pet.animal }}</div>
        <div class="pet-breed">{{ pet.breed }}</div>
        <div class="pet-image"><img v-bind:src="pet.image" v-bind:title="pet.name + ', the ' + pet.breed" v-bind:alt="pet.name +', the ' + pet.breed"/></div>
        <div class="pet-pain">{{ pet.pain }}</div>
    </div>
    </RouterLink>
</template>

<style>
</style>