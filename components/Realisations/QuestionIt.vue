<template>
  <realisation-modal
    title="QuestionIt.space"
    date="Avril à Juin 2020"
    link="https://questionit.space"
  >
    <!-- 
      Actuellement, en privé
      :sources="[
        { url: 'https://github.com/alkihis/questionit.space', text: 'Client' }, 
        { url: 'https://github.com/alkihis/questionit.api', text: 'Serveur' }, 
      ]" 
    -->
    <template v-slot:details>
      <span>
        <strong>QuestionIt.space</strong> est un site web de questions/réponses destiné aux utilisateurs de Twitter, sur le modèle de 
        <a href="https://curiouscat.me" target="_blank" rel="noopener noreferrer">CuriousCat</a>.
      </span>

      <h5 class="modal-header">
        Objectifs
      </h5>

      <span>
        Créé afin de découvrir l'environnement <em>Vue.js</em>, ce projet personnel a également été motivé par la dégradation de l'expérience
        utilisateur proposée par les services concurrents (<a href="https://curiouscat.me" target="_blank" rel="noopener noreferrer">CuriousCat</a> en tête).

        <br /><br />
        L'enjeu de ce projet est de rendre accessible aux utilisateurs de Twitter un outil capable de prendre des questions d'utilisateurs anonymes ou non, 
        connectés ou non, et les présenter à un autre utilisateur donné. 
        La longueur de la question comme la réponse peut être plus longue qu'un tweet.

        <br />
        Lorsqu'un usager répond à une question, celle-ci peut être postée sur son compte Twitter avec son accord.
        Si cette réponse est elle-même une réponse à autre question, alors un <strong>thread</strong> (fil de discussion) sera créé automatiquement.
        
        <br />
        Ce même utilisateur peut suivre d'autres personnes et consulter les réponses de ses abonnés dans une page dédiée.
      </span>

      <h5 class="modal-header">
        Technologies
      </h5>
      <span>
        <strong>QuestionIt.space</strong> a été conçu avec <strong>Vue.js</strong>.
        Dans un enjeu de référencement (SEO), il a été choisi d'utiliser le système de rendu serveur <strong>Nuxt</strong>, en <strong>TypeScript</strong>,
        permettant ainsi de remplir les balises <em>meta</em>, tout en conservant un framework orienté front-end pour le rendu.

        <br />
        La base de la patte graphique du site est réalisée avec <strong>Bulma</strong>.

        <br />
        L'API est dissociée du serveur de rendu, et est réalisée avec le framework MVC <strong>Nest.js</strong>, un outil serveur inspiré
        par l'architecture d'Angular. Un ORM (<strong>TypeORM</strong>) se charge de la relation avec la base <strong>MySQL</strong>.
      </span>
    </template>
  </realisation-modal>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import RealisationModal from '../RealisationModal.vue';

@Component({
  components: {
    RealisationModal
  }
})
export default class extends Vue {}
</script>
