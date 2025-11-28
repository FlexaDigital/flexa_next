module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    'react/jsx-no-comment-textnodes': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn'
  },
};
