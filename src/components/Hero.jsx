import { useTyped } from '../hooks/useTyped';

const Hero = () => {
  const typedRef = useTyped(['Developer', 'Digital Entrepreneur', 'System Administrator', 'Freelancer']);

  return (
    <section id="hero" className="hero section dark-background">
      <picture>
        {/* Mobile-optimized image (if available) - uncomment and add path when ready */}
        {/* <source
          media="(max-width: 768px)"
          srcSet="/assets/img/hero_bg_mobile.jpg"
        /> */}
        {/* Fallback to main hero image */}
        <img
          src="/assets/img/hero_bg.jpg"
          alt="Jerry Lokoroi - Full-Stack Developer and Systems Administrator"
          data-aos="fade-in"
          loading="eager"
        />
      </picture>

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

