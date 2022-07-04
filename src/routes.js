import Blogindex from './pages/blog/Blog-index.vue'
import Blogshow from './pages/blog/Blog-show.vue'

export default [
    {
        path: '/',
        name: 'Home',
        component: Blogindex

    },
    {
        path: '/show',
        name: 'ShowTask',
        component: Blogshow

    }
]