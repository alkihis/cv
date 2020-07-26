<template>
  <Tooltip :text="text">
    <img :src="'/img/skills/' + url" :alt="text" :title="text" loading="lazy" />
  </Tooltip>
</template>

<style lang="scss" scoped>
  img {
    display: inline-block;
    height: 64px;
    width: auto;
    cursor: pointer;

    filter: grayscale(1.0);
    transition: filter .3s;

    &:hover, &:active {
      filter: grayscale(0.0);
    }
  }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class extends Vue {
  @Prop({ required: true, type: String }) url!: string;
  @Prop({ required: true, type: String }) text!: string;
}
</script>
