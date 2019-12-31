<template>
  <div id="app">
    <div id="bg" />
    <section class="section p-none">
      <div class="is-hidden-tablet">
        <mobile-nav-bar />
      </div>
      <div class="is-flex justify-between">
        <div id="sidebar" class="is-hidden-touch">
          <side-bar />
        </div>
        <div id="main-content"
             class="is-marginless-mobile is-flex flex-column">
          <about-section />
          <portfolio-section />
          <experience-section />
          <!-- <resume-section /> -->
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
@import './styles/navbar.scss';
</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import MobileNavbar from '@/components/MobileNavbar.vue'
import Titlebar from '@/components/Titlebar.vue'
import Sidebar from '@/components/Sidebar.vue'
import PortfolioSection from '@/views/Portfolio.vue'
import AboutSection from '@/views/About.vue'
import ExperienceSection from '@/views/Experience.vue'
import ResumeSection from '@/views/Resume.vue'

export default {
  name: 'home',
  components: {
    'nav-bar': Navbar,
    'mobile-nav-bar': MobileNavbar,
    'title-bar': Titlebar,
    'side-bar': Sidebar,
    'portfolio-section': PortfolioSection,
    'experience-section': ExperienceSection,
    'about-section': AboutSection,
    'resume-section': ResumeSection
  },
  data () {
    return {
    }
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
