import {FC} from "react";
import {Card, Col, Row, Typography} from "antd";

const {Title, Text} = Typography;

interface IProps {
    name: string;
}

export const ImageOverview: FC<IProps> = ({name}) => {
    return (
        <Row justify="center">
            <Col span={24}>
                <Card>
                    <Row justify="space-between" align="middle">
                        <Col flex={3}>
                            <Title level={3}>{name}</Title>
                            {/*<Text type="secondary"><ClockCircleOutlined/> 上次更新XX分钟前</Text>*/}
                        </Col>
                        <Col flex={2}>

                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}