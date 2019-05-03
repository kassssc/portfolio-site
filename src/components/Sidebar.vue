<template>
  <div>
    <div id="name" class="is-flex justify-start">
      <div class="content p-l-xl">
        <div id="name-container">
          <h1 class="text-semibold m-none">Kass</h1>
        </div>
        <h3 class="m-t-sm m-b-sm text-semibold">Chupongstimun</h3>
      </div>
    </div>
    <nav-bar></nav-bar>
    <div id="contact" class="is-flex justify-start align-center p-l-xl">
      <div class="content is-flex flex-column m-t-md">
        <h4 class="text-bold m-b-xs">GET IN TOUCH</h4>
        <div class="contact-details" :class="{'extend': copiedEmail}" @click="toClipboard(email)">
          <i class="far fa-envelope m-r-md"></i>
          <h6>kass_c@hotmail.com</h6>
          <div class="hover-appear">
            <h6 class="text-semibold">{{copiedEmail? 'COPIED' : 'COPY'}}</h6>
          </div>
        </div>
        <div class="contact-details" :class="{'extend': copiedPhone}" @click="toClipboard(phonePure)">
          <div class="icon-border m-r-md">
            <i class="fas fa-phone"></i>
          </div>
          <h6>(858)-346-3512</h6>
          <div class="hover-appear">
            <h6 class="text-semibold">{{copiedPhone? 'COPIED' : 'COPY'}}</h6>
          </div>
        </div>
        <div class="contact-details" @click="openNewTab('https://github.com/kassssc')">
          <div class="icon-border m-r-md">
            <i class="fab fa-github"></i>
          </div>
          <h6>/ kassssc</h6>
          <div class="hover-appear">
            <h6 class="text-semibold">VISIT</h6>
          </div>
        </div>
        <div class="contact-details" @click="openNewTab('https://www.linkedin.com/in/kassss')">
          <div class="icon-border m-r-md">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <h6>/ kassss</h6>
          <div class="hover-appear">
            <h6 class="text-semibold">VISIT</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'side-bar',
  components: {
    'nav-bar': Navbar,
  },
  data: () => {
    return {
      email: 'kass_c@hotmail.com',
      phoneFormat: '(858) 346-3512',
      phonePure: '8583463512',
      copiedEmail: false,
      copiedPhone: false
    }
  },
  methods: {
    toClipboard: function (text) {
      const delay = new Promise(
        resolve => {
          if (text === this.email) {
            this.copiedEmail = true
          } else if (text === this.phonePure) {
            this.copiedPhone = true
          }
          setTimeout(resolve, 750)
        }
      )
      delay.then( () => {
        if (text === this.email) {
          this.copiedEmail = false
        } else if (text === this.phonePure) {
          this.copiedPhone = false
        }
      })
      const el = document.createElement('textarea')
      el.value = text
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },
    openNewTab: function (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
