module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    env: {
        'node': true
    },
    globals: {
        Promise: true,
    },
    plugins: [
        'import',
        'jsx-a11y',
        'react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    parser: 'babel-eslint',
    rules: {
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-parens': ['warn', 'always'],
        'max-len': [ 'warn', 120 ],
        'comma-dangle': [ 'warn', 'always-multiline' ],
        'semi': [ 'error', 'always' ],
        'padded-blocks': ['warn', 'never'],

        'react/prop-types': 'off',
    },
};
