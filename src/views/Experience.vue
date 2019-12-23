<template>
  <div id="experience" class="main-section">
    <div class="content">
      <h1 class="has-text-weight-black p-t-lg">EXPERIENCE</h1>
      <h5 class="has-text-weight-bold">Technologies I have experience with</h5>
      <div id="skill-icons" class="m-t-lg">
        <div  v-for="technology in technology_list"
              :key="technology.name"
              class="skill-icon is-unselectable">
          <div  class="img"
                :style="{'background-image': genURL(technology.img)}">
          </div>
          <div class="hidden-tooltip is-flex align-center justify-center">
            <div class="content">
              <h5 class="m-b-xs has-text-weight-black">
                {{ technology.name }}
              </h5>
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
      'technology_list'
    ])
  }
}
</script>
