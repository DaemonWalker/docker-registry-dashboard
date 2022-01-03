import {FC, useMemo} from "react";
import {Button, List} from "antd";
import {useQuery} from "react-query";
import {getImageTags} from "../../utils/apiUtils";

interface IProps {
    name: string;
    onSelected: (name: string) => void;
}

export const ImageTagList: FC<IProps> = ({name, onSelected}) => {
    const {data, isLoading, error} = useQuery<string[], any>(["getTags", name],
        () => getImageTags(name));
    const tagList = useMemo(() => {
        if (isLoading || error) {
            return undefined;
        }
        return data;
    }, [data, isLoading, error]);
    return (
        <List style={{background: "white"}} loading={isLoading} dataSource={tagList}
              renderItem={item =>
                  <List.Item>
                      <Button onClick={() => onSelected?.(item)} type="link">{item}</Button>
                  </List.Item>
              }/>
    );
}