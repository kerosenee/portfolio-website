import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { projectPages } from "../projects";

function ProjectPage() {
    const { slug } = useParams();
    const project = projects[slug];
    const CustomProjectPage = projectPages[slug];

    if (!project) {
        return (
            <div>
                <h1>Project not found</h1>
                <Link to="/home">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className={`project-${slug} project-page`}>
            <div className="project-text">
                <a href="/" className="link-item">← back to home</a>

                <h1>{project.title}</h1>

                {project.tags?.length ? (
                    <div className="tags">
                        {project.tags.map((tag, i) => (
                            <span key={i} className={`tag tag-${tag.type}`}>
                                {tag.label}
                            </span>
                        ))}
                    </div>
                ) : null}

                {/* {project.media ? (
                    <figure>
                        <img src={project.media} alt="" />
                        {project.caption ? <figcaption>{project.caption}</figcaption> : null}
                    </figure>
                ) : null} */}

                {project.mediaLink?.url ? (
                    <a
                        className="link-item project-media-link"
                        href={project.mediaLink.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {project.mediaLink.label}
                    </a>
                ) : null}

                {CustomProjectPage ? <CustomProjectPage /> : null}
            </div>
        </div>
    );
}

export default ProjectPage;
