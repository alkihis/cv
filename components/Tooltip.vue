<template>
  <span class="tooltip">
    <slot />

    <span class="tooltiptext">
      {{ text }}
    </span>
  </span>
</template>

<style lang="scss" scoped>
  /* Tooltip container */
  .tooltip {
    position: relative;
    display: inline-block;
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: rgba(0, 0, 0, 0.801);
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    bottom: 105%;
    left: 50%;
    margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
  
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class extends Vue {
  @Prop({ required: true, type: String }) text!: string;
}
</script>
