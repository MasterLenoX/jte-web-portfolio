import React, { useState } from 'react';
// import {Button, Modal }from 'react-bootstrap';
import Code from '../assets/img/Lifestyle/code.jpg'


const About = () => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-blue-950 via-blue-950 to-cyan-950 text-white'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'> 

          {/* <div className='flex col-xs-12 col-md-6 col-xl-7 flex-col justify-center h-full'>
            <img 
              src={Code}  
              width="300" // Set the width
              height="200" // Set the height
              alt='my profile' 
              className="mx-auto rounded-2xl w-2/3 md:w-full"  
            />
          </div> */}

          <div className='flex col-xs-12 col-md-6 col-xl-5 flex-col justify-center h-full'>
            <div className='pb-6'>
              <h3 className='text-4xl font-semibold inline border-b-4 border-cyan-400'>About</h3>
            </div>
            <p className='text-xl mt-10'>
            Junior Programmer | Web Developer ( Front end & Back End ) | Graphic Designer | Freelancer Web Programmer
            </p>
            <p className="text-md text-slate-400">
              Talks about #gamer, #programmers, #webdesigner, #webdeveloper, and #graphicdesigner
            </p>
            <br />
            <p className='text-xl'>          
            Hey How's it goin bros. This is Leon James Here,

            Welcome to my official webpage. Thank you for checking in my website,
            for more Information, check-out some of my workplace, projects or any feeds that you seek.

            </p>

          </div>

        </div>

    </div>
  )
}

export default About