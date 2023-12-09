import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopBtn({targetId}) {
  const [isVisible, setIsVisible] = useState(false);
  // console.log(isVisible);

  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
      setIsVisible(targetElement.scrollTop > 100)
    }
  };

  const handleScrollTop = () => {
   const targetElement = document.getElementById(targetId);
   if(targetElement) {
    targetElement.scrollTo({
      top : 0,
      behavior : "smooth"
    });
   }
  };

  useEffect(() => {
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
      targetElement.addEventListener('scroll', handleScroll)
      return () => {
        targetElement.removeEventListener("scroll", handleScroll);
    }
    };
  }, [targetId]);

  return (
    <div className="z-10">
      {isVisible && (
        <button
          type="button"
          onClick={handleScrollTop}
          className={` p-4 bg-red-500 rounded-full`}
          title="top scroll"
        >
          <FaArrowUp className="text-white text-base md:text-lg lg:text-2xl " />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopBtn;
