export const SKILLS = [
  { skill: "HTML/CSS/SCSS", level: 85 },
  { skill: "javascript", level: 85 },
  { skill: "ReactJS/VUE", level: 85 },
  { skill: "Redux/Vuex", level: 60 },
  { skill: "Vuetify/Bootstrap/Tailwind", level: 70 },
  { skill: "NodeJS", level: 80 },
  { skill: "MySQL/MongoDB", level: 70 },
  { skill: "VScode/WebStorm", level: 85 },
  { skill: "Git", level: 60 },
  { skill: "Photoshop/Illustrator", level: 50 }
];

export const PROJECTS = [
  {
    id: "1",
    title: "Amazoo",
    description: "An Amazon shopping cart mockup. ",
    img: require("./assets/img/amazoo.png"),
    language: ["React.js", "html", "css", "firebase"],
    link: "https://jerryliang613.github.io/amazoo"
  },

  {
    id: "2",
    title: "COVID-19 UPDATE",
    description: "COVID-19 cases update worldwide ",
    img: require("./assets/img/covid-19-update.png"),
    language: ["React.js", "html", "css", "leaflet", "chart.js"],
    link: "https://jerryliang613.github.io/covid-19-update/"
  },

  {
    id: "3",
    title: "iMessage Clone",
    description: "iMessage mockup with Redux ",
    img: require("./assets/img/imessage.png"),
    language: ["React.js", "Redux", "html", "css", "firebase"],
    link: "https://jerryliang613.github.io/imessage"
  },
  {
    id: "4",
    title: "Vidly",
    description: "This project is a demo from an online course.",
    img: require("./assets/img/vidly.jpg"),
    language: ["React.js", "Bootstrap", "Node.js", "mongodb", "heroku"],
    link: "https://jerryliang613.github.io/vidly"
  },
  {
    id: "5",
    title: "Tiktaak",
    description:
      "Tiktok mockup with backend by using node.js, express, mongodb ",
    img: require("./assets/img/tiktok.jpg"),
    language: [
      "React.js",
      "Node.js",
      "mongodb",
      "express",
      "material ui",
      "heroku"
    ],
    link: "https://jerryliang613.github.io/tiktok"
  },
  {
    id: "6",
    title: "Portfolio Mockup - SCSS",
    description: "This project is a demo from freeCodeCamp SASS tutorial",
    img: require("./assets/img/portfolio.jpg"),
    language: ["html", "css", "scss"],
    link: "https://jerryliang613.github.io/portfolio/dist"
  },
  {
    id: "7",
    title: "HTML5, CSS3",
    description:
      "This web page is created by using html5 & css3 with AWS Amplify",
    img: require("./assets/img/firstaws.jpg"),
    language: ["html5", "css3", "Github"],
    link: "https://jerryliang613.github.io/html-css/"
  },
  {
    id: "8",
    title: "A simple chatroom application",
    description: "Frontend: ReactJS. Backend: nodeJS/Express/Socket.io",
    img: require("./assets/img/chatbox.jpg"),
    language: ["ReactJS", "nodeJS", "socket.io", "heroku", "Github"],
    link: "https://chatbox20.herokuapp.com/"
  },
  {
    id: "9",
    title: "The Rice Cooker",
    description:
      "The Rice Cooker. An Asian cuisine resturant in North Melbourne.",
    img: require("./assets/img/thericecooker.jpg"),
    language: ["html", "css", "Worpress", "mySQL"],
    link: "http://thericecooker.com.au"
  },
  {
    id: "10",
    title: "Wintex Blinds",
    description: "A blind/curtain manufacturer and services provider.",
    img: require("./assets/img/wintex.jpg"),
    language: ["html", "css", "javascript", "Bootstrap"],
    link: "http://wintexblinds.com.au/"
  },

  {
    id: "11",
    title: "Family Tea House",
    description: "A Chinese restaurant in Prahran . Tri-fold takeaway menu.",
    img: require("./assets/img/family-tea-house.jpg"),
    imgs: [
      require("./assets/img/family-tea-house-1.jpg"),
      require("./assets/img/family-tea-house-2.jpg"),
      require("./assets/img/family-tea-house.jpg")
    ],
    language: ["Photoshop", "Illustrator"]
  },
  {
    id: "12",
    title: "Mingi Cafe",
    description: "An African cafe shop. Window sign.",
    img: require("./assets/img/mingi.jpg"),
    imgs: [require("./assets/img/mingi.jpg")],
    language: ["Photoshop", "Illustrator"]
  }
];

export const PROJECTS_FILTER = [
  "All",
  "React.js",
  "html",
  "css",
  "Bootstrap",
  "Worpress",
  "mySQL",
  "Node.js",
  "Redux",
  "scss",
  "Photoshop",
  "Illustrator"
];

export const DEFAULT_PAGESIZE = 4;
export const DEFAULT_PAGENUMBER = 1;
