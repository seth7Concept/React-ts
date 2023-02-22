export type User = {
    id: number;
    username: string;
    email?: string;
    isAdmin: boolean;
};

export type Hobby = {
    name: string;
    isFavorite: boolean;
}

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}