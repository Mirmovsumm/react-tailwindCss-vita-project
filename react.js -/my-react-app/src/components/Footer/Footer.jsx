import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/tinywow_logo.png";


const Footer = () => {
  return (
    <footer className="text-gray-900 bg-gray-500/40 dark:bg-gray-900 dark:text-white py-8">
      <div data-aos='fade-up' className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">KingsMan</span>
            </div>
            <p className="border-gray-700 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="font-bold mb-2 text-lg">Important Links</h3>
            <ul>
              <li><a href="#home" className=" hover:text-amber-600 transition duration-300">Home</a></li>
              <li><a href="#about" className=" hover:text-amber-600 transition duration-300">About</a></li>
              <li><a href="#contact" className="hover:text-amber-600 transition duration-300">Contact</a></li>
              <li><a href="#blog" className=" hover:text-amber-600 transition duration-300">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="font-bold mb-2 text-lg">Links</h3>
            <ul>
              <li><a href="#home" className=" hover:text-amber-600 transition duration-300">Home</a></li>
              <li><a href="#about" className=" hover:text-amber-600 transition duration-300">About</a></li>
              <li><a href="#contact" className=" hover:text-amber-600 transition duration-300">Contact</a></li>
              <li><a href="#blog" className="hover:text-amber-600 transition duration-300">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-amber-600 transition duration-300">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-amber-600 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-amber-600 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <div className="text-gray-900">
            <p>Baku,Azerbaijan</p>
            <p>seyidov20004@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
