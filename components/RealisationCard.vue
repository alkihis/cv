<template>
  <article>
    <div class="img-main" :style="image_style"></div>

    <div class="description text">
      <div class="title">
        {{ title }}
      </div>

      <div class="details desktop">
        <span v-if="location" class="location">
          {{ location }} —
        </span>
        {{ details }}
      </div>

      <div class="details mobile">
        <div v-if="location" class="location">
          {{ location }}
        </div>
        <div>
          {{ details }}
        </div>
      </div>

      <div v-if="techs" class="techs">
        {{ techs }}
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  article {
    border: 1px solid rgb(204, 204, 204);
    background-color: rgb(253, 253, 253);
    border-radius: 4px;
    box-shadow: -2px 2px 4px #0000002e;
    transition: background-color .2s, color .2s;

    width: 28vw;
    max-width: 500px;

    &:hover {
      background-color: rgb(61, 123, 255);
      color: white;
      cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
      margin: auto;
    }

    @media screen and (max-width: 998px) {
      width: 66vw;
      max-width: 700px;
    }

    @media screen and (max-width: 600px) {
      width: 80vw;
      max-width: 700px;
    }
  }

  div.img-main {
    width: 100%;
    height: 250px;
    max-height: 30vh;
    margin: auto;
    background-position: center;
    background-size: cover;
    border-radius: 2px;
  }

  h4 {
    color: rgb(46, 95, 187);
    font-size: 1.2rem;
    margin-bottom: .5rem;
    margin-top: 0;
  }

  .description {
    padding: 18px;

    .title {
      text-align: center;
      font-weight: bold;
      font-size: 1.1rem;
    }

    .details.mobile {
      display: none;
    }

    .details {
      text-align: justify;
    }

    @media screen and (max-width: 998px) {
      .details.mobile {
        display: block;
      }

      .details.desktop {
        display: none;
      }
    }

    .details.mobile .location, .techs {
      text-align: center;
    }

    .location, .techs {
      font-weight: 200;
    }

    .techs {
      margin-top: .5rem;
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class extends Vue {
  @Prop({ required: true, type: String }) image!: string;
  @Prop({ required: true, type: String }) title!: string;
  @Prop({ required: true, type: String }) details!: string;
  @Prop({ default: '', type: String }) location!: string;
  @Prop({ type: String, default: null }) techs!: string | null;

  get image_style() {
    return { 'background-image': 'url(' + this.image + ')' };
  }
}
</script>
