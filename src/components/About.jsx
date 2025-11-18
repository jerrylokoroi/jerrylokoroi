import { personalInfo, aboutText } from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          {aboutText.intro}
          <br /><br />
          {aboutText.description}
          <br /><br />
          {aboutText.mission}
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <img src={personalInfo.profileImage} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>{aboutText.subtitle}</h2>
            <p className="fst-italic py-3">{aboutText.detail}</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{personalInfo.birthday}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{personalInfo.website}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{personalInfo.phone}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{personalInfo.city}</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{personalInfo.age}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{personalInfo.email}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{personalInfo.freelance}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              {aboutText.philosophy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

