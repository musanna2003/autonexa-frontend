import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-16 sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <img className="w-12" src="/Screenshot_2025-06-26_164900-removebg-preview.png" alt="Autonexa Logo" />
                <p>
                    <span className="font-bold">AutoNexa</span> <br />
                    Your trusted car rental partner since 2025. <br />
                    Developed by{" "}
                    <a
                        className="link link-hover"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/musanna2003"
                    >
                        Musanna.dev
                    </a>
                </p>
            </aside>

            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Car Rentals</a>
                <a className="link link-hover">Long-Term Leasing</a>
                <a className="link link-hover">Corporate Solutions</a>
                <a className="link link-hover">Luxury Car Hire</a>
            </nav>

            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover" href="/about">About Us</a>
                <a className="link link-hover" href="/contact">Contact</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Press & Media</a>
            </nav>

            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Cancellation Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
