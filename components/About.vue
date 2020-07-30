<template>
  <main class="pad-main">
    <div class="names text">
      <p>
        <span class="iam">Je suis</span>
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
      <a class="email" href="mailto:beranger.louis.bio@gmail.com">beranger.louis.bio@gmail.com</a>
    </p>

    <p class="description text">
      Intéressé par l'étude et la compréhension des phénomènes biologiques, mon parcours universitaire a débuté avec une formation en biologie
      à l'Université de Lyon. Au cours de mes études, je me suis passionné pour la programmation et continué ma voie au sein du parcours
      bio-informatique en licence, puis en master. 

      <br /><br />
      Si la formation était majoritairement axée sur l'analyse de données génomiques, transcriptomiques et protéomiques, 
      en parallèle je me suis formé aux technologies du web en autodidacte par de multiples projets personnels, 
      ainsi j'ai enrichi cette expérience durant les différents stages et projets dans le cadre de ma formation.
    </p>

    <div class="social-links">
      <about-tag link="https://www.linkedin.com/in/louis-b%C3%A9ranger-52815a178/" img="linkedin.png" text="LinkedIn" /> 
      <about-tag link="https://github.com/alkihis" img="github.svg" text="GitHub" /> 
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .names {
    margin-top: 1rem;

    p:first-child {
      font-size: 2.7rem;
      margin: 0;

      .iam {
        font-size: 90%;
      }

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

  .description {
    margin-top: 2rem;
  }

  .social-links {
    margin-top: 2rem;
    margin-bottom: 2rem;

    & > * {
      margin-right: .7rem;
    }
  }
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AboutTag from './AboutTag.vue';

@Component({
  components: {
    AboutTag,
  }
})
export default class extends Vue {

}
</script>
