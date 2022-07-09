import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 注册vue-router
Vue.use(VueRouter)
    // 定义路由规则
const routes = [{
        path: '/',
        component: () =>
            import ('@/views/Home.vue')
    }, {
        path: '/home',
        component: () =>
            import ('@/views/Home.vue')
    }, {
        path: '/assort',
        component: () =>
            import ('@/views/Assort.vue')
    }, {
        path: '/order',
        component: () =>
            import ('@/views/Order.vue')
    }, {
        path: '/my',
        component: () =>
            import ('@/views/My.vue'),
        children: [{
                path: 'info',
                component: () =>
                    import ('@/views/sceond/Info')
            },
            {
                path: 'collect',
                component: () =>
                    import ('@/views/sceond/Collect'),
                children: [{
                    path: 'love',
                    component: () =>
                        import ('@/views/sceond/three/Love')
                }, {
                    path: 'life',
                    component: () =>
                        import ('@/views/sceond/three/Life')
                }, {
                    path: 'shop',
                    component: () =>
                        import ('@/views/sceond/three/Shop'),
                    children: [{
                            path: 'computer',
                            component: () =>
                                import ('@/views/sceond/three/four/Computer')
                        },
                        {
                            path: 'pannel',
                            component: () =>
                                import ('@/views/sceond/three/four/Pannel')
                        },
                        {
                            path: 'cussor',
                            component: () =>
                                import ('@/views/sceond/three/four/Cussor')
                        },
                    ]
                }, ]
            },
            {
                path: 'like',
                component: () =>
                    import ('@/views/sceond/Like')
            },
            {
                path: 'part',
                component: () =>
                    import ('@/views/sceond/Part')
            },
        ]
    }, ]
    // 生成路由对象
const router = new VueRouter({ routes })
export default router //默认导出这个配置好的路由对象