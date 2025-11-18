import { useTyped } from '../hooks/useTyped';

const Hero = () => {
  const typedRef = useTyped(['Developer', 'Digital Entrepreneur', 'System Administrator', 'Freelancer']);

  return (
    <section id="hero" className="hero section dark-background">
      <img
        src="/assets/img/hero_bg.jpg"
        alt=""
        data-aos="fade-in"
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Jerry Lokoroi</h2>
        <p>
          I'm a <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

