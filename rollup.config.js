import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

// const production = !process.env.ROLLUP_WATCH

const input = 'src/index.ts'

const output = {
  name: 'finance-math',
  format: 'umd'
}

const extensions = ['.ts']

const babelOptions = {
  extensions,
  babelrc: false,
  exclude: 'node_modules/**',
  presets: ['@babel/typescript', '@babel/env']
}

export default [
  {
    input,
    output: {
      ...output,
      file: 'dist/bundle.js'
    },
    plugins: [
      resolve({
        extensions
      }),
      babel(babelOptions)
    ]
  },
  {
    input,
    output: {
      ...output,
      file: 'dist/bundle.min.js'
    },
    plugins: [
      resolve({
        extensions
      }),
      babel({
        ...babelOptions
      }),
      terser()
    ]
  }
]
// input: input,
// output: [
//   {
//     file: 'dist/bundle.cjs.js',
//     format: 'cjs'
//   },
//   {
//     file: 'dist/bundle.esm.js',
//     format: 'esm'
//   },
//   {
//     name: 'finance-math',
//     file: 'dist/bundle.umd.js',
//     format: 'umd'
//   }
// ],
// plugins: [
//   resolve(),
//   babel({
//     exclude: 'node_modules/**'
//   }),
//   production && terser()
// ]
