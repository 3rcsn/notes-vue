<script>
</script>

<template>
    <div class="search-bar">
        <input type="text" v-model="query" placeholder="Search notes..." />
        <button @click="performSearch">Search</button> 
    </div>
</template>