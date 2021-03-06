<template>
  <realisation-modal
    title="4IN - Innate Immunity genes In INsects"
    date="Septembre à Décembre 2018"
    location="BF2I (UMR0203)"
    :sources="[
      { url: 'https://github.com/alkihis/4in', text: 'Client et serveur' },
    ]"
    link="http://bf2i300.insa-lyon.fr:443/"
  >
    <template v-slot:details>
      <span>
        <strong>4IN</strong> (Innate Immunity genes In INsects) est un projet visant la création d'une base de données de gènes sur l'immunité innée des insectes.
        <br />
        Cette base permet de rechercher des gènes de l'immunité innée par voie métabolique, espèce, famille ou identifiant. Une fois les gènes trouvés,
        on peut avoir accès à sa séquence génomique et protéique, ainsi qu'à ses homologues chez différentes espèces.
      </span>

      <h5 class="modal-header">
        Enjeu
      </h5>

      <span>
        Le laboratoire BF2I a récolté au cours des années 2017 et 2018 des données génomiques issues du séquençage de plusieurs espèces, dont une en particulier
        : le charançon du riz. Des analyses ont été réalisées afin de notamment extraire les données d'homologie entre les gènes d'autres insectes et ceux du
        charançon.

        <br /><br />

        L'équipe est majoritairement composée de biologistes, qui souhaitent retrouver facilement ces gènes organisés par voie métabolique et famille, ainsi
        que pouvoir rechercher par homologie des gènes et protéines.

        <br />
        La réalisation de cette base de données prend part au sein du <strong>projet professionnalisant du premier semestre</strong> du master.
      </span>

      <h5 class="modal-header">
        Technologies employées
      </h5>
      <span>
        <strong>4IN</strong> a donc été développé tout d'abord en intégrant des données issues de fichiers <strong>FASTA</strong> et <strong>Excel (CSV)</strong>
        dans une base de données relationnelle <strong>MySQL</strong>.

        <br />
        Il a ensuite été choisi d'utiliser <strong>PHP</strong> pour concevoir le site web autour de la base de données.
        L'interface est modélisée avec le framework <strong>Materialize</strong> et rendue dynamique avec l'inclusion de scripts <strong>JavaScript</strong>.
      </span>

      <realisation-skill-icons :icons="[['php.png', 'PHP'], ['mysql.png', 'MySQL'], ['materialize.png', 'Materialize']]" />
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
