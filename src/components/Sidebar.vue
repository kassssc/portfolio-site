<template>
  <div>
    <div id="name" class="is-flex justify-start">
      <div class="content p-l-xl">
        <div id="name-container">
          <div class="content">
            <h1 class="has-text-weight-bold m-none">Kass</h1>
          </div>
        </div>
        <h3 class="m-t-sm m-b-sm has-text-weight-bold">Chupongstimun</h3>
      </div>
    </div>
    <nav-bar />
    <div id="contact" class="is-flex justify-start align-center p-l-xl">
      <div class="content is-flex flex-column m-t-md">
        <h4 class="has-text-weight-black m-b-xs">
          GET IN TOUCH
        </h4>
        <contact />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'side-bar',
  components: {
    'nav-bar': Navbar,
    'contact': Contact
  }
}
</script>

<style lang="scss" scoped>
</style>
