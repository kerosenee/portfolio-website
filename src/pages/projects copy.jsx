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
      <h1>Projects</h1>

      <ul>
        {Object.entries(projects).map(([slug, project]) => (
          <li key={slug}>
            <Tippy
              interactive
              placement="right"
              arrow={false}
              delay={200}
              offset={[0, 32]}
              appendTo={document.body}
              theme="light"
              animation="shift-away"
              content={
                <div className="project-preview">
                  {project.media && (
                    <img src={project.media} alt="" />
                  )}
                  {project.caption && <p>{project.caption}</p>}
                  {project.tags?.length && (
                    <p className="project-tags">
                      {project.tags?.length ? (
                        <div className="tags">
                          {project.tags.map((tag, i) => (
                            <span key={i} className={`tag tag-${tag.type}`}>
                              {tag.label} 
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </p>
                  )}
                </div>
              }
            >
              <Link to={`/projects/${slug}`}>
                {project.title}
              </Link>
            </Tippy>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;