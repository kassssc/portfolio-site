<template>
  <div>
    <div class="columns">
      <div class="column">
        <pdf src="../assets/resume.pdf"></pdf>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'resume-section',
  components: { pdf },
  data () {
    return {
      currentPage: 0,
      pageCount: 0
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
