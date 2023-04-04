import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ProfileImg from '../public/assets/profile.jpg';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div className='w-[200px] lg:w-[250px] h-[200px] lg:h-[250px]  m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-2 mb-8 hover:scale-105 ease-in duration-300'>
            <Image src={ProfileImg} className='rounded-full' alt='/' />
          </div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Irfan</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/irfansanuri/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
              {/* <div className='py-2'>
                <p>LinkedIn</p>
              </div> */}
            </a>
            <a
              href='https://github.com/irfansanuri'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
              {/* <div className='py-2'>
                <p>GitHub</p>
              </div> */}
            </a>
            <Link href='/#contact'>
              <div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                {/* <div className='py-2'>
                  <p>Email</p>
                </div> */}
              </div>
            </Link>
            <Link href='/resume'>
              <div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
                {/* <div className='py-2'>
                  <p>Resume</p>
                </div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
