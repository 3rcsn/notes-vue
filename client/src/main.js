import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Edit from "@/components/Edit.vue";
import Search from "@/components/Search.vue";

const app = createApp(App)
app.mount('#app')

createApp(Edit).mount('#edit')
createApp(Search).mount('#search')