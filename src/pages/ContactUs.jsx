import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactUs = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <section className='min-h-screen'>
      <div className="bg-slate-950/30 backdrop-filter backdrop-blur-md dark:bg-black/30 bg-opacity-80 p-8 rounded-md shadow-lg max-w-[80vw] mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-8 text-white">👋 Hey! So you wanna Chat ?</h2>

      <p className="text-gray-300 mb-8">
        I'm <span className="font-bold text-white tracking-wide">Anchal Raj</span>, a passionate and dedicated professional in the world of
        technology and development.
      </p>

      <p className="text-gray-300 mb-8 border py-5 px-4 rounded-md">
        If you're looking to connect with me professionally, LinkedIn is the place to be. Let's build a network and
        explore opportunities together.
        <Link
          to="https://www.linkedin.com/in/anchal-raj-aa6009264/"
          className="text-blue-400 ml-5 hover:text-blue-200 flex items-center gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on <FaLinkedin/>
        </Link>
      </p>

      <p className="text-gray-300 mb-8 border py-5 px-4 rounded-md">
        On GitHub, you can explore my proof of work through various projects. I believe in the power of collaboration
        and open-source contributions. Dive into my repositories to see the code in action.
        <Link
          to="https://github.com/anchalraj31082004/newsroute"
          className="text-blue-400 ml-5 hover:text-blue-200 flex items-center gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my <FaGithub/>
        </Link>
      </p>

      <p className="text-gray-300 mb-8 border py-5 px-4 rounded-md">
        If you're more into casual conversations, ideas, and becoming long-term networked partners, Twitter is the space
        where I share thoughts, insights, and sometimes just the everyday journey. Let's be friends and build something
        meaningful together.
        <Link
          to="https://twitter.com/AnchalTwt/"
          className="text-blue-400 ml-5 hover:text-blue-200 flex items-center gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on <FaSquareXTwitter/>
        </Link>
      </p>

      <p className="text-gray-300">
        Looking forward to connecting and creating something awesome together!
      </p>
    </div>
    </section>
  );
};

export default ContactUs;