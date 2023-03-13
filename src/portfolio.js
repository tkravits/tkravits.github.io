const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://tkravits.github.io',
  title: '/TK',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Taylor Kravits',
  role: 'Software Engineer',
  description:
    'Developing web and email based legal tech applications using Python and JS, with a little bit of Rust on the side. All in between weekends and weeknights of skiing, running, mountain biking, and fly fishing',
  resume: 'https://drive.google.com/file/d/1Dn306-YogdhT3bDUg6zUx_ENaiVUu1KB/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/taylor-kravits/',
    github: 'https://github.com/tkravits',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Eldora Ski Resort Parking Scanner',
    description:
      'Scans and automatically books parking at Eldora based on a preset list.',
    stack: ['Python'],
    sourceCode: 'https://github.com/tkravits/ParkWhizBook',
    livePreview: 'https://github.com/tkravits/ParkWhizBook',
  },
  {
    name: 'Housing Price Study During 2020',
    description:
      'An Analysis of Boulder County Housing Prices During the Beginning of the Coronavirus Pandemic',
    stack: ['Python'],
    sourceCode: 'https://github.com/tkravits/MLS_PDFproject',
    livePreview: 'https://github.com/tkravits/MLS_PDFproject',
  },
  {
    name: 'Fantasy Football Web Scraping',
    description:
      'A locally deployed tool that will pull fantasty football data from "fantasy.nfl.com/research/pointsagainst", to then put into a publicly available spreadsheet.',
    stack: ['Javascript', 'TypeScript'],
    sourceCode: 'https://github.com/tkravits/FFanalysis',
    livePreview: 'https://github.com/tkravits/FFanalysis',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Rust',
  'JavaScript',
  'HTML',
  'CSS',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'taylor.kravits@gmail.com',
}

export { header, about, projects, skills, contact }
