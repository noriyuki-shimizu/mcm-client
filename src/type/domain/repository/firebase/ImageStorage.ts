import * as Filebase from 'firebase/app';

import Storage from '@/type/domain/repository/firebase/Storage';
import Image from '@/type/domain/dto/ImageDto';

type CallbackType = (arg: string) => void;

export default class ImageStorage extends Storage {
    private readonly IMAGE_FOLDER_NAME = 'images/';
    private image!: Image;
    private imageRef!: Filebase.storage.Reference;

    constructor(image: Image) {
        super();

        if (!image || !image.name) {
            throw new Error('ImageStorage instance feild.');
        }

        this.image = image;
        this.imageRef = this.storageRef.child(this.IMAGE_FOLDER_NAME + this.image.name);
    }

    public upload(callback: CallbackType): void {
        if (this.image.file === undefined) {
            throw new Error('Necessary information is missing!!');
        }

        this.imageRef.put(this.image.file).then((snapshot) => {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                callback(downloadURL);
            });
        });
    }

    public delete(): void {
        // Delete the file
        this.imageRef.delete().then(() => {
            // File deleted successfully
            console.info('File deleted successfully.');
        }).catch(function(this: ImageStorage, error: any) {
            // Uh-oh, an error occurred!
            console.error(error);
            console.error('Image file is %o', this.image);
        });
    }
}
