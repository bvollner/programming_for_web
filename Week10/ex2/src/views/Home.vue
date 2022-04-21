<script setup>
import { RouterLink } from "vue-router";
import MusicList from "../data/music-list.json";
console.log("MusicList", MusicList);
</script>
<template>
<div class="song-container">
<div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
    <RouterLink :to="'/song/' + song.slug">{{song.title}}</RouterLink>
</div>
</div>
</template>
<style scoped>
.song-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.song-list-item {
    font-family: Arial, Helvetica, sans-serif;
    width: auto;
    padding: 30px;
    margin: 10px;
    border: .5px solid black;
    border-radius: 4px;
    background: white;
}
.song-list-item:hover {
    background: black;
}
.song-list-item a {
    color: black;
}
.song-list-item:hover a {
    color: white;
}
</style>