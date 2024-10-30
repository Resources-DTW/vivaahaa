import React, { useRef, useState, useEffect } from 'react';
import RightArrow from 'path-to-your-right-arrow-image'; // Adjust the import path
import LeftArrow from 'path-to-your-left-arrow-image'; // Adjust the import path

const MyComponent = () => {
  const tabsContainerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    if (tabsContainerRef.current) {
      const containerWidth = tabsContainerRef.current.clientWidth;
      setScrollAmount(containerWidth);
    }
  }, []);

  const handleRightArrowClick = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleLeftArrowClick = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="tab-selector">
      <button onClick={handleLeftArrowClick} className="arrow-button left-arrow">
        <img src={LeftArrow} alt="Left arrow" />
      </button>
      <div className="tabs-container" ref={tabsContainerRef}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === selectedTab ? "selected" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <button onClick={handleRightArrowClick} className="arrow-button right-arrow">
        <img src={RightArrow} alt="Right arrow" />
      </button>
    </div>
  );
};

export default MyComponent;
