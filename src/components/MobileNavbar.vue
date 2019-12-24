<template>
  <div id="mobile-nav-bar">
    <!-- <div class="content is-flex justify-between">
      <div class="is-flex">
        <div id="name-container-mobile">
          <h2 class="text-semibold m-none">Kass</h2>
        </div>
        <div id="last-name-container-mobile">
          <h3 class="text-semibold">Chupongstimun</h3>
        </div>
      </div>
      <div id="nav-mobile">
        <a href="javascript:void(0);" id="hamburger"
           v-on:click="toggleNav()">
          <i class="fa fa-bars"></i>
        </a>
        <scrollactive id="nav-collapse" class="unselectable"
                      :class="{'visible': navShow}"
                      :offset="60" :modifyUrl="false">
          <a v-for="page in navButtons" :href="page.id" id="page.id"
             class="scrollactive-item nav-btn">
            {{page.name}}
          </a>
        </scrollactive>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss">
</style>

<script>

export default {
  name: 'mobile-nav-bar',
  data: function () {
    return {
      navShow: false
    }
  },
  methods: {
    toggleNav: function () {
      this.navShow = !this.navShow
    }
  }
}
</script>
