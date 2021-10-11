const routers = [
    {
        path: '/',
        component: () => import('@/component/one')
    },
    {
        path: '/Two',
        component: () => import('@/component/Two')
    },
    {
        path: '/Tree',
        component: () => import('@/component/Three')
    }
]
export default routers
