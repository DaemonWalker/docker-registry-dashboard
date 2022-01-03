import {FC} from "react";
import {Layout, Menu} from "antd";
import {Route, Routes} from "react-router-dom";
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
            <div style={{background: "white", marginBottom: 15, padding: "0 15px"}}>
                <RouterPath/>
            </div>
            <Content className="content">
                <div className="site-layout-content">
                    <Routes>
                        <Route path="/images/:owner/:name" element={<Image/>}/>
                        <Route path="/images/:name" element={<Image/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Docker Registry UI &copy;2021-{new Date().getFullYear()} DBD2</Footer>
        </Layout>
    )
}