<template>
  <div>
    <div class="name text">
      <span class="type">{{ type }}</span> <slot name="name" />
    </div>

    <div class="year text">
      <slot name="year" /> — <span class="location"><slot name="location" /></span> 
    </div>

    <ul class="highlights" v-if="highlights.length">
      <li v-for="highlight in highlights" :key="highlight" class="highlight">
        <span class="caret">-</span> {{ highlight }}
      </li>
    </ul>  

    <div v-if="description" class="description">
      {{ description }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  ul.highlights {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li.highlight {
      font-size: 1.05rem;
      margin: .3rem 0;
      color: rgb(40, 40, 73);

      .caret {
        font-weight: 200;
      }
    }
  }

  .name {
    font-size: 1.6rem;
    
    .type {
      font-size: 1.8rem;
      font-weight: bold;
    }
  }

  .year {
    font-weight: 300;
    font-size: 1.1rem;
    margin-top: .2rem;
    margin-bottom: .5rem;
  }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) type!: string;

  @Prop({ type: Array, default: [] }) highlights!: string[];

  @Prop({ type: String, default: '' }) description!: string;
}
</script>
