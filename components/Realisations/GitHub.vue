<template>
  <realisation-modal
    title="Autres projets"
    date=""
  >
    <template v-slot:details>
      <div>
        Sur ce site sont présentées mes principaux projets, mais j'ai été impliqué dans d'autres développements au cours de mon parcours.
      </div>

      <ul>
        <li>
          <strong><code>iterator-helper</code></strong> et <strong><code>iterator-polyfill</code></strong>, des implémentations de la 
          <a href="https://github.com/tc39/proposal-iterator-helpers" target="_blank" rel="noopener noreferrer">
            proposition d'intégration de fonctionnalités pour les itérateurs</a>.
        </li>

        <li>
          <strong><code>worker-thread-manager</code></strong>, un outil pour faciliter l'utilisation des workers sur Node.js.
        </li>

        <li>
          <strong><code>interactive-cli-helper</code></strong>, une bibliothèque pour faire des CLI dans un programme Node.js lancé.
        </li>

        <li>
          L'ancienne version d'<strong>Archive Explorer</strong>, une application indépendante reposant sur une base 
          <a href="https://alkihis.fr/archive_explorer" target="_blank" rel="noopener noreferrer">Electron</a>.
        </li>

        <li>
          Un site web référençant les tweets polémiques, consituant ma première expérience avec le web, écrit majoritairement en <strong>PHP</strong>
          et avec une base interactive en <strong>JavaScript</strong> + <strong>jQuery</strong>.
        </li>
      </ul>

      <div class="github">
        Vous pouvez retrouver la plupart de ces projets sur <a href="https://github.com/alkihis" target="_blank" rel="noopener noreferrer">mon GitHub</a>.
      </div>
    </template>
  </realisation-modal>
</template>

<style lang="scss" scoped>
  .github {
    font-size: 1.1rem;
    text-align: center;

    margin: 2rem 0;
  }

  ul code {
    font-size: 1.3rem;
  }
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
