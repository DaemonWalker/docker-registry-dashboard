import {FC} from "react";
import {Button, Form, Popconfirm, Typography} from "antd";
import {deleteImageTag, getTagDetail, getTagDigest} from "../../utils/apiUtils";
import {Linux} from "../../content/icons/Linux"
import Icon, {WindowsOutlined} from "@ant-design/icons";
import {useQueries} from "react-query";
import {message} from "antd/es";

const {Text} = Typography;

interface IProps {
    imageName: string;
    tagName?: string;
}

export const ImageTagDetailInfo: FC<IProps> = ({tagName, imageName}) => {
    if (!tagName) return <></>;

    const [
        {data: detailData, isLoading: detailLoading},
        {data: digestData, isLoading: digestLoading}
    ] =
        useQueries([
            {queryKey: ["getTagDetail", tagName], queryFn: () => getTagDetail(imageName, tagName)},
            {queryKey: ["getTagDigest", tagName], queryFn: () => getTagDigest(imageName, tagName)}
        ]);


    const deleteImage = () => new Promise<void>(r => {
        if (!digestData) {
            message.error("该镜像没有签名信息，请刷新页面后重试");
            r();
        } else {
            deleteImageTag(imageName, digestData).then(res => {
                if (res.result) {
                    message.success("删除成功");
                } else {
                    message.error(res.msg);
                }
                r();
            })
        }
    });

    if (detailLoading) {
        return <></>
    }
    if (!detailData) {
        return <>没有数据</>
    }
    let os = () => <></>;
    if (detailData.history) {
        if (detailData.history[0]?.v1Compatibility?.os === "linux") {
            os = () => <Linux/>
        } else if (detailData.history[0]?.v1Compatibility?.os === "windows") {
            os = () => <WindowsOutlined/>
        }
    }
    return (
        <Form labelCol={{span: 4}} wrapperCol={{span: 16}}>
            <Form.Item label="镜像名称">
                <Text>{detailData.name}</Text>
            </Form.Item>
            <Form.Item label="镜像版本">
                <Text>{detailData.tag}</Text>
            </Form.Item>
            <Form.Item label="目标系统">
                <Icon component={os} style={{fontSize: '32px'}}/>
            </Form.Item>
            <Form.Item label="目标架构">
                <Text>{detailData.architecture}</Text>
            </Form.Item>
            <Form.Item label="数字签名">
                <Text>{digestData}</Text>
            </Form.Item>
            <Form.Item style={{float: "right"}}>
                <Popconfirm title="真要删除该镜像吗？" okText="确认" cancelText="取消"
                            onConfirm={deleteImage}>
                    <Button danger type="primary">删除该镜像</Button>
                </Popconfirm>
            </Form.Item>
        </Form>
    )
}