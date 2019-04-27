export default interface ImageDto {
    name: string;
    path: string;
    file: File | null;
    deleteFlag: boolean;
}
