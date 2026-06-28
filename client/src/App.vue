<script setup>
  import Edit from './components/Edit.vue';
  import Notes from './components/Notes.vue';
  import Search from './components/Search.vue';
</script>

<template>
    <div class="header">Notes</div>
    <br>
    <div class="wrapper">
      <Edit />
      <Search />
      <Notes />
    </div>
</template>

<style>
  @import './style.css';
</style>