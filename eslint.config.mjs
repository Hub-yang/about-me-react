// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  formatters: true,
  excludes: ['./src/components/LetterGlitch.tsx'],
})
