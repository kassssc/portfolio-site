<template>
<div class="is-flex justify-center">
  <div class="project-modal">
    <div class="content">
      <h1 class="has-text-weight-black m-b-sm gradient-text">
        {{ project_list[curr].title }}
      </h1>
      <h5 class="text-semibold m-b-sm">
        {{ project_list[curr].description }}
      </h5>
      <div v-if="project_list[curr].link"
            class="m-b-sm">
        <i class="fa fa-link m-r-xs is-size-6" aria-hidden="true" />
        <a :href="project_list[curr].link"
            target="_blank"
            class="link">
          {{ project_list[curr].link }}
        </a>
      </div>
      <h5 v-if="project_list[curr].heading" class="has-text-weight-black m-y-sm gradient-text">
        {{ project_list[curr].heading }}
      </h5>
      <ul v-if="project_list[curr].bullet_points">
        <li v-for="(line, idx) in project_list[curr].bullet_points"
            :key="idx"
            class="has-text-weight-semibold">
          {{ line }}
        </li>
      </ul>
      <h5 v-if="project_list[curr].heading_2"
          class="has-text-weight-black m-y-sm gradient-text">
        {{ project_list[curr].heading_2 }}
      </h5>
      <ul v-if="project_list[curr].bullet_points_2">
        <li v-for="(line, idx) in project_list[curr].bullet_points_2"
            :key="idx"
            class="has-text-weight-semibold">
          {{ line }}
        </li>
      </ul>
      <b-carousel v-if="project_list[curr].images"
                  :key="curr"
                  :indicator="true"
                  :indicator-inside="false"
                  :autoplay="false"
                  :indicator-mode="'click'"
                  :indicator-style="'is-lines'"
                  :icon-size="'is-medium'"
                  icon-pack="fas">
        <b-carousel-item v-for="(img, i) in project_list[curr].images" :key="i">
          <img :src="img" />
        </b-carousel-item>
      </b-carousel>
      <!-- <div :v-if="project_list[curr].youtube"
            :class="[
              'youtube-container m-y-md',
              { 'none': !project_list[curr].youtube }
            ]">
        <vue-friendly-iframe :v-if="project_list[curr].youtube !== undefined" :src="project_list[curr].youtube"></vue-friendly-iframe>
        <iframe width="800" height="490"
                :src="project_list[curr].youtube"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
      </div> -->
      <div v-if="project_list[curr].technologies"
            class="is-flex full-width flex-wrap">
        <div v-for="(tech, idx) in project_list[curr].technologies"
              :key="idx"
              class="tech-icon">
          <div class="img"
                :style="{ 'background-image': genURL(tech_info[tech].img) }">
          </div>
          <div class="hidden-tooltip">
            <div class="content">
              <div class="has-text-weight-bold is-unselectable">
                {{ tech_info[tech].name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button class="button custom project-nav-btn prev"
          @click="$emit('prev')">
    <i class="fa fa-chevron-left" aria-hidden="true" />
  </button>
  <button class="button custom project-nav-btn next"
          @click="$emit('next')">
    <i class="fa fa-chevron-right" aria-hidden="true" />
  </button>

</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'project-modal',
  props: {
    curr: Number
  },
  computed: {
    ...mapGetters([
      'tech_info',
      'project_list'
    ])
  },
  data () {
    return {
    }
  },
  mounted () {
    //this.scroll_to(this.curr, false)
  },
  methods: {
    scroll_to (id_num, smooth = true) {
      let el = document.getElementById(id_num.toString())
      let modal_content = document.getElementsByClassName('modal-content')[0]
      //let top_pos = el.offsetTop
      el.scrollIntoView()
      modal_content.scrollTop -= 105
      /* modal_content.scrollTo({
        top: top_pos - (id_num === 0? 200 : 50),
        behavior: smooth? 'smooth' : 'auto'
      }); */
    }
  },
  watch: {
    curr: {
      handler (val) {
        //this.scroll_to(val)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
.project-modal {
  padding: 3em 2.5em 2em 2.5em;
  min-height: 60vh;
  display: flex;
  margin-top: 6em;
  margin-right: 80px;
  margin-left: 80px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
    padding: 5vw 1.5em 1.5em 1.5em;
    .content h1 {
      font-size: 1.6em;
    }
  }
  min-width: 0;
  @include slanted-bg-full(25px);
  /*&:first-child {
    margin-top: 6em;
  }
  &:not(:first-child) {
    margin-top: 6em;
  }
  &:last-child {
    margin-bottom: 6em;
  }*/
  &::before {
    background: rgba($color: #111111, $alpha: 0.55);
    top: -2em;
  }
  .content {
    width: 100%;
    .carousel {
      margin: 1em 0;
      .carousel-item {
        text-align: center;
        img {
          border-radius: 2px;
          height: 450px;
          width: auto;
          @media screen and (max-width: 1024px) {
            height: auto;
            width: 100%;
          }
        }
      }
    }
    .youtube-container {
      width: 100%;
      display: flex;
      justify-content: center;
      &.none {
        height: 0;
        display: none;
        iframe {
          display: none;
        }
      }
      iframe {
        height: 490px;
      }
    }
    ul {
      list-style-type: square;
      line-height: 1.25em;
      margin: 0 0 0 1.6em;
    }
    .tech-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      &:hover {
        .hidden-tooltip {
          transform: scaleX(1);
        }
      }
      margin-right: 1em;
      margin-left: 1em;
      width: 45px;
      max-height: 100px;
      .img {
        min-width: 45px;
        min-height: 45px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .hidden-tooltip {
        margin-top: 0.3em;
        text-align: center;
        width: 125px;
        transition: 100ms ease-in-out;
        transform: scale(0);
        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
      @media screen and (max-width: 1024px) {
        width: 35px;
        height: 35px;
        margin-left: 0;
        margin-right: 1em;
        .img {
          min-width: 35px;
          min-height: 35px;
        }
      }
    }
  }
}

.button.custom.project-nav-btn {
  font-size: 2rem;
  width: 65px;
  height: 65px;
  padding: 0.25em;
  z-index: 101;
  transition: all 100ms ease-in-out;
  background: transparent;
  &.prev {
    top: 45%;
    left: 0px;
    position: absolute;
    @media screen and (max-width: 1024px)  {
      display: none;
    }
  }
  &.next {
    top: 45%;
    right: 0px;
    position: absolute;
    @media screen and (max-width: 1024px)  {
      display: none;
    }
  }
  &.close {
    position: fixed;
    display: inherit !important; // override v-show display: none
    &[style*="display: none;"] {
      opacity: 0;
      pointer-events: none; //disable user interaction
      user-select: none; //disable user selection
    }
    top: 2vw;
    right: 2vw;
    &:hover {
      transform: scale(1.5);
    }
  }
  &:hover {
    transform: scale(1.4);
  }
  &:active {
    transform: scale(2);
  }
}
</style>
