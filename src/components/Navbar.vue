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
  <!-- <div class="columns">
    <div class="column p-b-none p-t-none">
      <div class="navbar" id="navbar">
        <div class="logo-div float-l m-l-40 m-r-25">
          <div class="logo"></div>
        </div>
        <a href="javascript:void(0);" id="hamburger"
           v-on:click="toggleNav()">
          <i class="fa fa-bars"></i>
        </a>
        <scrollactive id="nav-regular" class="unselectable"
                      :offset="60" :modifyUrl="false">
          <a v-for="page in navButtons" :href="page.id" id="page.id"
             class="scrollactive-item nav-btn">
            {{page.name}}
          </a>
        </scrollactive>
        <scrollactive id="nav-collapse" class="unselectable"
                      :class="{ visible: navShow }"
                      :offset="60" :modifyUrl="false">
          <a v-for="page in navButtons" :href="page.id" id="page.id"
             class="scrollactive-item nav-btn">
            {{page.name}}
          </a>
        </scrollactive>
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'nav-bar',
  components: {
  },
  data() {
    return {
      navShow: false,
      fullWidth: document.documentElement.clientWidth
    }
  },
  // bind event handlers to the `handleResize` method (defined below)
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
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
    hide_projects_if_necessary() {
      if (this.projects_shown) {
        this.toggle_projects()
      }
    },
    toggleNav() {
      this.navShow = !this.navShow
    },
    // whenever the document is resized, re-set the 'fullHeight' variable
    handleResize(event) {
      this.fullWidth = document.documentElement.clientWidth
      //console.log(this.fullWidth)
      if (this.fullWidth >= 768) {
        this.navShow = false
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
