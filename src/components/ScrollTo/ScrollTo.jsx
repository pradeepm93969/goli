import React, { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';

const ScrollTo = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <>
      {show && (
        <div
          onClick={handleClick}
          className="fixed p-2 border-2 right-6 bottom-6 bg-secondary-400 bg-opacity-50
          hover:bg-opacity-80 cursor-pointer"
        >
          <MdArrowUpward className="text-white w-8 h-8 hover:text-secondary-900" />
        </div>
      )}
    </>
  );
};

export default ScrollTo;
