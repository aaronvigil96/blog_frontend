export type GetPostType = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    author?: {
        username?: string;
    };
}