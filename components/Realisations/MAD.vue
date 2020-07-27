<template>
  <realisation-modal
    title="MAD — MArtini Database"
    date="Janvier à Juin 2020"
    location="MMSB (UMR5086)"
    :sources="[
      { url: 'https://github.com/MMSB-MOBI/martinize-db-client', text: 'Client' }, 
      { url: 'https://github.com/MMSB-MOBI/martinize-db', text: 'Serveur' }
    ]"
  >
    <template v-slot:details>
      <span>
        MArtini Database est une base de données plurifonctionnelle permettant 
        <strong>d'archiver, versionner, créer et utiliser des molécules gros grain</strong>.
      </span>

      <h5 class="modal-header">
        Enjeu
      </h5>

      <span>
        En dynamique moléculaire, on cherche à prévoir ou expliquer des comportements observés expérimentalement
        au niveau moléculaire, comme une association protéine-ligand ou le déplacement de protéine au sein d'une membrane biologique.
        Une technique développée au cours du siècle dernier est la simulation. Celle-ci se base sur des modèles de molécules,
        originellement “non simplifiés”, appelés tout atome, tirés de fichiers
        <a href="https://www.rcsb.org/" rel="noopener noreferrer" target="_blank">PDB</a>
        et obtenus depuis des données expérimentales, de RMN, cristallographie ou Cryo-EM.

        <br />

        Ces modèles, généralement fiables et créés par des experts des molécules considérées, peuvent être convertis manuellement
        en modèles gros grain par ces mêmes experts. 
        Une molécule gros grain est une manière de “simplifier” des ensembles d'atomes en une seule particule afin d'accélérer les simulations.

        <br /><br />

        Afin de partager les connaissances expérimentales apportées dans la création de ces modèles, il était nécessaire d'offrir aux chercheurs 
        un ensemble d'outils pour construire des simulations rapidement :

        <ul>
          <li>
            Un système centralisé pour déposer leurs créations et obtenir celles produites par d'autres équipes
          </li>
          <li>
            Une interface graphique simple pour convertir un modèle tout atome en modèle gros grain
          </li>
          <li>
            Un outil graphique pour construire des systèmes couramment étudiés : des membranes lipidiques
          </li>
        </ul>

      </span>

      <h5 class="modal-header">
        Technologies employées
      </h5>
      <span>
        <strong>MArtini Database</strong> apporte une réponse à ces trois problèmes au travers d'un site web interactif,
        écrit en <strong>React</strong> et <strong>MaterialUI</strong> pour sa partie client, et <strong>Node.js</strong>
        associé à <strong>Express</strong> pour sa partie serveur. 

        <br />
        
        Les données sont stockées dans une base <strong>CouchDB</strong> hébergée à l'IBCP.

        <br />
        Le service demandant plusieurs outils (<strong>GROMACS, Martinize et INSANE</strong>) pour notamment convertir les molécules, il a été mis dans un conteneur <strong>Docker</strong>
        déployable sur n'importe quel machine.
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