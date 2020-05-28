<template>
  <aside>
    <!-- Nom prénom image -->
    <div class="header">
      <img class="profile-picture" src="/img/profile.jpg" alt="Photo de profil - Louis Béranger" />

      <div class="names text">
        <span class="first-name">Louis</span>
        <span class="last-name">Béranger</span>
      </div>
    </div>
    <div :class="{ 'mobile-header': true, 'open': open }">
      <span class="first-name">Louis</span>
      <span class="last-name">Béranger</span>

      <!-- Mobile toggle button -->
      <span class="open-button" @click="toggle" data-toggle-stopper>
        <i class="fas fa-bars"></i>
      </span>
    </div>

    <!-- Liens -->
    <div class="links" :data-mobile-open="open">
      <sidenav-link to="about">
        À Propos
      </sidenav-link>

      <sidenav-link to="school">
        Parcours
      </sidenav-link>

      <sidenav-link to="skills">
        Compétences
      </sidenav-link>

      <sidenav-link to="center-of-interests">
        Centres d'intérêt
      </sidenav-link>

      <sidenav-link to="contact">
        Contact
      </sidenav-link>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .names {
      margin-top: .5rem;
      font-size: 1.5rem;
    }

    .profile-picture {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      margin-top: 10vh;

      border: 6px rgba(255, 255, 255, 0.596) solid;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
  }

  @media screen and (min-width: 768px) {
    .mobile-header {
      display: none;
    }

    aside {
      position: fixed;
      width: 20rem;
      height: 100vh;
      background-color: #398ee6;
      color: white;
    }
  }

  @media screen and (max-width: 767px) {
    .header {
      display: none;
    }
  }
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SidenavLink from './SidenavLink.vue';

@Component({
  components: { SidenavLink }
})
export default class extends Vue {
  open = false;

  toggle() {
    this.open = !this.open;
  }

  handleDocumentClick(e: MouseEvent) {
    if (!this.open) {
      return;
    }

    // Find if click element (or parent) contains data-toggle-stopper
    let current: HTMLElement | null = e.target as HTMLElement;
    while (current) {
      if ('hasAttribute' in current && current.hasAttribute('data-toggle-stopper')) {
        e.preventDefault();
        return;
      }

      current = current.parentElement;
    }

    this.open = false;
  }

  mounted() {
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    window.addEventListener('click', this.handleDocumentClick);
  }

  beforeDestroy() {
    window.removeEventListener('click', this.handleDocumentClick);
  }
}
</script>
