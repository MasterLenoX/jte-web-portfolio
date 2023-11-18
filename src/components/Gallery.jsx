import React from 'react';
import { Glide } from 'react-glide';
import 'react-glide/lib/reactGlide.css';
import galleryImg1 from "../assets/img/Gallery/myfamily.jpg";
import galleryImg2 from "../assets/img/Gallery/brosGraduation.jpg";
import galleryImg3 from "../assets/img/Gallery/brosReunion.jpg";
import galleryImg4 from "../assets/img/Gallery/cousinbonding.jpg";
import galleryImg5 from "../assets/img/Gallery/youthgathering.jpg";
import galleryImg6 from "../assets/img/Gallery/jte2gpm.jpg";

const Gallery = () => {

  const items = [
    {
      src: galleryImg1,
      altText: 'Slide 1',
      caption: 'My Family',
      key: 1,
    },
    {
      src: galleryImg2,
      altText: 'Slide 2',
      caption: 'Bros Graduation',
      key: 2,
    },
    {
      src: galleryImg3,
      altText: 'Slide 3',
      caption: 'Bros Reunion',
      key: 3,
    },
    {
      src: galleryImg4,
      altText: 'Slide 4',
      caption: 'Cousin Bonding',
      key: 4,
    },
    {
      src: galleryImg5,
      altText: 'Slide 3',
      caption: 'Youth Gathering 3',
      key: 5,
    },
    {
      src: galleryImg6,
      altText: 'Slide 6',
      caption: 'Our First Date',
      key: 6,
    }
  ];

  return (
    <div name='gallery' className='bg-gradient-to-b from-cyan-950 via-cyan-950 to-slate-950 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
         <div className="pb-8">
            <p className='text-4xl font-semibold border-b-4 border-indigo-700 p-2 inline'>Gallery</p>
            <p className='py-6'>Art of Memories</p>
         </div>
        

          <Glide height={400} width={700}>
            {
              items.map(({src}) => (
                <img src={src} alt={altText}/>
              ))
            }
          </Glide>
         
          
      </div>
    </div>
  )
}

export default Gallery