import React from 'react';
import installNode from '../assets/img/Projects/installNode.jpg';
import installPHPMySQL from '../assets/img/Projects/installPHPmySQL.png';
import crudspage from '../assets/img/Projects/CrudPHPMySQLBootstrapver3.png';
import personalweb from '../assets/img/Projects/myoldpersonalwebpage2020.png';
import keynotewebpage from '../assets/img/Projects/keynotebusinesssolutionswebpage.png';
import virtuallypossiblewebpage from '../assets/img/Projects/virtuallypossiblewebpage.png';
import navbar from '../assets/img/Projects/navbar.jpg';
import reactSmooth from '../assets/img/Projects/reactSmooth.jpg';
import reactParallax from '../assets/img/Projects/reactParallax.jpg';
// import useState from '../assets/portfolio/useState.jpg';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      title: "Installing Node.js",
      src: installNode
    },
    {
      id: 2,
      title: "Installing PHPMyAdmin mySQL",
      src: installPHPMySQL
    },
    {
      id: 3,
      title: "CRUDS Page user maintenance",
      src: crudspage
    },
    {
      id: 4,
      title: "Old Personal Web Blog 2020",
      src: personalweb
    },
    {
      id: 5,
      title: "Keynote Webpage",
      src: keynotewebpage
    },
    {
      id: 6,
      title: "Virtually Possible Webpage",
      src: virtuallypossiblewebpage
    },
    {
      id: 7,
      title: "React NavBar",
      src: navbar
    },
    {
      id: 8,
      title: "React Smooth",
      src: reactSmooth
    },
    {
      id: 9,
      title: "React Parallax",
      src: reactParallax
    }
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-cyan-950 via-cyan to-black w-full text-white lg:h-screen'>
        
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
      <p className='text-4xl font-semibold inline border-b-4 border-cyan-400'>Portfolio</p>
      <p className='text-xl py-6'>Check out some of my workplace</p>
    </div>

      <div className='grid sm:grid-cols-4 md:grid-cols-5 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({id, title, src}) => (
            <div key={id} className='shadow-md shadow-blue-700 rounded-xl'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-110'/>
              <div className='flex items-center justify-center'>
                <p className='text-sm py-7'>{title}</p>
              </div>
            </div>  
          ))
        }
      </div>

    </div>
  </div>
  )
}

export default Portfolio