import React, { useEffect } from 'react';

const AboutUs = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  return (

    <section className='min-h-screen'>
      <div className="bg-gray-100/20 dark:bg-black/30 backdrop-filter backdrop-blur-lg bg-opacity-80 p-8 rounded-md shadow-lg max-w-[80vw] mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Us</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-blue-500">Our Project: Modern News App</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Welcome to NewsRoute a modern news app! This project is an open-source endeavor built with React and follows
          modern best practices. The app utilizes the NewsAPI.org website to fetch the latest news articles and
          provides a personalized experience based on user preferences and categories.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-blue-500">About the Developer</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Hey there! I'm currently pursuing BCA at Marwari College and am in the final year of my college journey.
          An open-source enthusiast and web developer, I love exploring the latest in technology and implementing
          modern best practices.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          Thanks for being a part of this journey. Your support and interest mean a lot!
        </p>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;