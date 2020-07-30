<template>
  <realisation-modal
    title="Busy Bird - Suivi de populations d'oiseaux"
    date="Février à Avril 2019"
    location="LBBE (UMR5558)"
    :sources="[
      { url: 'https://github.com/alkihis/busy-bird', text: 'Application et serveur' }, 
    ]"
  >
    <template v-slot:details>
      <span>
        <strong>Busy Bird</strong> est une application mobile destinée aux téléphones <strong>Android</strong> de biologistes afin d'assister le suivi de 
        populations d'oiseaux dans le parc naturel de la Chartreuse.
      </span>

      <h5 class="modal-header">
        Enjeu
      </h5>

      <span>
        Une équipe du laboratoire LBBE (Lyon) étudie les populations de Cincle Plongeur au sein du Parc Naturel de la Chartreuse (nord de Grenoble).
        L'étude consiste à relever sur fiche papier des informations anatomiques et physiologiques d'oiseaux "pucés" à l'aide d'anneaux placés sur leurs pattes.

        La prise de données régulière permet de suivre dans le temps la santé et l'évolution numérique de la population.

        <br />
        Néanmoins, la prise d'information papier est parfois compliquée. L'animal peut être manipulé durant le relevé, il faut également tenir un appareil 
        pour enregistrer les sons et filmer l'oiseau.
        
        <br />
        Une fois l'étude sur le terrain terminée, elle doit être retranscrite sur ordinateur (via Excel) pour centraliser les données.
        
        <br /><br />
        L'objectif de l'application est de proposer une manière de saisir, directement au format numérique, les informations liées aux oiseaux. 
        Il est possible aussi d'enregistrer les sons et vidéos directement depuis le téléphone, évitant le recours à des appareils externes. 
        L'application peut ensuite se synchroniser avec un serveur distant dès qu'une connexion Internet est disponible, 
        sans attendre le retour des biologistes de terrain au laboratoire.

        <br />
        Enfin, l'application propose une reconnaissance vocale sur chaque champ afin de faciliter la saisie lorsque l'examinateur tient l'oiseau.

        <br />
        La réalisation de cette application prend part au sein du <strong>projet professionnalisant du second semestre</strong> du master.
      </span>

      <h5 class="modal-header">
        Technologies employées
      </h5>
      <span>
        <strong>Busy Bird</strong> est développé avec <strong>Cordova</strong> (en <strong>TypeScript</strong> vanilla), un framework permettant de
        développer des applications mobiles avec les technologies du web.

        <br />
        La partie serveur associée à l'application est codée en <strong>PHP</strong>, <strong>MySQL</strong> assurant le stockage des données.
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
