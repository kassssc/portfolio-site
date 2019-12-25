<template>
  <div id="about" class="main-section">
    <div class="content">
      <h1 class="has-text-weight-black">ABOUT</h1>
      <div class="is-flex flex-column">
        <div id="about-block-1">
          <!--<div id="self-portrait"
               :style="{'background-image': genURL('me', 'png')}">
          </div> -->
          <div class="is-flex flex-column">
            <div>
              <h4 class="has-text-weight-bold m-b-sm">
                Software Engineering, DevOps, & Design
              </h4>
              <p class="has-text-weight-semibold">
                I'm a software engineer currently based in San Diego, originally from Bangkok, Thailand. 
                I have worked on many projects, ranging from a race car steering wheel to a dairy farm simulation program.
                I specialize in frontend development and UX/UI design, but I am currently learning how to become a great DevOps engineer.
              </p>
              <p class="has-text-weight-semibold">
                My interests are mostly in Human-Computer Interaction, software design, IoT devices (particularily gesture-controlled home automation), skiing, and architecture.
              </p>
            </div>
            <div class="is-hidden-mobile m-t-md">
              <h4 class="has-text-weight-bold m-b-sm">
                Education
              </h4>
              <p class="has-text-weight-semibold m-b-none">
                UW Madison - B.S. Computer Science & Electrical Engineering, May 2018
              </p>
              <p class="has-text-weight-semibold">
                UC San Diego - M.S. Computer Science, June 2020
              </p>
              <div class="resume is-flex align-center m-t-md"
                   @click="show_resume()">
                <h4 class="has-text-weight-bold m-b-none">
                  Resume
                </h4>
                <div class="icon-wrapper m-l-sm is-flex align-center justify-center">
                  <i class="far fa-file-pdf"></i>
                </div>
                <div class="hover-appear">
                  <div class="content">
                    <h6 class="has-text-weight-bold is-unselectable">View PDF</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="is-hidden-tablet m-t-md">
          <h4 class="has-text-weight-bold m-b-sm">
            Education
          </h4>
          <p class="has-text-weight-medium m-b-none">
            UW Madison - B.S. Computer Science & Electrical Engineering, May 2018
          </p>
          <p class="has-text-weight-medium">
            UC San Diego - M.S. Computer Science, Expected June 2020
          </p>
          <div class="resume is-flex align-center m-t-md">
            <h4 class="has-text-weight-bold m-b-none m-r-md">
              Resume
            </h4>
            <div class="icon-border m-r-md">
              <i class="far fa-file-pdf"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-section',
  components: {},
  data () {
    return {}
  },
  methods: {
    show_resume() {
      window.open('/resume.pdf', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
