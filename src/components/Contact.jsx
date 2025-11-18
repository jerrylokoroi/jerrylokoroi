import { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Jerry Lokoroi',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (err) {
      setLoading(false);
      setError('Failed to send message. Please try again or email me directly.');
      console.error('EmailJS Error:', err);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Get in touch with me for any inquiries or collaboration opportunities</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>{personalInfo.address}</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>{personalInfo.phone}</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Me</h3>
                  <p>{personalInfo.email}</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63704.403058538395!2d35.80777806511915!3d3.6948391796811606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x179ea2221c8c3695%3A0x5c89462681105d89!2sStartup%20Lions%20ICT%20Campus!5e0!3m2!1sen!2ske!4v1762957907561!5m2!1sen!2ske"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '270px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    id="message-field"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Loading</div>}
                  {error && <div className="error-message">{error}</div>}
                  {sent && <div className="sent-message">Your message has been sent. Thank you!</div>}

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

