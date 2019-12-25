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
      },
      medium: {
        display: '@kassss',
        link: 'https://medium.com/@kassss'
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
        bullet_points: [

        ],
        technologies: [
          'angular', 'ts', 'html', 'sass', 'docker', 'node', 'rest'
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
        bullet_points: [

        ],
        technologies: [
          'python', 'cs', 'rest', 'networks'
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
        bullet_points: [

        ],
        technologies: [
          'python', 'embedded', 'rest'
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
        bullet_points: [

        ],
        technologies: [
          'react', 'redux', 'js', 'html', 'sass', 'python', 'rest'
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
        bullet_points: [

        ],
        technologies: [
          'c', 'embedded', 'networks'
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
        bullet_points: [

        ],
        technologies: [
          'python'
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
        bullet_points: [

        ],
        technologies: [
          'vue', 'js'
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
        bullet_points: [

        ],
        technologies: [
          'ionic', 'angular', 'ts'
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
        bullet_points: [

        ],
        technologies: [
          'vue'
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
        bullet_points: [

        ],
        technologies: [
          'c'
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
        bullet_points: [

        ],
        technologies: [
          'python', 'networks'
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
        bullet_points: [

        ],
        technologies: [
 
        ],
        type: '',
        col_css: 'is-5',
        link: 'https://cuvetlab.web.app/'
      },
      {
        title: 'Command Line GUI Synthesis',
        description: 'Research comparing 2 different designs of synthesized command line GUI',
        card_bg: 'gui.png',
        images: [

        ],
        details: '',
        bullet_points: [

        ],
        technologies: [

        ],
        type: '',
        col_css: 'is-5'
      },

    ],
    tech_info: {
      html:     { img: 'html.png',      name: 'HTML5' },
      css:      { img: 'css.png',       name: 'CSS3' },
      js:       { img: 'js.png',        name: 'Javascript' },
      ts:       { img: 'ts.png',        name: 'Typescript' },
      angular:  { img: 'angular.png',   name: 'Angular' },
      vue:      { img: 'vue.png',       name: 'Vue' },
      react:    { img: 'react.png',     name: 'React' },
      redux:    { img: 'redux.png',     name: 'Redux' },
      sass:     { img: 'sass.png',      name: 'SASS/SCSS' },
      jquery:   { img: 'jquery.png',    name: 'jQuery' },
      ionic:    { img: 'ionic.png',     name: 'Ionic' },
      python:   { img: 'python.png',    name: 'Python' },
      c:        { img: 'c.png',         name: 'C' },
      cpp:      { img: 'cpp.png',       name: 'C++' },
      cs:       { img: 'cs.png',        name: 'C#' },
      swift:    { img: 'swift.png',     name: 'Swift' },
      fortran:  { img: 'fortran.png',   name: 'Fortran' },
      java:     { img: 'java.png',      name: 'Java' },
      terminal: { img: 'terminal.png',  name: 'Terminal' },
      docker:   { img: 'docker.png',    name: 'Docker' },
      gcloud:   { img: 'gcloud.png',    name: 'Google Cloud Platform' },
      aws:      { img: 'aws.png',       name: 'AWS' },
      vs:       { img: 'vs.png',        name: 'VS Code' },
      git:      { img: 'git.png',       name: 'Git' },
      github:   { img: 'github.png',    name: 'Github' },
      gitlab:   { img: 'gitlab.png',    name: 'Gitlab' },
      xd:       { img: 'xd.png',        name: 'Adobe XD' },
      ps:       { img: 'ps.png',        name: 'Photoshop' },
      ai:       { img: 'ai.png',        name: 'Illustrator' },
      matlab:   { img: 'matlab.png',    name: 'Matlab' },
      slack:    { img: 'slack.png',     name: 'Slack' },
      trello:   { img: 'trello.png',    name: 'Trello' },
      zenhub:   { img: 'zenhub.png',    name: 'Zenhub' },
      sql:      { img: 'sql.png',       name: 'SQL' },
      node:     { img: 'node.png',      name: 'NodeJS' },
      rest:     { img: 'rest.png',      name: 'REST API' },
      embedded: { img: 'embedded.png',  name: 'Embedded Programming' },
      networks: { img: 'networks.png',  name: 'Networks Programming' }
    },
    tech_list: [
      {
        group_name: 'Frontend',
        css: 'frontend',
        list: [
          'html',
          'css',
          'js',
          'ts',
          'angular',
          'vue',
          'react',
          'redux',
          'sass',
          'jquery',
          'ionic'
        ]
      },
      {
        group_name: 'Languages',
        css: 'languages',
        list: [
          'python',
          'c',
          'cpp',
          'cs',
          'swift',
          'fortran',
          'java'
        ]
      },
      {
        group_name: 'Other Tools',
        css: 'tools',
        list: [
          'terminal',
          'docker',
          'gcloud',
          'aws',
          'vs',
          'git',
          'github',
          'gitlab',
          'xd',
          'ps',
          'ai',
          'matlab',
          'slack',
          'trello',
          'zenhub'
        ]
      },
      {
        group_name: 'Technical',
        css: 'technical',
        list: [
          'sql',
          'node',
          'rest',
          'embedded',
          'networks'
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
    tech_info: state => {
      return state.tech_info
    },
    tech_list: state => {
      return state.tech_list
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