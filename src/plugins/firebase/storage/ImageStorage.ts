import * as Filebase from 'firebase/app';

const getImageRef = (name: string) => {
    const storageRef = Filebase.storage().ref();

    if (!name) {
        throw new Error('ImageStorage instance feild.');
    }

    const IMAGE_FOLDER_NAME = 'images/';
    return storageRef.child(IMAGE_FOLDER_NAME + name);
};

const upload = async (name: string, file: File | undefined): Promise<string> => {
    if (!file) {
        throw new Error('Necessary information is missing!!');
    }

    const imageRef = getImageRef(name);

    const snapshot = await imageRef.put(file);
    const downloadURL: string = await snapshot.ref.getDownloadURL();

    return downloadURL;
};

const deleteImage = (name: string): void => {
    const imageRef = getImageRef(name);
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
};

export default {
    upload,
    deleteImage,
}