<template>
  <div id="experience">
    <div class="content p-x-xl p-y-lg">
      <h1 class="text-bold p-t-lg">EXPERIENCE</h1>
      <h5 class="text-semibold">Technologies I use</h5>
      <div id="skill-icons" class="m-t-lg">
        <div v-for="skillIcon in skillIconList" class="skill-icon is-unselectable">
          <div class="img" :style="{'background-image': genURL(skillIcon.img, 'png')}"></div>
          <div class="hidden-tooltip is-flex align-center justify-center">
            <h4 class="m-b-xs text-bold">{{skillIcon.name}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'experience-section',
  data () {
    return {
      skillIconList: [
        {img: 'html', name: 'HTML5', tooltip: 'HTML5'},
        {img: 'css', name: 'CSS3', tooltip: 'CSS3'},
        {img: 'js', name: 'Javascript', tooltip: 'Javascript'},
        {img: 'ts', name: 'Typescript', tooltip: 'Typescript'},
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
