module.exports = {
  root: true,
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  rules: {
    curly: 'error',
    'no-console': 'error',
    'no-shadow': 'error',
    'no-nested-ternary': 'error',
    'newline-before-return': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        noSortAlphabetically: true,
        shorthandLast: true,
        callbacksLast: true,
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/self-closing-comp': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'jsx-a11y/alt-text': 'error',
    'import/no-extraneous-dependencies': 'error',
    'indent': ['error', 2],
  },
};
