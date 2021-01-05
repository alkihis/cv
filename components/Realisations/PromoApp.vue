<template>
  <realisation-modal
    title="Suivi des promotions du master bio-informatique de Lyon"
    date="Septembre à Décembre 2019"
    location="LBBE (UMR5558)"
    :sources="[
      { url: 'https://github.com/alkihis/promo-app-client', text: 'Client' },
      { url: 'https://github.com/alkihis/promo-app-server', text: 'Serveur' },
    ]"
  >
    <template v-slot:details>
      <span>
        L'outil <strong>promos@bioinfo</strong> est une interface permettant à l'équipe pédagogique du master bio-informatique de Lyon de solliciter et rassembler
        des informations sur l'expérience professionnelle et scientifique des anciens étudiants.
      </span>

      <h5 class="modal-header">
        Enjeu
      </h5>

      <span>
        Suivre les anciens étudiants après leur parcours en master présente plusieurs intérêts.

        <br />
        Le premier but est d'ordre statistique, le ministère de l'Enseignement Supérieur et de la Recherche demande régulièrement des informations sur le devenir
        des étudiants pour évaluer l'efficacité de la formation.
        <br />
        Le second objectif est de constituer un "carnet d'adresses" pour les étudiants actuellement en formation qui pourront contacter à la fois
        les précédents étudiants et aussi leurs employeurs.

        <br /><br />
        Un site web très simple existait déjà, mais il a été décidé d'étendre les possibilités de cet outil avec ce projet.
        La réalisation de cette base de données prend part au sein du <strong>projet professionnalisant du troisième semestre</strong> du master.
      </span>

      <h5 class="modal-header">
        Technologies employées
      </h5>
      <span>
        <strong>promos@bioinfo</strong> est développé avec <strong>React</strong> en <strong>TypeScript</strong> côté front-end,
        pour garantir le dynamisme et l'ergonomie de l'interface qui doit être le plus simple possible,
        afin de ne pas décourager les anciens étudiants de saisir leurs informations.
      </span>

      <realisation-skill-icons :icons="[['react.png', 'React'], ['typescript.svg', 'TypeScript']]" />

      <span>
        La partie serveur est construite à l'aide de <strong>Python</strong> avec le framework <strong>Flask</strong>, associée à une base <strong>SQLite</strong>
        dont la communication se fait au travers de l'ORM <strong>SQLAlchemy</strong>.
      </span>

      <realisation-skill-icons :icons="[['python.png', 'Python'], ['flask.png', 'Flask'], ['sqlite.png', 'SQLite']]" />
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
