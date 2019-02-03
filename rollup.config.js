import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/web/index.js',
    format: 'iife',
    name: 'styled'
  },
  plugins: [
      typescript()
  ]
}