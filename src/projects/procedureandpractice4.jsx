import SimpleGallery from "../components/simplegallery";

function ProcedureAndPractice4Project() {
    return (
        <>
            <h2>Project Overview</h2>
            <p>
                Note: The source code is the intellectual property of the House of Commons.
                This case study focuses on the public site and my own contributions.
            </p>
            <p>
                This project involved creating a new navigation system for the newest edition
                of Procedure and Practice. It is designed to be accessed by both the public and
                internal users to inform and assist with Chamber proceedings within the House of
                Commons. The goal for this project was to create a more accessible and intuitive
                navigation experience for all users and devices.
            </p>

            <h2>Project Info</h2>
            <ul className="project-list">
                <li className="project-list-item">Project Name: Procedure and Practice 4 Website</li>
                <li className="project-list-item">Role: Front-End Developer - Co-op Student</li>
                <li className="project-list-item">Duration: 10 months (February to December 2025, only for my contributions)</li>
                <li className="project-list-item">Tools Used: JavaScript, jQuery, .NETFramework, HTML, CSS, C#, JSON, Microsoft Azure DevOps</li>
            </ul>
            <p>
                This project was a collaboration between designers, developers, writers,
                accessibility experts, procedural clerks and project managers. My role within
                this collaborative team was to implement UI based on mockups provided by the
                UX designer.
            </p>

            <h2>My Key Contributions</h2>
            <p>
                My main contributions to this project were developing the responsive navigation
                elements, ensuring compliance with accessibility standards. Some of the key
                features I worked on included:
            </p>

            <ul className="project-list">
                <li className="project-list-item">
                    Table of Contents menu that included the following:
                    <ul className="project-sublist">
                        <li className="project-sublist-item">Expand all/Collapse all for all chapters and sections</li>
                        <li className="project-sublist-item">Individual carets for opening/closing chapters and sections</li>
                        <li className="project-sublist-item">Highlighting current section/chapter based on page and scroll position</li>
                        <li className="project-sublist-item">Filter functionality to search for chapters and sections by keywords</li>
                        <li className="project-sublist-item">Navigation to specific chapters and sections</li>
                        <li className="project-sublist-item">Resizable and collapsible menu</li>
                    </ul>
                </li>

                <li className="project-list-item">
                    <figure className="single-video">
                        <video autoPlay loop muted playsInline preload="metadata">
                            <source src="/images/pp4/toc.mp4" type="video/mp4" />
                        </video>
                    </figure>
                </li>

                <li className="project-list-item">
                    Non Table of Contents page to page navigation elements:
                    <ul className="project-sublist">
                        <li className="project-sublist-item">Previous/Next page buttons</li>
                        <li className="project-sublist-item">Breadcrumb navigation</li>
                        <li className="project-sublist-item">In-text links to related sections within the book</li>
                        <li className="project-sublist-item">In-text footnotes to references within the book</li>
                    </ul>
                </li>

                <li className="project-list-item">
                    <figure className="single-video">
                        <video autoPlay loop muted playsInline preload="metadata">
                            <source src="/images/pp4/toc-nav.mp4" type="video/mp4" />
                        </video>
                    </figure>
                </li>

                <li className="project-list-item">
                    Other contributions:
                    <ul className="project-sublist">
                        <li className="project-sublist-item">AJAX loading of content</li>
                        <li className="project-sublist-item">Sticky banner with updating title based on page</li>
                        <li className="project-sublist-item">Implementation of crawler for site search functionality</li>
                        <li className="project-sublist-item">
                            <div className="single-image">
                                <SimpleGallery
                                    galleryID="image-procedureandpractice4-seo"
                                    images={[
                                        {
                                            src: "/images/pp4/seo.png",
                                            thumb: "/images/pp4/seo.png",
                                            alt: "Browser keyword search",
                                        },
                                    ]}
                                />
                            </div>
                        </li>
                        <li className="project-sublist-item">Search in Procedure and Practice 4 only</li>
                        <li className="project-sublist-item">Persistence of user settings using local storage (e.g., menu open/closed state, menu width)</li>
                        <li className="project-sublist-item">Responsiveness for mobile and tablet devices</li>
                        <li className="project-sublist-item">
                            <div className="gallery-layout">
                                <SimpleGallery
                                    galleryID="gallery-procedureandpractice4-mobile"
                                    images={[
                                        { src: "/images/pp4/mobile.jpg", thumb: "/images/pp4/mobile.jpg", alt: "TOC on mobile", width: 1206, height: 2483 },
                                        { src: "/images/pp4/mobile3.jpg", thumb: "/images/pp4/mobile3.jpg", alt: "Chapter page on mobile", width: 1206, height: 2483 },
                                        { src: "/images/pp4/mobile4.jpg", thumb: "/images/pp4/mobile4.jpg", alt: "In-text footnotes on mobile", width: 1206, height: 2483 },
                                    ]}
                                />
                            </div>
                        </li>
                        <li className="project-sublist-item">Index page expanding/collapsing sections, cross-references and links to sections</li>
                        <li className="project-sublist-item">
                            <figure className="single-video">
                                <video autoPlay loop muted playsInline preload="metadata">
                                    <source src="/images/pp4/index.mp4" type="video/mp4" />
                                </video>
                            </figure>
                        </li>
                    </ul>
                </li>
            </ul>

            <h2>Accessibility</h2>
            <p>
                Accessibility was a major focus throughout the development of this project.
                Throughout development, we would scan new features for accessibility issues using
                Axe DevTools.
            </p>
            <p>
                We worked closely with an accessibility expert to ensure all UI elements were
                compliant with WCAG&apos;s latest standards and also conducted tests using keyboard
                navigation and screen readers (NVDA).
            </p>
            <div className="single-image">
                <SimpleGallery
                    galleryID="image-procedureandpractice4-axe"
                    images={[
                        {
                            src: "/images/pp4/axe.png",
                            thumb: "/images/pp4/axe.png",
                            alt: "PP4 Axe Scan",
                        },
                    ]}
                />
            </div>

            <p>More info to come!</p>
        </>
    );
}

export default ProcedureAndPractice4Project;
