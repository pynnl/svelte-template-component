import svelte from 'rollup-plugin-svelte'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

let production = !process.env.ROLLUP_WATCH

export default {
  input: 'dev/index.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'dev/public/bundle.js'
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => css.write('dev/public/bundle.css')
    }),
    nodeResolve(),
    commonjs()
  ]
}
