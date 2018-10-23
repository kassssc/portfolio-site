<template>
  <div class="m-b-xl m-t-lg">
    <scrollactive id="nav-regular" class="unselectable"
                  :offset="60" :modifyUrl="false">
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
        { name: 'projects',   route: '/',         id: '#projects'},
        { name: 'about',      route: '/gallery',  id: '#about' },
        { name: 'resume',     route: '/book',     id: '#resume'},
        { name: 'fun stuff',  route: '/rates',    id: '#fun'}
      ],
      navShow: false,
      stickyNav: false,
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

$(function () {
  var navbar = $('.navbar')
  var logo = $('.logo-div')
  var nav_regular = $('#nav-regular')
  var nav_collapse = $('#nav-collapse')
  var firstLink = $('#projects')
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()

    if (scroll >= 200) {
      // navbar.addClass('darken')
      // logo.addClass('shrink')
    } else {
      // navbar.removeClass('darken')
      // logo.removeClass('shrink')
    }
  })
  $(window).resize(function () {
    this.navShow = false
    if ($(window).width() > 768) {
      //nav_regular.removeClass("collapse");
    } else {
      //nav_regular.addClass("collapse");
    }
  })
})
$(window).resize(function () {
  this.navShow = false
})
window.onscroll = function () { stickyNav() }

function stickyNav () {
  var navbar = document.getElementById('navbar')
  var container = document.getElementById('project-container')
  if (window.pageYOffset >= 126) {
    navbar.classList.add('sticky')
    container.classList.add('sticky-offset')
  } else {
    navbar.classList.remove('sticky')
    container.classList.remove('sticky-offset')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
