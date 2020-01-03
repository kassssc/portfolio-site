<template>
  <div id="mobile-nav-bar">
    <div class="content is-flex justify-between">
      <div class="is-flex p-md align-center">
        <div id="name-container-mobile">
          <div class="content">
            <h2 class="has-text-weight-bold m-none">Kass</h2>
          </div>
        </div>
        <div id="last-name-container-mobile">
          <h3 class="has-text-weight-bold m-none">Chupongstimun</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'mobile-nav-bar',
  data: function () {
    return {
      navShow: false
    }
  },
  computed: {
    ...mapGetters([
      'nav_buttons',
    ])
  },
  methods: {
    toggleNav: function () {
      this.navShow = !this.navShow
    }
  }
}
</script>
