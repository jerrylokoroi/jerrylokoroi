import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">{personalInfo.name}</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

