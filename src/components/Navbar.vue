<template>
<div class="m-y-xl p-l-xl">
  <scrollactive id="nav-regular"
                class="is-unselectable"
                :offset="25"
                :modifyUrl="false">
    <a  id="page.id"
        v-for="page in nav_buttons"
        :key="page.name"
        :href="page.id"
        class="scrollactive-item nav-btn"
        @click="hide_projects_if_necessary()">
      {{page.name}}
    </a>
  </scrollactive>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'nav-bar',
  components: {
  },
  data () {
    return {
      navShow: false,
      fullWidth: document.documentElement.clientWidth
    }
  },
  // bind event handlers to the `handleResize` method (defined below)
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    ...mapGetters([
      'nav_buttons',
      'projects_shown'
    ])
  },
  methods: {
    ...mapActions([
      'toggle_projects'
    ]),
    hide_projects_if_necessary () {
      if (this.projects_shown) {
        this.toggle_projects()
      }
    },
    toggleNav () {
      this.navShow = !this.navShow
    },
    // whenever the document is resized, re-set the 'fullHeight' variable
    handleResize (event) {
      this.fullWidth = document.documentElement.clientWidth
      //console.log(this.fullWidth)
      if (this.fullWidth >= 768) {
        this.navShow = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
