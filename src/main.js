import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import { createI18n } from 'vue-i18n'
import en from './i18n/en.json';
import ru from './i18n/ru.json';

const VueTelInputOptions = {
  mode: "international"
}

const params = new URLSearchParams(window.location.search);
const lang = params.get('lang') || 'en'; 

const i18n = createI18n({
  locale: lang,
  messages: {
    en,
    ru
  }
});

// Ініціалізуємо додаток Vue
createApp(App)
  .use(router)
  .use(store)
  .use(VueTelInput, VueTelInputOptions)
  .use(i18n)
  .mount('#app')
