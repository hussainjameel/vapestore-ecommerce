import React from "react";
import Footer from "./Footer.jsx";

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6384fcd817ae0f4557ae26b2/c60a0f30-fcfe-4587-b238-6d5b54320380/EMBR-Vape-Pen-BG.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="row">
          <div className="mt-5">
            <h2>Get in touch</h2>
            <p>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form className="mt-5">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter your subject"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark mb-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
