
// import React, { useState, useEffect } from 'react';
// import './animation.css';
// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';

// function Animation() {
//     const [shutterState, setShutterState] = useState('close');

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setShutterState(prevState => prevState === 'open' ? 'close' : 'open');
//         }, 4000); // Change every 4 seconds
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className='bg'>
//             <div className="container">
//                 <div className="background"/>
//                 <div className={`window ${shutterState}`}>
//                     <div className="shutter"></div>
//                     <img src={img1} alt="Window 1 Image" className="image" />
//                 </div>
//                 <div className={`window ${shutterState}`}>
//                     <div className="shutter"></div>
//                     <img src={img3} alt="Window 2 Image" className="image" />
//                 </div>
//                 <div className={`window ${shutterState}`}>
//                     <div className="shutter"></div>
//                     <img src={img2} alt="Window 3 Image" className="image" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Animation;


// corrected

import React, { useEffect, useState } from 'react';
import './animation.css';
import img1 from './images/img1.png';
 import img2 from './images/img2.png';
import img3 from './images/img3.png';

const Animation = () => {
    const [windowState, setWindowState] = useState('open');

  useEffect(() => {
    const animationInterval = 12000; // 12 seconds for the complete animation cycle
    const step = animationInterval / 6; // 6 steps (each 16.67%)

    const interval = setInterval(() => {
      setTimeout(() => {
        setWindowState('open');
      }, step * 1); // At 16.67%

      setTimeout(() => {
        setWindowState('close');
      }, step * 2); // At 33.34%

      setTimeout(() => {
        setWindowState('');
      }, step * 3); // At 50%

      setTimeout(() => {
        setWindowState('open');
      }, step * 4); // At 66.67%

      setTimeout(() => {
        setWindowState('close');
      }, step * 5); // At 83.34%

      setTimeout(() => {
        setWindowState('');
      }, step * 6); // At 100%
    }, animationInterval);

    return () => clearInterval(interval);
  }, []);

  return (
   

    <div className="containers">
      <div className="background"></div>
      <div className={`window1 ${windowState}`}>
        <img src={img1} className="image image1" alt="Window 1" />
      </div>
      <div className={`window2 ${windowState}`}>
        <img src={img2} className="image image2" alt="Window 2" />
      </div>
      <div className={`window ${windowState}`}>
        <img src={img3} className="image image" alt="Window 3" />
      </div>
    </div>
  );
};

export default Animation;



// import React, { useEffect, useState } from 'react';
// import './animation.css';
// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';

// const Animation = () => {
//   const [windowState, setWindowState] = useState('open');

//   useEffect(() => {
//     const animationInterval = 17000; // Total animation cycle time (12 seconds)
//     const openTime = 6000; // Time for opening (6 seconds)
//     const closeTime = 6000; // Time for closing (6 seconds)
    
//     const step = animationInterval / 6; // Number of steps

//     const interval = setInterval(() => {
//       setWindowState('open');
//       setTimeout(() => setWindowState('close'), openTime); // Open for 6 seconds
//       setTimeout(() => setWindowState(''), openTime + closeTime); // Close for 6 seconds
//     }, animationInterval);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="containers">
//       <div className="background"></div>
//       <div className={`window1 ${windowState}`}>
//         <img src={img1} className="image image1" alt="Window 1" />
//       </div>
//       <div className={`window2 ${windowState}`}>
//         <img src={img2} className="image image2" alt="Window 2" />
//       </div>
//       <div className={`window ${windowState}`}>
//         <img src={img3} className="image image" alt="Window 3" />
//       </div>
//     </div>
//   );
// };

// export default Animation;