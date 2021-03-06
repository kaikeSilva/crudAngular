export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface Ad {
    company: string;
    url: string;
    text: string;
}

export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    ad: Ad;
}

export interface UserPost {
    name: string;
    job: string;
}

export interface UserPostResponse {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}
