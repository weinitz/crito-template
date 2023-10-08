import { defineConfig } from 'vite';
import vituum from 'vituum'
import posthtml from '@vituum/vite-plugin-posthtml'
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          'main.scss': 'src/scss'
        }
      }
    }), posthtml({
      root: './src'
    }), stylelint({
      // recommend to enable auto fix
      include: ['src/**/*.{css,vue,pcss,scss}'],
      exclude: ['node_modules'],
      lintOnStart: false,
      emitErrorAsWarning: true
    })
  ],
  build: {
    outDir: '../dist'
  }
})


/*
export default defineConfig({
  resolve: {
    alias: {
      // dLägg till dina alias här
      //   'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//      'rfs': path.resolve(__dirname, 'node_modules/rfs')
    }
  },
  server: {
    open: '/index.html'
  },
  build: {
    outDir: '../dist'
  },
  root: 'src',
  plugins: [
    vituum(), posthtml({
      root: './src'
    })
  ]
});
*/
