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
        Cela consiste à relever sur des fiches papier des informations anatomiques et physiologiques à propos d'oiseaux "pucés" à l'aide d'anneaux placés sur leurs pattes.

        <br />

        Cette prise de données régulière permet de suivre dans le temps l'évolution de la population au sein de plusieurs nichoirs, lieu de vie des oiseaux.

        <br />
        Néanmoins, la prise d'information papier est parfois compliquée (manipulation de l'animal en simulatané), nécessite tout de même un appareil pour enregistrer
        des sons et vidéos de l'animal, et devra être retranscrite sur ordinateur plus tard (via Excel) pour centraliser les données.
        
        <br /><br />
        L'objectif de l'application est donc de proposer une manière de saisir, directement en numérique, les informations liées aux oiseaux. 
        En outre, il est possible d'enregistrer les sons et vidéos directement depuis un formulaire sur le téléphone, évitant le recours à d'autres appareils. 
        L'application peut ensuite se synchroniser avec un serveur distant dès qu'une connexion Internet est disponible, sans attendre le retour des biologistes de terrain.

        <br />
        Enfin, l'application propose une reconnaissance vocale pour chacun des champs afin de faciliter la saisie lorsque l'examinateur tient l'oiseau.

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
        La partie serveur associée à l'application est elle codée en <strong>PHP</strong> et <strong>MySQL</strong> pour le stockage des données.
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
