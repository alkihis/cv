<template>
  <main class="pad-main">
    <h1 class="text heading">
      Compétences
    </h1>

    <h2 class="text heading">
      Languages
    </h2>

    <div class="image-container">
      <skill-icon url="javascript.png" text="JavaScript" />
      <skill-icon url="typescript.svg" text="TypeScript" />
      <skill-icon url="python.png" text="Python" />
      <skill-icon url="php.png" text="PHP" />
      <!-- <skill-icon url="R.png" text="R" /> -->
      <skill-icon url="csharp.svg" text="C#" />
      <skill-icon url="cpp.svg" text="C++" />
      <!-- <skill-icon url="java.png" text="Java" /> -->
    </div>

    <h2 class="text heading">
      Frameworks
    </h2>

    <div class="image-container">
      <skill-icon url="react.png" text="React" />
      <skill-icon url="vue.png" text="Vue.js" />
      <skill-icon url="nuxt.png" text="Nuxt" />
      <skill-icon url="nest.png" text="Nest.js" />
      <skill-icon url="express.png" text="Express" />
      <skill-icon url="node.png" text="Node.js" />
      <skill-icon url="deno.png" text="Deno" />
      <skill-icon url="django.png" text="Django" />
      <!-- <skill-icon url="shiny.png" text="R Shiny" /> -->
    </div>

    <h2 class="text heading">
      Bases de données
    </h2>

    <div class="image-container">
      <skill-icon url="mysql.png" text="MySQL" />
      <skill-icon url="postgre.png" text="PostgreSQL" />
      <skill-icon url="couchdb.svg" text="CouchDB" />
      <skill-icon url="mongo.png" text="MongoDB" />
      <skill-icon url="rdf.png" text="Graphes RDF" />
      <skill-icon url="typeorm.png" text="TypeORM" />
    </div>

    <h2 class="text heading">
      Administration système
    </h2>

    <div class="image-container">
      <skill-icon url="bash.png" text="Bash" />
      <skill-icon url="docker.png" text="Docker" />
      <skill-icon url="debian.png" text="Debian" />
      <skill-icon url="ubuntu.png" text="Ubuntu" />
      <skill-icon url="apache.png" text="Apache" />
      <skill-icon url="gitlab.png" text="GitLab CI" />
    </div>

    <h2 class="text heading">
      Divers
    </h2>

    <div class="image-container">
      <skill-icon url="twitter.png" text="API Twitter" />
      <skill-icon url="osm.png" text="OpenStreetMap (+ Leaflet)" />
      <skill-icon url="scikit.png" text="Scikit-Learn" />
      <skill-icon url="gromacs.png" text="GROMACS" />
    </div>

    <h2 class="text heading">
      Langues
    </h2>

    <div class="image-container">
      <skill-icon url="english.png" text="Anglais (TOEIC 965 points)" />
      <skill-icon url="francais.png" text="Français (natif)" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
  h2 {
    color: rgb(20, 88, 214);
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }

  h1.heading {
    margin-top: 2rem;
  }

  .image-container {
    margin-bottom: 1.5rem;

    & > * {
      margin-right: .5rem;
      margin-bottom: .7rem;
    }

    &:last-child {
      margin-bottom: 2.5rem;
    }
  }
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SkillIcon from './SkillIcon.vue';

@Component({
  components: {
    SkillIcon,
  }
})
export default class extends Vue {

}
</script>
