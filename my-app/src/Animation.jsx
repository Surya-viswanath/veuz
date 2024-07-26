// import React, { useEffect, useState } from 'react'
// import './animation.css';
// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';

// function Animation() {
//     const [step, setStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStep(prevStep => (prevStep + 1) % 3);
//     }, 2000); // Matches the interval for showing images
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="container">
//       <div className="background" />
//       <div className="window1" style={{ top: '100px', left: '200px' }}>
//         <img src={img1} alt="Window 1 Image 1" style={{ display: step === 0 ? 'block' : 'none' }} />
//         <img src={img1} alt="Window 1 Image 2" style={{ display: step === 1 ? 'block' : 'none' }} />
//         <img src={img1} alt="Window 1 Image 3" style={{ display: step === 2 ? 'block' : 'none' }} />
//       </div>
//       <div className="window2" style={{ top: '100px', left: '380px'}}>
//         <img src={img2} alt="Window 2 Image 1" style={{ display: step === 0 ? 'block' : 'none' }} />
//         <img src={img2} alt="Window 2 Image 2" style={{ display: step === 1 ? 'block' : 'none' }} />
//         <img src={img2} alt="Window 2 Image 3" style={{ display: step === 2 ? 'block' : 'none' }} />
//       </div>
//       <div className="window3" style={{ top: '100px', left: '542px' }}>
//         <img src={img3} alt="Window 3 Image 1" style={{ display: step === 0 ? 'block' : 'none' }} />
//         <img src={img3} alt="Window 3 Image 2" style={{ display: step === 1 ? 'block' : 'none' }} />
//         <img src={img3} alt="Window 3 Image 3" style={{ display: step === 2 ? 'block' : 'none' }} />
//       </div>
//     </div>
//   )
// }

// export default Animation





// import React, { useEffect, useState } from 'react';
// import './animation.css';
// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';

// function Animation() {
//     const [step, setStep] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setStep(prevStep => (prevStep + 1) % 3);
//         }, 2000); // Matches the interval for showing images
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="container">
//             <div className={`background step${step}`} />
//             <div className="window1" style={{ top: '100px', left: '200px' }}>
//                 <img src={img1} alt="Window 1 Image" className={`image window1 step${step}`} />
//             </div>
//             <div className="window2" style={{ top: '100px', left: '380px' }}>
//                 <img src={img2} alt="Window 2 Image" className={`image window2 step${step}`} />
//             </div>
//             <div className="window3" style={{ top: '100px', left: '542px' }}>
//                 <img src={img3} alt="Window 3 Image" className={`image window3 step${step}`} />
//             </div>
//         </div>
//     );
// }

// export default Animation;




// import React, { useEffect, useState } from 'react';
// import './animation.css';
// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';

// function Animation() {
//     const [step, setStep] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setStep(prevStep => (prevStep + 1) % 3);
//         }, 2000); // Matches the interval for showing images
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="container">
//             <div className={`background step${step}`} />
//             <div className="window1" style={{ top: '100px', left: '200px' }}>
//                 <img src={img1} alt="Window 1 Image" className={`image step${step}`} />
//             </div>
//             <div className="window2" style={{ top: '100px', left: '380px' }}>
//                 <img src={img2} alt="Window 2 Image" className={`image step${step}`} />
//             </div>
//             <div className="window3" style={{ top: '100px', left: '542px' }}>
//                 <img src={img3} alt="Window 3 Image" className={`image step${step}`} />
//             </div>
//         </div>
//     );
// }

// export default Animation;


// import React, { useEffect, useState } from 'react';
// import './animation.css';
// import img1 from './images/img1.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';

// function Animation() {
//     const [step, setStep] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setStep(prevStep => (prevStep + 1) % 3);
//         }, 2000); // Matches the interval for showing images
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="container">
//             <div className={`background step${step}`} />
//             <div className="window1" style={{ top: '100px', left: '200px' }}>
//                 <img src={img1} alt="Window 1 Image" className={`image step${step}`} />
//             </div>
//             <div className="window2" style={{ top: '100px', left: '380px' }}>
//                 <img src={img2} alt="Window 2 Image" className={`image step${step}`} />
//             </div>
//             <div className="window3" style={{ top: '100px', left: '542px' }}>
//                 <img src={img3} alt="Window 3 Image" className={`image step${step}`} />
//             </div>
//         </div>
//     );
// }

// export default Animation;


import React, { useState } from 'react';
import './animation.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

function Animation() {
    const [shutterState, setShutterState] = useState('open');

    const toggleShutters = () => {
        setShutterState(prevState => prevState === 'open' ? 'close' : 'open');
    };
    return (
        // <div className='bg'>
        // <div className="container">
        //     <div className="background"/>
        //     <div className="window1" style={{ top: '100px', left: '225px' }}>
        //         <img src={img1} alt="Window 1 Image" className="image window1" />
        //     </div>
        //     <div className="window2" style={{ top: '100px', left: '380px' }}>
        //         <img src={img3} alt="Window 2 Image" className="image window2" />
        //     </div>
        //     <div className="window3" style={{ top: '100px', left: '542px' }}>
        //         <img src={img2} alt="Window 3 Image" className="image window3" />
        //     </div>
        // </div>
        // </div>

        <div className='bg'>
            <div className="container">
                <div className="background"/>
                <div className={`window window1 ${shutterState}`}>
                    <img src={img1} alt="Window 1 Image" className="image" />
                </div>
                <div className={`window window2 ${shutterState}`}>
                    <img src={img3} alt="Window 2 Image" className="image" />
                </div>
                <div className={`window window3 ${shutterState}`}>
                    <img src={img2} alt="Window 3 Image" className="image" />
                </div>
            </div>
            <button onClick={toggleShutters}>Toggle Shutters</button>
        </div>
    );
}

export default Animation;