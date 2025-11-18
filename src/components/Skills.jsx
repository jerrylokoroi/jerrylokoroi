import { skills } from '../data/skills';
import { useSkillsAnimation } from '../hooks/useSkillsAnimation';

const Skills = () => {
  const skillsRef = useSkillsAnimation();

  return (
    <section id="skills" className="skills section light-background" style={{ padding: '40px 0' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          I work across the full stack — from frontend interfaces to backend APIs, databases, and system administration. My strengths combine software development with practical IT infrastructure experience.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation" ref={skillsRef}>
          <div className="col-lg-6">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
              <div key={index} className="progress" style={{ marginBottom: '0.6rem' }}>
                <span className="skill" style={{ fontSize: '0.9rem', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{skill.name}</span> <i className="val">{skill.percentage}%</i>
                </span>
                <div className="progress-bar-wrap" style={{ height: '8px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    data-width={skill.percentage}
                    style={{ height: '8px' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <div key={index} className="progress" style={{ marginBottom: '0.6rem' }}>
                <span className="skill" style={{ fontSize: '0.9rem', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{skill.name}</span> <i className="val">{skill.percentage}%</i>
                </span>
                <div className="progress-bar-wrap" style={{ height: '8px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    data-width={skill.percentage}
                    style={{ height: '8px' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

