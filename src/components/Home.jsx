import React, { useState, useEffect } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import HeroImg1 from "../assets/img/HeroImg3.jpg"
// import HeroImg1 from "../assets/img/HeroImg.png"
// import HeroImg2 from "../assets/img/HeroImg2.png"
// import HeroImg3 from "../assets/img/HeroImg3.png"
// import HeroImg4 from "../assets/img/HeroImg4.png"
import HeroImg5 from "../assets/img/HeroImg5.png"
import 'animate.css';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
// import {BsFillArrowRightCircleFill} from 'react-icons/bs';
// import {FaArrowRight} from 'react-icons/fa';
import {Link} from "react-scroll";
// import { Carousel, initTE } from "tw-elements";
// import TrackVisibility from 'react-on-screen';


const Home = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Graphic Designer", "Web Designer", "Programmer", "Web/Software QA Tester"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta)

    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  // const pics = [
    
  // ]


  
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-blue-950'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
              <div className='flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl font-bold  text-white'>My Name is <span className='text-4xl sm:text-7xl font-bold text-blue-500'> Leon James Emperado</span></h1>
                <br />
                <h4 className='text-2xl sm:text-2xl font-bold text-gray-400'>
                  {` I'm Junior  `} <span className='wrap text-blue-300'> {text} </span>
                </h4>
                <p className='text-gray-200 text-lg py-4 max-w-md'>
                  I am a qualified and professional
                  web developer with 2 to 3 years of
                  experience in database
                  administration, website design and
                  graphic design. Strong creative and
                  analytical skills. Team player with
                  an eye for detail.
                </p>

                <div>
                  <Link 
                    to="portfolio"
                    smooth 
                    duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-950 cursor-pointer">
                    Portfolio 
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                      {/* <BsFillArrowRightCircleFill size={20} className='ml-2'/> */}
                      {/* <FaArrowRight size={15} className='ml-2'/> */}
                    </span>
                  </Link>
                </div>

              </div>

              <div>
                <img 
                  src={HeroImg5}  
                  width="200" // Set the width
                  height="100" // Set the height
                  alt='my profile' 
                  className="mx-auto rounded-3xl border-sky-700 border-4 w-2/3 md:w-full"  
                />
              </div>
          
         
        </div>
    </div>
  )
}

export default Home