import {RouteItemModel} from "../models/RouteItemModel";

export const getRouteArray = (url: string): RouteItemModel[] => {
    try {
        let items = url.split("/").filter(p => p);
        if (items.length > 2 && url.toLocaleLowerCase().startsWith("/images")) {
            items = [items[0], `${items[1]}/${items[2]}`, ...items.slice(3, items.length)];
        }
        console.log(items)
        return items.map((item, index) => ({
            name: item,
            path: `/${items.slice(0, index + 1).join("/")}`
        })).filter(p => p.name !== "images");
    } catch (e) {
        console.error(e);
        return [];
    }
}

