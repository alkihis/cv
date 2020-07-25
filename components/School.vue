<template>
  <main class="pad-main">
    <h1 class="text heading">
      Parcours
    </h1>

    <timed-element 
      class="master" 
      type="Master"
      :highlights="[
        'Programmation web', 
        'Analyse de données génomiques : Assemblage, séquençage', 
        'Apprentissage automatique', 
        'Algorithmie, programmation orientée objet'
      ]"
    >
      <template v-slot:name>
        Bio-informatique moléculaire : Méthodes et analyses
      </template>
      <template v-slot:year>
        2018-2020
      </template>
      <template v-slot:location>
        Université Lyon 1
      </template>
    </timed-element>

    <timed-element  
      class="licence" 
      type="Licence"
      :highlights="['Biologie cellulaire', 'Biostatistiques']"
    >
      <template v-slot:name>
        Biologie, Informatique, Statistique et Modélisation
      </template>
      <template v-slot:year>
        2015-2018
      </template>
      <template v-slot:location>
        Université Lyon 1
      </template>
    </timed-element>
  </main>
</template>

<style lang="scss" scoped>
  .master {
    margin-bottom: 2rem;
  }
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TimedElement from './TimedElement.vue';

@Component({
  components: {
    TimedElement
  }
})
export default class extends Vue {

}
</script>
