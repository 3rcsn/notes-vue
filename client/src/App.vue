<script setup>
  import Edit from './components/Edit.vue';
  import Notes from './components/Notes.vue';
  import Search from './components/Search.vue';
  import {ref} from "vue";

  const note = ref('');
</script>

<template>
    <div class="header">Notes</div>
    <br>
    <div class="wrapper">
      <Edit @refresh-notes="note.getNotes"/>
      <Search />
      <Notes ref="notesRef"/>
    </div>
</template>

<style>
  @import './style.css';
</style>