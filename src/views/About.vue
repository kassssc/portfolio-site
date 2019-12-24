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
              <p class="has-text-weight-medium">
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
              </p>
            </div>
            <div class="is-hidden-mobile m-t-md">
              <h4 class="has-text-weight-bold m-b-sm">
                Education
              </h4>
              <p class="has-text-weight-medium m-b-none">
                UW Madison - B.S. Computer Science & Electrical Engineering, May 2018
              </p>
              <p class="has-text-weight-medium">
                UC San Diego - M.S. Computer Science, June 2020
              </p>
              <div class="resume is-flex align-center m-t-md">
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

  }
}
</script>

<style lang="scss" scoped>
</style>
