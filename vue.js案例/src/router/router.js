import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../common/home.vue';
import Welcome from '../common/welcome.vue';
import Static from '../common/static.vue';
import AboutMe from '../common/aboutme.vue';
import Canvas from '../common/canvas.vue';
import Show from '../common/show.vue';

Vue.use(VueRouter);

export default new VueRouter({

	routes: [
		{
			path:'/',
			component:Home,
			children:[
				{
					path:'',
					component:Welcome,
				},
				{
					path: '/static',
					component: Static
				}, {
					path: '/canvas',
					component: Canvas
				}, {
					path: '/aboutme',
					component: AboutMe
				}, {
					path: '/show',
					component: Show
				}
			]
		}
	]
});