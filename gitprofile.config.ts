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
  base: '/Portfolio/',
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
            '/pics/cleanvision.png',
          link: 'https://github.com/dopTrashTrackers',
        },
        {
          title: 'Ambitus Intelligence: Next-Gen Business Intelligence Extractor',
          description:
            'Ambitus is a Haystack-based multi-agent system that integrates 7+ agents, custom tools, and an MCP server to power a unified web application.',
          imageUrl:
            '/pics/agent.jpg',
          link: 'https://github.com/dopTrashTrackers',
        },
        {
          title: 'CodeXchange: Project Exchange Platform',
          description:
            " A MERN stack project platform designed to help freelancers and learners exchange real-world projects for mutual learning, and collaboration.",
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgr18xNjMVMIsA-CAzuO9h1kIVoAYfXe6jcA&s',
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
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDg8PDQ0NDQ4NDQ4NEA8NDQ0NFREXFhYRFRUYHSggGBolHRUVITIiKCkrLi4uFx8/RDMtNygtLisBCgoKDg0OGxAQGy0lICUyNy0tLS02Li0tLS8tLSstKy0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAUGCAP/xABEEAABAwICAwwJAgUDBAMAAAABAAIDBBEFEgYhMQcTFRc0QVFUcZSy0xQiMlJhc3SBkZLRIzNyscFCofAWk9LhJWJj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EADMRAQACAQMDBAIABAUEAwAAAAABAgMEEVETFDESIUGxBTIiYXGBkcHR4fAzYqHxBkJS/9oADAMBAAIRAxEAPwCcUBAQEBAQEBAQEBAQEBAQEBAQUQEBAQEBAQEBAQEBAQEBAQVQEBAQEBAQEBBo9IdLsOwt0bK2cwuma50YEM82ZoNif4bTbaNq7pjtfw5m0R5ajjTwDrju6V3lLvt8nH0jqV5ONPAOuO7pXeUnb5OPo6leTjTwDrju6V3lJ2+Tj6OpXk40sA647uld5Sdvk4+jqV5ONLAOuO7pXeUnb5OPo6leTjSwDrju6V3lJ2+Tj6OpXk40sA647uld5Sdvk4+jqV5ONLAOuO7pXeUnb5OPo6leTjTwDrju6V3lJ2+Tj6OpXk40sA647uld5Sdvk4+jqV5ONLAOuO7pXeUnb5OPo6leTjSwDrju6V3lJ2+Tj6OpXk40sA647uld5Sdvk4+jqV5ONLAOuO7pXeUnb5OPo6leTjSwDrju6V3lJ2+Tj6OpXk40sA647uld5Sdvk4+jqV5ONLAOuO7pXeUnb5OPo6leTjSwDrju6V3lJ2+Tj6OpXk40sA647uld5Sdvk4+jqV5ONLAOuO7pXeUnb5OPo6leTjSwDrju6V3lJ2+Tj6OpXk40sA647uld5Sdvk4+jqV5ONLAOuO7pXeUnb5OPo6leTjSwDrju6V3lJ2+Tj6OpXk40sA647uld5Sdvk4+jqV5Dup4B1x3dK7yk7fJx9HUry7CKRr2te03a5oc06xcEXCpdrkFUBAQEBAQEBAQQtu+cqw/6efxtWzS+JZ8/mEWrUoEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQWyeyewpA9Z4Zyen+TF4AvKny3QylCRAQEBAQEBAQEELbvnKsP+nn8bVs0viWfP5hFq1KBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFsnsnsKQPWeGcnp/kxeALyp8t0MpQkQEBAQEBAQEBBC275yrD/AKefxtWzS+JZ8/mEWrUoEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQWyeyew/2SB60wzk9P8mLwBeVPluhkqEiAgICAgICAgIIW3fOVYf9PP42rZpfEs+fzCLVqUCCrWkkAbSQB2lIjf2RM7RvLM4Kn6B+oK/t7sve4eTgufoH6gnb5OEd9h5OC5+gfqCdvk4O+w8nBc/QP1BO3ycHfYeTgufoH6gnb5ODvsPJwXP0D9QTt8nB32Hk4Ln6B+oJ2+Tg77DycFz9A/UE7fJwd9h5OC5+gfqCjt8nB32Hk4Kn90fqCdvk4O+w8nBc/QP1BO3ycHfYeTgufoH6gnb5ODvsPJwXP7o/UE7e532HkOFT+6Nez1hrURhtM7Rs6nWYo953/wADguf3R+oLrt7ue9w8sepp3xEB4AJFxY31Kq9JpO0r8WWuSN6vkuVogICAgILZPZd2FIHrTDOT0/yYvAF5U+W6GSoSICAgICAgICAghbd85Vh/08/jatml8SzZ/MItWpQIPpTfzI/62eILqn7Qry/pP9Hd1WBVMVLFWua30eYtDHNc1xuQdo2jYVurqKWyTjjzDxb6a9ccZJ8Subo9Vmj9PDB6ML+tmbmsH5L5dtrqO5p1On8p7XJ0urt7LKfBKmSklrWtb6PE4te4uDTm1bBz+0FNtRSuSMfzLmumvbHOSPENar1DY0+C1EtJLWsa008Lskji4Bwd6v8Ap2n2gqbZ6VyRjnzK+mnvbHOSPENcrlAgICAg2PAtR6H6dlb6NnyZswzZs2X2du1UdenU6fyv7e/S6vww6aB8r2xsGZ7zZo2XU589MGOcmSdojy5w4b5rxjpG8yrVUskLzHI0scOY846QecLnTarFqadTFbeHWfT5MF/RkjaW90glBosPHSwH8MA/yvm/wmOa/kdTv8T9y938teJ0OD28x/k09Ph08sb5WRl0cYJc7UBq226fsvez/kdNgy1xXvEWnxH+vDxsOhz5cc5KV9o+XNY7/MZ/R/lNV+0Nn4/9J/q1qzN4gICAgILZPZPYf7IPWmGcng+TF4AvKny3x4ZKhIgICAgICAgICCFt3zlWH/Tz+Nq2aXxLNn8wi1alAg+lN/Mj/rZ4guqftCvL+k/0TFhb/SdG6yE63Uchkb05A4Sf5ePsmWOnrK25/wDTLhnqaK1eHTRMZvDsF1Zxg4eR/wDobg/e9j91jmZ9fX/7m6Ij0dv/ANrm617KbA8Lp3sMgrJ2TzRsuHyRZs5aLc5uwLXTfJqL2idtoYsm2PS0pMb7z7tphmjtPWB8cuEvoIyy8VQZry5r6gWk3B59dxqVOTUXxzvXJ6p+Y+F+PS0yxNbYvTHxPy1uGQmLR7FoybmOqkYSOct3oX/2V2S3q1VJ/lCnFX06TJXiX3xejwfD4qCaakdK6eEEsY92U+qwukdc6yM2ofErjFfUZptWtvDrLTTYK0tavlfjWG4NhtTC6SmfM2ssWR5jvVOzUC4Am5vcavgdiYsmozUna223/lObFpsF4ma7+r/CGrx/BKaixaONtNJVU80W+MpYnPz5/WGUEa8t2g9hPQrsOe+TBMzbaY+WfPp8eLUREVmYn4beo0ZhqaGpkfh3Bk8MbpIS2USCSzS6xt2WNxzqiuqtTJERf1RPlptpK5MUzNPTMeGLTYXhUGF0WIVULnkj12xlxdUSEuABu4CwsTzbF3bLntmtjpP+ziuHT009ct4/3Z+HVlEzA3TTwOlpDWTFsAtma105yDaNmrnVWSmSdT6az/Ft5/stx5MUaX1WrvXfx/f2RsajJM6WG8dnudHbaxpJsPwbL1smCuXH08sbxPl4tctseTqY52mPDZz466ogfFPE2V4b6ko9V0bveP8AwLw8P4Omk1MZNPkmsT5rPz/J62X8tbU4Jx5qRafi3H82uiqCXQiTNNHGbCIuNst9bR0XXr5dPWKXnFtS1vNv85ebjzzN6Rk/irX4/wAmwxDSGaUGKMCnisW5Ge1l2WJ5vtZeVof/AI/p8VurknqX87z43ehq/wAznyV6dI9FfG0OMx3+Yz+j/K9LVftDj8f+k/1a1Zm8QEBAQEFsnsnsKQPWmGcng+TF4AvKny3x4ZKhIgICAgICAgICCFt3zlWH/Tz+Nq2aXxLNn8wi1alAg+lN/Mj/AK2eILqn7Qry/pP9EqaAYxT00tTDVODKeqiDXFwJbnF9RtsuHO1q7X4bXiJp5h5/47PTHaa3n2lkRaTRNx99aXn0ZxdBnAJAhyBodbba4BXE6a06WKbe/l3GrrGrm+/8Pj+zJxTSSjGL0MjCJKKjiEbSwEhjnBwLgLXNvU/Sq8emydvaP/tKzLq8fc1mPesNlTYvhsGJvrH4i6cVAcyOMNkMVM0gH1j0erYWA2/dU2w5rYopFNtvn5lfXPhrmm85N9/j4hpmYzSjC8Wp99bv1RWTyQss7+IwuZZwNrcxWicN+tjtt7REbs0ajH0Mld/eZnZjac4rT1UGGtgkEjoIHslADhkcWxgDWP8A6n8KzRYr0tebR5Va/NjyVp6Z32/2fTT3F6aqkoHQSiQRRFshAcMpzN6R8Co0eG9Iv6o23d67PjyWpNZ8Ojk0rw4YqybfQ6J1FvAmDX2ik3wusbi9iLa+xZI0mbo7be+++zZOswdeJ3+Nt+GDhmJYfSMr4nYg+rmqoXkSyNkEY9VwawE3u71uxd5MWXJNZ9G0Qrx5sOOL1nJvMtRi+LU0mBUNKyQOqIpGGSOzrtAD+e1ucLRhxXjU2vMezNnz47aWtIn3ZOA19BUYQ7Daqo9Ee2UyB5aSHDPnBHMecWXGfHlpn6tI3d6fLhvp+je2zkqVsAqA2VxNOHuBc24JZrsenoWjWW1Hb2nBH8e3tuxaaMPXiMs/wb+7Z4njMQY6mpI2xwuGV78tnSD4X1/c614n478PnnJGp1t5m8e8R8R/zh62u/KYYpODSViKz7TPL41dJ6LFQ1MZIkkbvhLrEB1gRYfcrRpdXOuzajS5Y/hr7Rtwo1Gm7TFh1GP9p9/7sqfEqKqhe6oj3upa05XRg/xHW1WI+PMVhxfjvyGh1FY09/VjmfeJ+I/5w15NdotXhmc9fTkjxMfP/P5uEx8WkZz+ptGzave1E7zEsehjasx/NrFnbhAQEBAQWyeyewpA9aYZyeD5MXgC8qfLfHhkqEiAgICAgIKICCqCFt3vlWH/AE8/jatml8SzZ/MItWpQIL4HAPYTsD2k9l11WdrQ4yRvWYh0HCMHvj8O/Zeh16cvF7TN/wDk4Rg98fh37KOvTlHaZuDhGD3x+HfsnXpydpm4U4Rg98fh37J16cnaZuFeEYPfH4d+ydenJ2mbg4Rg98fh37J16cnaZuDhGD3x+HfsnXpydpm4OEYPfH4d+ydenJ2mbg4Rg98fh37J16cnaZuDhGD3x+HfsnWpydpm4U4Rg98fh37J16cnaZuDhGD3x+HfsnXpydpm4OEYPfH4d+ynr05O0zcNniWk8E8FPDqZvIALruOazcuoW1LxtBoKaXU5M/U39fxx77vV1mfLqMFMPT29Pzu1nCMHvj8O/Zex1qcvK7TNw1eLzske0sOYBtjt23WXUXi0+z0tHjtjrMWhgqhsEBAQEBBbJ7J7CkD1nhnJ4PkxeALyp8t8eGUoSICAgICAgogIKoIW3fOVYf8ATz+Nq2aXxLNn8wi1alAgICAgICAgICAgICAgICAgICAgICAgICC2T2T2FIHrPDOTwfJi8AXlT5b48MpQkQEBAQEBBRAQVQQtu+cqw/6efxtWzS+JZs/mEWrUoEBAQLoCAgICAgICAgICAgICAgICAgICAgtk9k9hSB6zwzk8HyYvAF5U+W+PDKUJEBAQEBAQUQEFUELbvfKsP+nn8bVs0viWbP5hFq1KBAQS7oTuXQCFtZi1yXNEjaYuMccTNt5XAgk9IvYc91jyZ58VaKYY8y3Xp2hpPo9sN92+8gR3+blt97rjbN593W+Pw4zdS0Qw7D2Q1VHKI/SHWbSFxlD22uZY3XJDRq26tYt0G7DltadpV5aRX3hHa0qRAQEEtYPo3h79FJax1LE6qFHWSictvKHtfJlId8Mo/Cx2vbq7b+y+Kx090ShbVAo2F8DQXsB2F7AewuCifCUs7sGjeH0WH08tLSw08hq2Mc+Joa4sMTyQenWB+Fl097Wt7yvy1iI9kRrWzpfbo3h50U9M9Fh9K4OMu/5f4u+e9m6Vj9durtv8tHpjp7ogWxnEBQCkEBAQEFsnsnsKQPWeGcnp/kxeALyp8t8eGUoSICAgICAgogIKoIW3fOVYf9PP42rZpfEs2fzCLVqUCDo9zrD21WM0MTwHMEjpnA7CI2F4B+7Qqs1tqS7xxvaHfbumNSsbS4exxbHO1889jbfGtIa1h+F7m3wCz6akTvMrs1vhD62syr5HHKHOc4MblYHEkMbe+Vt9guTq+KjYdRgOiYmjE9S8xscMzWNs05fecTsCwZtZ6bemnvLw9b+WnHfpYo3lmVuh9PJGX0khzC9g5wkjeei42FV01t4na8M+H8zlpeK56+3+Dl8JwiorKuOihb/HkkMdnagy18znHmAAJPYvRm8RX1fD6Sn8cRNflLkG5Vg9NE306qkdK7Vvjpo6aMu6GNP+SVlnUXmfaGmMNY8t/i2Ew0GjddSwPdJDFQVZje8tc4tcHv2gAH2lXW02yRMurREUmIQzoPojPjFQ6Njt6giDXVE5GbKDsY0c7jY9lvzty5YpDPSk2SGNzfR6R7qKOtkNc0G7RUwvnDgNd47W+1ln6+Tzt7LulTxujbSPRyfCa9tLMQ8Zo5IZWizZYi+wdbmNwQR8ForeL03U2rNZ2lOG6PoxPi9HFTwPijfHUNmJmLg0tDHtsMoOv1gsWLJFLby05KeqPZHXE1ifWKP9U3/gtHdV4U9GeXc4xhklDorUUkha6Snw58b3MuWEjnFxdUUt6ssT/NbMbU2RHoLodNjM72tdvNPDlM81sxF9jGjncbHs/vry5YpDPSk2SC3c40elc6jirXmtYDmDamGSZpG0ujtbtFlm6+TzMLulTxujjGdF5aDE4sPqDcSTQNZKwWEsEkgbnbe9jtFuYjnWmuSLV9UKZrMTtKRn7kVBDUSSz1UjaBrWlrXvjjk3w3uHyEWy7LWF9fw15+5tttEe63oxv7ucxjQiilxmlw3DJnFkkBnqZHPbOyFgO1pFrkjmv/qarK5bRSbWczjj1bVdPJub6OseKN9ZI2sLQcrqmFs5vsdvZFv9lV18nnb2d9Kke26I8bo46arqaeKXf4oZnxMltlzhpsTbtuPstlZmYiZZ7RtLCXSFsnsnsKQPWeGcng+TF4AvKny3x4ZShIgICAgICCiAgqghbd75Vh/08/jatml8SzZ/MItWpQIN9oJijKHFaKpkOWNspjkPM1kjSwuPwGa/2VeWvqpMO6TtaJSjuy6MzVsMFbTNMslKHtljYMz3wOsczQNpBGzoJWXT5IrO0rs1JmN4QhfXbnva3PfostzMzq7Caml3h1VBJAyoaHxmVpZnjvrPwPwOvWOlceqLRPplF4mIddp4XiliazVEZAH22Wy+qD8P/S8zRRE5J38vmPw0VnPebft/zdqdAXSCpka2+9mImQf6b3GU9u3/AHV+vivoiZ8t35utOhEz539nbbnLIv8AqOv2ZxSEs+DiYs9v+c65iZ6FXofhZt29fVw5bdgkmdjdQ2a+RkcIpwfZEJjBJb2uz/hatPt6PZuy/t7u8wJttCpNVv8A4+uI5tRdKQfwqLf9b+62P+kv3EBG3CJ3NF3+mSmQN9skRsyj8W/Karf1pw/q5+kx/Q+nnZUR0lZHPFLvjXnf8zZQdZN5dt73uu/RlmNvhx6scTu1W6TpZR4tPh7qVsoNO6RshmYIz6z47Aaz7p/K6xY7Uid3OS8WmNkibreNVdBQQTUkzoJHVbI3Oa1jiWGN5tZwI2gfhUYKRa20rstpiPZE3GHjvX5P+1T/APgtfQx8M/UvylOsrZanRCSed5kmlwxz5HkNBc7psAAssREZto5aJnfHu+O4vvbcFkc0Eu9JqDKGe2XBrbDtyhtk1H7ow/o52g0g0Ppp46mGkq454X74x534ua/nJBl1897ruaZZjZz6scTuwNNtKqTFsSwd9K2UbxUMZIZWCMkuqIyANZ2Wd+V3jpalZ3c3vFrRs6Dd+J9Hw5tzlM8xI5iQwWNvufyq9N5l3n8QjTRDHnYVXRVjW52sDmSx3Dc8TvaAPMdQI+IWnJT112UUt6Z3S3LS6PaUgvaclaIxcj+DWMaPeadUgHTrHxWSJyYv6NG1MiIdKcBkwutlo5CH73ldHIBYSROF2utzdFukFbKX9dd2a1fTOzUrtC2T2T2FIHrPDOTwfJi8AXlT5b48MpQkQEBAQEBBRAQEEL7vfKsP+nn8bVs0viWbP5hFq1KBAKCStBt1J9HGykr2PngjAbFPHZ00bBsa4H2wOm9+1Zcmn396rqZdvaXZHdC0avv+dpm23FHNv9/6sn+VT0cnhb1KI+3Rd0BuLsbTQQ73TRyCTfJg0zyPAIFgPYGvpufhsWjDhmk7ypyZPV7Qx9HdIo5Y2UdU3OTliY4tzteDqaHjp2a1k1GmmtvXSXzGv/HXpec+GdvmY/0Z+LYtTYYDFDCBK9oeGMbkj13Ac48+w6lTixXzzvaWTS6XNrpi+W38LkcDx6ooa5lfGc8rXuc8ONmytd7bD8CD9tXQvVnFWa+l9ZjiMe0V8QlubTjRjEY45a+Nu+xjVHU0r5nxnna1zWkEfdZYw5a/q1dTHPlgYvum4bVUGJUTI5KcOpZIKK8fqzZoy0Czf5evp5vwuq4LRaJc2y1mJiHF7numb8HneHtMtJPl36NpGdrhskZfVe2ojnHYr82Lqf1cUv6ZSDLpVog6T00xxOqSc5vRymYydJGXLm+N/us3Tzfqt9ePfdF+leNQV2JSVsEBp4nvjcWEgve5u2RwGoONtg6PitdKTWm0qL2ibbux3UdNsOxOiggpHyPkZVNlcHxPjAYI3ja4dLgqMOK1bbysyXi0eyMVq2UpQZpvh3/TXBmeT0v0E0+Ten5d8/rta3xWXpW6vq+N13Uj0bOd3PNNXYPM9r2GWjqC0zMbbPG8ahIy+om2ojn1dCsy4vX/AFc0yel379KtEN89N3uJ1SXb5cUcu/GTp1ty5vjf7rP0822y314/KMsbxynqsYGIRQGmhNTBM5lw57sj2l0hA1Bxtew/ytNKTFPTKm1om27pN1fS+hxWOjbSPe8wyTPkzxviADmtA9oa9hVeDFakzu7y3i22zk9EK+lpMQp6isjdNTxOLnMYGu9a1muLT7QB12+CuyVma7QrpMRO8pUotKNEKSU1tO1sdSWuAEVNUtf620BpaGtv06u1ZZxZpjaV8XpE7wi/TPSA4rXy1mTe2ODY4mGxc2Jo1Zj0kkn7rTjp6K7KL29Vt2jVjlbJ7J7CkD1nhnJ6f5MXgC8qfLfHhlKEiAgICAgIKICCqCFt3zlWH/Tz+Nq2aXxLNn8wi1alAgICAgKRvtFcbFI4xOYC2eWPNIXZRGNlzq2a7rHqsE5PeJ8PL/JaKdRX1RPiPHLa6XaQRubJSRhkrZGMJmZIHBpzXtYc+rp51RpNPaJi0+38mL8V+PtWYy33iY+HGL0n0IgqgogICkEBAQESICAgICAoQILZPZPYf7JA9Z4Zyen+TF4AvKny3x4ZShIgICAgIKIKoCAghbd85Vh/08/jatml8Sz5/MItWpQICAgICAgICAgICAgICAgICAgICAgICAgtk9k9h/skD1nhnJ6f5MXgC8qfLdHhlKEqICAgICAgqgICCFt3zlWH/Tz+Nq2aXxLPn8wi1alAgICAgICAgICAgICAgICAgICAgICAgICC2T2T2FIHrPDOTwfJi8AXlT5boZKhIgICAgICCqAgINFpFojh2KPjfWwmZ0LXMjIlniytJBI9RwvsG1d0yWp4czWJ8tTxWYB1R/eqzzF33GTn6R068HFZgHVH96rPMTuMnP0dOvBxWYD1R/eqzzE7jJz9HTrwcVmA9Uf3qs8xO4yc/R068HFZgPVH96rPMTuMnP0dOvBxWYB1R/eqzzE7jJz9HTrwcVmA9Uf3qs8xO4yc/R068HFZgHVH96rPMTuMnP0dOvBxWYB1R/eqzzE7jJz9HTrwcVmA9Uf3qs8xO4yc/R068HFZgHVH96rPMTuMnP0dOvBxWYD1R/eqzzE7jJz9HTrwcVmAdUf3qs8xO4yc/R068HFZgHVH96rPMTuMnP0dOvBxWYB1R/eqzzE7jJz9HTrwcVmAdUf3qs8xO4yc/R068HFZgHVH96rPMTuMnP0dOvBxWYB1R/eqzzE7jJz9HTrwcVmAdUf3qs8xO4yc/R068HFZgPVH96rPMTuMnP0dOvBxWYB1R/eqzzE7jJz9HTrwcVmA9Uf3qs8xO4yc/R068HFZgHVH96rPMTuMnP0dOvBxWYB1R/eqzzE7jJz9HTrwcVmAdUf3qs8xO4yc/R068KHcswDqj+9VnmJ3GTn6OnXh2MUYY1rGizWNDWjWbACwVLtegogICAgICCqAgICAgICAgICAgICAgIKIKoKIKoKIKoKICAgICAgqgogICAgICAgIP//Z',
      description:
        'Ranked among the top 6% of 100,000+ women coders across India in a national-level coding competition.',
    },
    {
      title: 'Smart India Hackathon (SIH) 2024 Finalist',
      link: 'https://www.linkedin.com/posts/nidhi-satyapriya-960556249_memory-lifetime-experience-activity-7274167296120492032-oqAP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD17ztgBqpS-pJvDmzUh1CbogNWBAcAu3wU',
      image:'/pics/sih2.jpg',
      description:
        'Ranked #2 among 7 finalist teams selected for the Grand Finale of Smart India Hackathon (SIH) 2024, showcasing innovation, problem-solving, and technical excellence.',
    },
    {
      title: 'Solving For India 2023 Regionalist',
      link: 'https://www.linkedin.com/posts/nidhi-satyapriya-960556249_solvingforindia-regionalrounds-amd-activity-7068790761504350208-1TxM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD17ztgBqpS-pJvDmzUh1CbogNWBAcAu3wU',
      image: '/pics/gfgAMD.jpg',
      description:
        'Ranked 216 in GSSoC24 with 7 successful PRs, earning 715 points through contributions in diverse areas including React.js, Data Analysis, and Machine Learning.',
    },
    {
      title: 'Project Admin @SSOC\'25',
      link: '',
      image:'/pics/PA.png',
      description:
        ' Leading and managing open-source project contributions under SSOC\'25, reviewing PRs, mentoring contributors, and ensuring project milestones are met.',
    },
    {
      title: 'GirlScript Summer of Code(GSSoC 24) Contributor',
      link: 'https://www.linkedin.com/posts/nidhi-satyapriya-960556249_gssoc24-opensource-datascience-activity-7228605110145232897-h2HP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD17ztgBqpS-pJvDmzUh1CbogNWBAcAu3wU',
      image:'/pics/gssoc.jpg',
      description:
        'Ranked 216 in GSSoC24 with 7 successful PRs, earning 715 points through contributions in diverse areas including React.js, Data Analysis, and Machine Learning.',
    },
    {
      title: 'Rank 1 in Intra-College Hackathon',
      link: '',
      image:'/pics/sih.jpeg',
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
        thumbnail: "https://pbs.twimg.com/profile_images/1119517021064925184/wJP49tZ7_400x400.png",
        categories: ["ContributeWithMe", "OpenSourceCommunity", "BuildInPublic"],
      },
      {
        title: "General Secretary: Ek Bharat, Shreshtha Bharat(EBSB)",
        link: "https://www.linkedin.com/posts/ebsb-board-iiit-bhagalpur_ebsb-iiitbhagalpur-unity-activity-7197588862779494400-s5yG/",
        publishedAt: "2024-02-07",
        description:
          " Led 10+ cross-functional events in college, engaging 300\+ students, increasing participation by 30%, and improving club visibility",
        thumbnail: "data:image/png;base64,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",
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
