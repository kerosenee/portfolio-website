import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const projectList = [
  { slug: "procedureandpractice4", title: "Procedure Book Navigation Website" },
  { slug: "studentdashboard", title: "Student Dashboard UX Design" },
  { slug: "recipefinder", title: "Recipe Finder UX Designer" },
  { slug: "dressupgame", title: "Dress Up Game with Arduino Controller" },
  { slug: "picnicposter", title: "Craft Picnic Poster Graphic" },
  { slug: "suninfographic", title: "Animated Infographic on Sun" },
  { slug: "vinylappanimation", title: "Vinyl App Animation" },
  { slug: "mayaenv", title: "Maya 3D Environment" }
];

function Projects() {

  return (
    <div className="project-text">
      <div className="section-header">
        <h2>Projects</h2>
      </div>

      <ul>
        {Object.entries(projects).map(([slug, project]) => (
          <li key={slug}>
            <Link to={`/projects/${slug}`} className="project-btn">
              <div className="arrow-corner">
                <div className="go-to-arrow">→</div>
              </div>
              <div className="left-project-column">
                <div className="project-title">{project.title}</div>
                {project.caption && <div className="project-caption">{project.caption}</div>}
                {project.tags?.length && (
                  <div className="project-tags">
                    {project.tags?.length ? (
                      <div className="tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className={`tag tag-${tag.type}`}>
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              <div className="right-project-column">
                {project.media && (
                  <img className="project-image" src={project.media} alt="" />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div><p>More projects coming soon!</p></div>
    </div>
  );
}

export default Projects;
