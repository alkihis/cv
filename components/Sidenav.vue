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
      <span class="names text">
        <span class="first-name">Louis</span>
        <span class="last-name">Béranger</span>
      </span>

      <!-- Mobile toggle button -->
      <span class="open-button" @click="toggle" data-toggle-stopper>
        <i class="fas fa-bars"></i>
      </span>
    </div>

    <!-- Liens -->
    <div :class="{ 'links': true, 'open': open }">
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
      margin-top: .8rem;
      font-size: 2rem;
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

  .mobile-header {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;

    .names {
      font-size: 1.2rem;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
  }

  @media screen and (min-width: 1024px) {
    .mobile-header {
      display: none;
    }

    aside {
      position: fixed;
      width: 20rem;
      height: 100vh;
      background-color: #001e3d;
      color: white;
    }
  }

  @media screen and (max-width: 1023px) {
    .header {
      display: none;
    }

    aside {
      position: fixed;
      background-color: #001e3d;
      color: white;
      width: 100%;
    }

    .mobile-header {
      height: 77px;
    }

    .links {
      &:not(.open) {
        display: none;
      } 
      margin-top: 0;
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
