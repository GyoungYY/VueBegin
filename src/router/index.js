import Vue from 'vue'
import Router from 'vue-router'

import NavMenu from '@/components/NavMenu'
import Components from '@/components/Components'

Vue.use(Router)

export default new Router({
    routes: [

        {
            path: '/',
            component: Components,
            redirect: '/components'
        },
        {
            path: '/components',
            name: 'Components',
            component: Components
        },
        {
            path: '/vue',
            name: 'NavMenu',
            component: NavMenu
        },
    ]
})
