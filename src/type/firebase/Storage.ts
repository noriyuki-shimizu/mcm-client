import * as Filebase from 'firebase/app';
import 'firebase/storage';

import Image from '@/type/domain/dto/ImageDto';

type CallbackType = (arg: string) => void;

export default class Starage {
    private image!: Image;

    constructor(image: Image) {
        this.image = image;
    }

    public imageUpload(callback: CallbackType): void {
        const storageRef: Filebase.storage.Reference = Filebase.storage().ref();

        if (!this.image.name && this.image.file === undefined) {
            throw new Error('Necessary information is missing!!');
        }

        const imageRef: Filebase.storage.Reference = storageRef.child('images/' + this.image.name);
        imageRef.put(this.image.file).then((snapshot) => {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                callback(downloadURL);
            });
        });
    }
}
