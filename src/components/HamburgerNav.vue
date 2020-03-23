<template>
<div id="hamburger-nav"
      class="is-flex flex-column align-end">
  <div class="is-flex"
        @click="toggleNav()">
    <i class="fa fa-bars"></i>
  </div>
  <scrollactive id="nav-collapse" class="unselectable"
                :class="{'visible': nav_show}"
                :offset="60" :modifyUrl="false">
    <a v-for="page in nav_buttons"
        :key="page.name"
        :href="page.id" id="page.id"
        class="scrollactive-item nav-btn">
      {{page.name}}
    </a>
  </scrollactive>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hamburger-nav',
  data () {
    return {
      nav_show: false
    }
  },
  computed: {
    ...mapGetters([
      'nav_buttons',
    ])
  },
  methods: {
    toggleNav () {
      this.nav_show = !this.nav_show
    }
  }
}
</script>
