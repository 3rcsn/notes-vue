<script setup>
  import Edit from './Edit.vue';
  import Notes from './Notes.vue';
  import Search from './Search.vue';
  import { useNotesStore } from './stores/notes';

  const notesStore = useNotesStore();
</script>

<template>
  <header class="header">
    <title>Notes</title>
    <Notes />
  </header>

  <div class="wrapper">
    <Search />
    <Edit />
  </div>
</template>

<style>
  @import './style.css';
</style>