import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-config-prettier';

export default withNuxt([
  prettier,
  {
    ignores: [
      'components/ui',
      'tailwind.config.ts',
      'node_modules/',
      'dist/',
      '.output/',
      '.nuxt/',
      'yarn.lock',
      '.husky/',
    ],
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'warn',
    },
  },
]);
// your custom flat configs go here, for example:
// {
//   files: ['**/*.ts', '**/*.tsx'],
//   rules: {
//     'no-console': 'off' // allow console.log in TypeScript files
//   }
// },
// {
//   ...
// }
