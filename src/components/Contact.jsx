import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const { name, email, subject, message } = mailData;
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contactus" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Get in touch</h3>
              <p className="text-uppercase small">
                I am available for freelance or full-time positions. Contact me
                and let's talk.
              </p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="row justify-content-center">
          <div className="col-lg-8 m-15px-tb">
            <div className="contact-form box-shadow">
              <h4 className="dark-color font-alt m-20px-b">Say Something</h4>
              <form
                action={process.env.FORM_ENDPOINT}
                method="POST"
                encType="multipart/form-data"
              >
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      id="name"
                      placeholder="Name *"
                      className="form-control"
                      type="text"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      id="email"
                      placeholder="Email *"
                      className="form-control"
                      type="email"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="subject"
                      onChange={(e) => onChange(e)}
                      value={subject}
                      id="subject"
                      placeholder="Subject *"
                      className="form-control"
                      type="text"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                      id="message"
                      placeholder="Your message *"
                      rows={3}
                      className="form-control"
                      required
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button
                      className="m-btn m-btn-theme"
                      type="submit"
                      value="Send"
                    >
                      {" "}
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-lg-4 m-15px-tb">
            <div className="contact-info media box-shadow">
              <div className="icon">
                <i className="fas fa-link"></i>
              </div>
              <div className="media-body">
                <h6 className="dark-color font-alt">Connect With Me</h6>
                <div className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/irfansanuri/"
                    target="_blank"
                    className="p-2 mr-1"
                  >
                    <i className="fab fa-linkedin-in fa-lg" />
                  </a>
                  <a
                    href="https://github.com/irfansanuri"
                    target="_blank"
                    className="p-2 mr-1 "
                  >
                    <i className="fab fa-github fa-lg" />
                  </a>
                  <a href="#contactus" className="p-2 mr-1">
                    <i className="fas fa-envelope fa-lg" />
                  </a>
                  <a href="#" className="p-2 mr-1">
                    <i className="fas fa-user fa-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end form */}
      </div>
    </section>
  );
};
export default Contact;
