import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const { Header, Content, Footer } = Layout;



const Home = ()=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
return(

  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item key="1"><Link to="/">Signup</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/home">Home</Link></Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Signup</Breadcrumb.Item>
        <Breadcrumb.Item>Login</Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <h2>TEAM REPORTER APP</h2>
      </div>

      <Button type="primary" onClick={showModal}>
        +
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

    </Content>
    <Footer style={{ textAlign: 'center' }}>Created By Intern-Team </Footer>
  </Layout>

)
}
export default Home;