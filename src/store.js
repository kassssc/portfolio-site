import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects_shown: false,
    nav_buttons: [
      { name: 'about',      route: '/about',      id: '#about' },
      { name: 'portfolio',  route: '/portfolio',   id: '#portfolio' },
      { name: 'experience', route: '/experience', id: '#experience' },
      { name: 'resume',     route: '/resume',     id: '#resume'}
    ],
    contact_info: {
      email: 'kass_c@hotmail.com',
      phone: {
        display: '(858) 346-3512',
        pure: '8583463512'
      },
      github: {
        display: '/kassssc',
        link: 'https://github.com/kassssc'
      },
      linkedin: {
        display: '/kassss',
        link: 'https://www.linkedin.com/in/kassss'
      }
    },
    project_list: [
      {
        title: 'FA Thailand Backoffice Website',
        description: 'Data management interface for The Football Association of Thailand',
        card_bg: 'fa.jpg',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-4'
      },
      {
        title: 'HomeAlive',
        description: 'Gesture-controlled Wi-Fi light bulbs',
        card_bg: 'homealive.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-3'
      },
      {
        title: 'Crypto Parking',
        description: 'Prototype parking lot management system that takes Bitcoin payments',
        card_bg: 'cryptoparking.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-5'
      },
      {
        title: 'BookFace',
        description: 'Webapp that aggregates posts from Facebook groups into a single unified and organized feed',
        card_bg: 'bookface.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-5',
        link: "https://bookface-cse210.web.app/"
      },
      {
        title: 'Wisconsin Racing',
        description: 'Steering Wheel controls and LCD screen for Wisconsin Racing\'s Formula SAE car',
        card_bg: 'wr.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-4'
      },
      {
        title: 'Project RuFaS @USDA-ARS',
        description: 'Dairy farm simulation program',
        card_bg: 'usda.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-3'
      },
      {
        title: 'HOME24 Website',
        description: 'Simple information website for my family\'s hotel',
        card_bg: 'home24.jpg',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-4'
      },
      {
        title: 'DineIn',
        description: 'Restaurant management mobile application',
        card_bg: 'dinein.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-4'
      },
      {
        title: 'EZ-Chef',
        description: 'Cooking social media website with step-by-step tutorials',
        card_bg: 'ezchef.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-4',
        link: 'https://ezchef-ks.web.app/'
      },
      {
        title: 'Mini-Hangman Game',
        description: 'Multi-player hangman game using morse code',
        card_bg: 'hangman.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-3'
      },
      {
        title: 'SurfStore',
        description: 'Distributed file storage system using RAFT',
        card_bg: 'surfstore.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-4'
      },
      {
        title: 'Chulalongkorn University Veterinary Diagnostic Lab Website',
        description: 'Simple information website',
        card_bg: 'cuvet.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-5',
        link: 'https://cuvetlab.web.app/'
      },
      {
        title: 'Command Line GUI Systhesis',
        description: 'Research comparing 2 different designs of synthesized command line GUI',
        card_bg: 'gui.png',
        images: [

        ],
        details: '',
        technologies: [

        ],
        type: '',
        col_css: 'is-5'
      },

    ],
    technology_list: [
      {
        group_name: 'Frontend',
        css: 'frontend',
        list: [
          { img: 'html.png',    name: 'HTML5' },
          { img: 'css.png',     name: 'CSS3' },
          { img: 'js.png',      name: 'Javascript' },
          { img: 'ts.png',      name: 'Typescript' },
          { img: 'angular.png', name: 'Angular' },
          { img: 'vue.png',     name: 'Vue' },
          { img: 'react.png',   name: 'React' },
          { img: 'redux.png',   name: 'Redux' },
          { img: 'sass.png',    name: 'Sass' },
          { img: 'jquery.png',  name: 'jQuery' },
          { img: 'ionic.png',   name: 'Ionic' }
        ]
      },
      {
        group_name: 'Languages',
        css: 'languages',
        list: [
          { img: 'python.png',  name: 'Python' },
          { img: 'c.png',       name: 'C' },
          { img: 'cpp.png',     name: 'C++' },
          { img: 'swift.png',   name: 'Swift' },
          { img: 'fortran.png', name: 'Fortran' },
          { img: 'java.png',    name: 'Java' },
        ]
      },
      {
        group_name: 'Other Tools',
        css: 'tools',
        list: [
          { img: 'terminal.png',  name: 'Terminal' },
          { img: 'docker.png',    name: 'Docker' },
          { img: 'git.png',       name: 'Git' },
          { img: 'github.png',    name: 'Github' },
          { img: 'gitlab.png',    name: 'Gitlab' },
          { img: 'sql.png',       name: 'SQL' },
          { img: 'node.png',      name: 'NodeJS' },
          { img: 'xd.png',        name: 'Adobe XD' },
          { img: 'ps.png',        name: 'Photoshop' },
          { img: 'ai.png',        name: 'Illustrator' },
          { img: 'matlab.png',    name: 'Matlab' },
        ]
      }
    ]
  },
  getters: {
    nav_buttons: state => {
      return state.nav_buttons
    },
    contact_info: state => {
      return state.contact_info
    },
    project_list: state => {
      return state.project_list
    },
    technology_list: state => {
      return state.technology_list
    }
	},
  mutations: {
    TOGGLE_PROJECTS (state) {
      state.projects_shown = !state.projects_shown
    }
  },
  actions: {
  	toggle_projects (context) {
  		context.commit('TOGGLE_PROJECTS')
  	}
  }

})