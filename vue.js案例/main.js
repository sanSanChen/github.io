import Vue from 'vue';
import 'bootstrap';
import router from './src/router/router.js';
import App from './src/App.vue';

new Vue({
	el: '#app',
	router: router,
	data: {},
	template:'<App/>',
	components: {
		'App':App
	}
});