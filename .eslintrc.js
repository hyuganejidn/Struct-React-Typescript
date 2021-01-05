module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
    // project: './tsconfig.json',
  },

  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'prettier/prettier': [
      1,
      {
        arrowParens: 'avoid',
        semi: false,
        trailingComma: 'none',
        endOfLine: 'lf',
        singleQuote: true,
        tabWidth: 2,
        printWidth: 80,
        useTabs: false,
      },
    ],
    omitLastInOneLineBlock: 0,
    beforeStatementContinuationChars: 0,
    'no-console': 0,
    'object-curly-spacing': [1, 'always'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    '@typescript-eslint/no-unused-vars': [0, { vars: 'all', args: 'none' }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/jsx-boolean-value': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'react/destructuring-assignment': 0,
    'linebreak-style': 0,
    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-variable': [0, { 'ignore-pattern': '^_' }],
    // 'import/no-extraneous-dependencies': [
    //   2,
    //   {
    //     devDependencies: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx', 'src/tests/**/*'],
    //   },
    // ],
    // 'import/extensions': [2, 'ignorePackages', { ts: 'never', tsx: 'never' }],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      typescript: {},
    },
  },
  globals: {
    arguments: true,
  },
}
// https://www.carlrippon.com/creating-react-and-typescript-apps-with-webpack/
// https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
