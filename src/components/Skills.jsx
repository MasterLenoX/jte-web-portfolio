import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
// import nextjs from "../assets/nextjs.png";
// import nodejs from "../assets/node.png"
import java from "../assets/java.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png"
// import laravel from "../assets/laravel.png";
import python from "../assets/python.png";
import aspdotnet from "../assets/aspdotnet.png";
// import azuredata from "../assets/azuredatastudio.png";
import github from "../assets/github.png";
// import graphql from "../assets/graphql.png";

const Skills = () => {

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
      title: 'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-violet-500'
    },
    {
      id: 5,
      src: react,
      title: 'React.Js',
      style: 'shadow-blue-600'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-400'
    },
    // {
    //   id: 7,
    //   src: nextjs,
    //   title: 'Next.js',
    //   style: 'shadow-white'
    // },
    {
      id: 8,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-orange-500'
    },
    {
      id: 9,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500'
    },
    {
      id: 10,
      src: aspdotnet,
      title: 'ASP.Net',
      style: 'shadow-blue-700'
    },
    {
      id: 11,
      src: java,
      title: 'JAVA',
      style: 'shadow-orange-800'
    },
    // {
    //   id: 12,
    //   src: graphql,
    //   title: 'GraphQL',
    //   style: 'shadow-pink-400'
    // },
    {
      id: 13,
      src: github,
      title: 'GitHub',
      style: 'shadow-white'
    },
    // {
    //   id: 14,
    //   src: nodejs,
    //   title: 'Node.js',
    //   style: 'shadow-green-300'
    // },
    {
      id: 15,
      src: php,
      title: 'PHP',
      style: 'shadow-indigo-400'
    }
    // {
    //   id: 18,
    //   src: laravel,
    //   title: 'Laravel',
    //   style: 'shadow-red-400'
    // }
  ]

  return (
    <div name='skills' className='h-screen w-full bg-gradient-to-b from-black via-black to-indigo-950'>
      
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <br /><br /><br />  <br /><br /><br /><br /><br /><br /><br />  <br /><br /><br />  <br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br />
          <p className='text-4xl font-semibold border-b-4 border-indigo-700 p-2 inline'>Skills</p>
          <p className='py-6'>Here are some skills that I've worked with client projects</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            skill.map(({id, src, title, style}) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div> 
            ))
          }


        </div>
          <br /><br /><br />  <br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br /><br /><br />  <br /><br /><br />
      </div>
    </div>
  )
}

export default Skills