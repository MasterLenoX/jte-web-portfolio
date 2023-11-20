import React from 'react'
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BiLogoGmail} from 'react-icons/bi'
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {


const links = [
  {
    id: 1,
    child: (
      <> 
        LinkedIn <FaLinkedin size={25}/> 
      </>
    ),
    href: 'https://www.linkedin.com/in/leonard-james-emperado-83b13a1b6',
    style: 'rounded-tr-md'
  },
  {
    id: 2,
    child: (
      <> 
        GitHub <FaGithub size={25}/> 
      </>
    ),
    href: 'https://github.com/MasterLenoX',
    style: 'rounded-tr-md'
  },
  {
    id: 3, 
    child: (
      <> 
        Gmail <BiLogoGmail size={25}/> 
      </>
    ),
    href: 'mailto:jamesomegawolfe@gmail.com',
  },
  {
    id: 4, 
    child: (
      <> 
        Email <HiOutlineMail size={25}/> 
      </>
    ),
    href: 'mailto:lenoxemperado@gmail.com',
  },
  {
    id: 5, 
    child: ( 
      <> 
        Resume <BsFillPersonLinesFill size={25}/> 
      </>
    ),
    href: '/LeonJamesEmperadoResume.pdf',
    style: 'rounded-tr-md ',
    download: true,
  },
  {
    id: 6,
    child: (
      <> 
        Facebook <FaFacebook size={25}/> 
      </>
    ),
    href: 'https://www.facebook.com/profile.php?id=100095530778991',
    style: 'rounded-tr-md rounded-br-md'
  }
]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id, child, href, style, download}) => (
          <li key={id} className={'flex justify-between items-center w-40 h-12 px-4 ml-[-80px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gradient-to-r from-black to-blue-700 border-r-4 border-cyan-600' + ' ' + style}>
            <a 
              href={href}  
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              download={download}
              rel="noreferrer"
              >
              {child}
            </a>
          </li>
        ))}


      </ul>
    </div>
  )
}

export default SocialLinks