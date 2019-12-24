<template>
  <div id="resume" class="main-section">
    <div class="content">
      <h1 class="has-text-weight-black p-t-lg">FULL RESUME</h1>
    </div>     
  </div>
</template>

<script>
export default {
  name: 'resume-section',
  data () {
    return {
      skillIconList: [
        { img: 'html.png', name: 'HTML5' },
        { img: 'css.png', name: 'CSS3' },
        { img: 'js.png', name: 'Javascript' },
        { img: 'ts.png', name: 'Typescript' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
