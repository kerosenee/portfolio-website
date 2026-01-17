import { useState } from "react";
import flower from "../assets/flower.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <img src={flower} alt="Maria logo" className="nav-logo" />
        </div>
        <ul className='nav-list'>
          <li className='list-item'>
            <a href="/" className='link-item'>home</a>
          </li>
          <li className='list-item'>
            <a href="/#projects-section" className='link-item'>projects</a>
          </li>
          <li className='list-item'>
            <a href="/#experience-section" className='link-item'>experience</a>
          </li>
          {/* <li className='list-item has-dropdown'>
                <button type='button' onClick={toggleMenu} className="link-item">options</button>

                {isOpen && (
                    <ul className='dropdown-list'>
                        <li className='dropdown-item'>
                            <button type='button' className="link-item tile-view">tile view</button>
                        </li>
                        <li className='dropdown-item'>
                            <button type='button' className="link-item tree-view">tree view</button>
                        </li>
                    </ul>
                )}
              </li> */}
        </ul>
        <div className="nav-right">
          <a
            href="/pdfs/MariaKuzmenko_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item resume-link"
            aria-label="Resume"
          >
            <span className="resume-text">resume</span>
            <span className="resume-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
