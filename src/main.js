import "bootstrap/dist/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import TheCard from './components/UI/TheCard.vue';

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

library.add(faEllipsisVertical, faCircleQuestion);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('the-card', TheCard);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
