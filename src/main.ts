import { createApp } from 'vue'
import '@/render/assets/style/style.scss'
import App from './App.vue'
import router from "@/render/service/router/router.ts";

const app = createApp(App)

app.use(router)
app.mount('#app')