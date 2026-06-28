<script>
  import api from "@/api.js";

  export default {
    name: "Notes",
    data() {
      return {
        notes: {},
        error: '',
        text: ''
      }
    },
    created() {
      this.getNotes();
    },
    methods: {
      getNotes() {
        api.get('/getNotes').then((response) => {
          this.notes = response.data;

          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        })
      }
    }

  }
</script>

<template>
  <div class="notes-section">
    <div class="header">Your Notes</div>
    <div v-for="note in notes" :key="note.__id" class="note">
      <em> {{ note.note }} </em>
      <br>
      <em> {{ note.date }} </em>
    </div>
  </div>
</template>