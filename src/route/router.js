import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
	{
		path: '/team',
		component(resolve) {
			require(['../views/team'], resolve)
		}
	},
	{
		path: '/login',
		component(resolve) {
			require(['../views/team'], resolve)
		}
	},
	{
		path: '/index',
		component(resolve) {
			require(['../views/team'], resolve)
		}
	},
	{
		path: '/custom_service',
		component(resolve) {
			require(['../views/custom_service'], resolve)
		}
	},
	// catch all redirect
    { path: '*', redirect: '/team' }
]
	
const router = new VueRouter({ 
	// mode: 'history',
	routes
})

router.beforeEach((to, from , next) => {
	next()
})

export default router