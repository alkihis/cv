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
        L'outil <strong>promos@bioinfo</strong> est une interface permettant à l'équipe pédagogique du master bio-informatique de Lyon de solliciler et rassembler
        des informations sur l'expérience professionnelle et scientifique des anciens étudiants.
      </span>

      <h5 class="modal-header">
        Enjeu
      </h5>

      <span>
        À la suite de leur réussite au diplôme du Master Bio-informatique, il est intéressant pour l'équipe pédagogique de suivre les anciens étudiants. 

        <br />
        Le premier but est statistique, le ministère de l'Ensignement Supérieur et de la Recherche demandant régulièrement des informations sur l'avenir
        des étudiants afin de juger l'efficacité de la formation.
        <br />
        Le second objectif est de constituer un "carnet d'adresses" aux étudiants actuellement en formation qui pourront contacter non seulement les précédents étudiants
        mais également leurs employeurs, si ils sont renseignés.

        <br /><br />
        Initialement, un site web très simple permettait de récupérer ces informations, et il a été décidé d'étendre les possibilités de cet outil avec ce projet.
        La réalisation de cette base de données prend part au sein du <strong>projet professionnalisant du troisième semestre</strong> du master.
      </span>

      <h5 class="modal-header">
        Technologies employées
      </h5>
      <span>
        <strong>promos@bioinfo</strong> est développé avec <strong>React</strong> en <strong>TypeScript</strong> côté front-end, 
        afin de garantir le dynamisme et l'ergonomie de l'interface qui doit se
        vouloir au plus simple possible, pour ne pas décourager les anciens étudiants de saisir leurs informations.

        <br />
        La partie serveur est construite à l'aide de <strong>Python</strong> avec le framework <strong>Flask</strong>, associée à une base <strong>SQLite</strong>
        dont la communication se fait au travers de l'ORM <strong>SQLAlchemy</strong>.
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
