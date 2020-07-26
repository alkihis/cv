<template>
  <main class="pad-main">
    <h1 class="text heading">
      Réalisations
    </h1>
    <div class="text subheading">
      Professionnelles et personnelles
    </div>

    <h2 class="text heading">
      Professionnelles
    </h2>

    <div class="card-holder">
      <realisation-card 
        @click.native="onCardClick('mad')" 
        image="/img/mad.png" 
        title="MAD — MArtini Database"
        details="Conception d'une base de données de molécules gros grain et d'un outil de conversion de modèles tout atome en gros grain"
        location="CNRS-MMSB (UMR5086)"
        techs="Node.js, GROMACS, Martini, Docker"
      />

      <realisation-card 
        @click.native="onCardClick('omegatopology')" 
        image="/img/omega-topology.png" 
        title="Interactome de S. Pneumoniae"
        details="Construction du réseau d'interactions protéine-protéine de Streptococcus Pneumoniae par homologie et mise en place d'un visualiseur interactif"
        location="CNRS-MMSB (UMR5086)"
        techs="TypeScript, Stencil, D3, CouchDB"
      />

      <realisation-card 
        @click.native="onCardClick('promoapp')" 
        image="/img/promoapp.png" 
        title="Suivi des promotions bioinfo@lyon"
        details="Interface web afin de récolter des informations sur les anciens étudiants du master bio-informatique de l'Université Claude Bernard Lyon 1"
        location="CNRS-LBBE (UMR5558)"
        techs="React, Python, Flask, SQLAlchemy"
      />

      <realisation-card 
        @click.native="onCardClick('busybird')" 
        image="/img/busybird.png" 
        title="Busy Bird"
        details="Développement d'une application mobile Android afin d'assister l'étude de populations d'oiseaux sur le terrain"
        location="CNRS-LBBE (UMR5558)"
        techs="Cordova, JavaScript"
      />

      <realisation-card 
        @click.native="onCardClick('4in')" 
        image="/img/4in.png" 
        title="4IN — Innate Immunity genes In INsects"
        details="Base de données rassemblant des informations génomiques et protéiques de différentes espèces, recherche avec BLAST+"
        location="INSA-BF2I (UMR0203)"
        techs="PHP, MySQL, BLAST, jQuery"
      />

      <realisation-card 
        @click.native="onCardClick('hypergraph')" 
        image="/img/hypergraph.png" 
        title="Clôture d'hypergraphe"
        details="Amélioration de la complexité d'une fonction réalisant la clôture d'un graphe représentant des réactions chimiques"
        location="INRIA-LBBE"
        techs="C++"
      />
    </div>

    <h2 class="text heading">
      Personnelles
    </h2>

    <div class="card-holder">
      <realisation-card 
        @click.native="onCardClick('questionit')" 
        image="/img/questionit.png" 
        title="QuestionIt.space"
        details="Site web de questions-réponses destiné aux utilisateurs de Twitter"
        techs="Vue.js, Nuxt, Nest.js, TypeORM"
      />

      <realisation-card 
        @click.native="onCardClick('archiveexplorer')" 
        image="/img/archive.png" 
        title="Archive Explorer"
        details="Exploration d’archives Twitter : navigation dans les tweets, messages privés par mois, année et jour ; suppression de masse d’anciens tweets"
        techs="React, MaterialUI, MongoDB, API Twitter"
      />

      <realisation-card 
        @click.native="onCardClick('gamejam')" 
        image="/img/pingouin.png" 
        title="Penguin Corp."
        details="Conception en équipe d'un jeu vidéo de vulgarisation scientifique lors de la Scientific Game Jam 2020 de Grenoble"
        techs="Unity, C#"
      />

      <realisation-card 
        @click.native="onCardClick('github')" 
        image="/img/github.png" 
        title="Et d'autres"
        details="Découvrez mes autres petits projets (bibliothèques, outils CLI, ...) sur mon GitHub !"
        techs="Bash, Python, TypeScript, PHP..."
      />
    </div>

    <div class="text this-cv">
      <p>
        Ce CV est également un de mes projets personnels, dont vous pouvez
        <a href="https://github.com/alkihis/cv" target="_blank" rel="noopener noreferrer">retrouver le code sur mon GitHub</a>.

        <br />
        Il a été réalisé à l'aide de <strong>Vue.js et Nuxt</strong>, et est hébergé sur une machine configurée par mes soins.
      </p>
    </div>

    <Modal v-if="modal" :open="true" @close="onModalClose">
      <div class="box">
        <div v-if="type === 'mad'">
          <MAD />
        </div>
        <div v-else-if="type === 'omegatopology'">
          <omega-topology />
        </div>
        <div v-else-if="type === 'promoapp'">
          <promo-app />
        </div>
        <div v-else-if="type === 'busybird'">
          <busy-bird />
        </div>
        <div v-else-if="type === '4in'">
          <four-in />
        </div>
        <div v-else-if="type === 'hypergraph'">
          <hyper-graph />
        </div>
        <div v-else-if="type === 'questionit'">
          <question-it />
        </div>
        <div v-else-if="type === 'archiveexplorer'">
          <archive-explorer />
        </div>
        <div v-else-if="type === 'gamejam'">
          <penguin-corp />
        </div>
        <div v-else-if="type === 'github'">
          <git-hub />
        </div>
      </div>
    </Modal>
  </main>
</template>

<style lang="scss" scoped>
  main {
    width: 100%;
  }

  h1.heading + div.subheading {
    color: rgb(7, 61, 161);
    font-size: 1.3rem;
    margin-top: -.5rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: rgb(20, 88, 214);
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }

  .card-holder {
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    & > * {
      justify-self: center;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 1200px) {
      display: block;
    }
  }

  .box {
    width: 100%;
    background: white;
    padding: 18px 24px;
    border-radius: 6px;
    box-sizing: border-box;
  }

  h1.heading {
    margin-top: 2rem;
    margin-bottom: 0;
  }

  .this-cv {
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
  }
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import RealisationCard from './RealisationCard.vue';
import MAD from './Realisations/MAD.vue';
import OmegaTopology from './Realisations/OmegaTopology.vue';
import PromoApp from './Realisations/PromoApp.vue';
import BusyBird from './Realisations/BusyBird.vue';
import FourIn from './Realisations/FourIn.vue';
import HyperGraph from './Realisations/HyperGraph.vue';
import QuestionIt from './Realisations/QuestionIt.vue';
import ArchiveExplorer from './Realisations/ArchiveExplorer.vue';
import PenguinCorp from './Realisations/PenguinCorp.vue';
import GitHub from './Realisations/GitHub.vue';
import Modal from './Modal.vue';

@Component({
  components: {
    RealisationCard,
    Modal,
    MAD,
    OmegaTopology,
    PromoApp,
    BusyBird,
    FourIn,
    HyperGraph,
    QuestionIt,
    ArchiveExplorer,
    PenguinCorp,
    GitHub,
  }
})
export default class extends Vue {
  modal = false;
  type: string = '';

  onCardClick(name: string) {
    this.type = name;
    this.modal = true;
  }

  onModalClose() {
    this.modal = false;
  }
}
</script>
