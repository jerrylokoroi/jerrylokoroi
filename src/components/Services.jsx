import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          I offer tailored development and IT solutions to help individuals and organizations achieve digital efficiency and growth.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="icon flex-shrink-0">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#service-details" className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

