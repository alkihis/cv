
export default {
  mode: 'universal',
  server: {
    port: 2500
  },
  /*
  ** Headers of the page
  */
  head: {
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
        content: ''
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: ''
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://louisberanger.fr/' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/all.min.css' },
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
