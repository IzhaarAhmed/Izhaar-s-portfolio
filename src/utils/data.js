const joinWithPipe = (array) => array.join(" | ");
const projects = [
    {
      id: 1,
      title: 'StudySprint',
      tagLine: 'Your Daily Dose of Smart Learning.',
      description: "StudySprint is a cutting-edge web application designed to revolutionize the way students approach their studies. With a focus on enhancing productivity and efficiency, StudySprint offers a range of features that empower students to optimize their learning experience. <br/><br/> The platform provides a comprehensive suite of tools, including a Pomodoro timer to help students manage their study sessions effectively, a note-taking feature for organized and accessible study materials, and a quiz section to reinforce learning through interactive assessments. Additionally, StudySprint offers a personalized dashboard that allows users to track their progress and set study goals.",
      techStack: ['React.js', 'Low-latency Applications', 'Tailwind CSS', 'Babel', 'Netlify', 'TypeScript', 'Next.js'],
      company: 'Izhaar develops',
      logo: 'https://ik.imagekit.io/nxetcvdg2/ChatGPT%20Image%20Jul%2010,%202025,%2002_43_41%20PM.png?updatedAt=1752138869417',
      countries: 'Global',
      language: 'English',
      category: 'Education',
      platforms: ['Web'],
      screenshots: [
        'https://ik.imagekit.io/nxetcvdg2/image.png?updatedAt=1752146645445',
        'https://ik.imagekit.io/nxetcvdg2/image(1).png?updatedAt=1752146867013',
        'https://ik.imagekit.io/nxetcvdg2/image.png?updatedAt=1752146961626',
        
      ],
      link: 'https://studysprints.netlify.app/',
      banner: 'https://ik.imagekit.io/nxetcvdg2/Image.jfif?updatedAt=1752141095148'
      
    },
    {
      id: 6,
      title: 'Academic Ally',
      tagLine: 'Your go-to source for academic resources!',
      description: "Academic Ally is a comprehensive platform designed to empower students in their academic pursuits and support them throughout their educational journey. we understand the challenges faced by students during their academic journey. We recognize that engineering students require specialized support to excel in their courses, and that's why we have dedicated our platform exclusively to their needs. <br/><br/> Our platform offers a vast collection of academic resources, we provide Academic notes, Syllabus, Question Papers and Other Resources. In addition to the rich collection of educational materials, we also offer a range of valuable features to enhance your learning experience.",
      techStack: ['Javascript','React-Native', 'Firebase', 'react-redux'],
      company: 'Izhaar develops',
      logo:'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/ic_launcher-web.png',
      countries: 'Global',
      language: 'English',
      category: 'Education',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/home.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/search.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/seekhub.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/seekhub%20-%20Request.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/pdfViewer.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/allyBot.png', 
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/pdfViewer.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/profile.png'
      ],
      link: 'https://play.google.com/store/apps/details?id=com.academically',
      banner: 'https://ik.imagekit.io/affan/Projects/Academic%20Ally.png?updatedAt=1699218514808'
    },
    {
      id: 7,
      title: 'Academic Ally Web App',
      tagLine: 'Your go-to source for academic resources!',
      description: "Academic Ally Web App is an expansion of the acclaimed Android application, designed to cater to the diverse needs of desktop users. It has not only broadened the reach of Academic Ally but has also cultivated a community of over 600 users, with an impressive 400+ engaging with the app regularly.",
      techStack: ['Javascript', 'React', 'Material UI', 'Firebase', 'react-redux'],
      company: 'Defun',
      logo:'https://ik.imagekit.io/affan/Projects/Academic%20ally%20app/ic_launcher-web.png',
      countries: 'Global',
      language: 'English',
      category: 'Education',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/Academic%20Ally%20Web%20App/devices_mockup_6.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20Ally%20Web%20App/devices_mockup_3.png',
        'https://ik.imagekit.io/affan/Projects/Academic%20Ally%20Web%20App/ddd.png',
      ],
      link: 'https://academic-ally.netlify.app',
      banner: 'https://ik.imagekit.io/affan/Projects/Academic%20Ally%20Web%20App/2.png'
    },
    {
      id: 9,
      title: 'Worketzy',
      tagLine: 'Hiring Just Got Better!',
      description: "This app was conceived as part of a mini-project with a singular goal: to revolutionize and simplify the hiring process. As the mastermind behind this endeavor, I crafted a platform that streamlines every aspect of hiring, making it not just easy but better.",
      techStack: ['React-Native', 'Firebase', 'Expo', 'Javascript'],
      logo:'https://ik.imagekit.io/affan/Projects/worketzy/Worketzy.png',
      company: 'Izhaar develops',
      countries: 'Global',
      language: 'English',
      category: 'Career Services',
      platforms: ['Android', 'iOS'],
      screenshots: [
        'https://ik.imagekit.io/affan/Projects/worketzy/1.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/3.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/5.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/6.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/7.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/8.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/9.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/10.png',
        'https://ik.imagekit.io/affan/Projects/worketzy/1.png',
      ],
      link: 'https://github.com/IzhaarAhmed/Worketzy',
      banner: 'https://ik.imagekit.io/affan/Projects/worketzy/4.png'
    },
    // {
    //   id: 11,
    //   title: 'JawesomeScript',
    //   tagLine: 'Unleashing JavaScript Awesomeness, One Project at a Time.',
    //   description: "JawesomeScript is your go-to platform for exploring a curated collection of basic JavaScript projects. Dive into the world of coding creativity and discover the awesomeness of JavaScript through simple yet impactful projects. Whether you're a beginner or an experienced developer, JawesomeScript has something for everyone. Elevate your JavaScript skills and embark on a journey of continuous learning with our diverse range of projects. Join the community of JavaScript enthusiasts, and let's make coding more awesome together!",
    //   techStack: ['HTML', 'CSS', 'Javascript'],
    //   logo:'https://ik.imagekit.io/affan/Projects/JawesomeScript/JavaScript-logo.png',
    //   company: 'Defun',
    //   countries: 'Global',
    //   language: 'English',
    //   category: 'Programming',
    //   platforms: ['Android', 'iOS'],
    //   screenshots: [
    //     'https://ik.imagekit.io/affan/Projects/JawesomeScript/devices_mockup_6.png',
    //     'https://ik.imagekit.io/affan/Projects/JawesomeScript/projects.png',
    //     'https://ik.imagekit.io/affan/Projects/JawesomeScript/todo.png'
    //   ],
    //   link: '',
    //   banner: 'https://ik.imagekit.io/affan/Projects/JawesomeScript/6.png'
    // }
  ];
  
  const aboutMe = {
    name: 'Mohammad Izhaar Ahmed',
    bio: 'Full Stack Developer | Software Development Instructor',
    phone: '+91 96660 41007',
    skills: [
      // Development skills
      'HTML', 'CSS', 'JavaScript', 'Python', 'C', 'C++', 'SQL', 'Bootstrap',
      'React.js', 'React Native', 'Data Structures & Algorithms',
      // Technical Tools
      'VS Code', 'Power BI', 'MS Tools', 'Canva', 'Adobe Photoshop', 'Figma',
      // Soft Skills
      'Mentorship', 'Team Leadership', 'Problem Solving', 'Project Management',
      'Cross-functional Collaboration', 'Communication'
    ],
    education: {
        masters: {
            degree: "Master's Degree in Computer Science",
            school: "ISL College",
            graduationYear: 2024,
        },
        bachelors: {
            degree: "Bachelor's Degree in Computer Science",
            school: "AVN Institute of Engineering and Technology, Hyderabad",
            graduationYear: 2023,
        }
    },
    languages: {
      english: 'Proficient',
      hindi: 'Native',
      telugu: 'Proficient'
    },
    achievements: [
      'Secured 2nd position in HACKATHON 2022',
      'Best Project 2023 in CSE branch',
      'AVNIET Computer Society Vice Chair 2022'
    ],
    email: "izhaarahmed794@gmail.com",
    web: 'https://izhaarahmed.in',
    webName: 'izhaarahmed.dev',
    image: 'https://ik.imagekit.io/nxetcvdg2/9D1DEE6B-39BA-4AA5-B0D6-2998160E983F.JPEG?updatedAt=1751622350743'
  };
  
  const socialLinks = {
    email: "izhaarahmed794@gmail.com",
    github: 'https://github.com/IzhaarAhmed',
    linkedin: 'https://linkedin.com/in/izhaarahmed',
    resume: "https://ik.imagekit.io/affan/Projects/Izhaar/Izhaar's_Resume.pdf?updatedAt=1750854397547",
    calendly: 'https://calendly.com/izhaar-ahmed'
  };

  const eduBg = [
    {
      title: "Master's Degree in Computer Science",
      desc: "ISL College",
    },
    {
      title: "Bachelor's Degree in Computer Science",
      desc: "AVN Institute of Engineering and Technology, Hyderabad",
    }
  ];

  projects.forEach((project) => {
    project.technologiesJoined = joinWithPipe(project.techStack);
  });
  
  export { projects, aboutMe, socialLinks, eduBg };
  
