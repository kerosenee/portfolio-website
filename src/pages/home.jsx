import folder from '../assets/folder.png'
import squiggle from '../assets/squiggle.png'
import { Link } from 'react-router-dom';
import Projects from './projects.jsx';
import ExperienceSection from './experience.jsx';
// import FlowerMorph from '../components/morph.jsx';

function Home() {
  return (
    <>
      <div className='home-content'>
        <div className='left-column'>
          <div className='introduction-text'>
            <p className='welcome-text'>Welcome to my portfolio</p>
            <p className='name-text'>Development, UX, and Multimedia projects ・ by Maria Anna Kuzmenko</p>
            <p className='paragraph-text'>Currently a third year student at Carleton University studying Information Technology (in the stream Interactive Multimedia and Design). <br />
            Previously at the <a href="#hoc-experience-card">House of Commons</a> as a Student Web Developer.
              <br />
            </p>
            <div className='contact-spacing'>
              <p>connect with me</p>
              <div className='arrow-spacing'>
                <img src='src/assets/right-arrow.svg' className='arrow' />
                <img src='src/assets/right-arrow.svg' className='arrow' />
                <img src='src/assets/right-arrow.svg' className='arrow' />
              </div>
              <a className='text-link' href='https://www.linkedin.com/in/maria-kuzmenko-24757721b'>my linkedin</a>
            </div>
            <div className='contact-spacing'>
              <p>my email</p>
              <div className='arrow-spacing'>
                <img src='src/assets/right-arrow.svg' className='arrow' />
                <img src='src/assets/right-arrow.svg' className='arrow' />
                <img src='src/assets/right-arrow.svg' className='arrow' />
              </div>
              <a className='text-link' href='mailto:mariaakuzmenko@gmail.com'>mariaakuzmenko@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className='project-content' id='projects-section'>
        <Projects />
      </div>
      <div className='experience-content' id="experience-section">
        <ExperienceSection />
      </div>
    </>
  );
}

export default Home;
