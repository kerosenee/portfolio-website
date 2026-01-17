import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import SimpleGallery from "../components/simplegallery";

function renderListItem(item, index, slug, parentIndex) {
    if (typeof item == 'string') {
        return <li className='project-list-item' key={index}>{item}</li>;
    }

    if (!item || typeof item != 'object') {
        return null;
    }

    if (item.type === 'list') {
        return (
            <li className='project-list-item' key={index}>
                <ul className='project-sublist'>
                    {item.items?.map((subitem, subindex) => {
                        const content = renderListItem(subitem, subindex, slug, `${parentIndex}-${index}`);
                        return content ? (
                            <li className='project-sublist-item' key={subindex}>
                                {typeof subitem == 'string' ? (
                                    <>
                                        &#10687;
                                        <span className="bullet-point-margin">{subitem}</span>
                                    </>
                                ) : content}
                            </li>
                        ) : null;
                    })}
                </ul>
            </li>
        );
    }

    if (item.type === 'image') {
        return (
            <li className='project-list-item' key={index}>
                <div className="single-image">
                    <SimpleGallery
                        galleryID={`image-${slug}-${parentIndex}-${index}`}
                        images={[
                            {
                                src: item.src,
                                thumb: item.src,
                                alt: item.alt,
                                width: item.width,
                                height: item.height,
                            },
                        ]}
                    />
                </div>
            </li>
        );
    }

    if (item.type === 'gallery') {
        return (
            <li className='project-list-item' key={index}>
                <div className='gallery-layout'>
                    <SimpleGallery
                        galleryID={`gallery-${slug}-${parentIndex}-${index}`}
                        images={item.images?.map(img => ({
                            src: img.src,
                            thumb: img.src,
                            alt: img.alt,
                            width: img.width,
                            height: img.height,
                        }))}
                    />
                </div>
            </li>
        );
    }

    return null;
}

function renderSection(section, index, slug) {
    switch (section.type) {
        case "heading":
            return <h2 key={index}>{section.text}</h2>;

        case "text":
            return <p key={index}>{section.text}</p>;

        case "list":
            return (
                <ul className='project-list' key={index}>
                    {section.items?.map((item, i) => renderListItem(item, i, slug, index))}
                </ul>
            );

        case "image":
            return (
                <div className="single-image">
                    <SimpleGallery
                        galleryID={`image-${slug}-${index}`}
                        images={[
                            {
                                src: section.src,
                                thumb: section.src,
                                alt: section.alt,
                                width: section.width,
                                height: section.height,
                            },
                        ]}
                    />
                </div>
            );

        case "video":
            return (
                <figure key={index}>
                    <video controls>
                        <source src={section.src} type="video/mp4" />
                    </video>
                    <figcaption>{section.caption}</figcaption>
                </figure>
            );

        case "youtube":
            return (
                <figure key={index}>
                    <iframe
                        src={`https://www.youtube.com/embed/${section.id}`}
                        alt={section.caption || "YouTube video"}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </figure>
            );

        case "gallery":
            return (
                <div className='gallery-layout' key={index}>
                    <SimpleGallery
                        galleryID={`gallery-${slug}-${index}`}
                        images={section.images.map(img => ({
                            src: img.src,
                            thumb: img.src,
                            alt: img.alt,
                            width: img.width,
                            height: img.height,
                        }))}
                    />
                </div>
            );

        default:
            return null;
    }
}

function ProjectPage() {
    const { slug } = useParams();
    const project = projects[slug];

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

                {project.content?.length ? (
                    <div>{project.content.map((section, i) => renderSection(section, i, slug))}</div>
                ) : null}
            </div>
        </div>
    );
}

export default ProjectPage;
