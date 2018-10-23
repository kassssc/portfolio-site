<template>
  <div id="app">
    <section class="section p-x-none p-t-xxl">
      <div class="columns">
        <div id="sidebar" class="column is-hidden-mobile is-4">
          <side-bar></side-bar>
        </div>
        <div class="column is-hidden-mobile is-4"></div>
        <div class="column">
          <about-section></about-section>
          <project-section></project-section>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import './styles/colors.scss';
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import './styles/helpers.scss';
@import './styles/styles.scss';
@import './styles/navbar.scss';
</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Titlebar from '@/components/Titlebar.vue'
import Sidebar from '@/components/Sidebar.vue'
import ProjectSection from '@/views/Projects.vue'
import AboutSection from '@/views/About.vue'
import ResumeSection from '@/views/Resume.vue'

export default {
  name: 'home',
  components: {
    'nav-bar': Navbar,
    'title-bar': Titlebar,
    'side-bar': Sidebar,
    'project-section': ProjectSection,
    'resume-section': ResumeSection,
    'about-section': AboutSection
  }
}
</script>
