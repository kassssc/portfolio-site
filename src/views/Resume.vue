<template>
  <div id="resume" class="main-section">
    <div class="content">
      <h1 class="has-text-weight-black p-t-lg">FULL RESUME</h1>
      <!-- <div id="resume-contents">
        <div class="resume-top">
          <h3 class="has-text-weight-black">Kasitsak Chupongstimun (Kass)</h3>
          <div class="d-flex full-width justify-between">
            <h6 class="m-b-none">
              Address
            </h6>
            <h6>
              Email
            </h6>
          </div>
        </div>
      </div> -->
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
