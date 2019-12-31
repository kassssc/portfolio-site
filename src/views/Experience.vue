<template>
  <div id="experience" class="main-section">
    <div class="content">
      <h1 class="has-text-weight-black p-t-lg m-b-lg">EXPERIENCE</h1>
      <div v-for="(group, i) in tech_list"
           :key="i"
           class="m-b-md">
        <div class="skill-group-name-container">
          <div class="content">
            <h6 class="has-text-weight-bold m-none">
              {{ group.group_name }}
            </h6>
          </div>
        </div>
        <div class="skill-icons">
          <div  v-for="(tech, j) in group.list"
                :key="j"
                :class="[
                  'skill-icon is-unselectable',
                  {'disable-hover': is_scrolling}
                ]">
            <div  class="img"
                  :style="{'background-image': genURL(tech_info[tech].img)}">
            </div>
            <div class="hidden-tooltip is-flex align-center justify-center">
              <div class="content">
                <h6 class="m-b-xs has-text-weight-black">
                  {{ tech_info[tech].name }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'experience-section',
  computed: {
    ...mapGetters([
      'tech_info',
      'tech_list'
    ])
  },
  data () {
    return {
      is_scrolling: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      clearTimeout(this.timer)
      this.is_scrolling = true
      this.timer = setTimeout( () => {
        this.is_scrolling = false
      }, 500)
    }, false)
  }
}
</script>
