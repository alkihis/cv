<template>
  <div>
    <page-holder id="about">
      <About />
    </page-holder>

    <page-holder id="school">
      <School />
    </page-holder>

    <page-holder id="skills">
      <Skills />
    </page-holder>

    <page-holder id="center-of-interests">
      <Interests />
    </page-holder>

    <page-holder id="contact">
      <Contact />
    </page-holder>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import About from '../components/About.vue';
import School from '../components/School.vue';
import Skills from '../components/Skills.vue';
import Interests from '../components/Interests.vue';
import Contact from '../components/Contact.vue';

@Component({
  components: {
    About,
    School: School,
    Skills: Skills,
    Interests: Interests,
    Contact: Contact,
  }
})
export default class extends Vue {

}
</script>

