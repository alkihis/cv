
export default {
  target: 'static',
  server: {
    port: 2500
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'Louis Béranger - Développeur bio-informaticien',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Développeur bio-informatique spécialisé dans la conception de bases de données et outils web, utilisant des solutions modernes tel que React ou Vue.js.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'fr_FR'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://louisberanger.fr'
      },
      {
        hid: 'og:title',
        property: 'og:tile',
        content: 'Louis Béranger - Développeur bio-informaticien'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: ''
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Développeur bio-informatique spécialisé dans la conception de bases de données et outils web, utilisant des solutions modernes tel que React ou Vue.js.'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://louisberanger.fr'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Louis Béranger - Développeur bio-informaticien'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'Développeur bio-informatique spécialisé dans la conception de bases de données et outils web, utilisant des solutions modernes tel que React ou Vue.js.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'img/icons/icon-512x512.png'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'img/icons/icon-512x512.png'
      },
      { name: 'theme-color', content: '#0c6ebb' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', sizes: '256x256', href: '/favicon.ico' },
      { rel: 'image_src', href: 'img/icons/icon-512x512.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'img/icons/icon-72x72.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'img/icons/icon-96x96.png' },
      { rel: 'apple-touch-icon', sizes: '96x96', href: 'img/icons/icon-96x96.png' },
      { rel: 'apple-touch-icon', sizes: '128x128', href: 'img/icons/icon-128x128.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'img/icons/icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'img/icons/icon-152x152.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'img/icons/icon-192x192.png' },
      { rel: 'apple-touch-icon', sizes: '192x192', href: 'img/icons/icon-192x192.png' },
      { rel: 'apple-touch-icon', sizes: '384x384', href: 'img/icons/icon-384x384.png' },
      { rel: 'apple-touch-icon', sizes: '512x512', href: 'img/icons/icon-512x512.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'canonical', href: 'https://louisberanger.fr/' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/components',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
