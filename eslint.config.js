import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
  { ignores: ['out/**', 'dist/**', 'node_modules/**', 'playwright-report/**', 'test-results/**'] },
];

export default eslintConfig;
