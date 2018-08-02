const pkg = require('./package')

require('dotenv').config()

const axios = require("axios")


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Lora' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: "https://api.tipe.io/api/v1",
  },

  /*
  ** Add environment variables
  */
  env: {
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
  ** Generate urls
  */
  generate: {
    routes: async function () {
      const instance = axios.create({
        baseURL: 'https://api.tipe.io/api/v1',
        headers: {
          Authorization: process.env.API_KEY,
          "Tipe-Id": process.env.SECRET_KEY,

        }
      });
      const response = await instance.get('/folder/5b54c88a9515380013402617')
      return response.data.documents.map(val => {
        return {
          route: `/${val.id}`,
          payload: val
        }
      })
    }
  }


}
