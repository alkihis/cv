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
        <img src="/img/menu.png" alt="Ouvrir le menu" />
      </span>
    </div>

    <!-- Liens -->
    <div :class="{ 'links': true, 'open': open }">
      <sidenav-link
        v-for="element in el_iterator"
        :key="element"
        :to="element"
        :highlighted="selected_element === element"
      >
        {{ available[element] }}
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

    .open-button {
      display: inline-flex;

      img {
        height: 32px;
        width: 32px;
      }
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
      z-index: 100;
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

  /* Available and selected element in menu */
  elements?: HTMLElement[];
  selected_element = '';
  available = {
    'about': 'À propos',
    'school': 'Parcours',
    'realisations': 'Expériences',
    'skills': 'Compétences',
    'center-of-interests': 'Centres d\'intérêt',
  };

  /* To memoize element positions */
  saved_window_size: [number, number] = [0, 0];
  saved_el_pos: number[] = [];
  last_saved: number = 0;

  get el_iterator() {
    return Object.keys(this.available);
  }

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

  /**
   * Check which menu element should be highlighted in sidenav, and change it if any.
   */
  handleScroll() {
    const current = window.scrollY;

    const positions = this.getCurrentElementPositions();
    if (positions.length === 0) {
      return;
    }

    let current_element = 0;

    for (let i = 1; i <= positions.length; i++) {
      if (i === positions.length) {
        current_element = positions.length - 1;
      }
      if (current < positions[i]) {
        current_element = i - 1;
        break;
      }
    }

    const name = this.el_iterator[current_element];

    if (name !== this.selected_element) {
      this.selected_element = name;
    }
  }

  /**
   * Return the current target element positions if window size changed,
   * or saved element positions otherwise.
   */
  getCurrentElementPositions() {
    if (!this.elements) {
      return [];
    }

    const window_size: [number, number] = [window.innerWidth, window.innerHeight];
    const threshold = Date.now();

    if (window_size[0] === this.saved_window_size[0] && window_size[1] === this.saved_window_size[1]) {
      if (this.last_saved > threshold)
        return this.saved_el_pos;
    }

    this.saved_window_size = window_size;
    this.last_saved = threshold + (1000);

    return this.saved_el_pos = this.elements.map(e => e.getBoundingClientRect().y + window.scrollY - 2);
  }

  mounted() {
    this.elements = this.el_iterator.map(e => document.getElementById(e)!);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    window.addEventListener('click', this.handleDocumentClick);
    window.addEventListener('scroll', this.handleScroll);

    this.handleScroll();
  }

  beforeDestroy() {
    window.removeEventListener('click', this.handleDocumentClick);
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
