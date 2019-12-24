<template>
  <div id="portfolio" class="main-section">
    <div class="content">
      <h1 class="has-text-weight-black m-y-lg">PORTFOLIO</h1>
      <div class="columns is-multiline project-row">
        <div v-for="(project, idx) in project_list"
             :key="idx"
             :class="[
                'column',
                project.col_css,
						 ]">
          <div class="card is-flex flex-column justify-center align-center text-center"
               @click="toggle_project_modal(idx)">
            <div class="bg"></div>
            <div class="img"
                 :style="{'background-image': genURL(project.card_bg)}">
            </div>
            <div class="card-title">{{ project.title }}</div>
            <div class="card-description">{{ project.description }}</div>
            <button class="button custom md detail-btn">
              see details
            </button>
          </div>
        </div>
      </div>
    </div>

    <b-modal :active.sync="modal_active"
             :can-cancel="['escape', 'outside']"
             aria-modal>
      <project-modal :project="selected_project" />
    </b-modal>

    <button v-show="modal_active"
            :class="[
              'button custom project-nav-btn next',
              {'show': modal_active}
            ]"
            @click="next_project">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </button>
    <button v-show="modal_active"
            class="button custom project-nav-btn prev"
            @click="prev_project">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </button>
    <button v-show="modal_active"
            class="button custom project-nav-btn close"
            @click="modal_active = false">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>

    
  </div>
</template>

<script>
import ProjectModal from '@/components/ProjectModal.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'portfolio',
  components: {
    'project-modal': ProjectModal
  },
  data() {
    return {
      modal_active: false,
      selected_project_idx: 0
    }
  },
  computed: {
    ...mapGetters([
      'project_list'
    ]),
    selected_project() {
      return this.project_list[this.selected_project_idx]
    }
  },
  methods: {
    toggle_project_modal(idx) {
      this.selected_project_idx = idx
      this.modal_active = true
    },
    change_project(idx) {
      this.selected_project_idx = idx
    },
    next_project() {
      this.selected_project_idx = (this.selected_project_idx + 1) % this.project_list.length
    },
    prev_project() {
      this.selected_project_idx = (((this.selected_project_idx - 1) % this.project_list.length) + this.project_list.length) % this.project_list.length
    }
  },
  mounted() {
    window.addEventListener('keydown', e => {
		  if (this.modal_active) {
        if (e.key === 'ArrowLeft') {
          this.prev_project()
        } else if (e.key === 'ArrowRight') {
          this.next_project()
        }
      }
	  })
  }
}
</script>

<style lang="scss" scoped>
</style>
