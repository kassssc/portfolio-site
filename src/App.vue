<template>
<div id="app" v-if="is_loaded">
  <div id="bg"
        :style="{ 'background-image': url('https://i.ibb.co/W6Vb3Vy/bg-beach.jpg') }"
  />
  <section class="section p-none">
    <!-- <hamburger-nav class="is-hidden-tablet" /> -->    
    <div class="is-flex justify-between">
      <div id="sidebar">
        <side-bar />
      </div>
      <div id="main-content"
            class="is-marginless-mobile is-flex flex-column">
        <about-section />
        <portfolio-section />
        <experience-section />
      </div>
    </div>
  </section>
</div>
</template>

<style lang="scss">
@import './styles/colors.scss';
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import './styles/helpers.scss';
@import './styles/styles.scss';
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import HamburgerNav from '@/components/HamburgerNav.vue'
import MobileNavbar from '@/components/MobileNavbar.vue'
import Titlebar from '@/components/Titlebar.vue'
import Sidebar from '@/components/Sidebar.vue'
import PortfolioSection from '@/views/Portfolio.vue'
import AboutSection from '@/views/About.vue'
import ExperienceSection from '@/views/Experience.vue'

export default {
  name: 'home',
  components: {
    'nav-bar': Navbar,
    'hamburger-nav': HamburgerNav,
    'mobile-nav-bar': MobileNavbar,
    'title-bar': Titlebar,
    'side-bar': Sidebar,
    'portfolio-section': PortfolioSection,
    'experience-section': ExperienceSection,
    'about-section': AboutSection
  },
  data () {
    return {
      is_loaded: false
    }
  },
  mounted() {
    this.is_loaded = true
  }
  /*methods: {
    handleScroll: function () {
      let projects = document.getElementById('projects')
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if(!projects.classList.contains('disable-hover')) {
        projects.classList.add('disable-hover')
        this.timer = setTimeout(function() {
          projects.classList.remove('disable-hover')
        }, 100);
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll)
  },*/
}
</script>
