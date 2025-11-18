import { useState, useEffect } from 'react';
import { personalInfo } from '../data/personalInfo';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { id: 'hero', icon: 'bi-house', label: 'Home' },
    { id: 'about', icon: 'bi-person', label: 'About' },
    { id: 'resume', icon: 'bi-file-earmark-text', label: 'Resume' },
    { id: 'portfolio', icon: 'bi-images', label: 'Portfolio' },
    { id: 'services', icon: 'bi-hdd-stack', label: 'Services' },
    { id: 'contact', icon: 'bi-envelope', label: 'Contact' }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    if (element) {
      const headerHeight = 0;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {isMobile && (
        <i
          className="header-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
        </i>
      )}
      <header
        id="header"
        className={`header dark-background ${isOpen ? 'header-show' : ''}`}
      >
        <div className="profile-img">
          <img
            src={personalInfo.profileImage}
            alt=""
          />
        </div>

        <a href="#hero" className="logo">
          <h1 className="sitename">
            {personalInfo.name}
          </h1>
        </a>

        <div className="social-links">
          <a href={personalInfo.socialLinks.github} className="github">
            <i className="bi bi-github"></i>
          </a>
          <a href={personalInfo.socialLinks.linkedin} className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={personalInfo.socialLinks.twitter} className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href={personalInfo.socialLinks.instagram} className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href={personalInfo.socialLinks.facebook} className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={activeSection === `#${item.id}` ? 'active' : ''}
                >
                  <i className={`${item.icon} navicon`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

