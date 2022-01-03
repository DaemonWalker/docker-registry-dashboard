import {FC, useMemo, useState} from "react";
import {Button, Col, Input, List, Row, Typography} from "antd";
import {useQuery} from "react-query";
import {getRepositories} from "../../utils/apiUtils";
import {useNavigate} from "react-router-dom";

const {Title} = Typography;
const {Search} = Input;

export const Dashboard: FC = () => {
    const {isLoading, data} = useQuery<string[], any>('getImageRepos', () => getRepositories());
    const navigate = useNavigate();
    const goto = (url: string) => navigate(url);
    const [search, setSearch] = useState("");
    const showData = useMemo(() => {
        if (!data) {
            return undefined;
        }
        if (!search) {
            return data;
        }
        return data.filter(p => p.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    }, [data, search]);
    return (
        <Row justify="space-between" gutter={[0, 20]}>
            <Col>
                <Title level={5}>镜像一览</Title>
            </Col>
            <Col>
                <Search placeholder="搜索镜像..." onChange={ele => setSearch(ele.target.value)}/>
            </Col>
            <Col span={24}>
                <List bordered
                      dataSource={showData} loading={isLoading}
                      renderItem={item => (
                          <List.Item onClick={() => goto(`/images/${item}`)}>
                              <Button type="link">{item}</Button>
                          </List.Item>
                      )}
                      pagination={{
                          onChange: page => {
                              console.log(page);
                          },
                          pageSize: 10,
                      }}
                />
            </Col>
        </Row>
    );
}