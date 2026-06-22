<script>
  export default {
    data() {
      return {
        date: new Date(),
        noteTitle : "Note",
        noteContent : "vai segurano"
      }
    }
  }
</script>

<template>
  <div class="notes-section">
    <div class="header">Your Notes</div>
    <br>
    <div class="notes">
      <b>{{ date.toLocaleString() }} </b>
      <br>
      <em>{{ noteTitle }}</em>
      <p>{{ noteContent }}</p>
    </div>
  </div>
</template>