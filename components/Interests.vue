<template>
  <main class="pad-main">
    <h1 class="text heading">
      Centres d'intérêt
    </h1>

    <div class="text">
      <h2>
        Informatique
      </h2>
      <p>
        Maintenance et administration de machines personnelles sous différents systèmes d'exploitation, 
        développement et participation dans la communauté JavaScript.
      </p>

      <h2>
        Transports
      </h2>
      <p>
        Infrastructures de transports collectifs ou individuels, modes doux, multi-modalité, et matériel roulant.
      </p>

      <h2>
        Urbanisme
      </h2>
      <p>
        Organisation et aménagement de l'espace urbain.
      </p>

      <h2>
        Loisirs
      </h2>
      <p>
        Randonnée, vélo, jeux vidéo, et veille technologique permanente.
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  h2 {
    color: rgb(58, 100, 179);
    font-size: 1.5rem;
    margin-bottom: .7rem;
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }

  h2 + p {
    margin: 0;
  }
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class extends Vue { }
</script>
