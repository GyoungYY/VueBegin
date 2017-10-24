import Vue from 'vue'
import Router from 'vue-router'

import NavMenu from '@/components/NavMenu'
import Components from '@/components/Components'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'NavMenu',
            component: NavMenu
        },
        {
            path: '/components',
            name: 'Components',
            component: Components
        },
    ]
})
