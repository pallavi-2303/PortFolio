const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Achievement",
    link: "#achievements",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 8, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Internships & Freelance Roles" },
  { value: 12, suffix: "+", label: "Technical Skills & Stacks" },
  { value: 95, suffix: "%", label: "Client/Team Satisfaction" },
];


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js",
    imgPath: "/images/logos/image.png",
  },
  {
    name: "TypeScript",
    imgPath: "/images/logos/typescript.png",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/javascript.svg",
  },
  {
    name: "Tailwind CSS", 
    imgPath: "/images/logos/tailwindcss.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Express.js",
    imgPath: "/images/logos/express.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Java",
    imgPath: "/images/logos/java-original.svg",
  },
  {
    name: "SQL / PostgreSQL",
    imgPath: "/images/logos/postgresql.svg",
  },
  {
    name: "Git / GitHub",
    imgPath: "/images/logos/git.svg",
  },
   {
    name: "Mongo-db",
    imgPath: "/images/logos/mongodb_thumbnail.webp",
  },
];

const techStackIcons = [
  {
    name: "React ",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
 
];

const expCards = [
  {
   imgPath: "/images/eternatek-logo.svg",
    logoPath: "/images/joblogo/c.jpg",
    title: "SoftWare Developer Intern",
    date: "May 2023 - Present",
    company:"Eternatek Technologies",
     review: "Currently contributing to scalable frontend and backend development. Gaining hands-on experience in real-time data systems and collaborative product development.",  
    responsibilities: [
      "Built a Graduation Dashboard using React.js and Tailwind CSS for 500+ students, enabling real-time academic progress tracking; delivery is on track within 2 weeks.",
      "Developed scalable backend services using Node.js and PostgreSQL for authentication, quizzes, course APIs, and feedback, ensuring smooth rollouts and handling high user load efficiently.",
      "Implemented an LLM-powered quiz generator, projected to cut manual quiz creation time by 40%, and drove end-to-end testing and iteration with fast-paced, Uber-style ownership.",
    ],
  },
  {
     imgPath: "/images/logos/panha.png",
   logoPath: "/images/joblogo/p.jpg",
    title: "Full Stack Developer Intern",
    date: "Apr 2025 - Present",
    company:"Panha",
      review: "Actively involved in building core features of the platform, collaborating with cross-functional teams, and delivering production-ready components during the startup's MVP phase.",
    responsibilities: [
      "Designed and developed a responsive landing page using Figma, React.js, and Tailwind CSS, increasing user interaction time by 30% during the pre-launch phase.",
      "Implemented authentication features (login/signup) using Node.js, Express, and JWT, reducing user login errors by 25% and improving security.",
      "Collaborated with backend and design teams to translate Figma wireframes into scalable components, achieving 100% cross-device responsiveness and reducing page load time by 35%.",
    ],
  },
  {
    imgPath: "/images/ceeras.svg",
     logoPath: "/images/joblogo/e.jpg",
    title: "Frontend Developer Intern",
    date: "Feb 2025 - Apr 2025",
    company:"Ceeras",
      review: "Pallavi delivered all assigned responsibilities effectively and to our satisfaction, reflecting her competence and dedication.", 
     certificate:"https://drive.google.com/file/d/1YpGysFBI7DpfCFMaBgZw8_UoYjT9BXz2/view",
    responsibilities: [
      "Enhanced the UI performance by 30% by optimizing React component rendering and state management.",
      "Implemented responsive design, increasing mobile usability by 40% and reducing bounce rates by 20%  and maintained 10+ reusable React components, improving development efficiency.",
      "Collaborated with backend developers to improve API integration, leading to 25% faster data fetching.",
    ],
  },
   {
     imgPath: "/images/logos/aicte.png",
   logoPath: "/images/joblogo/a.jpg",
   
    title: "Blockchain Technology (Virtual InternShip)",
    date: "Jan 2025 - Feb 2025",
     review: "Pallavi successfully completed the internship on Blockchain Technology. Her dedication and ability to understand complex concepts were appreciated.",  
    company:"AICTE and VOIS for Tech University Program",
   certificate:"https://drive.google.com/file/d/1mqaWIVyctn675dEAjxt6jDX3-jbms4-H/view?usp=drivesdk",
    responsibilities: [
      "Explored core blockchain concepts, including consensus mechanisms, cryptographic hashing, and decentralized storage, to understand secure data transmission in distributed systems.",
      "Worked with smart contracts and dApps, gaining practical experience in how decentralized applications operate on blockchain networks and how contracts are executed autonomously.",
      "Analyzed real-world use cases of blockchain technology, researching applications across industries and studying emerging trends in Web3, DeFi, and digital identity.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/github.png",
    url:"https://github.com/pallavi-2303",
  },
  {
    name: "LeetCode",
    imgPath: "/images/leetcode.png",
    url:"https://leetcode.com/u/pallavi_singh14/"
  },
  {
    name: "GFG",
    imgPath: "/images/geek.png",
    url:"https://www.geeksforgeeks.org/user/singhpallav8wbw/"
  },
  {
    name: "Linkedin",
    imgPath: "/images/linkedIn.png",
    url:"https://www.linkedin.com/in/pallavi-singh-8241a7255/"
  },
   {
    name: "CodeForces",
    imgPath: "/images/codeforce.png",
    url:"https://codeforces.com/profile/Pallavi_kumari14"
  },
];
const projectData = [
  {
    title: "Snapcast",
    description:
      "Full-stack screen recording and video sharing platform with Better Auth and Cloudinary, featuring AI transcripts, video playback, and responsive UI.",
    image: "/images/snapcast.png", // Replace with actual screenshot path
    liveLink: "https://screen-recording-vedio-sharing-tu8j.vercel.app/", // Update if available
    githubLink: "https://github.com/pallavi-2303/Screen_recording_vedio_sharing",
  },
  {
    title: "AI Interviewer",
    description:
      "AI-powered mock interview assistant with real-time feedback, secure authentication, and support for multiple languages using OpenAI, MongoDB, and Express.js.",
    image: "/images/AIInterviewer.png",
    liveLink: "https://aiinterviewer-87mp.onrender.com/",
    githubLink: "https://github.com/pallavi-2303/AiInterviewer",
  },
  {
    title: "SkillSathi AI – Intelligent Learning Platform",
    description:
   "Built for EY Techathon 5.0, this AI-based platform includes skill assessments, personalized and gamified learning, gap identification, a WebSocket-powered community, progress tracking, and course recommendations.",
   image: "/images/skillSathi.png",
    liveLink: "https://skill-sathi-ai.vercel.app/",
    githubLink: "https://github.com/utkarsh-2033/SkillSathiAi",
  },
  {
    title: "Learning Management System (LMS)",
    description:
      "Full-featured LMS that supports video lessons, quizzes, progress tracking, and admin dashboards. Built using React, Node.js, and MongoDB.",
    image: "/images/lms.png",
    liveLink: "https://fullstack-lms2.onrender.com/",
    githubLink: "https://github.com/pallavi-2303/FullStack_LMS",
  },
   {
    title: "GSAP Cocktail – Cinematic Scroll Experience",
    description:
   "A visually stunning, scroll-driven website built with React, Tailwind CSS, and GSAP. Features cinematic animations like SplitText, scroll-synced video, and a custom carousel for immersive storytelling.",
   image: "/images/gsap.png",
    liveLink: "https://gsap-cock-tail.vercel.app/",
    githubLink: "https://github.com/pallavi-2303/Gsap_CockTail",
  },
   {
    title: "InstaClone",
    description:
  "A full-stack Instagram clone with React, Redux, Node.js, and WebSocket. Supports auth, posts, likes, comments, and real-time notifications with a responsive Tailwind UI and cloud storage.",
   image: "/images/insta2.png",
    liveLink: "https://fullstack-instaclone.onrender.com/",
    githubLink: "https://github.com/pallavi-2303/FullStack_InstaClone",
  },
    
];
const topRow = [
  {
    title: "Google Girl Hackathon 2025 Semi-Finalist",
    description:
      "Top 5% among 58,000 participants. Advanced to Round 3 (final round).",
  },
  {
    title: "EY Techathon 5.0 (Top 5%)",
    description:
      "Led a team selected from 50,000+ participants to present a personalized AI/ML-based learning platform.",
  },
  {
    title: "Merit Certificate (Top 1%)",
    description: "Among 5,00,000+ participants in NanhiK Young India Tours.",
  },

];
const bottomRow=[
   {
    title: "SheFi Scholar 2025",
    description:
      "Awarded a full scholarship for Web3 learning as part of the SheFi program.",
  },
  {
    title: "Academic Excellence",
    description:
      "Secured 9th rank in Gautam Buddha District (Class 10) with INR 25,000 prize and tablet.",
  },
]
const resumeUrl="https://drive.google.com/file/d/1nmBH9wAlTIQvZqxN11X3CfmC0ijSuU2M/view?usp=drivesdk"
export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  resumeUrl,
  projectData,
  topRow,
  bottomRow
};