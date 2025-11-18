import { stats } from '../data/stats';
import { usePureCounter } from '../hooks/usePureCounter';

const StatsItem = ({ stat }) => {
  const counterRef = usePureCounter(stat.value, 1);

  return (
    <div className="col-lg-3 col-md-6">
      <div className="stats-item">
        <i className={`bi ${stat.icon}`}></i>
        <span ref={counterRef} className="purecounter">0</span>
        <p>
          <strong>{stat.label}</strong> <span>{stat.description}</span>
        </p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <StatsItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

