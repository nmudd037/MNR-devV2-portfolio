import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nithish - Web Developer | Portfolio',
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Web developer with over 2 + years of experience in designing and developing applications using HTML5, CSS3, JavaScript and React',
  keyword: 'Nithish, portfolio, web developer, javascript, react',
  image: 'https://raw.githubusercontent.com/nmudd037/previewImage/main/previewimg.jpg',
  url: 'https://nithishrm-dev-v2portfolio.netlify.app/',
};

// HERO DATA
export const heroData = {
  title: "Hi, my name's",
  name: 'Nithish,',
  subtitle: 'A Web Developer, who likes to make some stuff with the code.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'A dynamic and detail-oriented Web Developer with over 2 + years of experience in designing and developing web-applications.  Hands-on experience in implementing highly-responsive UI components using concepts of React JS and Redux. Proficient in translating designs and wireframes into high-quality code using modern concepts of HTML5, CSS3/SASS, Java Script, DOM, JSON, React JS, Redux.',
  paragraphTwo:
    'Adept at monitoring and maintaining frontend performance, troubleshooting and debugging the same to bolster overall performance. Passionate about building scalable software, user-friendly solutions effectively and efficiently. Learning everyday to grow professionally in the field of web development.',
  paragraphThree: 'Take a look at some of my most recent personal projects below.',
  cta: 'Check My Work',
  resume: 'https://drive.google.com/file/d/1NXXuFm15_N0GIHQmrnkKQ1ORujqfqiJn/view?usp=sharing',
  skills: [
    {
      id: nanoid(),
      name: 'Html5',
      color: '#E34F26',
    },
    {
      id: nanoid(),
      name: 'Css3',
      color: '#1572B6',
    },
    {
      id: nanoid(),
      name: 'Sass',
      color: '#CC6699',
    },
    {
      id: nanoid(),
      name: 'Bootstrap',
      color: '#7952B3',
    },
    {
      id: nanoid(),
      name: 'Javascript',
      color: '#F7DF1E',
    },
    {
      id: nanoid(),
      name: 'ReactJs',
      color: '#61DAFB',
    },
    {
      id: nanoid(),
      name: 'Redux',
      color: '#764ABC',
    },
    {
      id: nanoid(),
      name: 'ReactRouter',
      color: '#CA4245',
    },
    {
      id: nanoid(),
      name: 'Gatsby',
      color: '#663399',
    },
    {
      id: nanoid(),
      name: 'NodeJS',
      color: '#339933',
    },
    {
      id: nanoid(),
      name: 'Express',
      color: '#ffffff',
    },
    {
      id: nanoid(),
      name: 'NPM',
      color: '#CB3837',
    },
    {
      id: nanoid(),
      name: 'Mongodb',
      color: '#47A248',
    },
    {
      id: nanoid(),
      name: 'Postgresql',
      color: '#336791',
    },
    {
      id: nanoid(),
      name: 'Postman',
      color: '#FF6C37',
    },
    {
      id: nanoid(),
      name: 'Git',
      color: '#f05032',
    },
    {
      id: nanoid(),
      name: 'Github',
      color: '#ffffff',
    },
    {
      id: nanoid(),
      name: 'VisualStudioCode',
      color: '#007ACC',
    },
    {
      id: nanoid(),
      name: 'ApolloGraphQL',
      color: '#311C87',
    },
    {
      id: nanoid(),
      name: 'Jest',
      color: '#C21325',
    },
    {
      id: nanoid(),
      name: 'Webpack',
      color: '#8DD6F9',
    },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project0.jpg',
    title: 'My Portfolio',
    info:
      'A minimal Single Page Application(SPA) template for my portfolio that is fully responsive and SEO optimized, developed using Gatsby and Bootstrap. Implemented image optimization using gatsby-images and modern UI design and reveal animations using react-reveal.',
    info2:
      'Used BEM naming convention and SASS preprocessor for more readable and maintainable CSS structure.',
    url: '', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/MNR-devV2-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Contact Keeper',
    info:
      'A full-stack web application using the MERN stack that lets user to save and keep track of their contacts. Implemented Context API and useReducer hook to create action creators and reducers and routing with React-Router.',
    info2:
      'Developed a RESTful API and server to handle the routes using the Node.js and Express with MongoDB(MongooseJS ODM) as the database for the Contact Keeper Web App. Implemented Authentication and Authorization using JWT.',
    url: 'https://contact-keeper-react.vercel.app/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/Contact-Keeper-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'FRWA Web Application',
    info:
      'A full-stack web application using the PERN stack that lets user to submit an image through url to detect the human faces in the image using the Clarifai API. Implemented Context API and useReducer hook to create action creators and reducers and routing with React-Router.',
    info2:
      'Developed a RESTful API and server to handle the routes using the Node.js and Express with PostgreSQL(Knex query builder) as the database for the Face Recognition Web App. Implemented Authentication and Authorization using JWT.',
    url: 'https://frwa-react.vercel.app/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/FRWA-React', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'IT Logger',
    info:
      'A React application that helps you to keep track of your IT department Logs. Used Materialize CSS for styling components and implemented state management using Redux and implemented a fake REST API and server for making HTTP requests using JSON Server.',
    info2: '',
    url: 'https://it-logger-react-redux.vercel.app/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/IT-Logger-react-redux', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Github Finder',
    info:
      'A ReactJS based web application built using Github API that lets you to search github users. Implemented React Context and Hooks API for state management in functional components and routing with React-Router.',
    info2: '',
    url: 'https://github-finder-ashy.vercel.app/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/githubFinder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'URL Shortener',
    info:
      'A full-stack web application using the MERN stack that lets user to get a shorter link and that can be used to redirect to their web site. Also, provides analytics like number of visitors to their shorter link. Implemented Context API and useReducer hook to create action creators and reducers.',
    info2:
      'Developed a simple RESTful API and server to handle the routes using the Node.js and Express with MongoDB(MongooseJS ODM) as the database.',
    url: 'https://urlshortener-mnr.vercel.app/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/urlShortener', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.jpg',
    title: 'Forkify Web App',
    info:
      'A MVC architecture based web application that loads over a million recipes from a 3rd party API using the fetch API. Implemented features like event handling using the publisher-subscriber pattern, pagination, bookmarks also stored them using the localStorage, developed a DOM updating algorithm to re-render only updated elements and a feature to upload new custom recipes.',
    info2:
      'Deployed the application to Netlify and implemented Continuous Integrations through GitHub.',
    url: 'https://forkify-recipedirectory-mnr.netlify.app/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/forkify-recipeDirectory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project7.jpg',
    title: 'Natours - API',
    info:
      'A Dynamic Server-Side Rendered web application developed using Node.js, Express, Mongoose, MongoDB and Pug.js (Templating Engine) that lets user to look at available tours and allow them to book the tours.',
    info2:
      'Implemented emails using SendGrid, payments using Stripe API, implemented authentication, authorization and security using JWT and bcrypt. Developed REST based API and used MVC architecture for Express App. Deployed the application and API to Heroku.',
    url: 'https://natours-mnr.herokuapp.com/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/Natours-Node', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project8.jpg',
    title: 'Nexter - Grid Layout',
    info:
      'A fully responsive single-page static website developed to conceptualize and understand the CSS Grid page layout with advanced CSS3 features like Media Queries, Transforms, and Animations.',
    info2:
      'Used SASS preprocessor with features like variables, nesting rules, mixins, modules and inheritance for more readable and maintainable CSS structure.',
    url: 'https://nmudd037.github.io/nmudd037.github.io.nexter-css3/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/nmudd037.github.io.nexter-css3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project9.jpg',
    title: 'Trillo - Flexbox Layout',
    info:
      'A fully responsive single-page static website developed to conceptualize and understand the CSS Flexbox page layout with advanced CSS3 features like Media Queries, Transforms, and Animations.',
    info2:
      'Used SASS preprocessor with features like variables, nesting rules, mixins, modules and inheritance for more readable and maintainable CSS structure.',
    url: 'https://nmudd037.github.io/nmudd037.github.io-trillo-css2/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/nmudd037.github.io-trillo-css2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project10.jpg',
    title: 'Natours - Float Layout',
    info:
      'A fully responsive static website developed to conceptualize and understand the CSS Float page layout with advanced CSS3 features like Media Queries, Transforms, Animations and Responsive Images.',
    info2:
      'Used BEM naming convention and SASS preprocessor for more readable and maintainable CSS structure.',
    url: 'https://nmudd037.github.io/nmudd037.github.io.natours-css1/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/nmudd037.github.io.natours-css1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project11.jpg',
    title: 'Bankist',
    info:
      'Developed a static website with modern JavaScript based features like smooth scrolling, tabbed components, page navigation effects, sticky navigation, revealing elements on scroll, lazy loading images, and a slider component using DOM manipulation, Intersection Observer API and Event Delegation.',
    info2: '',
    url: 'https://nmudd037.github.io/nmudd037.github.io-JSDOM-and-Events-Bankist/', // if no url, the button will not show up
    repo: 'https://github.com/nmudd037/nmudd037.github.io-JSDOM-and-Events-Bankist', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's build together!",
  email: 'nithishrmdev2@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nmudd037',
    },
  ],
};
