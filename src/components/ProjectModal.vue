<template>
  <div class="project-modal">
    <div class="content">
      <h1 class="has-text-weight-black">
        {{ project.title }}
      </h1>
      <h4 class="text-semibold">
        {{ project.description }}
      </h4>
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
      <h4 class="text-semibold">
        Short description
      </h4>
      <h4 class="text-semibold">
        Short description
      </h4>
      <h4 class="text-semibold">
        Short description
      </h4>
      <h4 class="text-semibold">
        Short description
      </h4>
      <h4 class="text-semibold">
        Short description
      </h4>
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
