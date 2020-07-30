<template>
  <aside class="text">
    <div class="title">
      {{ title }}
    </div>

    <div class="date">
      {{ date }} 

      <span v-if="location"> 
        — {{ location }}
      </span>
    </div>

    <div class="details">
      <slot name="details" />
    </div>

    <div v-if="link" class="link">
      <a 
        :key="link" 
        :href="link" 
        rel="noopener noreferrer" 
        target="_blank" 
        class="source-link"
      >
        Accès au projet
      </a>
    </div>

    <div v-if="sources.length" class="sources">
      <span class="source">
        Source disponible :
      </span>
      <a 
        v-for="source in sources" 
        :key="source.url" 
        :href="source.url" 
        rel="noopener noreferrer" 
        target="_blank" 
        class="source-link"
      >
        {{ source.text }}
      </a>
    </div>

    <slot />
  </aside>
</template>

<style lang="scss" scoped>
  aside {
    text-align: justify;
  }
  
  .title {
    font-weight: bold;
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: .8rem;
  }

  .date {
    text-align: center;
    font-weight: 200;
    margin-bottom: 1.5rem;
  }

  .details {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .link {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .sources {
    font-weight: 200;

    .source {
      font-weight: bold;
      color: rgb(29, 29, 158);
    }

    .source-link {
      margin-left: .5rem;
      display: inline-block;
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class extends Vue {
  @Prop({ required: true, type: String }) title!: string;
  @Prop({ required: true, type: String }) date!: string;

  @Prop({ default: '', type: String }) location!: string;
  @Prop({ default: '', type: String }) link!: string;
  @Prop({ default: () => [], type: Array }) sources!: { url: string, text: string }[];
}
</script>
