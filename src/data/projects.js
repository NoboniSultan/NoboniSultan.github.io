// Single source of truth for the Projects section.
//
// Images are imported rather than referenced by a literal "/src/..." path:
// Vite only resolves that path in dev, so an imported URL is what keeps the
// screenshots working in the production GitHub Pages build.
//
// To swap in a real screenshot, drop the file next to these placeholders in
// src/assets/images/ and point the import at it.

import arrearImg from '../assets/images/arrear-placeholder.svg'
import compassImg from '../assets/images/compass-placeholder.svg'
import bengalBowlsImg from '../assets/images/bengal-bowls-placeholder.svg'
import takaTalkImg from '../assets/images/taka-talk-placeholder.svg'
import flamingoImg from '../assets/images/flamingo-placeholder.svg'
import boiImg from '../assets/images/boi-placeholder.svg'
import pediamapImg from '../assets/images/pediamap-placeholder.svg'

export const projects = [
  {
    id: 1,
    title: 'Arrear',
    tagline: 'Clinical revenue recovery platform scanning 18,000+ patient records',
    description:
      'A full-stack platform that helps clinics recover missed government incentive revenue by scanning EMR data, flagging qualifying care for human review, and tracking submissions. Runs scheduled SQL detection rules to surface missed MIPS and HCC incentive submissions.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Cloudflare Workers'],
    // TODO: add screenshot → src/assets/images/arrear.png
    image: arrearImg,
    // TODO: add live URL
    liveUrl: '#',
    // TODO: add GitHub repo URL
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Compass',
    tagline: 'Civic-tech virtual classroom with AI-powered Socratic tutoring',
    description:
      'Civic-tech virtual classroom platform with AI-powered Socratic tutoring and real-time WebSocket communication. Served as Backend Tech Lead — authored schema design, wireframes, and API contracts.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'WebSockets', 'Gemini API'],
    // TODO: add screenshot → src/assets/images/compass.png
    image: compassImg,
    liveUrl: 'https://compass-frontend-9scf.onrender.com/',
    githubUrl: 'https://github.com/F-NAN-AI-ENGINEERING-RESIDENCY/compass',
    featured: true,
  },
  {
    id: 3,
    title: 'Bengal Bowls',
    tagline: 'Full-stack food ordering platform built for a real-world client',
    description:
      'Full-stack food ordering platform for a real-world client. Built end-to-end from scoping through deployment — user auth, relational data storage, payment integration, and RESTful APIs.',
    tags: ['React', 'Vite', 'Express.js', 'PostgreSQL', 'JavaScript', 'Claude API'],
    // TODO: add screenshot → src/assets/images/bengal-bowls.png
    image: bengalBowlsImg,
    liveUrl: 'https://provasultan-crypto.github.io/Bengal-Bowls/#',
    githubUrl: 'https://github.com/provasultan-crypto/Bengal-Bowls',
    featured: true,
  },
  {
    id: 4,
    title: 'Taka Talk',
    tagline: 'Personal finance tracking with category budgets and spending alerts',
    description:
      'Personal finance app where users track income and expenses by category, with monthly budget limits and spending alerts.',
    tags: ['JavaScript', 'AI Agent Design', 'Prompt Engineering', 'Envelope API'],
    // TODO: add screenshot → src/assets/images/taka-talk.png
    image: takaTalkImg,
    liveUrl: 'https://envelope.build/taka-talk',
    // TODO: add GitHub repo URL
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Flamingo Lab',
    tagline: 'Web platform for a school women in STEM club',
    description:
      'All-in-one web platform for a school women in STEM club — a digital home where members can learn, connect, collaborate, and grow together.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    // TODO: add screenshot → src/assets/images/flamingo.png
    image: flamingoImg,
    // TODO: add live URL
    liveUrl: '#',
    // TODO: add GitHub repo URL
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Boi',
    tagline: 'Reading list manager with progress tracking and notes',
    description:
      'Full-stack web application for managing personal reading lists — track progress, rate books, and maintain reading notes.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    // TODO: add screenshot → src/assets/images/boi.png
    image: boiImg,
    // TODO: add live URL
    liveUrl: '#',
    // TODO: add GitHub repo URL
    githubUrl: '#',
    featured: false,
  },
  {
    id: 7,
    title: 'PediaMap',
    tagline: 'Real-time pediatric provider search from a public healthcare API',
    description:
      'Front-end app that fetches and displays real-time pediatric provider data from a public healthcare API — search, filter, and save providers by location.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    // TODO: add screenshot → src/assets/images/pediamap.png
    image: pediamapImg,
    // TODO: add live URL
    liveUrl: '#',
    // TODO: add GitHub repo URL
    githubUrl: '#',
    featured: false,
  },
]
