import './App.css';
import routers from './router/router.config'
import React, {Component} from 'react';

import {Layout, Menu, Breadcrumb} from 'antd';

import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

const {Header, Footer, Sider, Content} = Layout;



console.log(routers)

class App extends Component {
    handleClick = e => {
        console.log('click ', e);
    }
    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Header>Header</Header>
                <Layout>
                    <Sider className="site-layout-background">
                        <Menu
                            mode="inline"
                            onClick={this.handleClick}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
                                <Menu.ItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="Item 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" icon={<SettingOutlined/>} title="Navigation Three">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="site-layout-background"
                                 style={{
                                     padding: 24,
                                     margin: 0,
                                     minHeight: 280,
                                 }}>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default App;
