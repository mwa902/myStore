import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("send is sent successfully you will be informed shortly");
    navigate("/");
  };

  return (
    <main className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            If you have any questions or concerns, please don't hesitate to
            contact us. We're here to help!
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@company.com">info@company.com</a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>

          <p>
            <strong>Address:</strong>
            <br />
            123 Business Street
            <br />
            City, State 12345
          </p>

          <div className="social-links">
            <a href="https://www.facebook.com/company" title="Facebook">
              📘
            </a>
            <a href="https://www.twitter.com/company" title="Twitter">
              🐦
            </a>
            <a href="https://www.instagram.com/company" title="Instagram">
              📷
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}
