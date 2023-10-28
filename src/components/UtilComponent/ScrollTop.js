import { useState, useEffect } from "react";
import Link from "next/link";
// import { FaArrowCircleUp } from 'react-icons/fa';
// import styles from "./ScrollToTopButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Logic to show the button when the user scrolls down 20px from the top of the document
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Function to scroll to the top of the document
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <Button
          // data-aos="fade-up"
          className="bg-[#000000] fixed bottom-4 z-[9999] right-8 text-white transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-150"
          onClick={scrollToTop}
          title="Go to top"
          radius="full"
          isIconOnly
        >
          <FontAwesomeIcon icon={faCaretUp} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
