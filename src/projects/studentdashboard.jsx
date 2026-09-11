import SimpleGallery from "../components/simplegallery";

function StudentDashboardProject() {
    return (
        <>
            <h2>Project Overview</h2>
            <p>
                DigiDesk is a student ran class dashboard website that helps users track their
                assignments, announcements and schedules all in one place.
            </p>

            <h2>Project Info</h2>
            <ul className="project-list">
                <li className="project-list-item">Project Name: DigiDesk</li>
                <li className="project-list-item">Role: UI/UX Designer</li>
                <li className="project-list-item">Duration: 1 month</li>
                <li className="project-list-item">Tools Used: Adobe XD and Photoshop</li>
            </ul>

            <h2>Project Motivation</h2>
            <p>
                As a student, I often found myself juggling multiple platforms just to keep up
                with my coursework. Assignments were on Brightspace, my schedule lived in an old
                screenshot buried in my camera roll, and announcements were scattered across
                Discord servers — sometimes pinned, sometimes not. This system made it difficult
                to stay organized and up to date. I wanted a centralized platform — a clean,
                intuitive dashboard where I could see everything that matters at a glance:
                assignments, announcements, and my weekly schedule.
            </p>

            <h2>Project Goals</h2>
            <ul className="project-list">
                <li className="project-list-item">View announcements, assignments and schedule all on one platform</li>
                <li className="project-list-item">Design a clean and simple interface</li>
                <li className="project-list-item">Easily attain important information on each page</li>
            </ul>

            <h2>Initial Sketches</h2>
            <p>
                I began brainstorming on paper the general features and layout of the site. This
                allowed me to plan the main pages: announcements, home, assignments and calendar,
                and their widgets.
            </p>
            <div className="gallery-layout">
                <SimpleGallery
                    galleryID="gallery-studentdashboard-sketches"
                    images={[
                        { src: "/images/digidesk/sketch1.jpg", thumb: "/images/digidesk/sketch1.jpg", alt: "Sketch of dashboard 1", width: 750, height: 1000 },
                        { src: "/images/digidesk/sketch2.jpg", thumb: "/images/digidesk/sketch2.jpg", alt: "Sketch of dashboard 2", width: 750, height: 1000 },
                    ]}
                />
            </div>

            <h2>Site Map</h2>
            <div className="single-image">
                <SimpleGallery
                    galleryID="image-studentdashboard-sitemap"
                    images={[
                        { src: "/images/digidesk/sitemap.png", thumb: "/images/digidesk/sitemap.png", alt: "Sitemap", width: 571, height: 401 },
                    ]}
                />
            </div>

            <h2>Low-Fidelity Wireframes</h2>
            <p>
                Building wireframes allowed me to plan out key elements on each page, without
                focusing on design or styling.
            </p>
            <div className="gallery-layout">
                <SimpleGallery
                    galleryID="gallery-studentdashboard-lowfi"
                    images={[
                        { src: "/images/digidesk/lowfidelity/home.png", thumb: "/images/digidesk/lowfidelity/home.png", alt: "Home page low fidelity wireframe", width: 1920, height: 1080 },
                        { src: "/images/digidesk/lowfidelity/assignments.png", thumb: "/images/digidesk/lowfidelity/assignments.png", alt: "Assignment page low fidelity wireframe", width: 1920, height: 1080 },
                        { src: "/images/digidesk/lowfidelity/assignments – 1.png", thumb: "/images/digidesk/lowfidelity/assignments – 1.png", alt: "Make assignment page low fidelity wireframe", width: 1920, height: 1080 },
                        { src: "/images/digidesk/lowfidelity/announcements.png", thumb: "/images/digidesk/lowfidelity/announcements.png", alt: "Announcement page low fidelity wireframe", width: 1920, height: 1080 },
                        { src: "/images/digidesk/lowfidelity/announcements – 1.png", thumb: "/images/digidesk/lowfidelity/announcements – 1.png", alt: "Make announcement page low fidelity wireframe 1", width: 1920, height: 1080 },
                        { src: "/images/digidesk/lowfidelity/announcements – 2.png", thumb: "/images/digidesk/lowfidelity/announcements – 2.png", alt: "Make announcement page low fidelity wireframe 2", width: 1920, height: 1080 },
                        { src: "/images/digidesk/lowfidelity/calendar.png", thumb: "/images/digidesk/lowfidelity/calendar.png", alt: "Calendar page low fidelity wireframe", width: 1920, height: 1080 },
                        { src: "/images/digidesk/lowfidelity/profile.png", thumb: "/images/digidesk/lowfidelity/profile.png", alt: "Profile page low fidelity wireframe", width: 1920, height: 1080 },
                    ]}
                />
            </div>

            <h2>Icon Brainstorm</h2>
            <p>
                Researched and compiled existing similar icons to find and draw the ones that
                would fit best with my site.
            </p>
            <div className="single-image">
                <SimpleGallery
                    galleryID="image-studentdashboard-icons"
                    images={[
                        { src: "/images/digidesk/iconbrainstorm.png", thumb: "/images/digidesk/iconbrainstorm.png", alt: "Icon brainstorm art board", width: 1920, height: 1080 },
                    ]}
                />
            </div>

            <h2>High-Fidelity Mockups</h2>
            <p>
                The final mockups were completed in Adobe XD, and the icons and other design
                elements in Adobe Photoshop. Distinct colours are used to differentiate different
                tags and classes, while keeping the overall color palette neutral. The page is
                high contrast for accessibility and page icon designs change based on user
                navigation. Bold text is used for main headers and important information.
            </p>
            <div className="gallery-layout">
                <SimpleGallery
                    galleryID="gallery-studentdashboard-highfi"
                    images={[
                        { src: "/images/digidesk/highfidelity/home.png", thumb: "/images/digidesk/highfidelity/home.png", alt: "Home page high fidelity wireframe", width: 1600, height: 900 },
                        { src: "/images/digidesk/highfidelity/assignments.png", thumb: "/images/digidesk/highfidelity/assignments.png", alt: "Assignment page high fidelity wireframe", width: 1600, height: 900 },
                        { src: "/images/digidesk/highfidelity/assignmentsnew.png", thumb: "/images/digidesk/highfidelity/assignmentsnew.png", alt: "Make assignment page high fidelity wireframe", width: 1600, height: 900 },
                        { src: "/images/digidesk/highfidelity/assignmentsnewcalendar.png", thumb: "/images/digidesk/highfidelity/assignmentsnewcalendar.png", alt: "Announcement page high fidelity wireframe", width: 1600, height: 900 },
                        { src: "/images/digidesk/highfidelity/announcements.png", thumb: "/images/digidesk/highfidelity/announcements.png", alt: "Make announcement page high fidelity wireframe 1", width: 1600, height: 900 },
                        { src: "/images/digidesk/highfidelity/announcementscreate.png", thumb: "/images/digidesk/highfidelity/announcementscreate.png", alt: "Make announcement page high fidelity wireframe 2", width: 1600, height: 900 },
                        { src: "/images/digidesk/highfidelity/calendar.png", thumb: "/images/digidesk/highfidelity/calendar.png", alt: "Calendar page high fidelity wireframe", width: 1600, height: 900 },
                        { src: "/images/digidesk/highfidelity/profile.png", thumb: "/images/digidesk/highfidelity/profile.png", alt: "Profile page high fidelity wireframe", width: 1600, height: 900 },
                    ]}
                />
            </div>

            <h2>Prototyping and Testing</h2>
            <div className="single-image">
                <SimpleGallery
                    galleryID="image-studentdashboard-prototype-demo"
                    images={[
                        { src: "/images/digidesk/prototype_demo.gif", thumb: "/images/digidesk/prototype_demo.gif", alt: "Prototype demo GIF", width: 426, height: 240 },
                    ]}
                />
            </div>
            <div className="single-image">
                <SimpleGallery
                    galleryID="image-studentdashboard-prototype-wiring"
                    images={[
                        { src: "/images/digidesk/prototype-wiring.png", thumb: "/images/digidesk/prototype-wiring.png", alt: "Prototype wiring diagram", width: 1596, height: 589 },
                    ]}
                />
            </div>
        </>
    );
}

export default StudentDashboardProject;
