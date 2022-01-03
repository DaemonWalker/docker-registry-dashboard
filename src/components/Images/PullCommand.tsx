import {FC} from "react";
import {Card, Typography} from "antd";

const {Title, Text} = Typography;

interface IProps {
    name: string;
    tag: string;
    showTitle: boolean;
}

export const PullCommand: FC<IProps> = ({name, tag, showTitle = true}) => {
    if (!name || !tag) {
        return <></>
    }
    return (
        <>
            {showTitle && <Title level={5}>使用命令拉取镜像</Title>}
            <Card size="small" style={{background: "#445d6e"}}>
                <Text copyable style={{color: "white"}}>
                    {`docker pull ${window.location.host}/${name}:${tag}`}
                </Text>
            </Card>
        </>
    )

}