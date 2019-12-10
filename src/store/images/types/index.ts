export interface Image {
    id: number | null;
    name: string;
    path: string | null;
    isDeleted?: boolean;
}