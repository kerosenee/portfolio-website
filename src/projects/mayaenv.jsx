import SimpleGallery from "../components/simplegallery";

function MayaEnvProject() {
    return (
        <>
            <h2>Project Info</h2>
            <p>Group 3D modeling assignment created in Maya and Blender.</p>
            <p>A project by Irina Kozhevnikova, Hao Ding and Maria Kuzmenko.</p>
            <p>Design Studio 2, 2024</p>

            <h2>Final Render</h2>
            <div className="single-image">
                <SimpleGallery
                    galleryID="image-mayaenv-finalrender"
                    images={[
                        { src: "/images/ENVProject.jpg", thumb: "/images/ENVProject.jpg", alt: "Maya Environment Final Render", width: 960, height: 540 },
                    ]}
                />
            </div>
        </>
    );
}

export default MayaEnvProject;
