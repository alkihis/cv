<template>
  <realisation-modal
    title="Contribution au développement d'un LIMS"
    date="Octobre 2020 à Janvier 2021"
    location="BIOASTER (Lyon)"
  >
    <template v-slot:details>
      <span>
        Un LIMS <strong>(Laboratory Information Management System)</strong> est un outil visant à tracer les données des expériences se
        déroulant dans les laboratoires d'un institut de recherche.
        Au sein de BIOASTER, un logiciel de ce type est développé en interne pour leurs propres usages, et est maintenu par l'équipe xDATA, responsable des
        activités gravitant autour des données (généralement biologiques) générées par l'Institut.
      </span>

      <h5 class="modal-header">
        Missions
      </h5>

      <span>
        Dans une petite équipe de deux développeurs web, j'étais chargé d'assurer diverses tâches afin de faire vivre l'outil :

        <ul>
          <li>
            Concevoir un "audit trail" : une manière automatique d'enregistrer chaque action de chaque utilisateur dans la base de données.
            Cette fonctionnalité a été ma réalisation principale au sein de l'équipe, et a été intégré à l'outil en production.
          </li>

          <li>
            Traiter les retours utilisateurs : une des forces de l'outil est sa conception en interne, assurant une grande modularité en fonction
            des besoins à un instant T des utilisateurs.
            <br />
            Si le traitement des retours débute par la correction de bugs (administrée via une plateforme de ticketing), il s'étend également
            au développement de nouvelles fonctionnalités suivant les besoins des projets de BIOASTER.
          </li>

          <li>
            Préparer les nouvelles versions de l'outil : suivant des guidelines fixées avec le Lead Developer,
            et matérialisées par des tickets Redmine, j'étais en charge de la programmation de nouvelles fonctionnalités.
            <br />
            Une fois celles-ci développées, elles étaient complétées par des tests unitaires et end-to-end,
            puis validées par le second développeur de l'équipe.
          </li>

          <li>
            La mise en production, sur deux machines distinctes : une machine de développement,
            pour tester les nouvelles fonctionnalités, et la machine de production.
          </li>
        </ul>

        Ces différentes activités étaient complétées par un module d'intégration continue <strong>GitLab</strong>,
        chargée d'exécuter les tests unitaires de l'application à chaque <em>push</em>
        dans un conteneur <strong>Docker</strong> que j'ai eu l'occasion de manipuler.
      </span>

      <realisation-skill-icons :icons="[['gitlab.png', 'GitLab CI'], ['docker.png', 'Docker']]" />

      <h5 class="modal-header">
        Technologies
      </h5>
      <section>
        <span>
          Le projet est conçu avec <strong>Django</strong>, un framework <strong>Python</strong>.
        </span>

        <realisation-skill-icons :icons="[['django.png', 'Django'], ['python.png', 'Python']]" />

        <span>
          Il est complété par des bibliothèques JavaScript : <strong>jQuery</strong>, <strong>Muuri</strong> ou encore <strong>datatables.js</strong>.

          L'utilisation de <strong>Django</strong> m'a permis de découvrir un autre ORM, très puissant, contenu dans le framework.

          <br />
          Le côté graphique de l'application a été conçu avec <strong>MDB (Material Bootstrap)</strong>, et est complété par des figures réalisées avec
          <strong>Chart.js</strong> et <strong>d3</strong>.
        </span>

        <realisation-skill-icons :icons="[['jquery.png', 'jQuery'], ['d3.png', 'd3'], ['bootstrap.png', 'Bootstrap']]" />
      </section>
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
