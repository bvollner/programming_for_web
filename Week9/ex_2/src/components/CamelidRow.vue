<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
</script>
<template>
    <div>
    <h3>{{props.animal.commonName}}</h3>
    <p>{{props.animal.binomialName}}</p>
    <p>{{props.animal.order}}</p>
    <p>{{props.animal.family}}</p>
    <p>{{props.animal.genus}}</p>
    <p>{{props.animal.species}}</p>
    <img v-bind:src="props.animal.image" v-bind:alt="props.animal.commonName">
  </div>
</template>
<style scoped>
div {
    max-width: 220px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
}
img {
    max-width: 200px;
    display: block;
}
    h3 {
        color: green;
    }
</style>