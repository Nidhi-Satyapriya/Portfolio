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
          'Nidhi-Satyapriya/ScholarlyAI--Your-Automated-Blog-Generator', 'Nidhi-Satyapriya/AutoEDA-Automated-Data-Preprocessing-Toolkit', 'S-W-E-T/VERS-backend'
        ], 
      },
    },
    external: {
      header: 'My Major Projects',
      projects: [
        {
          title: 'EcoWatch: AI Detection & Alert System with Real-Time Data Visualization Dashboard',
          description:
            'An advanced solution integrating a custom-trained YOLOv5 AI trash detection model with a live dashboard for seamless monitoring, alert generation, and data analytics.',
          imageUrl:
            './pics/image.png',
          link: 'https://github.com/dopTrashTrackers',
        },
        {
          title: 'Ambitus Intelligence: Next-Gen Business Intelligence Extractor',
          description:
            'Ambitus is a Haystack-based multi-agent system that integrates 7+ agents, custom tools, and an MCP server to power a unified web application.',
          imageUrl:
            './pics/image.png',
          link: 'https://github.com/dopTrashTrackers',
        },
        {
          title: 'CodeXchange: Project Exchange Platform',
          description:
            " A MERN stack project platform designed to help freelancers and learners exchange real-world projects for mutual learning, and collaboration.",
          imageUrl:
            'https://blog.hcode.tech/blog/wp-content/uploads/2024/04/GenAI-1024x576.jpg',
          link: 'https://github.com/CodeXchange-io/frontend_backend_intg',
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
    discord: 'nidhi_satyapriye',
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
   'https://drive.google.com/file/d/1KnS1qSXfk_DKEaAuD3_2eUx13khZqSgj/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Machine Learning',
    'Generative AI',
    'MERN Stack',
    'Tailwind',
    'Restful APIs (Flask, FastAPI)',
    'MySQL',
    'JavaScript',
    'Java',
    'C++',    
    'Git/ Github',
    'CI/CD',
    'Microsoft Azure'
      ],

  experiences: [
    {
      company: 'Indian Institute of Information Technology (IIT) BHU',
      position: 'Project Intern',
      from: 'May 2025',
      to: 'Present',
      companyLink: 'https://www.iitbhu.ac.in/dean/dord',
    },
    {
      company: 'Quamin AgriCare Solutions',
      position: 'Lead ML/ GenAI Intern',
      from: 'November 2024',
      to: 'January 2025',
      companyLink: 'https://quamin.in/',
    },
    {
      company: 'SpyInt Technologies',
      position: 'SDE Intern',
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
      institution: 'St. Thomas College, Lucknow',
      degree: 'Senior Secondary School ',
      from: '2021',
      to: '2022',
      cgOrPercentage: '93.5%',
    },
  ],

  
  publications: [
     {
      title: 'Walmart CodeHers 2025 Finalist',
      link: '',
      description:
        'Ranked among the top 6% of 100,000+ women coders across India in a national-level coding competition.',
    },
    {
      title: 'Smart India Hackathon (SIH) 2024 Finalist',
      link: 'https://www.linkedin.com/posts/nidhi-satyapriya-960556249_memory-lifetime-experience-activity-7274167296120492032-oqAP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD17ztgBqpS-pJvDmzUh1CbogNWBAcAu3wU',
      description:
        'Ranked #2 among 7 finalist teams selected for the Grand Finale of Smart India Hackathon (SIH) 2024, showcasing innovation, problem-solving, and technical excellence.',
    },
    {
      title: 'Solving For India 2023 Regionalist',
      link: 'https://www.linkedin.com/posts/nidhi-satyapriya-960556249_solvingforindia-regionalrounds-amd-activity-7068790761504350208-1TxM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD17ztgBqpS-pJvDmzUh1CbogNWBAcAu3wU',
      description:
        'Ranked 216 in GSSoC24 with 7 successful PRs, earning 715 points through contributions in diverse areas including React.js, Data Analysis, and Machine Learning.',
    },
    {
      title: 'Project Admin @SSOC\'25',
      link: '',
      description:
        ' Leading and managing open-source project contributions under SSOC\'25, reviewing PRs, mentoring contributors, and ensuring project milestones are met.',
    },
    {
      title: 'GirlScript Summer of Code(GSSoC 24) Contributor',
      link: 'https://www.linkedin.com/posts/nidhi-satyapriya-960556249_gssoc24-opensource-datascience-activity-7228605110145232897-h2HP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD17ztgBqpS-pJvDmzUh1CbogNWBAcAu3wU',
      description:
        'Ranked 216 in GSSoC24 with 7 successful PRs, earning 715 points through contributions in diverse areas including React.js, Data Analysis, and Machine Learning.',
    },
    {
      title: 'Rank 1 in Intra-College Hackathon',
      link: '',
      description:
        'Ranked 1st among 50+ teams in an Intra-College Hackathon for innovation, effective solution implementation, and compelling presentation.',
    },
  ],


  blog: {
    enable: true, // Enables the blog section
    source: 'dev', // medium | dev
    username: 'dev_nidhiSp', // Replace with your Dev.to username
     limit: 2,
    sources: [], // Keep empty if not fetching from external APIs
    hardcodedArticles: [
      {
        title: "Mentor & Brand Ambassdor at GSSoC'24",
        link: "https://www.linkedin.com/posts/nidhi-satyapriya-960556249_gssoc-campusambassador-opensource-activity-7245092496614039552-xMAL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD17ztgBqpS-pJvDmzUh1CbogNWBAcAu3wU",
        publishedAt: "2024-02-10",
        description:
          "Mentored 30+ contributors, fostering impactful open-source contributions and community engagement.",
        thumbnail: "https://via.placeholder.com/150",
        categories: ["ContributeWithMe", "OpenSourceCommunity", "BuildInPublic"],
      },
      {
        title: "General Secretary: Ek Bharat, Shreshtha Bharat(EBSB)",
        link: "https://www.linkedin.com/posts/ebsb-board-iiit-bhagalpur_ebsb-iiitbhagalpur-unity-activity-7197588862779494400-s5yG/",
        publishedAt: "2024-02-07",
        description:
          " Led 10+ cross-functional events in college, engaging 300\+ students, increasing participation by 30%, and improving club visibility",
        thumbnail: "https://via.placeholder.com/150",
        categories: ["StudentLeadership", "LeadWithImpact", "EventLeadership"],
      }
    ],
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
