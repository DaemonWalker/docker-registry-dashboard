import {FC} from "react";
import {useParams} from "react-router-dom";


export const Image: FC = () => {
    const {name} = useParams();
    return (
        <>Image name is {name}</>
    )
}