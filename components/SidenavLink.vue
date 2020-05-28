<template>
  <a :href="'#' + to" @click.prevent="scroll" class="nav-link">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
  .nav-link {
    
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class extends Vue {
  @Prop({ required: true, type: String })
  to!: string;

  scroll() {

  }
}
</script>
