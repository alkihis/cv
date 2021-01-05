<template>
  <p>
    <skill-icon v-for="icon in icons" :key="icon[0]" :url="icon[0]" :text="icon[1]" />
  </p>
</template>

<style lang="scss" scoped>
  p {
    text-align: center;

    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import SkillIcon from './SkillIcon.vue';

@Component({
  components: { SkillIcon },
})
export default class extends Vue {
  @Prop({ required: true, type: Array }) icons!: [string, string][];
}
</script>
