import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500); // 顯示3秒後自動隱藏，你可以調整時間
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div id="preloader">
          <div className="preload-content">
            <div id="sonar-load"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
