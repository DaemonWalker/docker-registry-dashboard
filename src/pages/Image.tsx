import {FC} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Col, Row} from "antd";
import {ImageOverview} from "../components/Images/ImageOverview";
import {ImageTagInfo} from "../components/Images/ImageTagInfo";


export const Image: FC = () => {
    const {name, owner} = useParams();
    const navigate = useNavigate();
    if (!name) {
        navigate("/404");
        return <></>;
    }
    const imageName = owner ? `${owner}/${name}` : name;
    return (
        <>
            <Row justify="center" gutter={[0, 30]}>
                <Col span={20}>
                    <ImageOverview name={imageName}/>
                </Col>
                <Col span={20}>
                    <ImageTagInfo name={imageName}/>
                </Col>
            </Row>
        </>
    )
}