<template>
<div id="app">
  <div id="bg" />
  <section class="section p-none">
    <!-- <hamburger-nav />  -->
    <div class="is-flex justify-between">
      <div id="sidebar">
        <side-bar />
      </div>
      <div id="main-content"
           class="is-marginless-mobile is-flex flex-column">
        <about-section />
        <portfolio-section />
        <experience-section />
        <div id="contact-section" class="main-section">
          <div class="content">
            <h1 class="has-text-weight-black p-t-lg">GET IN TOUCH</h1>
            <contact class="m-l-lg"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import './styles/styles.scss';
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import HamburgerNav from '@/components/HamburgerNav.vue'
import Sidebar from '@/components/Sidebar.vue'
import Contact from '@/components/Contact.vue'
import PortfolioSection from '@/views/Portfolio.vue'
import AboutSection from '@/views/About.vue'
import ExperienceSection from '@/views/Experience.vue'

export default {
  name: 'home',
  components: {
    'nav-bar': Navbar,
    'hamburger-nav': HamburgerNav,
    'side-bar': Sidebar,
    'portfolio-section': PortfolioSection,
    'experience-section': ExperienceSection,
    'about-section': AboutSection,
    'contact': Contact
  },
  /*method  s: {
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
