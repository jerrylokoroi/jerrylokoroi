import { resume } from '../data/resume';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          I bring over four years of experience delivering full-stack web applications and managing IT infrastructure. My work combines technical expertise, problem-solving, and a deep commitment to building meaningful digital solutions.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>

            <div className="resume-item pb-0">
              <h4>{resume.summary.name}</h4>
              <p><em>{resume.summary.description}</em></p>
              <ul>
                <li>{resume.summary.location}</li>
                <li>{resume.summary.phone}</li>
                <li>{resume.summary.email}</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {resume.education.map((edu, index) => (
              <div key={index} className="resume-item">
                <h4>{edu.title}</h4>
                <h5>{edu.period}</h5>
                <p><em>{edu.institution}</em></p>
                {edu.description && <p>{edu.description}</p>}
              </div>
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {resume.experience.map((exp, index) => (
              <div key={index} className="resume-item">
                <h4>{exp.title}</h4>
                <h5>{exp.period}</h5>
                <p><em>{exp.company}</em></p>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

