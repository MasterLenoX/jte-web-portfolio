// import { Container, Row, Col } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import javascript from "../assets/img/skills/javascript.png";
import bootstrap from "../assets/img/skills/bootstrap.png";
import react from "../assets/img/skills/react.png";
import tailwind from "../assets/img/skills/tailwind.png";
import nextjs from "../assets/img/skills/nextjs.png";
import nodejs from "../assets/img/skills/node.png"
import java from "../assets/img/skills/java.png";
import php from "../assets/img/skills/php.png";
import mysql from "../assets/img/skills/mysql.png"
import laravel from "../assets/img/skills/laravel.png";
import python from "../assets/img/skills/python.png";
import aspdotnet from "../assets/img/skills/aspdotnet.png";
import azuredata from "../assets/img/skills/azuredatastudio.png";
import github from "../assets/img/skills/github.png";
// import turboC from "../assets/img/skills/c.png";
// import cplusplus from "../assets/img/skills/cplusplus.png";
// import csharp from "../assets/img/skills/csharp.png";
// import graphql from "../assets/img/skills/graphql.png";


const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skill = [
    {
      id: 1, 
      src: html, 
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2, 
      src: css, 
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3, 
      src: javascript, 
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4, 
      src: php, 
      title: 'PHP',
      style: 'shadow-indigo-500'
    },
    {
      id: 5, 
      src: mysql, 
      title: 'MySQL',
      style: 'shadow-orange-600'
    },
    {
      id: 6, 
      src: python, 
      title: 'Python',
      style: 'shadow-yellow-600'
    },
    {
      id:7, 
      src: bootstrap, 
      title: 'Bootstrap',
      style: 'shadow-purple-500'
    },
    {
      id:8, 
      src: tailwind, 
      title: 'Tailwind CSS',
      style: 'shadow-sky-400'
    },
    {
      id:9, 
      src: react, 
      title: 'React.js',
      style: 'shadow-blue-600'
    },
    {
      id:10, 
      src: java, 
      title: 'Java',
      style: 'shadow-orange-800'
    },
    {
      id:11, 
      src: github, 
      title: 'GitHub',
      style: 'shadow-white'
    },
    {
      id:12, 
      src: laravel, 
      title: 'Laravel',
      style: 'shadow-red-800'
    },
    {
      id:13, 
      src: nodejs, 
      title: 'Node.js',
      style: 'shadow-green-500'
    },
    {
      id:14, 
      src: aspdotnet, 
      title: 'ASP.Net',
      style: 'shadow-blue-700'
    },
    {
      id:15, 
      src: azuredata, 
      title: 'Azure SQL Data',
      style: 'shadow-blue-700'
    },
    {
      id:16, 
      src: nextjs, 
      title: 'Next.js',
      style: 'shadow-white'
    }
    // {
    //   id:17, 
    //   src: turboC, 
    //   title: 'Turbo C'
    // },
    // {
    //   id:18, 
    //   src: cplusplus, 
    //   title: 'C++'
    // },
    // {
    //   id:19, 
    //   src: csharp, 
    //   title: 'C#'
    // }
  ];
  return (
    <div name='skills' className='h-screen w-full bg-gradient-to-b from-gray-950 via-gray-950 to-indigo-950'>
      
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
      <div className="col">
        <div>
          <br /><br />  <br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br />
          <p className='text-4xl font-semibold border-b-4 border-indigo-700 p-2 inline'>Skills</p>
          <p className='py-6'>Here are some skills that I've worked with client projects</p>
          <p className="py-3">I am a qualified and professional web developer with two years of experience in database administration, website design and graphic design. Strong creative and analytical skills. Team player with an eye for detail.</p>
        </div>
        <div className='w-full grid grid-cols-5 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            skill.map(({id, src, title, style}) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div> 
            ))
          }


        </div>        
      </div>

          <br /><br /><br />  <br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br /><br /><br />  <br /><br /><br />
      </div>
    </div>
  )
}

export default Skills