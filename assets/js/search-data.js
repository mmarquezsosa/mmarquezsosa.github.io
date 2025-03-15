// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-highlights",
          title: "highlights",
          description: "Updates on my research, professional achievements, and various academic and non-academic activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/highlights/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "A categorized list of my publications, presented in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A collection of my repositories and projects on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "An overview of my academic background, research experience, and professional achievements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "highlights-my-first-national-conference-presentation-at-acofi-2021-cartagena-colombia",
          title: 'My First National Conference Presentation at ACOFI 2021   📍 Cartagena, Colombia 🇨🇴...',
          description: "",
          section: "Highlights",},{id: "highlights-my-first-internacional-conference-at-ieee-urucon-2021-montevideo-uruguay",
          title: 'My First Internacional Conference at IEEE URUCON 2021   📍 Montevideo, Uruguay 🇺🇾...',
          description: "",
          section: "Highlights",},{id: "highlights-valedictorian-honor-graduate-bsc-in-biomedical-engineering-bogotá-colombia",
          title: '🎓 Valedictorian Honor Graduate – BSc. in Biomedical Engineering!   📍 Bogotá, Colombia...',
          description: "",
          section: "Highlights",},{id: "highlights-my-first-article-citation",
          title: '🎉 My First Article Citation! 📖',
          description: "",
          section: "Highlights",},{id: "highlights-conference-presentation-at-ieee-andescon-2022-barranquilla-colombia",
          title: 'Conference Presentation at IEEE ANDESCON 2022    📍 Barranquilla, Colombia 🇨🇴',
          description: "",
          section: "Highlights",},{id: "highlights-conference-presentation-at-ieee-iceccme-2023-tenerife-canary-islands-spain",
          title: 'Conference Presentation at IEEE ICECCME 2023   📍 Tenerife, Canary Islands 🇮🇨, Spain...',
          description: "",
          section: "Highlights",},{id: "highlights-new-adventure-in-france-moved-to-lyon-to-join-creatis-and-work-on-3d-medical-image-processing",
          title: '🌍 New Adventure in France! 🇫🇷   Moved to Lyon to join CREATIS...',
          description: "",
          section: "Highlights",},{id: "highlights-conference-presentation-at-iabm-2024-grenoble-france",
          title: 'Conference Presentation at IABM 2024    📍 Grenoble, France 🇫🇷',
          description: "",
          section: "Highlights",},{id: "highlights-summa-cum-laude-laureate-msc-in-artificial-intelligence-bogotá-colombia",
          title: '🎓 Summa Cum Laude Laureate – MSc. in Artificial Intelligence!   📍 Bogotá,...',
          description: "",
          section: "Highlights",},{id: "highlights-started-my-phd-in-the-université-de-lyon-1-eea-lyon-france",
          title: 'Started my PhD in the Université de Lyon 1 - EEA   📍...',
          description: "",
          section: "Highlights",},{id: "highlights-creation-of-through-mis-yeux-project",
          title: 'Creation of through mis yeux project 📷',
          description: "",
          section: "Highlights",},{id: "highlights-conference-presentation-at-iabm-2025-nice-france",
          title: 'Conference Presentation at IABM 2025    📍 Nice, France 🇫🇷',
          description: "",
          section: "Highlights",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%72%69%61.%6D%61%72%71%75%65%7A@%63%72%65%61%74%69%73.%69%6E%73%61-%6C%79%6F%6E.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mmarquezsosa", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/through_misyeux_project", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/maria-marquez-sosa-8b068812a/", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6962-9881", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
