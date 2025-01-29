// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nidhi-satyapriya', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Open Source & Minor Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['nidhi-satyapriya/ML-Enhanced-WebApp-Firewall', 'nidhi-satyapriya/LeafAlert-Early_Detection_Better_Protection', 
          'nidhi-satyapriya/RAPIDOC-HEALTHCARE-WEBSITE-', 'nidhi-satyapriya/LeetCodeLegacy', 'nidhi-satyapriya/Stackoverflow-Analysis',
          'nidhi-satyapriya/machine-learning-repos', 'nidhi-satyapriya/Beautiify', 'S-W-E-T/Visitor-Entry-Register-System'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Major Projects',
      projects: [
        {
          title: 'EcoWatch: AI Detection & Alert System with Real-Time Data Visualization Dashboard',
          description:
            'An advanced solution integrating a custom-trained YOLOv5 AI trash detection model with a live dashboard for seamless monitoring, alert generation, and data analytics. The system processes live data from the AI model, generating alerts when specific metrics are violated, while dynamically updating insights on the dashboard. Authorities and users can track detections, alerts, and analytics in real time, offering a comprehensive, end-to-end solution for cleanliness monitoring.',
          imageUrl:
            './pics/image.png',
          link: 'https://github.com/dopTrashTrackers',
        },
        {
          title: 'TrendSage: Smart Analytics & Business Growth Engine',
          description:
            "This platform uses GenAI to analyze an organization's area of work and suggests innovative use cases and resources tailored to its needs. By integrating Haystack, it generates actionable insights with resource links that help startups and businesses identify trends, improve strategies, and foster growth. Ideal for businesses seeking to leverage AI for trend analysis, the platform empowers organizations with personalized recommendations to drive success.",
          imageUrl:
            'https://blog.hcode.tech/blog/wp-content/uploads/2024/04/GenAI-1024x576.jpg',
          link: 'https://github.com/Nidhi-Satyapriya/InsightGenAI',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Nidhi Satyapriya',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'nidhi-satyapriya-960556249/',
    X: '',
    mastodon: '',
    researchGate: '',
    discord: 'nidhi_satyapriya',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    kaggle: 'nidhisatyapriya',
    behance: '',
    medium: '',
    dev: 'dev_nidhiSp',
    stackoverflow: '', 
    skype: '',
    telegram: '',
    website: '',
    phone: '+91 9199234764',
    email: 'satyapriyanidhi@gmail.com',
  },
  resume: {
    fileUrl:
   'https://drive.google.com/file/d/13ntEHxkKuWmWAH8qYj0zloJgidDVhE4l/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Machine Learning',
    'Deep Learning',
    'MERN Stack',
    'Tailwind',
    'MySQL',
    'JavaScript',
    'Java',
    'Python',
    'C++',    
    'Git, Github',
    'Microsoft Azure',
    'CI/CD (Github Actions)',
    'Restful APIs (Flask, FastAPI)',
      ],

  experiences: [
    {
      company: 'Quamin AgriCare Solutions',
      position: 'Lead ML Intern',
      from: 'November 2024',
      to: 'Present',
      companyLink: 'https://quamin.in/',
    },
    {
      company: 'SpyInt Technologies',
      position: 'ML Intern',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: 'https://www.spyint.com/',
    },
  ],
  certifications: [
    {
      name: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
      body: 'Validates expertise in Generative AI concepts, prompt engineering and building AI solutions using cloud tools.',
      year: 'June 2024',
      link: 'https://drive.google.com/file/d/1GapkYOsLLJvEXBQsjZz-H5otIuZDKZaG/view',
    },
    {
      name: 'Machine Learning Specialization',
      body: 'A comprehensive program covering core ML concepts, supervised and unsupervised learning, and advanced algorithms to build and deploy AI solutions.',
      year: 'August 2024',
      link: 'https://drive.google.com/file/d/15cYkn6J2B0LEOqHMMUbDN-d5QWU9vijh/view',
    },
  ],
  educations: [
    {
      institution: 'Indian Institute of Information Technology (IIIT), Bhagalpur',
      degree: 'B. Tech',
      from: '2022',
      to: '2026',
      cgOrPercentage: '8.95',
    },
    {
      institution: 'St. Thomas College',
      degree: 'Senior Secondary School ',
      from: '2021',
      to: '2022',
      cgOrPercentage: '93.5%',
    },
  ],
  publications: [
    {
      title: 'Launched the Official Website of EBSB Board',
      // conferenceName: '',
      // journalName: 'Journal Name',
      // authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Developed and launched the official EBSB Board website for IIIT Bhagalpur, catering to the college community, achieving 500+ views since its launch.',
    },

    {
      title: 'SIH 2024 Finalist',
      // conferenceName: '',
      // journalName: 'Journal Name',
      // authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Ranked #2 among 7 finalist teams selected for the Grand Finale of Smart India Hackathon (SIH) 2024, showcasing innovation, problem-solving, and technical excellence.',
    },
    {
      title: 'GirlScript Summer of Code (GSSoC 24) Contributor',
      // conferenceName: 'Conference Name',
      // journalName: '',
      // authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Ranked 216 in GSSoC24 with 7 successful PRs, earning 715 points through contributions in diverse areas including React.js, Data Analysis, and Machine Learning.',
    },
    {
      title: 'Solving For India 2023 Regionalist',
      // conferenceName: 'Conference Name',
      // journalName: '',
      // authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Ranked 216 in GSSoC24 with 7 successful PRs, earning 715 points through contributions in diverse areas including React.js, Data Analysis, and Machine Learning.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with Next.JS, TypeScript, and inspired by  <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️ | Nidhi Satyapriya`,

  enablePWA: true,
};


export default CONFIG;
