<template>
<div>
  <div  class="contact-details"
        :class="{ 'extend': copiedEmail }"
        @click="toClipboard(contact_info.email)">
    <i class="far fa-envelope sm m-r-md"></i>
    <h6 class="has-text-weight-bold">
      {{ contact_info.email }}
    </h6>
    <div class="hover-appear">
      <div class="content">
        <h6 class="has-text-weight-bold is-unselectable">
          {{ copiedEmail ? 'COPIED' : 'COPY' }}
        </h6>
      </div>
    </div>
  </div>
  <div  class="contact-details"
        :class="{ 'extend': copiedPhone }"
        @click="toClipboard(contact_info.phone.pure)">
    <i class="fas fa-phone m-r-md" />
    <h6 class="has-text-weight-bold">{{ contact_info.phone.display }}</h6>
    <div class="hover-appear">
      <div class="content">
        <h6 class="has-text-weight-bold is-unselectable">
          {{ copiedPhone? 'COPIED' : 'COPY' }}
        </h6>
      </div>
    </div>
  </div>
  <div class="contact-details" @click="openNewTab(contact_info.github.link)">
    <i class="fab fa-github m-r-md" />
    <h6 class="has-text-weight-bold">{{ contact_info.github.display }}</h6>
    <div class="hover-appear">
      <div class="content">
        <h6 class="has-text-weight-bold is-unselectable">VISIT</h6>
      </div>
    </div>
  </div>
  <div class="contact-details" @click="openNewTab(contact_info.linkedin.link)">
    <i class="fab fa-linkedin-in m-r-md m-b-xs" />
    <h6 class="has-text-weight-bold">{{ contact_info.linkedin.display }}</h6>
    <div class="hover-appear">
      <div class="content">
        <h6 class="has-text-weight-bold is-unselectable">VISIT</h6>
      </div>
    </div>
  </div>
  <div class="contact-details" @click="openNewTab(contact_info.medium.link)">
    <i class="fab fa-medium-m m-r-md m-b-xs" />
    <h6>{{ contact_info.medium.display }}</h6>
    <div class="hover-appear">
      <div class="content">
        <h6 class="has-text-weight-bold is-unselectable">VISIT</h6>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'contact',
  data () {
    return {
      copiedEmail: false,
      copiedPhone: false
    }
  },
  computed: {
    ...mapGetters([
      'contact_info'
    ])
  },
  methods: {
    toClipboard (text) {
      const delay = new Promise( resolve => {
        if (text === this.contact_info.email) {
          this.copiedEmail = true
        } else if (text === this.contact_info.phone.pure) {
          this.copiedPhone = true
        }
        setTimeout(resolve, 750)
      })
      delay.then( () => {
        if (text === this.contact_info.email) {
          this.copiedEmail = false
        } else if (text === this.contact_info.phone.pure) {
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
    openNewTab (url) {
      window.open(url, '_blank')
    }
  }
}
</script>
