<template>
  <realisation-modal
    title="Amélioration d'une fonction de clôture d'hypergraphe"
    date="Novembre 2017"
    location="INRIA/LBBE"
  >
    <template v-slot:details>
      <span>
        Dans le cadre d'un <strong>stage de 25 heures</strong> en informatique à la fin de la licence, j'ai participé à la réécriture d'une
        fonction de “clôture d'hypergraphe” au sein d'une bibliothèque interne au LBBE/INRIA.
      </span>

      <h5 class="modal-header">
        Enjeu
      </h5>

      <span>
        Un hypergraphe est un graphe (constitué d'arêtes et de noeuds) orienté avec chaque noeud pouvant avoir des connexions vers d'autres noeuds ainsi que vers
        lui-même, en appliquant des conditions sur chaque liaison.
        Cette bibliothèque est conçue pour modéliser informatiquement des ensembles de réactions chimiques liées, comme on peut en voir en biologie notamment.

        <br />
        Au sein de cette librairie, il était possible de réaliser une clôture du graphe, c'est à dire définir quel ensemble de noeuds est accessible
        depuis un noeud donné.
        La fonction initiale ayant une complexité quadratique, l'enjeu ici était de rendre la méthode plus performante, avec une complexité linéaire.
      </span>

      <h5 class="modal-header">
        Technologies employées
      </h5>
      <span>
        La biblothèque est écrite en <strong>C++ 2011</strong>. Ce projet fut ma première utilisation du système de versionning <strong>Git</strong>,
        permettant également un travail collaboratif avec les autres membres de l'équipe.

        <br />
        Ce développement a été l'occasion de me familiariser avec les structures de données complexes de la librairie standard du language (map, deque, set et pair notamment).
      </span>

      <realisation-skill-icons :icons="[['cpp.svg', 'C++']]" />
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
