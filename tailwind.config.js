// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d'
      },
      backgroundImage: {
        'custom-image': 'url("https://down-vn.img.susercontent.com/file/sg-11134004-7rblb-ln6wjyytbe3w27")',
        'no-product-image':
          'url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png")',
        'not-found': "url('src/assets/notFound.svg')"
      },
      screens: {
        'custom-min': '1056px',
        'custom-max': { max: '1056px' }
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      require('@tailwindcss/line-clamp'),
        addComponents({
          '.container': {
            maxWidth: theme('columns.7xl'),
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4')
          }
        })
    })
  ]
}
