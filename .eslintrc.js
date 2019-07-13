module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'typescript',
        'plugin:vue/recommended',
    ],
    plugins: [
        'vue',
    ],
    settings: {
        'import/resolver': {
            'alias': [
                ['~', __dirname],
            ],
        },
    },
    globals: {},
    rules: {},
}