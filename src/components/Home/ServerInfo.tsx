import {FC, useMemo} from "react";
import {Card, Col, Row, Spin, Typography} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import {useQueries} from "react-query";
import {getV2Support} from "../../utils/apiUtils";

const {Title, Text} = Typography;

export const ServerInfo: FC = (s) => {
    const [{data: isSupport, isLoading: supportLoading}] = useQueries([
        {queryKey: "v2Support", queryFn: () => getV2Support(),}
    ])
    let v2Support = useMemo(() => {
        if (supportLoading) {
            return <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>} size="small"/>;
        }
        if (!isSupport) {
            return <Text type="danger">不支持</Text>
        } else {
            return <Text type="success">支持</Text>
        }
    }, [isSupport, supportLoading]);


    return (<>
        <Title level={5}>服务器信息</Title>
        <Card size="small">
            <Row align="middle" gutter={[10, 0]}>
                <Col><Text>V2 API:</Text></Col>
                <Col>{v2Support}</Col>
            </Row>
        </Card>
    </>);
}