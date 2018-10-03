<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <title-bar></title-bar>
        <!-- <hr class="is-marginless"> -->
        <nav-bar></nav-bar>
        <project-list></project-list>
        <about-section></about-section>
        <resume-section></resume-section>
        <!-- <router-view/> -->
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
$text: #E0DDDA;
$content-heading-color: #E0DDDA;
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import './styles/styles.scss';
@import './styles/navbar.scss';
</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Titlebar from '@/components/Titlebar.vue'
import ProjectList from '@/views/Projects.vue'
import AboutSection from '@/views/About.vue'
import ResumeSection from '@/views/Resume.vue'

export default {
  name: 'home',
  components: {
    'nav-bar': Navbar,
    'title-bar': Titlebar,
    'project-list': ProjectList,
    'resume-section': ResumeSection,
    'about-section': AboutSection
  }
}
</script>
