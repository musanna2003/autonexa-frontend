import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Autonexa</h1>

        <div className="card bg-base-100 shadow-xl p-6">
          <p className="mb-4 text-lg">
            <strong>Autonexa</strong> is a modern car rental platform that makes
            browsing, booking, and managing car rentals fast, secure, and
            hassle-free. With an intuitive interface and powerful search tools,
            users can find their perfect ride in just a few clicks.
          </p>

          <p className="mb-4">
            Many rental platforms are cluttered, slow, or lack transparency.
            Autonexa streamlines the process with real-time availability,
            detailed listings, and a smooth booking flow — saving time for both
            customers and rental providers.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>User registration & secure authentication (Firebase + JWT)</li>
            <li>Advanced car search & filtering by price, category, availability</li>
            <li>Booking system with integrated calendar</li>
            <li>Admin dashboard for managing listings and bookings</li>
            <li>Fully responsive, mobile-friendly design</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "Firebase",
              "JWT"
            ].map((tech, index) => (
              <span key={index} className="badge badge-outline">
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Future Plans</h2>
          <p>
            We aim to expand Autonexa with real-time GPS tracking, dynamic
            pricing based on demand, and AI-powered car recommendations to make
            rentals smarter and more efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
