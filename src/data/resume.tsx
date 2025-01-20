import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pugazhenthi",
  initials: "S",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "React.js Enthusiast focused on delivering seamless user experiences. I enjoy turning ideas into functional, interactive web applications with clean and modern designs.",
  summary:
    "I am a passionate Web Developer specializing in React.js. With a strong foundation in front-end development, I thrive on building dynamic and responsive web applications that provide seamless user experiences.",
  avatarUrl: "/pugazh.jpeg",
  skills: [
    "React",
    "Next.js",
    "Angular",
    "Typescript",
    "javascript",
    "Node.js",
    "Express js",
    "mongoDB",
    "msSQL",
    "Flutter",
    "Java",
    "Dart"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pugazhenthi27s@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pugazh001",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pugazhenthi-s-765b6b266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "/",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "/",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Akilam Technology",
      href: "https://www.akilamtechnology.com/",
      badges: [],
      location: "Trichy-TamilNadu",
      title: "Web Developer",
      logoUrl: "/akilam.png",
      start: "24 June 2024",
      end: "Present",
      description:
        "Developed and maintained scalable web applications using React.js, delivering high-quality user interfaces and seamless experiences.Built cross-platform mobile applications using Flutter, ensuring consistency and performance across iOS and Android platforms.",
    },

  ],
  education: [
    {
      school: "Care Group of Institutions",
      href: "https://care.ac.in/engineering/",
      degree: "Bachelor of Engineering in Computer Science and Engineering(CSE)-76%",
      logoUrl: "/care.webp",
      start: "2020",
      end: "2024",
    },
    {
      school: "Govt HighSec School-Arasunilaipalaiyam",
      href: "",
      degree: "Higher Secondary Certificate-76%",
      logoUrl: "/school.gif",
      start: "2019",
      end: "2020",
    },
    {
      school: "Govt HighSec School-Arasunilaipalaiyam",
      href: "",
      degree: "Secondary School Leaving Certificate-81%",
      logoUrl: "/school.gif",
      start: "2017",
      end: "2018",
    },
   
  ],
  projects: [
    {
      title: "Last Chance Metal Scrap",
      href: "https://lastchancemetalscrap.com/",
      dates: "Jan 2025",
      active: true,
      location:"",
      description:
        "Designed and developed a static website for showcasing information and services related to metal scrap collection and recycling using React.js.",
      technologies: [
        "React Js",
        "MUI",
        "nodemailer",
     
      ],
      links: [
        {
          type: "Website",
          href: "https://lastchancemetalscrap.com/",
          icon: <Icons.globe className="size-3" />,
        },
      
      ],
      image: "",
      video: "https://res.cloudinary.com/dsl9ehgqn/video/upload/v1737107157/ctjjfvl2dlauvobnggwn.mp4",
    },
   
    {
      title: "Kirush-Laundry",
      href: "http://136.185.14.8:5173",
      dates: "Sep 2024 - Dec 2024",
      active: true,
      location:"",
      description:
        "Designed and developed a web application for laundry services, providing a seamless platform for users to schedule pickups, track orders, and make payments online.",
      technologies: [
        "React Js",
        "MUI",
        "Redux tool-kit",
        "Node Js",
       "Express js",
        "msSQL",
      
      ],
      links: [
        {
          type: "Web-Application",
          href: "http://136.185.14.8:5173",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "",
      video: "https://res.cloudinary.com/dsl9ehgqn/video/upload/v1737107157/haufmunxq1kowkxvmrhd.mp4",
    }, {
      title: "Subbiahmemorialmiddleschool",
      href: "https://subbiahmemorialmiddleschool.com/",
      dates: "Aug 2024 ",
      active: true,
      description:
        "Successfully designed and developed the official website for Subbiah Memorial Middle School, marking my first live project.Focused on creating a user-friendly interface with intuitive navigation to enhance user experience.",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "PHP"
       
      ],
      location:"",
      links: [
        {
          type: "Website",
          href: "https://subbiahmemorialmiddleschool.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dsl9ehgqn/video/upload/v1737107157/tmxgjhlsoarnmbhubign.mp4",
    },
  
  
  ],
  hackathons: [
   
    {
      title: "Tic-Toc-Toe",
      dates: "January 20th - 21st, 2023",
      location:"",
      description:
        "Developed a simple yet interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript. The project featured a user-friendly interface, responsive design, and dynamic gameplay logic implemented with JavaScript.",
      image:
        "./tic.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          title: "Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://pugazh001.github.io/Tic-toc-toe_Game-js/",
        },
       
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/pugazh001/Tic-toc-toe_Game-js",
        },
      ],
    },
    {
      title: "Ecommerce",
      dates: "Feb 19th, 2023",
      location:"",
      description:
        "Developed a simple E-Commerce Website with a focus on providing an intuitive user experience using HTML, CSS, and JavaScript. The project featured interactive product listings, a shopping cart system, and responsive design for various devices.",
      image:
        "./eccomerce.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          title: "Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://pugazh001.github.io/senchola-Internship/Tasks/task5/",
        },
       
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/pugazh001/senchola-Internship/tree/main/Tasks/task5",
        },
      ],
    },
    {
      title: "Emojimedia",
      dates: "May 13, 2023",
      location:"",
      description:
        "Created an interactive Emojimedia web page using React.js. The project displays a curated collection of emojis with descriptions, allowing users to explore their meanings and find relevant emojis easily.",
      image:
        "./emoji.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          title: "Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://pugazh001.github.io/emojipedia/",
        },
       
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://pugazh001.github.io/emojipedia/",
        },
      ],
    },
    {
      title: "TO-DO APP",
      dates: "June 06, 2018",
      location:"",
      description:
        "Developed a simple and efficient TO-DO App using React.js. The app allows users to create, manage, and delete tasks seamlessly, with a clean and user-friendly interface.",
      image:
        "./notes.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          title: "Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://pugazh001.github.io/Diary/",
        },
       
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://www.github.comhttps://github.com/pugazh001/Diary",
        },
      ],
    },
    {
      title: "Blog",
      dates: "July 28th , 2023",
      location:"",
      description:
        "Built a full-stack Blog Application to explore and apply the MERN stack (MongoDB, Express, React, Node.js). The web app enables users to create, read, update, and delete blog posts, with secure user authentication and a responsive interface.",
      image:
        "./blog.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          title: "Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://blogclient-w3xm.onrender.com/",
        },
       
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/pugazh001/BlogWebsite.git",
        },
      ],
    },
    {
      title: "ChatBox",
      dates: "Aug 16, 2023",
      location:"",
      description:
        "Developed a ChatBox Application using the MERN stack. This project implements real-time messaging functionality, a smooth user interface, and database management with MongoDB for storing messages and user data.",
      image:
        "./chat.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
       
       
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/pugazh001/chatBox.git",
        },
      ],
    },
    {
      title: "WhatsAPP UI",
      dates: "May 21st, 2024",
      location:"",
      description:
        "Designed and developed a WhatsApp UI clone using Flutter and Dart. This project demonstrated cross-platform application development capabilities with Material UI for creating visually appealing and responsive user interfaces.",
      image:
        "./wa.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
       
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/pugazh001/whatsappui",
        },
      ],
    },
    {
      title: "SQFLite",
      dates: "June 02, 2024",
      location:"",
      description:
        "Built a CRUD (Create, Read, Update, Delete) application using Flutter and SQFLite for local database management. The project featured data persistence, smooth navigation, and an intuitive interface, showcasing the power of Dart for cross-platform development.",
      image:
        "./sqf.jpeg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
     
       
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/pugazh001/flutter-crudsqflite",
        },
      ],
    },
  
  ],
} as const;
