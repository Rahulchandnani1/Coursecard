
import './App.css';

import { useState, useEffect } from 'react';

import are from "./are1.png";

import pencil from "./assets/pencil.svg";
import star from "./assets/star.svg";

import im4 from "./assets/im4.jpg";
import im5 from "./assets/im5.png";
import im6 from "./assets/im6.jpg";

import ar3 from "./assets/ar3.png";
import ar4 from "./assets/ar4.png";
import cicon from "./assets/repo.png";
import qdiv from "./assets/sub.svg";
import icy from "./assets/icy.png";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const getTransformStyle = (speed) => {
    const range = 20; // Max movement range in pixels
    const offsetX = ((mousePosition.x / window.innerWidth) - 0.5) * 2 * range * speed;
    const offsetY = ((mousePosition.y / window.innerHeight) - 0.5) * 2 * range * speed;
    const scrollOffset = scrollPosition * speed;

    return { transform: `translate(${offsetX}px, ${offsetY + scrollOffset}px)` };
  };

  return (
    <div className="App">
    
     
      <div className='tcdiv'><div className='topcourse'>
        <div className='course'>
          <div className='cname'>
            <p className='ct1'>Top Selling Courses</p>
            <p className='ct2'><img src={im4} />Bitcoin Technology and Application <span><img src={are}/></span></p>
            
            <p className='ct3'><span><img src={im5} />Bitcoin Technology and Application<span className='newarup'><img src={are}/></span></span>
              <div className='cdesc1'>
                <p className='cdt1'>View All Courses<img src={ar3} /></p>
                <p className='cdt2'>Discover the essentials of computing with our 'Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.</p>
                <p className='cdt2'>Teacher: Mrs. Bhawna</p>
                <p className='cdt2'><img src={star} />4.5 by 1,724 students</p>
                <p className='cdt4'>₹599 <span>(inclusive of taxes)</span></p>
                <div className='co'>
                  <p className='cdt3'>View Details<img src={ar3} /></p>
                  <p className='cdt3'>Wishlist Course<img src={ar3} /></p>
                </div></div>
            </p>
            <p className='ct4'><img src={im6} />Data Analytics & Machine Learning (Python)<span><img src={are}/></span></p>
          </div>
          <div className='cdesc'>
            <p className='cdt1'>View All Courses<img src={ar3} /></p>
            <p className='cdt2'>Discover the essentials of computing with our 'Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.</p>
            <p className='cdt2'>Teacher: Mrs. Bhawna</p>
            <p className='cdt2'><img src={star} />4.5 by 1,724 students</p>
            <p className='cdt4'>₹599 <span>(inclusive of taxes)</span></p>
            <div className='co'>
              <p className='cdt3'>View Details<img src={ar3} /></p>
              <p className='cdt3'>Wishlist Course<img src={ar3} /></p>
            </div></div>

        </div>
        <img className='cicon' style={getTransformStyle(0.2)} src={cicon} />
        <div className='quizdiv'>
          <img className='sticon' src={qdiv} />
          <p className='qt1'><b>Take a practice Quiz designed to sharpen your skills</b></p>
          <button>Take Quiz<img src={ar4} /> </button>
          <img className='icyicon' style={getTransformStyle(0.05)} src={icy} />
        </div>
      </div>
      </div>
   
     
        

    
    </div>
  );
}

export default App;
