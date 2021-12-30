import {FC} from "react";
import {Layout, Menu} from "antd";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home"
import {Image} from "../pages/Image"
import {RouterPath} from "../components/RouterPath";

const {Header, Content, Footer} = Layout;

export const DefaultLayout: FC = () => {
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['default']}>
                    <Menu.Item key="default">流通业务二部Docker镜像库</Menu.Item>
                </Menu>
            </Header>
            <Content className="content">
                <RouterPath/>
                <div className="site-layout-content">
                    <Routes>
                        <Route path="/images/:name" element={<Image/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}