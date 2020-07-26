<template>
  <a class="tag-root" :href="link" target="_blank" rel="noopener noreferrer">
    <img :src="'/img/skills/' + img" :alt="text" :title="text" loading="lazy" />
    <span class="text">
      {{ text }}
    </span>
  </a>
</template>

<style lang="scss" scoped>
  .tag-root {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 14px 20px;
    background-color: #e8ebf3;
    border-radius: 25px;
    transition: background-color .3s;
    text-decoration: none;
    color: inherit;

    &:hover {
      background-color: #c7d2f0;
    }

    & > img {
      display: inline-block;
      height: 42px;
      width: auto;

      margin-right: .7rem;

      filter: grayscale(1.0);
      transition: filter .3s;
    }

    &:hover > img, &:active > img {
      filter: grayscale(0.0);
    }

    & > span {
      font-size: 1.2rem;
    }
  }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class extends Vue {
  @Prop({ required: true, type: String }) img!: string;
  @Prop({ required: true, type: String }) text!: string;
  @Prop({ required: true, type: String }) link!: string;
}
</script>
