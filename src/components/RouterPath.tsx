import {FC} from "react";
import {Breadcrumb} from "antd";
import {Link, useLocation} from "react-router-dom";
import {getRouteArray} from "../utils/breadcrumbUtils";

export const RouterPath: FC = () => {
    const location = useLocation();
    const pathSnippets = getRouteArray(location.pathname);
    const extraBreadcrumbItems = pathSnippets.map((item, index) => {
        return (
            <Breadcrumb.Item key={item.path}>
                <Link to={item.path}>{item.name}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">主页</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <Breadcrumb style={{margin: '16px 0'}} separator=">">
            {breadcrumbItems}
        </Breadcrumb>
    );
}