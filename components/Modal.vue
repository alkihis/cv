<template>
  <div :class="{ modal: true, 'is-active': open }">
    <div class="modal-background" @click="$emit('close')"></div>
    <div :class="{ 'modal-content': !card, 'modal-card': card, 'is-large': large, 'is-flexible': flexible }">
      <slot />
    </div>
    <button 
      v-if="!card" 
      class="modal-close is-large closer" 
      aria-label="close" 
      @click="$emit('close')"
    ></button>
  </div>
</template>

<style lang="scss" scoped>
  .modal-content.is-large {
    @media screen and (min-width: 767px) {
      width: 760px;
    }
  }

  .modal-content.is-flexible {
    @media screen and (min-width: 767px) {
      max-width: 640px;
      width: auto;
    }
  }

  .closer {
    z-index: 32767;
    background-color: rgba(10, 10, 10, 0.37);
  }

  .modal-card, .modal-content {
    margin: 0 20px;
    max-height: calc(100vh - 160px);
    overflow: auto;
    position: relative;
    width: 100%;
  }

  .modal, .modal-background {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .modal-background {
    background-color: rgba(10,10,10,.86);
  }

  .modal.is-active {
    display: flex;
  }

  .modal {
    align-items: center;
    display: none;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    z-index: 40;
  }

  .is-large.delete, .is-large.modal-close {
    height: 32px;
    max-height: 32px;
    max-width: 32px;
    min-height: 32px;
    min-width: 32px;
    width: 32px;
  }

  .modal-close {
    background: none;
    height: 40px;
    position: fixed;
    right: 20px;
    top: 20px;
    width: 40px;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: rgba(10,10,10,.2);
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    pointer-events: auto;
    display: inline-block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 0;
    max-height: 20px;
    max-width: 20px;
    min-height: 20px;
    min-width: 20px;
    outline: none;
    vertical-align: top;
    user-select: none;
    margin: 0;
  }

  .modal-close:before {
    height: 2px;
    width: 50%;
  }

  .modal-close:after {
    height: 50%;
    width: 2px;
  }

  .modal-close:after, .modal-close:before {
    background-color: #fff;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center;
  }
  
  @media print, screen and (min-width: 769px) {
    .modal-card, .modal-content {
      margin: 0 auto;
      max-height: calc(100vh - 40px);
      width: 720px;
    }
  }

  @media print, screen and (min-width: 1024px) {
    .modal-card, .modal-content {
      width: 850px;
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class extends Vue {
  @Prop({ default: false })
  open!: boolean;

  @Prop({ default: false })
  large!: boolean;

  @Prop({ default: false })
  card!: boolean;

  @Prop({ default: false })
  flexible!: boolean;

  uuid = String(Math.random());

  @Watch('open')
  onOpenChange(v: boolean) {
    document.documentElement.removeAttribute('data-modal-' + this.uuid);
    
    if (v) {
      this.set();
    }
    else {
      this.cleanup();
    }
  }

  mounted() {
    if (this.open) {
      this.set();
    }
  }

  set() {
    document.documentElement.setAttribute('data-modal-' + this.uuid, '');
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
  }

  cleanup() {
    let found = false;
    for (let i = 0; i < document.documentElement.attributes.length; i++) {
      const attr = document.documentElement.attributes[i];

      if (attr.name.startsWith('data-modal-')) {
        found = true;
        break;
      }
    }

    if (!found) {
      document.documentElement.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('height');
    }
  }

  beforeDestroy() {
    if (this.open) {
      document.documentElement.removeAttribute('data-modal-' + this.uuid);
    }

    this.cleanup();
  }
}
</script>
