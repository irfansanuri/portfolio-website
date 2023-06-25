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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
    } else {
      emailjs
        .send(
          "service_cmcf6pf", // service id
          "template_rf1vcfc", // template id
          mailData,
          "L0WraELHfcZ5NwLuo" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  console.log(error);
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
              <form onSubmit={(e) => onSubmit(e)} className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      id="name"
                      placeholder="Name *"
                      className={`form-control ${
                        error ? (name.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="text"
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
                      className={`form-control ${
                        error ? (email.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="email"
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
                      className={`form-control ${
                        error ? (subject.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="text"
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
                      className={`form-control ${
                        error ? (message.length !== 0 ? "" : "invalid") : ""
                      }`}
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
                  <span
                    id="suce_message"
                    className="text-success"
                    style={{ display: success ? "block" : "none" }}
                  >
                    Message Sent Successfully
                  </span>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-lg-4 m-15px-tb">
            <div className="contact-info media box-shadow">
              <div className="icon">
                <i class="fas fa-link"></i>
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
                    <i class="fas fa-user fa-lg" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="contact-info media box-shadow">
              <div className="icon">
                <i className="ti-mobile" />
              </div>
              <div className="media-body">
                <h6 className="dark-color font-alt">Our Phone</h6>
                <p>
                  Office: +004 44444 44444
                  <br />
                  Office: +004 44444 44444
                  <br />
                </p>
              </div>
            </div>
            <div className="contact-info media box-shadow">
              <div className="icon">
                <i className="ti-email" />
              </div>
              <div className="media-body">
                <h6 className="dark-color font-alt">Our Email</h6>
                <p>
                  irfansanuri98@gmail.com
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* end form */}
      </div>
    </section>
  );
};
export default Contact;
