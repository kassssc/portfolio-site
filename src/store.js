import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects_shown: false,
    nav_buttons: [
      { name: 'about',      route: '/about',      id: '#about' },
      { name: 'portfolio',  route: '/portfolio',  id: '#portfolio' },
      { name: 'experience', route: '/experience', id: '#experience' },
      // { name: 'resume',     route: '/resume',     id: '#resume' }
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
        title: 'Football Association of Thailand Backoffice Website',
        description: 'Data management interface for The Football Association of Thailand',
        card_bg: 'https://i.ibb.co/VMNz7Y7/fa.jpg',
        images: [
          'https://i.ibb.co/VMNz7Y7/fa.jpg'
        ],
        details: '',
        bullet_points: [
          'Developed a social-media-like communication and project management platform to support quick, efficient, and convenient communication between the staff of the football association',
          'Developed a database management system to interface with the database of football players, clubs, referees, and officials across Thailand',
          'Created a match events logging system that could record and store all events in a football match',
          'Directly communicated with the client to ensure that requirements are met and that the application is tailored to the client’s exact needs'
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
        card_bg: 'https://i.ibb.co/5r0Hr5C/homealive.png',
        images: [
          'https://s5.gifyu.com/images/ha1.gif',
          'https://s5.gifyu.com/images/ha2.gif',
          'https://i.ibb.co/f1cyxQ5/ha1.jpg'
        ],
        details: '',
        bullet_points: [
          'Developed a prototype a gesture-controlled wifi lights system based on the Kinect depth-sensing camera and Lifx wifi light bulbs',
          'Supports 6 gestures that could be mapped to any supported command',
          'Supported light commands include on/off, all on/off, and brightness up/down',
          'The C# program utilizes Microsoft\'s project gesture API to detect gestures from the Kinect, then calls the Python Lifx driver through a REST API to execute the commands'
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
        card_bg: 'https://i.ibb.co/q5PqX5V/cryptoparking.png',
        images: [
          'https://s5.gifyu.com/images/crypto-parking.gif',
          'https://i.ibb.co/PrxMTTY/crypto1.jpg',
          'https://i.ibb.co/b1T86BQ/crypto4.jpg',
          'https://i.ibb.co/4gBm6Pp/crypto3.jpg'
        ],
        details: '',
        bullet_points: [
          'Developed a prototype parking lot management system that takes Bitcoin payments',
          'The system runs on the Raspberry Pi 3 connected to a mini touchscreen display',
          'Customers can park in a spot where a blocker is raised to block the car in after a small grace period, after that, they must pay to lower the blocker and get their car out',
          'Payments are in btc and the system provides a QR code for the customer to scan and send the btc',
          'The system uses the blockchain API to detect payments and the Bitstamp API to convert between btc and usd',
          'In any unexpected case, the user may tap the request assistance button that will automatically notify the system admin via email'
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
        card_bg: 'https://i.ibb.co/C23Bccj/bookface.png',
        images: [
          'https://i.ibb.co/C23Bccj/bookface.png'
        ],
        details: '',
        bullet_points: [
          'Website that pulls and categorizes posts from various Facebook groups to display in one unified feed with searching and filtering features',
          'The frontend is written in React and Redux and the backend is written in flask (python)',
          'The backend uses our Facebook driver that utilizes the Facebook API to pull posts from different groups and store them in a searchable database to serve to our users',
          'Provides a better way for users to browse posts from various Facebook groups, particularily useful when users are a part of multiple buy/sell and lost/found groups'
        ],
        technologies: [
          'react', 'redux', 'js', 'html', 'sass', 'python', 'rest'
        ],
        type: '',
        col_css: 'is-5'
        //link: 'https://bookface-cse210.web.app/'
      },
      {
        title: 'Wisconsin Racing',
        description: 'Steering Wheel controls and LCD screen for Wisconsin Racing\'s Formula SAE car',
        card_bg: 'https://i.ibb.co/k0Fmnsf/wr.png',
        images: [
          'https://i.ibb.co/LJBHrNY/wr1.jpg',
          'https://i.ibb.co/WptTknZ/wr2.jpg',
          'https://i.ibb.co/xH5bxM1/wr3.jpg',
          'https://i.ibb.co/BgLTsh8/wr4.jpg',
          'https://i.ibb.co/djyfsnb/wr5.jpg',
          'https://i.ibb.co/LdHCsWM/wr6.jpg'
        ],
        details: '',
        heading: 'Formula SAE Electric',
        bullet_points: [
          'Designed and develop the steering wheel LCD screen and controls for Wisconsin Racing\'s first ever Formula SAE Electric vehicle',
          'The LCD screen displays important information about the vehicle, such as battery level, speed, traction control, and motor temperatures using information from sensors',
          'Managed and programmed the CAN communication messages between different sensors and parts of the vehicle',
          'Worked closely with the driver to ensure that the display and controls are fine-tuned to their preferences'
        ],
        heading_2: 'Formula SAE Combustion',
        bullet_points_2: [
          'Designed and develop the steering wheel LCD screen and controls for the vehicle',
          'Created a wiring schematics diagram outlining every single electrical connection between parts of the vehicle',
          'Tested and debugged a safety feature that kills the throttle in case of an error'
        ],
        technologies: [
          'c', 'embedded', 'networks'
        ],
        type: '',
        col_css: 'is-4'
      },
      {
        title: 'Project RuFaS & IFSM @USDA-ARS',
        description: 'Dairy farm simulation program',
        card_bg: 'https://i.ibb.co/4SwcDLv/usda.png',
        images: [
          'https://i.ibb.co/4SwcDLv/usda.png'
        ],
        details: '',
        heading: 'IFSM',
        bullet_points: [
          'Cooperated with dairy scientists to modify IFSM, an existing dairy farm simulation program, to suit their research needs',
          'Implemented a new feature in IFSM that enables dairy scientists to enter a customized cow feeding ration for the simulation',
          'Implemented a new output selection module that allows users to extract only the desired results of the simulation and export them in desired formats such as csv'
        ],
        heading_2: 'RuFaS',
        bullet_points_2: [
          'Realizing the various architectural limitations of IFSM that made augmenting it extremely difficult, we started developing a brand new simulation program, RuFaS',
          'RuFaS is a modern dairy farm simulation program based on IFSM, written in Python and is a collaboration effort between researchers across multiple universities',
          'RuFaS is designed to be clean and modular, allowing researchers with less programming experience to be able to integrate their own simulation routines into the program with ease',
          'RuFaS has a clearly-defined and customizable output module that allows users with minimal programming experience to easily select output values and export as a wide variety of formats'
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
        card_bg: 'https://i.ibb.co/NYFFDtF/home24.jpg',
        images: [
          'https://i.ibb.co/NYFFDtF/home24.jpg'
        ],
        details: '',
        bullet_points: [

        ],
        technologies: [
          'vue', 'js', 'sass'
        ],
        type: '',
        col_css: 'is-4'
      },
      {
        title: 'DineIn',
        description: 'Restaurant management mobile application',
        card_bg: 'https://i.ibb.co/kynk7zF/dinein.png',
        images: [
          'https://i.ibb.co/kynk7zF/dinein.png'
        ],
        details: '',
        bullet_points: [
          'DineIn is a prototype mobile restaurant management application developed using Ionic and Angular',
          'Users are able to keep track of table occupancy, employee shifts/check-ins, waitlists, reservations, and table layouts',
          'Keeps track of important restaurant statistics',
          'Supports drag-and-drop table layout customization and sizing'
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
        card_bg: 'https://i.ibb.co/jDWzgvJ/ezchef.png',
        images: [
          'https://i.ibb.co/jDWzgvJ/ezchef.png',
        ],
        details: '',
        bullet_points: [
          'EZ-Chef is a prototype cooking social media website where users could view, create, and share recipes',
          'Provides step-by-step cooking instructions with timers for each dish on the website',
          'Users are able to comment on recipes and save them'
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
        card_bg: 'https://i.ibb.co/9NYsGHX/hangman.png',
        images: [
          'https://i.ibb.co/9NYsGHX/hangman.png'
        ],
        details: '',
        bullet_points: [
          'Developed a 2-player hangman game the BB15 circuit board written in C',
          'Player 1 begins by entering a guessword in morse code using the buttons, player 2 then tries to guess the word, entering the guess character in morse code using the button',
          'The game is played on 2 separate devices that communicate using the Xbee radio module'
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
        card_bg: 'https://i.ibb.co/DbwrWX0/surfstore.png',
        images: [
          'https://i.ibb.co/DbwrWX0/surfstore.png'
        ],
        details: '',
        bullet_points: [
          'Developed a distributed file storage system for a class project',
          'Uses XMLRPC for client-server and server-server communications',
          'Uses the RAFT protocol for leader election and distributed log concensus',
          'Files are stored as blocks and are accessed using the hash of the block as the key'
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
        card_bg: 'https://i.ibb.co/9cMbVpv/cuvet.png',
        images: [
          'https://i.ibb.co/9cMbVpv/cuvet.png'
        ],
        details: '',
        bullet_points: [

        ],
        technologies: [
          'vue', 'js', 'sass'
        ],
        type: '',
        col_css: 'is-5',
        link: 'https://cuvetlab.web.app/'
      },
      {
        title: 'Command Line GUI Synthesis',
        description: 'Research comparing 2 different designs of synthesized command line GUI',
        card_bg: 'https://i.ibb.co/qWwGcr8/gui.png',
        images: [
          'https://i.ibb.co/qWwGcr8/gui.png'
        ],
        details: '',
        bullet_points: [
          'Performed a user study evaluating the Effects of Tabbed and Non-Tabbed Designs for Command Line GUIs on Cognitive Load and Task Completion Time',
          'The system synthesizes a GUI from command line commands, and includes useful parameter descriptions to assist the user',
          'In the tabbed version, the commands are grouped using application tabs, whereas in the non-tabbed version, the commands are listed in the order which they should be executed',
          'The participants are 14 graduate students',
          'The experiment involves the participant performing simple command line tasks involving git and Docker',
          'Measurements taken include task completion time, NASA-TLX index, observations, and post-experiment interviews',
          'Results indicate that 78% of participants prefer the tabbed design as opposed to non-tabbed, but had no statistical significance',
          '71% of the participants indicated that they fould the tool useful and would use it in their actual workflows'
        ],
        technologies: [

        ],
        type: '',
        col_css: 'is-5'
      }
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
          // 'embedded',
          // 'networks'
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
