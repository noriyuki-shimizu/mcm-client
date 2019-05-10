import * as Filebase from 'firebase/app';
import 'firebase/storage';

type CallbackType = (arg: string) => void;

export default abstract class Storage {
    protected storageRef: Filebase.storage.Reference;

    constructor() {
        this.storageRef = Filebase.storage().ref();
    }

    public abstract upload(callback: CallbackType): void;
    public abstract delete(): void;
}
