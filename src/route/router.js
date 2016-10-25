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
		path: '/all_team',
		component(resolve) {
			require(['../views/all_team'], resolve)
		}
	},
	// catch all redirect
    { path: '*', redirect: '/all_team' }
]
	
const router = new VueRouter({ 
	// mode: 'history',
	routes
})

router.beforeEach((to, from , next) => {
	next()
})

export default router