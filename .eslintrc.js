module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': false,
    'no-param-reassign': [
      'error',
      {
        'ignorePropertyModificationsFor': ['state'],
      }
    ],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
