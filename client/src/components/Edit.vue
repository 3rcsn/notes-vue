<script setup>
  import {ref} from 'vue';
  import api from '@/api.js';
  const note = ref('This is a sample note.');

  const emit = defineEmits(['refresh-Notes']);

  function saveNote() {
    api.post('/saveNote', {
      note: note.value
    }).then(function (res) {
      console.log(res);
      emit('refresh-Notes');
    }).catch(function (err) {
      console.log(err);
    });
  }
</script>

<template>
  <div class="edit-note">
    <div>New Note:</div>
    <textarea id="newNote" v-model="note" rows="10" cols="50"></textarea>
    <br>
        <button id="save" type="submit" class="btn" @click="saveNote">Save</button>
  </div>
</template>