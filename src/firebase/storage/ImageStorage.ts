import * as Filebase from 'firebase/app';

import Storage from '@/firebase/storage/Storage';

type CallbackType = (arg: string) => void;

export default class ImageStorage extends Storage {
    private readonly IMAGE_FOLDER_NAME = 'images/';

    private imageRef!: Filebase.storage.Reference;

    private file!: File;

    constructor(name: string, file: File | undefined) {
        super();

        if (!name || !file) {
            throw new Error('ImageStorage instance feild.');
        }

        this.file = file;
        this.imageRef = this.storageRef.child(this.IMAGE_FOLDER_NAME + name);
    }

    public upload(callback: CallbackType): void {
        if (this.file === undefined) {
            throw new Error('Necessary information is missing!!');
        }

        this.imageRef.put(this.file).then(snapshot => {
            snapshot.ref.getDownloadURL().then(downloadURL => {
                callback(downloadURL);
            });
        });
    }

    public delete(): void {
        // Delete the file
        this.imageRef
            .delete()
            .then(() => {
                // File deleted successfully
                console.info('File deleted successfully.');
            })
            .catch(function(this: ImageStorage, error: any) {
                // Uh-oh, an error occurred!
                console.error(error);
                console.error('Image file is %o', this.file);
            });
    }
}
