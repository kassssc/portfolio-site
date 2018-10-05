<template>
  <div class="columns m-b-none">
    <div class="column">
      <div class="content is-large has-text-weight-bold is-flex">
        <div class="name m-r-md"><h2 class="is-marginless invert-selection">Kass</h2></div>
        <div class="last-name"><h2 class="is-marginless">Chupongstimun</h2></div>
      </div>
    </div>
    <div class="column">
      <div class="is-flex justify-end align-center contact-bar">
        <div class="contact-field" v-on:click="toClipboard(email)">
          <i class="fas fa-envelope-square"></i>
          <div class="contact-label mail">
            {{ copiedEmail? 'COPIED!' : email }}
          </div>
        </div>
        <div class="contact-field" v-on:click="toClipboard(phonePure)">
          <i class="fas fa-phone-square"></i>
          <div class="contact-label phone">
            {{ copiedPhone? 'COPIED!' : phoneFormat }}
          </div>
        </div>
        <a class="contact-field" target="_blank"
             href="https://www.linkedin.com/in/kassss/">
          <i class="fab fa-linkedin"></i>
          <div class="contact-label linkedin">
            LINKEDIN
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: 'title-bar',
  components: {},
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
      delay.then(() => {
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
