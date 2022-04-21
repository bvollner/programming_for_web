<script setup>
    import CreatureList from "../data/creatures.json";
    import ItemRow from "../components/ItemRow.vue";
    console.log(CreatureList);
</script>
<template>
    <h1>A Brief Inventory of the Creatures my Wife has Rescued</h1>
    <ItemRow v-for="(item, index) in CreatureList" :key="index" :pet="item" />
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
/*table styling*/
div {
    color: #808080;
    border: 0 none;
    padding: 2em;
    margin: auto;   
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
