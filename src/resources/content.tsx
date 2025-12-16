// biome-ignore lint/style/useImportType: <explanation>
import { About, Blog, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { HyperText } from "@/components/ui/hyper-text"
import { MorphingText } from "@/components/ui/morphing-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
const person: Person = {
  firstName: "Agnihotra",
  lastName: "Nath",
  name: `Agnihotra Nath`,
  role: "UI/UX Designer & Developer",
  avatar: "/images/avatar-01.jpg",
  email: "agnihotranath@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bengali", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};
import { motion } from "motion/react"

//const newsletter: Newsletter = {
//  display: false,
//  title: <>Subscribe to {person.firstName}'s Newsletter</>,
//  description: <>My weekly newsletter about creativity and engineering</>,
//};
const texts = [
  "Hello!",
  "I'm Agnihotra.",
  "I'm a UX Designer.",
  "I'm a Developer.",
  "I'm a Researcher.",
]
const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alfaaarex",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/alfaaarex/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/alf4rex/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@alf4rex",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `${person.role} based in Kolkata, India.`,
  headline: <TypingAnimation words={texts} loop />,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">The Carcino Foundation</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Fight Cancer!
        </Text>
      </Row>
    ),
    href: "https://thecarcinofoundation.org/",
  },
  subline: (
    <>
    I build things that are cool and useful.
    
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Learn About Me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Agnihotra is a Kolkata-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "The Carcino Foundation",
        timeframe: "Feb 2025 - Present",
        role: "Chief Operating Officer",
        achievements: [
          <>
            Started this organisation as a founding member, kicked off the Design Lab and created
            the base design for the website.
          </>,
          <>
            Spearheaded the integration of various software into the workflow of every team, 
            effectively managing the entire IT Sector of the organisation.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ],
      },
      {
        company: "Google India",
        timeframe: "June 2024 - Present",
        role: "Head of Student Developers",
        achievements: [
          <>
            Major contributions to Material Design, Android and Gemini.
            Intially Moderating Designer for Pixel Studio.
            Contributing Designer for Material 3 Expressive
          </>,
        ],
        images: [],
      },
      {
        company: "Google DeepMind",
        timeframe: "Nov 2023 - June 2024",
        role: "Student Developer",
        achievements: [
          <>
            Headed the Student Team responsible for Google Bard / Gemini. 
            Notable contributions to NotebookLM.
          </>,
        ],
        images: [],
      },
      {
        company: "Microsoft",
        timeframe: "Jan 2021 - Apr 2023",
        role: "Student Systems Developer",
        achievements: [
          <>
            Contributed to Base System Imaging (BSI) of Windows 11,
            with additional contributions to FluentCode and Windows Server 2006.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Stanford University CIP",
        description: <>Studied Computer Science.</>,
      },
      {
        name: "Delhi Public School, Ruby Park",
        description: <>Studied Higher Secondary Science with CS for XI-XII (AISSCE 2026).</>,
      },
      {
        name: "Don Bosco School, Park Circus",
        description: <>Completed Secondary Education (ICSE 2024).</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with unmatched speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Posts",
  title: "I also happen to write stuff.",
  description: `Discover what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `My Projects`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Photos",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
