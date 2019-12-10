import * as Filebase from 'firebase/app';

const getImageRef = (name: string) => {
    const storageRef = Filebase.storage().ref();

    if (!name) {
        throw new Error('ImageStorage instance feild.');
    }

    const IMAGE_FOLDER_NAME = 'images/';
    return storageRef.child(IMAGE_FOLDER_NAME + name);
};

const upload = async (file: File | undefined): Promise<string> => {
    if (!file) {
        throw new Error('Necessary information is missing!!');
    }

    const imageRef = getImageRef(file.name);

    const snapshot = await imageRef.put(file);
    const downloadURL: string = await snapshot.ref.getDownloadURL();

    return downloadURL;
};

const deleteImage = async (name: string): Promise<void> => {
    const imageRef = getImageRef(name);
    imageRef
        .delete()
        .catch((error: any) => {
            throw error;
        });
};

export default {
    upload,
    deleteImage,
}