<script setup>
    import { ref } from 'vue';
    const noteContent = ref('This is a sample note.');
</script>

<template>
    <div class="edit-note">
        <h2>Edit Note</h2>
        <textarea v-model="noteContent" rows="10" cols="50"></textarea>
        <br />
        <button @click="saveNote">Save</button>
    </div>
</template>