import { useState } from 'react';
import {Button, Modal }from 'react-bootstrap';


const About = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-blue-950 via-blue-950 to-cyan-950 text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
          <div className='pb-6'>
            <p className='text-4xl font-semibold inline border-b-4 border-cyan-400'>About</p>
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

          <Button  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-950 cursor-pointer" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          
        </div>

    </div>
  )
}

export default About