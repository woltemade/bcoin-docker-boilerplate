import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './App.css';
import ChainInfo from './pages/chain/info';
const { Sider } = Layout;
const { SubMenu } = Menu;

const App = (props) => {
  
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={props.collapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {/* <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item> */}
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="block" />
                  <span>Chain</span>
                </span>
              }
            >
              <Menu.Item key="3">Info</Menu.Item>
              <Menu.Item key="4">Mine</Menu.Item>
              {/* <Menu.Item key="5">Alex</Menu.Item> */}
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="wallet" />
                  <span>Wallet</span>
                </span>
              }
            >
              <Menu.Item key="6">View Wallets</Menu.Item>
              <Menu.Item key="7">Create Wallets</Menu.Item>
              <Menu.Item key="8">Add Watch Wallet</Menu.Item>
            </SubMenu>
            {/* <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <ChainInfo />
        {/* <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Inv.es ©2019</Footer>
        </Layout> */}
      </Layout>
    </div>
  );
}

export default App;
