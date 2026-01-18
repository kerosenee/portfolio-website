import { useState } from "react";
import flower from "../assets/flower.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <img src={flower} alt="Maria logo" className="nav-logo" />
        </div>
        <ul className={`nav-list ${isOpen ? "is-open" : ""}`} id="primary-nav">
          <li className='list-item'>
            <a href="/" className='link-item'>home</a>
          </li>
          <li className='list-item'>
            <a href="/#projects-section" className='link-item'>projects</a>
          </li>
          <li className='list-item'>
            <a href="/#experience-section" className='link-item'>experience</a>
          </li>
          <li className='list-item'>
            <a
              href="/pdfs/MariaKuzmenko_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              resume
            </a>
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
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-controls="primary-nav"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
