export const getRepositories = (): Promise<string[]> =>
    fetch("/v2/_catalog").then(res => res.json()).then(res => res.repositories as string[])

export const getImageTags = (imageName: string): Promise<string[]> =>
    fetch(`/v2/${imageName}/tags/list`).then(res => res.json()).then(res => res.tags as string[]);