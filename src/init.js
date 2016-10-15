import Vue from 'vue'
import App from './App.vue'
import router  from './route/router.js'
import './common.css'

const app = new Vue({
	el: '#app',
	router,
	render: h => h(App)
})