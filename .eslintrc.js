module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'settings': {
    'react': {
      'version': 'detect'
    },
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'indent': 'off',
    'react/jsx-indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-single'],
    '@typescript-eslint/indent': ["error", 2]
  }
};