import { createApp } from 'vue'
import './style.css'

//importar la libreria elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//fin de la importacion
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
