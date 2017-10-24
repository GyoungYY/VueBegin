import Vue from 'vue'
import Router from 'vue-router'

import NavMenu from '@/components/NavMenu'
import Components from '@/components/Components'
import MintUI from '@/components/MintUI'

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
        {
            path: '/mintui',
            name: 'MintUI',
            component: MintUI
        },
    ]
})
