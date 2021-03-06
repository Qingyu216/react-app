import Login from "../pages/Login";
import Index from "../pages/admin/dashboard";
import List from "../pages/admin/products/List";
import Edit from "../pages/admin/products/Edit";
import PageNotFound from "../pages/PageNotFound";
import { AreaChartOutlined, ShoppingOutlined } from '@ant-design/icons';

export const mainRouters = [{
    path: '/login',
    component: Login
},{
    path: '/404',
    component: PageNotFound
}]

export const adminRouters = [{
    path: '/admin/dashboard',
    component: Index,
    isShow: true,
    title: '看板',
    icon: <AreaChartOutlined/>
},{
    path: '/admin/products',
    component: List,
    isShow: true,
    exact: true,
    title: '商品管理',
    icon: <ShoppingOutlined/>
},{
    path: '/admin/products/edit/:id?',
    component: Edit,
    isShow: false
}]
