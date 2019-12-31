<template>
  <div>
    <div class="project-modal"
         v-for="(project, idx) in project_list"
         :key="idx"
         :id="idx">
      <div class="content">
        <h1 class="has-text-weight-black m-b-sm gradient-text">
          {{ project.title }}
        </h1>
        <h5 class="text-semibold m-b-sm">
          {{ project.description }}
        </h5>
        <div v-if="project.link"
             class="m-b-sm">
          <i class="fa fa-link m-r-xs is-size-6" aria-hidden="true" />
          <a :href="project.link"
             target="_blank"
             class="link">
            {{ project.link }}
          </a>
        </div>
        <h5 v-if="project.heading" class="has-text-weight-black m-y-sm gradient-text">
          {{ project.heading }}
        </h5>
        <ul v-if="project.bullet_points">
          <li v-for="(line, idx) in project.bullet_points"
              :key="idx"
              class="has-text-weight-semibold">
            {{ line }}
          </li>
        </ul>
        <h5 v-if="project.heading_2"
            class="has-text-weight-black m-y-sm gradient-text">
          {{ project.heading_2 }}
        </h5>
        <ul v-if="project.bullet_points_2">
          <li v-for="(line, idx) in project.bullet_points_2"
              :key="idx"
              class="has-text-weight-semibold">
            {{ line }}
          </li>
        </ul>
        <b-carousel v-if="project.images"
                    :indicator="true"
                    :indicator-inside="false"
                    :autoplay="false"
                    :indicator-mode="'click'"
                    :indicator-style="'is-lines'"
                    :icon-size="'is-medium'"
                    icon-pack="fas">
          <b-carousel-item v-for="(img, i) in images" :key="i">
            <img :src="img.url" />
          </b-carousel-item>
        </b-carousel>
        <div :v-if="project.youtube"
             :class="[
                'youtube-container m-y-md',
                { 'none': !project.youtube }
             ]">
          <!-- <vue-friendly-iframe :v-if="project.youtube !== undefined" :src="project.youtube"></vue-friendly-iframe> -->
          <!-- <iframe width="800" height="490"
                  :src="project.youtube"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe> -->
        </div>
        <div v-if="project.technologies"
             class="is-flex full-width">
          <div v-for="(tech, idx) in project.technologies"
               :key="idx"
               class="tech-icon">
            <div class="img"
                 :style="{ 'background-image': genURL(tech_info[tech].img) }">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'project-modal',
  props: {
    curr: Number
  },
  computed: {
    ...mapGetters([
      'tech_info',
      'project_list'
    ])
  },
  data () {
    return {
      images: [
        { url: 'https://static.vecteezy.com/system/resources/previews/000/210/520/original/vector-abstract-low-poly-background.jpg' },
        { url: 'https://static.vecteezy.com/system/resources/previews/000/210/520/original/vector-abstract-low-poly-background.jpg' },
        { url: 'https://static.vecteezy.com/system/resources/previews/000/210/520/original/vector-abstract-low-poly-background.jpg' },
        { url: 'https://static.vecteezy.com/system/resources/previews/000/210/520/original/vector-abstract-low-poly-background.jpg' }
      ]
    }
  },
  mounted () {
    this.scroll_to(this.curr, false)
  },
  methods: {
    scroll_to (id_num, smooth = true) {
      let el = document.getElementById(id_num.toString())
      let modal_content = document.getElementsByClassName('modal-content')[0]
      //let top_pos = el.offsetTop
      el.scrollIntoView()
      modal_content.scrollTop -= 105
      /* modal_content.scrollTo({
        top: top_pos - (id_num === 0? 200 : 50),
        behavior: smooth? 'smooth' : 'auto'
      }); */
    }
  },
  watch: {
    curr: {
      handler (val) {
        this.scroll_to(val)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
