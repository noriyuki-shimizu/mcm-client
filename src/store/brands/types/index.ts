interface Image {
    id: number | null;
    name: string;
    path: string;
    isDelete: boolean;
}

export interface Brand {
    id: number | null;
    userId: number | null;
    name: string;
    link: string;
    image: Image;
    country: string;
    isDelete: boolean;
}
