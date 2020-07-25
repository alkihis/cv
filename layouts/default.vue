<template>
  <div>
    <Sidenav />
    <main class="default-root">
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #f7f7f7;
  }

  main.default-root {
    @media screen and (min-width: 1024px) {
      margin-left: 20rem;
    }
    @media screen and (max-width: 1023px) {
      padding-top: 77px;
    }
  }

  .text {
    font-family: 'Poppins', -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
  }

  .pad-main {
    margin: 0 3rem;

    @media screen and (max-width: 994px) {
      margin: 0 1rem;
    }
  }

  h1.heading {
    color: rgb(58, 127, 255);
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  h5.modal-header {
    color: rgb(20, 88, 214);
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
  }
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Sidenav from '../components/Sidenav.vue';

@Component({
  components: { Sidenav: Sidenav }
})
export default class extends Vue {}
</script>
