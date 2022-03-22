import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("damar_gmail", "template_ieu0uwd", formRef.current, "qpszin1NZ-8Nqe42I").then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src="img/phone.png" alt="" className="contact-icon" />
              +6282243894470
            </div>
            <div className="contact-info-item">
              <img src="img/email.png" alt="" className="contact-icon" />
              damarbm30@gmail.com
            </div>
            <div className="contact-info-item">
              <img src="img/address.png" alt="" className="contact-icon" />
              Bantul, Special Region of Yogyakarta, Indonesia
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <strong>What's your story?</strong> Interested? Let's get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Your message here" name="message" />
            <button>Submit</button>
            <p className="form-respond">{done && "Message sent. I'll respond immediately."}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
