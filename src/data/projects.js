// Single source of truth for the Projects section.
//
// Each project carries an `images` array. images[0] is always the cover
// thumbnail shown on the card at rest; any further entries are revealed by the
// in-card gallery. A project with one screenshot still uses an array.
//
// Images are imported rather than referenced by a literal "/src/..." path:
// Vite only resolves that path in dev, so an imported URL is what keeps the
// screenshots working in the production GitHub Pages build.
//
// TODO: add your screenshot paths here — any number of images
// Recommended export settings: JPEG or PNG, 1600px wide (16:9), <300KB
// Place file at: src/assets/images/[project-name]-[number].jpg
// Caption: brief label describing what this screen shows

import arrear1 from '../assets/images/arrear-1.jpg'
import arrear2 from '../assets/images/arrear-2.jpg'
import compass1 from '../assets/images/compass-1.jpg'
import bengalBowls1 from '../assets/images/bengal-bowls-1.jpg'
import bengalBowls2 from '../assets/images/bengal-bowls-2.jpg'
import takaTalk1 from '../assets/images/taka-talk-1.jpg'
import takaTalk2 from '../assets/images/taka-talk-2.jpg'
import flamingo1 from '../assets/images/flamingo-1.jpg'
import flamingo2 from '../assets/images/flamingo-2.jpg'
import boi1 from '../assets/images/boi-1.jpg'
import boi2 from '../assets/images/boi-2.jpg'
import pediamap1 from '../assets/images/pediamap-1.jpg'

export const projects = [
  {
    id: 1,
    title: 'Arrear',
    tagline: 'Clinical revenue recovery platform scanning 18,000+ patient records',
    description:
      'A full-stack platform that helps clinics recover missed government incentive revenue by scanning EMR data, flagging qualifying care for human review, and tracking submissions. Runs scheduled SQL detection rules to surface missed MIPS and HCC incentive submissions.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Cloudflare Workers'],
    images: [
      { src: arrear1, caption: 'Recovery overview — flagged value, monthly recovery and program totals' },
      { src: arrear2, caption: 'Flagged items queue with triggering criteria and estimated value' },
    ],
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
    images: [
      { src: compass1, caption: 'Landing page — live classroom signal preview' },
    ],
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
    images: [
      { src: bengalBowls1, caption: 'Storefront home with weekly menu and cart' },
      { src: bengalBowls2, caption: 'Brand identity' },
    ],
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
    images: [
      { src: takaTalk1, caption: 'Monthly balance and per-category budget tracking' },
      { src: takaTalk2, caption: 'Budget Buddy — the encouraging AI money coach' },
    ],
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
    images: [
      { src: flamingo1, caption: 'Team notes — structured, shareable and filterable by tag' },
      { src: flamingo2, caption: 'Question board for tracking team questions and answers' },
    ],
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
    images: [
      { src: boi1, caption: 'My Shelf — status, genre filters and per-book ratings' },
      { src: boi2, caption: 'Sign-in' },
    ],
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
    images: [
      // TODO: add a UI screenshot — this is the brand banner, not a product screen
      { src: pediamap1, caption: 'Brand identity' },
    ],
    // TODO: add live URL
    liveUrl: '#',
    // TODO: add GitHub repo URL
    githubUrl: '#',
    featured: false,
  },
]
