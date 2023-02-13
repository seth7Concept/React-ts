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
