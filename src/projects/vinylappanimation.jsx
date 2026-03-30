import SimpleGallery from "../components/simplegallery";

function VinylAppAnimationProject() {
    return (
        <>
            <h2>Project Overview</h2>
            <p></p>

            <ul className="project-list">
                <li className="project-list-item">Project Name: ReVinyl</li>
                <li className="project-list-item">Role: UI/UX Designer + Animator</li>
                <li className="project-list-item">Duration: 1 week</li>
                <li className="project-list-item">Tools Used: Adobe After Effects and Photoshop</li>
            </ul>

            <h2>Storyboard and Design Brainstorm</h2>
            <div className="single-image">
                <SimpleGallery
                    galleryID="image-vinylappanimation-brainstorm"
                    images={[
                        { src: "/images/vinylsketch.png", thumb: "/images/vinylsketch.png", alt: "Vinyl Sketch and Brainstorm", width: 1920, height: 1080 },
                    ]}
                />
            </div>

            <h2>Final Product</h2>
            <figure>
                <iframe
                    src="https://www.youtube.com/embed/px-hA2FSl4M"
                    title="Animated App Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <figcaption>Animated App Demo Video</figcaption>
            </figure>
        </>
    );
}

export default VinylAppAnimationProject;
