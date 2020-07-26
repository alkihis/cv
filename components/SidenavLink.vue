<template>
  <a :href="'#' + to" @click.prevent="scroll" :class="{ 'nav-link': true, 'text': true, 'highlighted': highlighted }">
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

    &:hover, &.highlighted:hover {
      color: rgb(187, 183, 226);
    }

    @media screen and (min-width: 1024px) {  
      &.highlighted {
        color: rgb(183, 175, 255);
      }
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

  @Prop({ default: false, type: Boolean })
  highlighted!: boolean;

  scroll() {
    const target = document.getElementById(this.to);

    if (target) {
      const offset = target.offsetTop + 1;
      const is_mobile = window.innerWidth < 1024;

      scrollIt(offset - (is_mobile ? 77 : 0), 500, 'easeInOutQuart');
    }
  }
}
</script>
