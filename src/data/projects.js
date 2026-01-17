export const projects = {
    "procedureandpractice4": {
        title: "Procedure Book Navigation Website",
        tags: [
            { label: "Web", type: "web" },
            { label: "Programming", type: "programming" }
        ],
        media: "/images/pp4/pp4.png",
        caption: "An accessible, intuitive navigation site for Procedure and Practice 4 book.",
        mediaLink: {
            url: "https://ourcommons.ca/procedure/procedure-and-practice-4/index-e.html",
            label: "View live website"
        },
        content: [
            { type: "heading", text: "Project Overview" },
            { type: "text", text: "Note: The source code is the intellectual property of the House of Commons. This case study focuses on the public site and my own contributions." },

            { type: "text", text: "This project involved creating a new navigation system for the newest edition of Procedure and Practice. It is designed to be accessed by both the public and internal users to inform and assist with Chamber proceedings within the House of Commons. The goal for this project was to create a more accessible and intuitive navigation experience for all users and devices." },
            { type: "heading", text: "Project Info" },
            {
                type: "list", items: [
                    "Project Name: Procedure and Practice 4 Website",
                    "Role: Front-End Developer - Co-op Student",
                    "Duration: 10 months (February to December 2025, only for my contributions)",
                    "Tools Used: JavaScript, jQuery, .NETFramework, HTML, CSS, C#, JSON, Microsoft Azure DevOps"
                ],
            },
            { type: "text", text: "This project was a collaboration between designers, developers, writers, accessibility experts, procedural clerks and project managers. My role within this collaborative team was to implement UI based on mockups provided by the UX designer. " },

            { type: "heading", text: "My Key Contributions" },

            { type: "text", text: "My main contributions to this project were developing the responsive navigation elements, ensuring compliance with accessibility standards. Some of the key features I worked on included:" },
            {
                type: "list", items: [
                    "Table of Contents menu that included the following:",
                    {
                        type: "list", items: [
                            "Expand all/Collapse all for all chapters and sections",
                            "Individual carets for opening/closing chapters and sections",
                            "Highlighting current section/chapter based on page and scroll position",
                            "Filter functionality to search for chapters and sections by keywords",
                            "Navigation to specific chapters and sections",
                            "Resizable and collapsible menu"
                        ],
                    },
                    { type: "image", src: "/images/pp4/toc.gif", alt: "PP4 navigation UI" },
                    "Non Table of Contents page to page navigation elements:",
                    {
                        type: "list", items: [
                            "Previous/Next page buttons",
                            "Breadcrumb navigation",
                            "In-text links to related sections within the book",
                            "In-text footnotes to references within the book"
                        ],
                    },
                    { type: "image", src: "/images/pp4/toc-nav.gif", alt: "PP4 navigation UI" },

                    "Other contributions:",
                    {
                        type: "list", items: [
                            "AJAX loading of content",
                            "Sticky banner with updating title based on page",
                            "Implementation of crawler for site search functionality",
                            { type: "image", src: "/images/pp4/seo.png", alt: "Browser keyword search" },

                            "Search in Procedure and Practice 4 only",
                            "Persistence of user settings using local storage (e.g., menu open/closed state, menu width)",
                            "Responsiveness for mobile and tablet devices",
                            {
                                type: "gallery",
                                images: [
                                    { src: "/images/pp4/mobile.jpg", alt: "TOC on mobile", width: 1206, height: 2483 },
                                    { src: "/images/pp4/mobile3.jpg", alt: "Chapter page on mobile", width: 1206, height: 2483 },
                                    { src: "/images/pp4/mobile4.jpg", alt: "In-text footnotes on mobile", width: 1206, height: 2483 },
                                ],
                            },
                            "Index page expanding/collapsing sections, cross-references and links to sections",

                            { type: "image", src: "/images/pp4/index.gif", alt: "Index page navigation" },
                        ],
                    },
                ],
            },

            { type: "heading", text: "Accessibility" },
            { type: "text", text: "Accessibility was a major focus throughout the development of this project. Throughout development, we would scan new features for accessibility issues using Axe DevTools." },
            { type: "text", text: "We worked closely with an accessibility expert to ensure all UI elements were compliant with WCAG's latest standards and also conducted tests using keyboard navigation and screen readers (NVDA)." },
            { type: "image", src: "/images/pp4/axe.png", alt: "PP4 Axe Scan" },

            { type: "text", text: "More info to come!" },
        ],
    },

    "studentdashboard": {
        title: "Student Dashboard UX Design",
        tags: [
            { label: "UX", type: "ux" }
        ],
        media: "/images/digidesk/highfidelity/home.png",
        caption: "UX Research for a Student Dashboard.",
        content: [
            { type: "heading", text: "Project Overview" },
            { type: "text", text: "DigiDesk is a student ran class dashboard website that helps users track their assignments, announcements and schedules all in one place." },

            { type: "heading", text: "Project Info" },
            {
                type: "list", items: [
                    "Project Name: DigiDesk",
                    "Role: UI/UX Designer",
                    "Duration: 1 month",
                    "Tools Used: Adobe XD and Photoshop"
                ],
            },

            { type: "heading", text: "Project Motivation" },
            { type: "text", text: "As a student, I often found myself juggling multiple platforms just to keep up with my coursework. Assignments were on Brightspace, my schedule lived in an old screenshot buried in my camera roll, and announcements were scattered across Discord servers — sometimes pinned, sometimes not. This system made it difficult to stay organized and up to date. I wanted a centralized platform — a clean, intuitive dashboard where I could see everything that matters at a glance: assignments, announcements, and my weekly schedule." },

            { type: "heading", text: "Project Goals" },
            {
                type: "list", items: [
                    "View announcements, assignments and schedule all on one platform",
                    "Design a clean and simple interface",
                    "Easily attain important information on each page"
                ],
            },

            { type: "heading", text: "Initial Sketches" },
            { type: "text", text: "I began brainstorming on paper the general features and layout of the site. This allowed me to plan the main pages: announcements, home, assignments and calendar, and their widgets." },

            {
                type: "gallery",
                images: [
                    { src: "/images/digidesk/sketch1.jpg", alt: "Sketch of dashboard 1", width: 750, height: 1000 },
                    { src: "/images/digidesk/sketch2.jpg", alt: "Sketch of dashboard 2", width: 750, height: 1000 }
                ]
            },

            { type: "heading", text: "Site Map" },

            { type: "image", src: "/images/digidesk/sitemap.png", alt: "Sitemap", width: 571, height: 401 },

            { type: "heading", text: "Low-Fidelity Wireframes" },
            { type: "text", text: "Building wireframes allowed me to plan out key elements on each page, without focusing on design or styling." },

            {
                type: "gallery",
                images: [
                    { src: "/images/digidesk/lowfidelity/home.png", alt: "Home page low fidelity wireframe", width: 1920, height: 1080 },
                    { src: "/images/digidesk/lowfidelity/assignments.png", alt: "Assignment page low fidelity wireframe", width: 1920, height: 1080 },
                    { src: "/images/digidesk/lowfidelity/assignments – 1.png", alt: "Make assignment page low fidelity wireframe", width: 1920, height: 1080 },
                    { src: "/images/digidesk/lowfidelity/announcements.png", alt: "Announcement page low fidelity wireframe", width: 1920, height: 1080 },
                    { src: "/images/digidesk/lowfidelity/announcements – 1.png", alt: "Make announcement page low fidelity wireframe 1", width: 1920, height: 1080 },
                    { src: "/images/digidesk/lowfidelity/announcements – 2.png", alt: "Make announcement page low fidelity wireframe 2", width: 1920, height: 1080 },
                    { src: "/images/digidesk/lowfidelity/calendar.png", alt: "Calendar page low fidelity wireframe", width: 1920, height: 1080 },
                    { src: "/images/digidesk/lowfidelity/profile.png", alt: "Profile page low fidelity wireframe", width: 1920, height: 1080 }
                ],
            },

            { type: "heading", text: "Icon Brainstorm" },
            { type: "text", text: "Researched and compiled existing similar icons to find and draw the ones that would fit best with my site." },

            { type: "image", src: "/images/digidesk/iconbrainstorm.png", alt: "Icon brainstorm art board", width: 1920, height: 1080 },

            { type: "heading", text: "High-Fidelity Mockups" },
            { type: "text", text: "The final mockups were completed in Adobe XD, and the icons and other design elements in Adobe Photoshop. Distinct colours are used to differentiate different tags and classes, while keeping the overall color palette neutral. The page is high contrast for accessibility and page icon designs change based on user navigation. Bold text is used for main headers and important information." },

            {
                type: "gallery",
                images: [
                    { src: "/images/digidesk/highfidelity/home.png", alt: "Home page high fidelity wireframe", width: 1600, height: 900 },
                    { src: "/images/digidesk/highfidelity/assignments.png", alt: "Assignment page high fidelity wireframe", width: 1600, height: 900 },
                    { src: "/images/digidesk/highfidelity/assignmentsnew.png", alt: "Make assignment page high fidelity wireframe", width: 1600, height: 900 },
                    { src: "/images/digidesk/highfidelity/assignmentsnewcalendar.png", alt: "Announcement page high fidelity wireframe", width: 1600, height: 900 },
                    { src: "/images/digidesk/highfidelity/announcements.png", alt: "Make announcement page high fidelity wireframe 1", width: 1600, height: 900 },
                    { src: "/images/digidesk/highfidelity/announcementscreate.png", alt: "Make announcement page high fidelity wireframe 2", width: 1600, height: 900 },
                    { src: "/images/digidesk/highfidelity/calendar.png", alt: "Calendar page high fidelity wireframe", width: 1600, height: 900 },
                    { src: "/images/digidesk/highfidelity/profile.png", alt: "Profile page high fidelity wireframe", width: 1600, height: 900 }
                ],
            },

            { type: "heading", text: "Prototyping and Testing" },
            { type: "image", src: "/images/digidesk/prototype_demo.gif", alt: "Prototype demo GIF", width: 426, height: 240 },
            { type: "image", src: "/images/digidesk/prototype-wiring.png", alt: "Prototype wiring diagram", width: 1596, height: 589 },
        ],
    },

    "dressupgame": {
        title: "Dress Up Game with Arduino Controller",
        tags: [
            { label: "Programming", type: "programming" },
            { label: "Arduino", type: "arduino" }
        ],
        media: "/images/dressupgame.JPG",
        caption: "An Arduino and OpenFrameworks project.",
        content: [
            { type: "heading", text: "Project Info" },
            { type: "text", text: "A joint project by Irina Kozhevnikova and Maria Kuzmenko" },
            { type: "text", text: "Sensor Based Interactions, 2024" },
            {
                type: "youtube",
                id: "bbfvcUKeA54",
                caption: "Demo Video for Dress Up Game"
            }
        ],
    },
    "suninfographic": {
        title: "Animated Infographic on the Sun",
        tags: [
            { label: "Motion Graphics", type: "motiongraphics" }
        ],
        media: "/images/factsaboutsun.png",
        caption: "An animated infographic on the sun.",
        content: [
            { type: "heading", text: "Project Info" },
            { type: "text", text: "Animated Infographic assignment created in Adobe After Effects." },
            { type: "text", text: "Motion Graphics, 2024" },
            {
                type: "youtube",
                id: "dYYbboXfmuU",
                caption: "Animated Infographic on the Sun"
            }
        ],
    },

    "vinylappanimation": {
        title: "Vinyl Mobile App Design and Animation",
        tags: [
            { label: "UX", type: "ux" },
            { label: "Motion Graphics", type: "motiongraphics" }
        ],
        media: "/images/revinylthumb.png",
        caption: "App specializing in reselling second-hand vinyls, with an animated demo.",

        content: [
            { type: "heading", text: "Project Overview" },
            { type: "text", text: "" },

            {
                type: "list", items: [
                    "Project Name: ReVinyl",
                    "Role: UI/UX Designer + Animator",
                    "Duration: 1 week",
                    "Tools Used: Adobe After Effects and Photoshop"
                ],
            },
            { type: "heading", text: "Storyboard and Design Brainstorm" },

            { type: "image", src: "/images/vinylsketch.png", alt: "Vinyl Sketch and Brainstorm", width: 1920, height: 1080 },

            { type: "heading", text: "Final Product" },

            {
                type: "youtube",
                id: "px-hA2FSl4M",
                caption: "Animated App Demo Video"
            }
        ],
    },

    "mayaenv": {
        title: "Maya 3D Environment",
        tags: [
            { label: "3D Modeling", type: "modeling" }
        ],
        media: "/images/ENVProject.jpg",
        caption: "A 3D environment created in Maya inspired by Tim Burton.",
        content: [
            { type: "heading", text: "Project Info" },
            { type: "text", text: "Group 3D modeling assignment created in Maya and Blender." },
            { type: "text", text: "A project by Irina Kozhevnikova, Hao Ding and Maria Kuzmenko." },
            { type: "text", text: "Design Studio 2, 2024" },
            { type: "heading", text: "Final Render" },
            { type: "image", src: "/images/ENVProject.jpg", alt: "Maya Environment Final Render", width: 960, height: 540 },
        ],
    },
};