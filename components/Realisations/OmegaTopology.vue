<template>
  <realisation-modal
    title="Interactome de Streptococcus Pneumoniae"
    date="Avril à Août 2019"
    location="MMSB (UMR5086)"
    :sources="[
      { url: 'https://github.com/glaunay/omega-topology', text: 'Client' },
      { url: 'https://github.com/glaunay/omega-topology-fullstack', text: 'Bibliothèque' },
      { url: 'https://github.com/glaunay/omega-topology-service', text: 'Gestionnaire d\'interactome' },
      { url: 'https://github.com/glaunay/omega-topology-uniprot', text: 'Micro-service UniProt' },
      { url: 'https://github.com/glaunay/omega-topology-taxonomy', text: 'Micro-service de taxonomie' },
      { url: 'https://github.com/glaunay/omega-topology-MIontology', text: 'Micro-service d\'ontologie' },
      { url: 'https://github.com/glaunay/omega-deploy', text: 'Déploiement' },
    ]"
  >
    <template v-slot:details>
      <span>
        L'explorateur d'interactome de Streptococcus Pneumoniae, appelé OmegaTopology, a été construit lors de mon stage de master 1.
        Il permet d'observer les interactions entre groupes de protéines obtenues par homologie,
        et de récupérer des informations sur les protéines concernées via
        une interface se présentant comme un graphe en trois dimensions.
      </span>

      <h5 class="modal-header">
        Enjeu
      </h5>

      <span>
        En biologie, il est très commun d'avoir recours à des informations sur les interactions entre deux ou plusieurs protéines.
        Ces interactions permettent de comprendre ou déduire des mécanismes biologiques s'effectuant au niveau de l'emplacement des protéines impliquées.

        <br />
        Cependant, observer l'interaction entre plusieurs protéines expérimentalement reste encore difficile. Les données
        en notre possession ne permettent pas de couvrir la majorité des espèces.

        <br />
        Pour pallier à ce manque d'informations, il peut être intéressant de partir d'un organisme partiellement connu et d'utiliser l'homologie entre
        protéines (au niveau de la séquence, par exemple) afin de trouver si des <strong>homologues</strong> interagissent dans d'autres espèces proches.

        <br /><br />
        Ce cas a donc été appliqué à S. Pneumoniae. Une interface graphique web a été conçue pour explorer les données obtenues.
        Celle-ci représente les interactions sous la forme d'un graphe, où un noeud représente une protéine (identifiée par son ID
        <a href="https://www.uniprot.org/UniProt" target="_blank" rel="noopener noreferrer">UniProt</a>) et une arête une ou plusieurs interactions
        qui sont montrées de façon expérimentale.
      </span>

      <h5 class="modal-header">
        Technologies employées
      </h5>
      <span>
        <strong>OmegaTopology</strong> est développé avec le pseudo-framework <strong>Stencil</strong> et <strong>Bootstrap</strong>,
        le graphe est dessiné à l'aide de <strong>d3</strong>.
      </span>

      <realisation-skill-icons :icons="[['stencil.png', 'Stencil'], ['bootstrap.png', 'Bootstrap'], ['d3.png', 'd3']]" />

      <span>
        L'obtention des nombreuses données nécessaires pour construire et filtrer le graphe (interactions, protéines, espèces, fonctions protéiques)
        a été déléguée plusieurs micro-services conçus lors du stage (en <strong>Node.js</strong> et <strong>Python</strong>) où chacun assure sa tâche associée.
        <br />
        Les données sont stockées dans une base <strong>CouchDB</strong> hébergée à l'IBCP.
      </span>

      <realisation-skill-icons :icons="[['node.png', 'Node.js'], ['python.png', 'Python'], ['couchdb.svg', 'CouchDB']]" />
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
