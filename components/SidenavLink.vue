<template>
  <a :href="'#' + to" @click.prevent="scroll" class="nav-link text">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
  .nav-link {
    color: white;
    transition: color .2s;
    text-decoration: none;
    font-size: 1.4rem;
    margin: .5rem 0;
    font-weight: 300;

    &:hover {
      color: rgb(187, 183, 226);
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { scrollIt } from '../helpers';

@Component({
  components: {}
})
export default class extends Vue {
  @Prop({ required: true, type: String })
  to!: string;

  scroll() {
    const target = document.getElementById(this.to);

    if (target) {
      const offset = target.offsetTop;
      const is_mobile = window.innerWidth < 1024;

      scrollIt(offset - (is_mobile ? 77 : 0), 500, 'easeInOutQuart');
    }
  }
}
</script>
