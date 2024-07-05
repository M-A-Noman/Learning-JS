export interface Post{
    id?:string,
    title: string,
    lastUpdate: string,
    postedBy: string,
    postDetails: string,
    thumbnail?: string,
    pdf?:string,
}