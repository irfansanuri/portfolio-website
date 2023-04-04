import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who is Irfan Sanuri?</h2>
          <p className='py-2 text-gray-600'>
            I’m a front-end developer with a passion for technology and a drive 
            to create engaging and responsive user interfaces. I graduated with a first-class 
            degree in artificial intelligence from Multimedia University, where I gained a solid 
            foundation in programming and a deep understanding of how technology can transform 
            our world. I believe technology is more than just a tool, it's a magical gateway to 
            endless possibilities and a symbol of our wildest dreams and aspirations. Technology is
            the closest thing we have to fairytales and a beacon of hope for a brighter future.
          </p>
          <p className='py-2 text-gray-600'>
            My web development journey began in 2018 when I experimented with Shopify and WordPress 
            to build e-commerce sites. However, I soon realized the challenges of customizing prebuilt 
            templates to fit my exact needs. This roadblock fueled my determination to build websites 
            from scratch, with a focus on crafting mobile-responsive designs that deliver an efficient 
            and intuitive user experience. I am committed to delivering high-quality code that meets the 
            needs of my clients and users, and I stay up-to-date with the latest tech developments. 
          </p>
          <p className='py-2 text-gray-600'>
            If you're interested in working together or discussing technology, feel free to get in touch!
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
