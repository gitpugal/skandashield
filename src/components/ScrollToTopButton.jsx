import { useEffect, useState } from 'react';
import arrow from '../images/arrow.png';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300); // Show the button after scrolling 300 pixels
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top transition-opacity z-50 ease duration-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
    >
      <div className='fixed cursor-pointer bottom-10 rounded-full right-5'>
        <BsArrowUpCircleFill color='grey' size={60} />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
