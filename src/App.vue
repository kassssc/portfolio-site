<template>
  <div id="app">
    <div id="bg"></div>
    <section class="section p-none">
      <div class="is-hidden-tablet">
        <mobile-nav-bar></mobile-nav-bar>
      </div>
      <div class="is-flex justify-between">
        <div id="sidebar" class="is-hidden-touch p-t-xl">
          <side-bar></side-bar>
        </div>
        <div id="main-content" class="is-marginless-mobile is-flex flex-column">
          <about-section></about-section>
          <project-section></project-section>
          <experience-section></experience-section>
        </div>
      </div>
    </section>
    <!-- <div class="modal-bg"></div> -->
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
import ProjectSection from '@/views/Projects.vue'
import AboutSection from '@/views/About.vue'
import ExperienceSection from '@/views/Experience.vue'

export default {
  name: 'home',
  components: {
    'nav-bar': Navbar,
    'mobile-nav-bar': MobileNavbar,
    'title-bar': Titlebar,
    'side-bar': Sidebar,
    'project-section': ProjectSection,
    'experience-section': ExperienceSection,
    'about-section': AboutSection
  },
  data: function () {
    return {
      //timer: undefined
    }
  },
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
