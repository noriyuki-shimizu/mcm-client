import * as Filebase from 'firebase/app';

type CallbackType = (arg: string) => void;

export default {
    getImageRef(name: string) {
        const storageRef = Filebase.storage().ref();

        if (!name) {
            throw new Error('ImageStorage instance feild.');
        }

        const IMAGE_FOLDER_NAME = 'images/';
        return storageRef.child(IMAGE_FOLDER_NAME + name);
    },

    upload(name: string, file: File | undefined, callback: CallbackType): void {
        if (!file) {
            throw new Error('Necessary information is missing!!');
        }

        const imageRef = this.getImageRef(name);

        imageRef.put(file).then(snapshot => {
            snapshot.ref.getDownloadURL().then(downloadURL => {
                callback(downloadURL);
            });
        });
    },

    delete(name: string): void {
        const imageRef = this.getImageRef(name);
        // Delete the file
        imageRef
            .delete()
            .then(() => {
                // File deleted successfully
                console.info('File deleted successfully.');
            })
            .catch((error: any) => {
                // Uh-oh, an error occurred!
                console.error(error);
                console.error('Image name is %o', name);
            });
    }
}
