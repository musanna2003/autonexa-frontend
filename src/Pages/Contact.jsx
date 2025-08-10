import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-center max-w-xl mb-10">
        Have questions about renting a car, partnerships, or technical support?
        We’re here to help. Reach out to us through the contact form or use the
        details below.
      </p>

      {/* Contact Info */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card bg-base-100 shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-2">
            📍 <strong>Location:</strong> Dhaka, Bangladesh
          </p>
          <p className="mb-2">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:musanna.dev@gmail.com"
              className="link link-hover"
            >
              musanna.dev@gmail.com
            </a>
          </p>
          <p className="mb-2">
            💻 <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/musanna2003"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              github.com/musanna2003
            </a>
          </p>
          <p>
            📱 <strong>Phone:</strong> +880-1XXXXXXXXX
          </p>
        </div>

        {/* Contact Form */}
        <form className="card bg-base-100 shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;