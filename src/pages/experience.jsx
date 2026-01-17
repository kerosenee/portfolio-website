import { Link } from "react-router-dom";
import hocLOGO from '../assets/HOC_LOGO.svg';

function ExperienceSection() {
    return (
        <div className="experience-section">
            <div className="section-header">
                <h2>Experience</h2>
            </div>
            <div className="experience-card" id="hoc-experience-card">
                <div className="experience-text">
                    <h3>Student Web Developer (Co-op)</h3>
                    <p className="experience-org">House of Commons</p>
                    <p className="experience-date">January - December 2025</p>
                    <ul className="experience-list">
                        <li>Developed and maintained web features using ASP.NET Core MVC, HTML, CSS and JavaScript (jQuery, Bootstrap)
                            based on UX/UI requirements provided by the design team and feedback from clients.</li>
                        <li>Ensured accessibility compliance by referencing WCAG standards, while working closely with an accessibility expert
                            to validate screen reader outputs and keyboard navigation.</li>
                        <li>Supported internal databases such as Azure SQL and CosmosDB, along with internal shared file repositories.</li>
                        <li>Used JSON to pass data between server-side and client-side to support dynamic features.</li>
                        <li>Used Git and Azure DevOps for version control, Agile workflow and task organization.</li>
                    </ul>
                </div>

                <div className="experience-image-wrapper">
                    <img
                        src={hocLOGO}
                        alt="House of Commons Logo"
                        className="experience-image"
                    />
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;
