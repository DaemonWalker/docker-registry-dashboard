import {FC, useState} from "react";
import {Card, Col, Row} from "antd";
import {ImageTagList} from "./ImageTagList";
import {ImageTagDetailInfo} from "./ImageTagDetailInfo";
import {PullCommand} from "./PullCommand";

interface IProps {
    name: string;
}

export const ImageTagInfo: FC<IProps> = ({name}) => {
    const [selectedTag, setSelectedTag] = useState("");
    const changeTag = (name: string): void => {
        setSelectedTag(name)
    }
    return (
        <Row gutter={[20, 0]}>
            <Col span={8}>
                <Card title="Tag列表">
                    <ImageTagList name={name} onSelected={name => changeTag(name)}/>
                </Card>
            </Col>
            <Col span={16}>
                <Card
                    title={<Row justify="space-between" align="middle">
                        <Col>详细信息</Col><Col><PullCommand name={name} tag={selectedTag} showTitle={false}/></Col>
                    </Row>}>
                    <ImageTagDetailInfo imageName={name} tagName={selectedTag}/>
                </Card>
            </Col>
        </Row>
    )
}