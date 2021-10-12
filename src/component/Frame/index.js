import React from 'react'
import { withRouter } from 'react-router-dom'
import {Layout, Menu} from 'antd';
import logo from './logo-ny.svg'
import {adminRouters} from '../../routers'

const {Header, Content, Sider} = Layout;

const routers = adminRouters.filter(route => route.isShow)

function Index(props) {
    return (
        <Layout>
            <Header className="header" style={{backgroundColor: '#a31b50'}}>
                <div className="logo">
                    <img src={logo} alt="念过科技"/>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={props.history.location.pathname}
                        style={{height: '100%', borderRight: 0}}
                    >
                        {routers.map(route => {
                            return (
                                <Menu.Item
                                    key={route.path}
                                    onClick={p=>props.history.push(p.key)}>
                                    {route.icon}
                                    <span>{route.title}</span>
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default withRouter(Index)
