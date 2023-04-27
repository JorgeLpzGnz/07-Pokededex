module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
    'semi': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'comma-dangle': 'off',
    'react-native/no-inline-styles': 'off',
    'no-inline-comments': 'off',
    'line-comment-position': 'off',
    'react/self-closing-comp': ['error', {
      'component': false,
      'html': true
    }],
    'curly': 'off',
    'no-trailing-spaces': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
