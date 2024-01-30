import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'devextreme/dist/css/dx.light.css';
import money from 'v-money3';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {  
  apiKey: "AIzaSyBX-JrMvBgU5-2F_A9v_P4xsoQmJdR7h5c",
  authDomain: "quick-bot-prod.firebaseapp.com",
  projectId: "quick-bot-prod",
  storageBucket: "quick-bot-prod.appspot.com",
  messagingSenderId: "164993855657",
  appId: "1:164993855657:web:826b09b22a88b040ab79b8"
};

// Initialize Firebase
initializeApp(firebaseConfig);


import ptMessages from 'devextreme/localization/messages/pt.json'
import { locale, loadMessages } from 'devextreme/localization';

const app = createApp(App);


loadMessages(ptMessages);
locale(navigator.language);


// bootstrap
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

// modals
import '@/assets/sass/components/custom-modal.scss';

// perfect scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

//vue-meta
import { createHead } from '@vueuse/head';
const head = createHead();

//Sweetalert
import Swal from 'sweetalert2';
window.Swal = Swal;

// nouislider - later remove and add to page due to not working in page
import VueNouislider from 'vue3-nouislider';
import 'vue3-nouislider/dist/vue3-nouislider.css';

// vue input mask
import Maska from 'maska';

// smooth scroll
import { registerScrollSpy } from 'vue3-scroll-spy/dist/index';
registerScrollSpy(app, { offset: 118 });

//vue-i18n
import i18n from './i18n';

// datatables
import { ClientTable } from 'v-tables-3';

// json to excel
import vue3JsonExcel from 'vue3-json-excel';

// vue select
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';


//vue-wizard
import VueFormWizard from 'vue3-form-wizard';
import 'vue3-form-wizard/dist/style.css';

// set default settings
import appSetting from './app-setting';
window.$appSetting = appSetting;
window.$appSetting.init();

app.component('v-select', vSelect)
app.use(store).use(money).use(router).use(i18n).use(PerfectScrollbar).use(VueNouislider).use(Maska).use(ClientTable).use(vue3JsonExcel).use(VueFormWizard).use(head).mount('#app');
