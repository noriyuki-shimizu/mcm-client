export default <T>(target: T, keys: string[]): T => {
    const isValidateKey = keys.every(key =>
        Object.keys(target).includes(key)
    );

    if (!isValidateKey) {
        console.error(`
            key not found.
            keys: ${keys}
            object: ${JSON.stringify(target)}
        `);
        throw new Error('key not found.');
    }

    return keys.map(key=> ({[key]: target[key]}))
        .reduce((acc, cur) => Object.assign(acc, cur), {}) as T;
}