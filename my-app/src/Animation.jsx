
// corrected

// import React, { useEffect, useState } from 'react';
// import './animation.css';
// import img1 from './images/img1.png';
//  import img2 from './images/img2.png';
// import img3 from './images/img3.png';

// const Animation = () => {
//     const [windowState, setWindowState] = useState('open');

//   useEffect(() => {
//     const animationInterval = 12000; // 12 seconds for the complete animation cycle
//     const step = animationInterval / 6; // 6 steps (each 16.67%)

//     const interval = setInterval(() => {
//       setTimeout(() => {
//         setWindowState('open');
//       }, step * 1); // At 16.67%

//       setTimeout(() => {
//         setWindowState('close');
//       }, step * 2); // At 33.34%

//       setTimeout(() => {
//         setWindowState('');
//       }, step * 3); // At 50%

//       setTimeout(() => {
//         setWindowState('open');
//       }, step * 4); // At 66.67%

//       setTimeout(() => {
//         setWindowState('close');
//       }, step * 5); // At 83.34%

//       setTimeout(() => {
//         setWindowState('');
//       }, step * 6); // At 100%
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


// changedd


import React, { useEffect, useState } from 'react';
import './animation.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

const Animation = () => {
    const [windowState, setWindowState] = useState('closed');

    useEffect(() => {
        const animationInterval = 12000; // 12 seconds for the complete animation cycle
        const step = animationInterval / 6; // 6 steps

        const interval = setInterval(() => {
            setWindowState('open');
            // setTimeout(() => setWindowState('closed'), step);
            // setTimeout(() => setWindowState('idle'), step * 2);
            // setTimeout(() => setWindowState('open'), step * 3);
            // setTimeout(() => setWindowState('closed'), step * 4);
            // setTimeout(() => setWindowState('idle'), step * 5);
            // setTimeout(() => setWindowState('open'), step * 6);
            setTimeout(() => setWindowState('open'), step);
            setTimeout(() => setWindowState('idle'), step * 2);
            setTimeout(() => setWindowState('closed'), step * 3);
            setTimeout(() => setWindowState('closed'), step * 4);
            setTimeout(() => setWindowState('idle'), step * 5);
            setTimeout(() => setWindowState('open'), step * 6);
        }, animationInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="containers">
            <div className="background"></div>
            <div className={`window1 ${windowState}`}>
                <img src={img1} className="image1" alt="Window 1" />
                <div className={`shutter ${windowState}`}></div>
            </div>
            <div className={`window2 ${windowState}`}>
                <img src={img2} className="image2" alt="Window 2" />
                <div className={`shutter ${windowState}`}></div>
            </div>
            <div className={`window ${windowState}`}>
                <img src={img3} className="image" alt="Window 3" />
                <div className={`shutter ${windowState}`}></div>
            </div>
        </div>
    );
};

export default Animation;
