<template>
  <main>
    <div class="names text">
      <p>
        Je suis 
        <strong class="firstn">Louis</strong> 
        <strong class="lastn">Béranger</strong>
      </p>
      <p>
        Développeur bio-informaticien
      </p>
    </div>

    <p class="subtitle text">
      🏙️
      <span class="location">Lyon, France</span>
      <span class="separator">•</span>
      <a class="tel" href="tel:+33669913079">+33 6 69 91 30 79</a>
      <span class="separator">•</span>
      <a class="email" href="mailto:louis.beranger@etu.univ-lyon1.fr">louis.beranger@etu.univ-lyon1.fr</a>
    </p>

    <p class="hobby">

    </p>

    <div class="social-links">

    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    margin: 0 3rem;

    @media screen and (max-width: 994px) {
      margin: 0 1rem;
    }
  }

  .names {
    p:first-child {
      font-size: 2.7rem;
      margin: 0;

      strong {
        color: rgb(58, 127, 255);
      }

      strong:last-child {
        color: rgb(0, 79, 226);
      }
    }

    p:last-child {
      margin: 0;
      font-size: 1.8rem;
      color: rgb(117, 117, 117);
      font-weight: 300;
    }
  }

  .subtitle {
    margin: 0;
    margin-top: .5rem;
    font-size: 1.2rem;
    font-weight: 700;
    
    .tel, .email {
      color: rgb(87, 87, 255);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .location, .separator {
      color: rgb(53, 53, 53);
    }
  }
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class extends Vue {

}
</script>
