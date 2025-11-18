import { useScrollTop } from '../hooks/useScrollTop';

const ScrollTop = () => {
  const { isVisible, scrollToTop } = useScrollTop();

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTop;

