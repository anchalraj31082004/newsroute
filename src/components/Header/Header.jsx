import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const language = [
    "english",
    "french",
    "span",
    "urdu",
    " marathi",
    "hindi",
    "bhojpuri",
  ];

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <header className="flex flex-col lg:flex-col-reverse justify-between ">
      <nav className="flex bg-teal-900 lg:flex-col lg:justify-start lg:items-center py-2 px-5 lg:my-32 text-white">
        <div className="flex gap-10 overflow-x-auto no-scroll text-sm lg:text-xl lg:px-16 lg:py-10 lg:flex-col">
          <NavLink to="/" className={({isActive})=>(isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0")}>
            Everything
          </NavLink>{" "}
          {/* everything */}
          <NavLink to="/filtered-news/sports" className={({isActive})=>(isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0")}>
            Sports
          </NavLink>
          <NavLink to="/filtered-news/entertainment" className={({isActive})=>(isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0")}>
            Entertainment
          </NavLink>
          <NavLink to="/filtered-news/business" className={({isActive})=>(isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0")}>
            Business
          </NavLink>
          <NavLink to="/filtered-news/technology" className={({isActive})=>(isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0")}>
            Technology
          </NavLink>
          <NavLink to="/filtered-news/general" className={({isActive})=>(isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0")}>
            General
          </NavLink>
          <NavLink to="/filtered-news/science" className={({isActive})=>(isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0")}>
            Science
          </NavLink>
          <NavLink to="/filtered-news/health" className={({isActive})=>(isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0")}>
            Health
          </NavLink>
        </div>
      </nav>
      <div className="flex relative items-start justify-between w-full px-5 py-2">
        <div className=" text-2xl text-orange-600">
          News Route
        </div>
        <div
          className="text-white py-1 px-3 bg-teal-950 " 
          onClick={toggleDropdown}
        >
          {selectedLanguage ? (
            <div>
              <strong>{selectedLanguage}</strong>
            </div>
          ) : (
            "language"
          )}
        </div>
        {isOpen && (
          <ul className="absolute bg-white mt-10 ml-40 p-2 shadow-md rounded">
            {language.map((language, index) => (
              <li
                key={index}
                className="cursor-pointer w-20"
                onClick={() => handleSelectLanguage(language)}
              >
                {language}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
