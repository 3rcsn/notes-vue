import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

import Edit from './Edit.vue';
import Search from './Search.vue';

import { useNotesStore } from './stores/notes';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

app.mount('#app')

createApp(Edit).mount('#edit')
createApp(Search).mount('#search')

const loadNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
};

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};
window.addEventListener('beforeunload', () => {
    const notesStore = useNotesStore();
    saveNotes(notesStore.notes);
});