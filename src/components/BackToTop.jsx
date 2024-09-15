"use client"
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-blue-600/40 text-white rounded-full shadow-lg hover:bg-blue-700/50 transition-colors duration-300"
        >
          ↑ Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTop;
