interface Image {
    id: number | null;
    name: string;
    path: string;
    isDelete: boolean;
}

export interface BrandDto {
    id: number;
    userId: number;
    name: string;
    link: string;
    image: Image;
    country: string;
    isDelete: boolean;
}
