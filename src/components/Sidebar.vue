<template>
  <div class="m-r-lg">
    <div class="columns is-centered relative">
      <div class="column">
        <div id="name" class="is-flex justify-center">
          <div class="content is-large">
            <div class="name-container">
              <h3 class="invert-selection text-bold color-dark">Kass</h3>
            </div>
            <h3 class="m-t-sm m-b-sm text-semi-bold">Chupongstimun</h3>
          </div>
        </div>
      </div>
    </div>
    <nav-bar></nav-bar>
    <div class="columns">
      <div class="column">
        <div id="contact" class="is-flex justify-center align-center">
          <div class="content is-flex flex-column">
            <h3 class="text-bold color-dark invert-selection">GET IN TOUCH</h3>
            <div class="contact-details">
              <i class="far fa-envelope m-r-md"></i>
              <h5 class="invert-selection">kass_c@hotmail.com</h5>
            </div>
            <div class="contact-details">
              <div class="icon-border m-r-md">
                <i class="fas fa-phone"></i>
              </div>
              <h5 class="invert-selection">(858)-346-3512</h5>
            </div>
            <div class="contact-details">
              <div class="icon-border m-r-md">
                <i class="fab fa-linkedin-in"></i>
              </div>
              <h5 class="invert-selection">/ kassss</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'side-bar',
  components: {
    'nav-bar': Navbar,
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
