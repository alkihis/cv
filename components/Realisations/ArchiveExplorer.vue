<template>
  <realisation-modal
    title="Archive Explorer"
    date="Août 2019 à Janvier 2020"
    link="https://archive-explorer.com"
    :sources="[
      { url: 'https://github.com/alkihis/archive-explorer-web', text: 'Client' },
      { url: 'https://github.com/alkihis/archive-explorer-node', text: 'Serveur' },
      { url: 'https://github.com/alkihis/twitter-archive-reader', text: 'Lecteur d\'archive' },
    ]"
  >
    <template v-slot:details>
      <span>
        <strong>Archive Explorer</strong> est un service gratuit développé pour explorer simplement une archive Twitter,
        peu importe son type, et supprimer rapidement des vieux tweets.
      </span>

      <h5 class="modal-header">
        Objectifs
      </h5>

      <span>
        Poussé par l'envie de découvrir l'écosystème <em>React</em>, Archive Explorer a été l'occasion de réaliser un service “single-page app”
        capable, entièrement dans le navigateur, d'inspecter un fichier ZIP complexe et de présenter ses données de manière organisée.

        <br /><br />
        Dans un premier temps, l'outil permet de consulter les données utilisateur contenues dans l'archive, et d'accéder à ses tweets.
        Les tweets sont organisés par année puis mois, autorisant le client à remonter rapidement dans le temps.

        <br />
        Cette disposition est complétée par une recherche au sein de l'archive par expressions régulières et insensibilité à la casse,
        à laquelle s'ajoute des opérateurs de recherche (temporels ou numériques, comme le nombre de favoris).

        <br />
        Depuis l'explorateur de tweets, l'usager peut supprimer des dizaines, centaines voir milliers de tweets dans un temps très court,
        grâce à une interface simple et multi-tâche.

        <br /><br />
        Progressivement, l'outil s'est enrichi :

        <ul>
          <li>
            Exploration des favoris par mois/année, comme les tweets
          </li>
          <li>
            Affichage des données publicitaires récoltées par Twitter
          </li>
          <li>
            Navigation dans les messages privés par conversation, avec recherche rapide
          </li>
          <li>
            Statistiques sur la fréquence des posts, par mois ou de manière globale
          </li>
          <li>
            Découverte des tweets/favoris envoyés le même jour, mais les années précédentes
          </li>
          <li>
            Et d'autres...
          </li>
        </ul>
      </span>

      <h5 class="modal-header">
        Technologies
      </h5>
      <span>
        <strong>Archive Explorer</strong> est conçu côté client avec <strong>React</strong> et le framework <strong>MaterialUI</strong>.
      </span>

      <realisation-skill-icons :icons="[['react.png', 'React'], ['materialui.png', 'Material UI']]" />

      <span>
        Le serveur est codé avec <strong>Node.js</strong> et <strong>Express</strong>. Les utilisateurs et le cache de tweets sont stockés
        dans une base de données NoSQL <strong>MongoDB</strong> (via l'ORM <strong>Mongoose</strong>).

        Ce projet a permis d'utiliser le système de multi-threading de Node.js, les <strong>worker threads</strong>.

        <br />
        <strong>Socket.io</strong> est également utilisé pour suivre des tâches de suppression en temps réel.
      </span>

      <realisation-skill-icons :icons="[['node.png', 'Node.js'], ['express.png', 'Express'], ['mongo.png', 'MongoDB'], ['socketio.png', 'Socket.io']]" />
    </template>
  </realisation-modal>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import RealisationModal from '../RealisationModal.vue';
import RealisationSkillIcons from '../RealisationSkillIcons.vue';

@Component({
  components: {
    RealisationModal,
    RealisationSkillIcons,
  }
})
export default class extends Vue {}
</script>
