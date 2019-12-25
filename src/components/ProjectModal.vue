<template>
  <div class="project-modal">
    <div class="content">
      <h1 class="has-text-weight-black">
        {{ project.title }}
      </h1>
      <h4 class="text-semibold">
        {{ project.description }}
      </h4>
      <div v-if="project.link"
           class="m-y-md">
        <i class="fa fa-link m-r-sm is-size-5" aria-hidden="true"></i>
        <a :href="project.link"
           target="_blank"
           class="link">
          {{ project.link }}
        </a>
      </div>
      <b-carousel
        :indicator="true"
        :indicator-inside="false"
        :autoplay="false"
        :indicator-mode="'click'"
        :indicator-style="'is-lines'"
        icon-pack="fas"
        :icon-size="'is-medium'">
        <b-carousel-item v-for="(img, i) in images" :key="i">
          <img :src="img.url" height="500" width="500"/>
        </b-carousel-item>
      </b-carousel>
      <div v-if="project.technologies"
           class="is-flex full-width p-t-md p-b-md">
        <div v-for="(tech, idx) in project.technologies"
             :key="idx"
             class="tech-icon">
          <div class="img"
               :style="{'background-image': genURL(tech_info[tech].img)}">
          </div>
          <div class="hidden-tooltip">
            <div class="content">
              <div class="has-text-weight-bold is-unselectable">
                {{ tech_info[tech].name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'project-modal',
  props: {
		project: Object
  },
  computed: {
    ...mapGetters([
      'tech_info'
    ])
  },
  data() {
    return {
      images: [
        { url: 'https://static.vecteezy.com/system/resources/previews/000/210/520/original/vector-abstract-low-poly-background.jpg' },
        { url: 'https://static.vecteezy.com/system/resources/previews/000/210/520/original/vector-abstract-low-poly-background.jpg' },
        { url: 'https://static.vecteezy.com/system/resources/previews/000/210/520/original/vector-abstract-low-poly-background.jpg' },
        { url: 'https://static.vecteezy.com/system/resources/previews/000/210/520/original/vector-abstract-low-poly-background.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
