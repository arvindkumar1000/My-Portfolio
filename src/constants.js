// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png'
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's




// Project Section Logo's
import chatapp from './assets/work_logo/chatAppIMg.jpeg';
import EcoImg from './assets/work_logo/EcoIMg.jpeg';
import GymImg from './assets/work_logo/gym.jpeg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Core Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      
    ],
  },
];

  export const experiences = [
   
    {
      id: 0,
      role: "Frontend Intern",
      company: "Vikasit Solution",
      date: "June 2023 - Nov 2023",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, reactjs, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "react js",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
   
    {
      id: 1,
      school: "Bharamanand Mahavidyalaya College B.S.R ",
      date: "July 2019 - July 2022",
      desc: "I completed my Bachelor Computer of Applications (B.C.A) from Bharamanand College, Bulandshahr. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor Computer of Applications - BCA (Computer Application)",
    },
    {
      id: 2,
      school: "RSS INTER COLLEGE ANCHRU KALAN BULANDSHAHR U.P",
      date: "Apr 2018 - March 2019",
      desc: "I completed my class 12 education from RSS INTER COLLEGE BULANDSHAHR, under the U.P board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
      school: "SKD PUBLIC SCHOOL SALEMPUR BULANDSHAHR U.P",
      date: "Apr 2016 - JUNE 2017",
      desc: "I completed my class 10 education from SKD Public School, BULANDSHAHR, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Project-Ecommerce",
      description:
        " Created a responsive shopping web app using React, CSS, and JavaScript. it’s a full mobile responsive.",
      image: EcoImg,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/arvindkumar1000/Project-Ecommerce",
      webapp: "https://project-ecommerce-three.vercel.app/",
    },
    {
      id: 1,
      title: "GYM Management System",
      description:
        "The Gym Management System is a full-stack web application designed to streamline gym operations. It includes features like member registration, attendance tracking, subscription management, and admin control. Built with React.js, Node.js, Express.js, and MongoDB, it ensures efficient data handling, user-friendly interface, and secure management of gym-related activities. But I have frontend part complete and i am currently working on backend part.",
      image: GymImg,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/arvindkumar1000/GymManagementSystem",
      webapp: "https://gym-management-system-green.vercel.app/",
    },
    {
      id: 2,
      title: "Chat Application",
      description:
        "To develop a real-time chat application that allows users to send and receive messages instantly. The application will support user authentication, private and group chats, message history, and multimedia sharing.",
      image: chatapp,
      tags: ["React JS", "API", "MongoDb", "CSS","Node.js","Express.js", "JavaScript"],
      github: "https://github.com/arvindkumar1000/chat-Application_project",
      
    },
    
  ];  