import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-16 sm:footer-horizontal bg-base-200 text-base-co ntent p-10">
            <aside>
                <img className=' w-6' src="/Screenshot_2025-06-26_164900-removebg-preview.png" alt="" />
                <p>
                AutoNexa Ltd.
                <br />
                Develope By <a className="link link-hover" target="_blank" href='https://github.com/musanna2003?tab=overview&from=2025-06-01&to=2025-06-24'>Musanna.dev</a>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;