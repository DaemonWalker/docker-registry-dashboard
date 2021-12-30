import {FC, useState} from "react";
import {List, Typography, Button} from "antd";
import {useQuery} from "react-query";
import {getRepositories} from "../utils/apiUtils";
import {useNavigate} from "react-router-dom";

export const Dashboard: FC = () => {
    const {isLoading, data} = useQuery<string[], any>('getImageRepos', () => getRepositories());
    const navigate = useNavigate();
    const goto = (url: string) => navigate(url);
    return (<>
        <List
            header={<div>镜像名称</div>}
            bordered
            dataSource={data}
            loading={isLoading}
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
    </>);
}