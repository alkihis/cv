<template>
  <realisation-modal
    title="Penguin Corp."
    date="7 au 9 Février 2020"
    link="https://axsiow.itch.io/les-pingouins"
    :sources="[
      { url: 'https://github.com/alkihis/GameJam', text: 'Jeu vidéo' }, 
    ]" 
  >
    <template v-slot:details>
      <span>
        <strong>Penguin Corp.</strong> est un jeu vidéo humoristique réalisé en équipe lors de la Scientific Game Jam de Grenoble 2020.
      </span>

      <h5 class="modal-header">
        Principe
      </h5>

      <span>
        Le jeu fait prendre place dans la peau d'un jeune chef d'entreprise venant de racheter une société. Il doit faire des
        choix pour faire correspondre ses actions avec la culture d'entreprise tout en ne dégradant pas ses relations avec
        les salariés.

        <br />
        Ce projet est en relation avec une thèse de sciences sociales portant sur la reprise d'entreprise.
      </span>

      <h5 class="modal-header">
        Technologies
      </h5>
      <span>
        <strong>Penguin Corp.</strong> a été développé avec le moteur <strong>Unity</strong> et son langage de prédilection <strong>C#</strong>.

        <br />
        Il a consisté en ma première expérience avec ce langage fortement typé différent des langages du web.
        Durant la GameJam, j'ai occupé le poste de développeur, et ai participé à la mise en place du menu ainsi que du système de dialogue au sein du jeu.
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
