import { useState, useEffect } from 'react';
import { portfolioItems } from '../data/portfolio';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  const filteredItems = filter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Here you'll find a collection of my recent projects and work. Each project showcases different skills and technologies I've worked with.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}`}>
              <div className="portfolio-content h-100">
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <a
                    href={item.image}
                    title={item.title}
                    data-gallery="portfolio-gallery"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href={item.link}
                    title="More Details"
                    className="details-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Portfolio;

