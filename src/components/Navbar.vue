<template>
  <div class="m-y-xl p-l-xl">
    <scrollactive id="nav-regular" class="is-unselectable"
                  :offset="0" :modifyUrl="false">
      <a v-for="page in navButtons" :href="page.id" id="page.id"
         class="scrollactive-item nav-btn">
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
import $ from 'jquery';
export default {
  name: 'nav-bar',
  components: {
  },
  data () {
    return {
      navButtons: [
        { name: 'about',      route: '/about',    id: '#about' },
        { name: 'projects',   route: '/projects', id: '#projects'},
        { name: 'experience', route: '/experience', id: '#experience'},
        { name: 'fun stuff',  route: '/rates',    id: '#fun'}
      ],
      navShow: false,
      fullWidth: document.documentElement.clientWidth
    }
  },
  // bind event handlers to the `handleResize` method (defined below)
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    toggleNav() {
      this.navShow = !this.navShow;
    },
    // whenever the document is resized, re-set the 'fullHeight' variable
    handleResize (event) {
      this.fullWidth = document.documentElement.clientWidth
      //console.log(this.fullWidth)
      if (this.fullWidth >= 768) {
        this.navShow = false;
      }
    }
  }
}

$(window).resize(function () {
  this.navShow = false
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
