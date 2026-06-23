<script setup>
    import { ref } from 'vue';
    const placeHolder = ref('This is a sample note.');
</script>

<template>
    <div class="edit-note">
        <div class="header">Edit Note</div>
        <textarea id="newNote" v-model="placeHolder" rows="10" cols="50"></textarea>
        <br>
        <button @click="saveNotes">Save</button>
    </div>
</template>