import React, { useRef, useEffect, useState } from 'react';

function ContainerWidthExample() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Update the container width state when the component mounts
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth(); // Initial call to set the width
    window.addEventListener('resize', updateWidth); // Update width on window resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ width: '100%', height: '100px', backgroundColor: 'lightblue' }}>
        Resize the window to see the container width change
      </div>
      <p>Container width: {containerWidth}px</p>
    </div>
  );
}

export default ContainerWidthExample;
