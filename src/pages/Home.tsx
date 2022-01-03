import {FC} from "react";
import {Dashboard} from "../components/Home/Dashboard";
import {Col, Row} from "antd";
import {ServerInfo} from "../components/Home/ServerInfo";


export const Home: FC = () => {
    return (
        <Row gutter={[20, 0]}>
            <Col span={8}>
                <div className="content-block">
                    <ServerInfo/>
                </div>
            </Col>
            <Col span={16}>
                <div className="content-block">
                    <Dashboard/>
                </div>
            </Col>
        </Row>
    )
}