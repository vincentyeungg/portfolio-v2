// file stores all the static data for the app, need to implement better way next time

let descriptionData = {};

// modify data or add more here
descriptionData.aboutMe = {
  "description-1":
    "I'm a detail oriented software engineer passionate about building scalable applications.",
  "description-2":
    "I'm a recent computer engineering graduate from Toronto Metropolitan University (formely Ryerson University). I have experience building software applications for the web, from frontend applications to backend services hosting APIs.",
  "description-3":
    "I love learning about building scalable applications. I'm always looking for opportunities to work on different projects, learning about different frameworks and new technologies. At the end of the day, my goal is to learn and create great applications that users will want to use.",
  "description-4":
    "I am currently working as a backend software engineer at Cercacor in the Vancouver office. The main technologies I work with day to day are SQL, Postgresql, Javascript with NodeJS and Java with Quarkus.",
};

descriptionData.skills = [
  { id: "python", skill: "Python" },
  { id: "java", skill: "Java" },
  { id: "javascript", skill: "Javascript" },
  { id: "c#", skill: "C#" },
  { id: "nodejs", skill: "NodeJS" },
  { id: "quarkus", skill: "Quarkus" },
  { id: "sql", skill: "SQL" },
  { id: "postgresql", skill: "Postgresql" },
  { id: "mongodb", skill: "MongoDB" },
  { id: "flask", skill: "Flask" },
  { id: "html", skill: "HTML" },
  { id: "css", skill: "CSS" },
];

descriptionData.tools = [
  { id: "git", tool: "Git + GitHub" },
  { id: "postman", tool: "Postman" },
  { id: "docker", tool: "Docker" },
];

descriptionData.experiences = [
  {
    id: "cercacor",
    position: "Backend Software Engineer",
    company: "Cercacor",
    location: "Vancouver, British Columbia",
    description:
      "Developed new social feature in application to allow members to participate in part of teams, complete weekly challenges and tally user/team progress. Also developed an internal task scheduler microservice to support multiple scheduled jobs across multiple services. Primarily worked and developed backend REST APIs for separate services.",
    duration: "September 2022 - present",
  },
  {
    id: "sylogist",
    position: "Web Developer",
    company: "pavliks.com by Sylogist",
    location: "Barrie, Ontario",
    description:
      "Participated in portal solutions using Sitefinity CMS, customizing web pages using JavaScript and CSS. Primary focus on The Portal Connector support team, and frontend development. Handle support, forums and participating in daily Q&A sessions for The Portal Connector product. Troubleshooting Dynamics 365 and Sitefinity CMS portals for clients.",
    duration: "August 2021 - August 2022",
  },
  {
    id: "avaya",
    position: "Software Integration Engineer Intern",
    company: "Avaya",
    location: "Markham, Ontario",
    description:
      "Developed and maintained automation code base for Avaya Spaces and Avaya Accounts. Ran daily automation test scripts, as well as performing manual testing in various browsers to ensure cross-browser compoatibility. Automated test cases were written and maintainted in C#, and later on developed using Cypress.io. Collaborated closely with other members of the integration team, as well as the development team to ensure product quality and to meet deadlines for clients.",
    duration: "May 2019 - August 2020",
  },
];

descriptionData.projects = [
  {
    id: "menu_creator",
    title: "Menu Creator",
    description:
      "This is a web application built on MERN stack which allows users to create different food menus. It has support for user authentication using token validation, API route protection, and persistent image uploads with AWS services.",
    techUsed: ["JavaScript", "React.js", "node.js", "MongoDB", "AWS S3"],
    codeLink: "https://github.com/vincentyeungg/menu-creator",
    demoLink: "https://mern-menu-creator.web.app/",
  },
  {
    id: "yoga_instructor",
    title: "Yoga Instructor Web Application",
    description:
      "This is a web application that provides users with a real-time yoga instructor capable of teaching 4 different yoga poses with an average accuracy of 84%. This project was done in a group of 4 for our semester project. It also has error tracking and will show indicators letting users know of such errors in performing the poses.",
    techUsed: ["JavaScript", "ml5.js", "HTML5", "CSS3", "PoseNet"],
    codeLink:
      "https://github.com/VatsalShreekant/Computer-Vision-AI-Human-Pose-Estimation",
    demoLink:
      "https://vatsalshreekant.github.io/Computer-Vision-AI-Human-Pose-Estimation/index.html",
  },
  {
    id: "nba_db",
    title: "NBA 2018-2019 Season Database",
    description: "A simple database design of an NBA season.",
    techUsed: ["Python", "Beautiful Soup", "Pandas", "Requests", "PostgreSQL"],
    codeLink: "https://github.com/vincentyeungg/NBA-2018-2019-Season-Database",
  },
  {
    id: "poker_bot",
    title: "Discord Poker Bot",
    description:
      "A Python application that automates a Texas Hold'em poker game using OOP principles and Discord.py library.",
    techUsed: ["Python", "Discord.py", "PyTest", "Docker", "GitHub Actions"],
    codeLink: "https://github.com/vincentyeungg/poker-discord-bot",
  },
];

export default descriptionData;
