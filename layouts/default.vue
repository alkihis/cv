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
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Sidenav from '../components/Sidenav.vue';

@Component({
  components: { Sidenav: Sidenav }
})
export default class extends Vue {}
</script>
