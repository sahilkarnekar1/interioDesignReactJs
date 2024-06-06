import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8u7q0mp",
      "template_4aip6kb",
      form.current,
      {
        publicKey: '6cVgR60o9FQAbUuT-',
      }
    ).then(
      (result) => {
        console.log(result.text);
        toast.success("Email sent successfully");
        form.current.reset(); // Reset the form fields
      },
      (error) => {
        toast.error(error);
      }
    );
  };

  return (
    <>
      <section id="contact" className="contact">
        <h1 className="heading">Reach us</h1>
        <div className="contact-box-container mx-auto">
          <div className="contact-box">
            <i className="fas fa-map-marker-alt" />
            <h3>bangalore, india - 560054</h3>
          </div>
          <div className="contact-box">
            <i className="fas fa-envelope" />
            <h3>sahilkarnekar.sit.it@gmail.com</h3>
          </div>
          <div className="contact-box">
            <i className="fas fa-phone" />
            <h3>+9192654321</h3>
          </div>
        </div>
        <div className="form-container mx-auto">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                name="user_name"
                placeholder="full name"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="phone number"
              />
            </div>
            <input
              type="email"
              name="user_email"
              placeholder="email address"
            />
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="message"
            />
            <input type="submit" value="send"/>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
