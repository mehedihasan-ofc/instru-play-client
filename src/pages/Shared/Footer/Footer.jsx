import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 md:p-20 bg-[#0C4B65] text-white">
                <div>
                    <h2 className='font-primary text-4xl md:text-5xl'>InstruPlay</h2>
                    <p className='mt-1'>Our mission is to provide a seamless <br />- and enjoyable experience</p>
                </div>
                <div>
                    <span className="footer-title">Explore</span>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Github</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">4845 Deer Ridge Drive <br />Montclair, NJ 07042</a>
                    <a className="link link-hover">Phone: 973-571-3250</a>
                    <a className="link link-hover">Email: instruplay@gmail.com</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-[#0A3F55] text-white">
                <div>
                    <p className='text-sm md:text-base'>Copyright © 2023 - All right reserved by InstruPlay</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;