import {TagDetailModel} from "../models/TagDetailModel";

const v2ApiHeaders = {"Accept": "application/vnd.docker.distribution.manifest.v2+json"};
export const getRepositories = (): Promise<string[]> =>
    fetch("/v2/_catalog").then(res => res.json()).then(res => res.repositories as string[])

export const getImageTags = (imageName: string): Promise<string[]> =>
    fetch(`/v2/${imageName}/tags/list`).then(res => res.json()).then(res => res.tags as string[]);

export const getTagDetail = (imageName: string, tag: string): Promise<TagDetailModel> =>
    fetch(`/v2/${imageName}/manifests/${tag}?seed=${Math.random()}`, {headers: {"Accept": "application/vnd.docker.distribution.manifest.v1+json"}})
        .then(r => r.json())
        .then(r => {
            const result = r as TagDetailModel;

            if (result.history) {
                result.history = result.history.map(h => ({
                    v1Compatibility: (h?.v1Compatibility ? JSON.parse(h.v1Compatibility) : "")
                }))
            }

            return result;
        })
export const getTagDigest = (imageName: string, tag: string): Promise<string> =>
    fetch(`/v2/${imageName}/manifests/${tag}?seed=${Math.random()}`, {headers: {...v2ApiHeaders}})
        .then(r => r.headers.get("Docker-Content-Digest") ?? "")

export const getV2Support = (): Promise<boolean> =>
    fetch("/v2").then(res => res.ok);

export const deleteImageTag = (image: string, digest: string): Promise<{ result: boolean, msg?: string }> =>
    fetch(`/v2/${image}/blobs/${digest}`, {method: "DELETE", headers: {...v2ApiHeaders}})
        .then(res => {
            switch (res.status) {
                case 202:
                    return {result: true};
                case 404:
                    return {result: false, msg: "该Tag不存在,请刷新页面"};
                case 405:
                    return {result: false, msg: "该服务器禁止删除操作,请联系管理员"}
                default:
                    return {result: false, msg: `unknow status ${res.status}`}
            }
        })