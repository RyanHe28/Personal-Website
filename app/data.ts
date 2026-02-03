type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}


type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'SilverLink',
    description:
      '"one stop shop" app for the elderly navigating digital services including payments, identification, and public transportation.',
    link: '',
    image: '/silverLink_v2.png',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Analysis of car related fatalities in the US',
    description: 'Data-driven project analyzing car accident fatalities in the US using R and XGBoost to model fatality risk and evaluate feature importance across demographic and roadway variables.',
    link: 'https://motion-primitives.com/',
    image: '/carCrash.png',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'CashBFF',
    title: 'Lead Product Manager',
    start: 'Nov 2025',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    company: 'Yinzer Technology',
    title: 'Product Management Intern',
    start: 'Jun 2025',
    end: 'Aug 2025',
    link: '',
    id: 'work2',
  },
  {
    company: 'Creacion Ventures',
    title: 'Venture Capital Summer Analyst',
    start: 'Jun 2025',
    end: 'Aug 2025',
    link: '',
    id: 'work3',
  },
  {
    company: 'LawMato',
    title: 'Product Management Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    link: '',
    id: 'work4',
  },
]


export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
  
]


export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/RyanHe28',
  },
  /*
  {
    label: 'Twitter',
    link: '',
  },
  */
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ryanhe0124',
  },
  /*{
    label: 'Instagram',
    link: '',
  },
  */
]

export const EMAIL = 'ryanhe0124@gmail.com'
