<script setup>
import {RouterLink} from 'vue-router';
const props = defineProps(["pet", "index"]);
console.log("pet", "props.item");
</script>

<template>
<RouterLink :to="'/collection'+pet.id">
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
[v-cloak] {
    display: none;
  }
  /*text and body styling*/
body {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-image: linear-gradient(#003300, white);
    width: 100%;
    text-align: center;
}
h1 {
    margin: 1.5em 1.5em 1em 1.5em;
    color: white;
}
h2 {
    color: #336633;
    text-align: center;
}
.pet-name {
    color:#003300;
}
.petRow {
    display: flex;
}
/*table styling*/
div {
    color: #808080;
    border: 0 none;
    text-decoration: none; 
}
#itemRow {
    color: white;
}
table {
    width: 80%;
   margin: auto;     
}
.odd {
    background: #ccc;
}
.pet-pain {
    font-style:italic;
}
tbody{
    background: white;
}
img {
    display: flex;
    margin: auto;
    max-height: 200px;
}
</style>