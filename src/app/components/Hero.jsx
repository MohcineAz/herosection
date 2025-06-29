"use client";

import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import shape from '../assets/shap.png';

function Hero() {
  return (
    <section className='h-screen bg-gradient-to-r from-[#0e0d14] to-[#563169]'>
      <Navbar />

      <div className='flex flex-col md:flex-row justify-between items-center px-6 py-10 md:py-20 h-full'>
        
        {/* Texte à gauche */}
        <div className="left text-white w-full md:w-1/2 text-center md:text-left">
          <span className='inline-block border-2 border-white rounded-xl py-2 px-6 text-sm md:text-base bg-gradient-to-r from-[#0e0d14] to-[#563169]'>
            Available for Work
          </span>

          <h1 className='pt-6 text-3xl md:text-5xl lg:text-7xl font-bold leading-tight'>
            Transform your ideas into digital success with us!
          </h1>

          <p className='pt-6 text-sm md:text-base max-w-md mx-auto md:mx-0'>
            We’re your partner in product design, website creation, and branding for every stage of your business.
          </p>

          <div className="btns pt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className='bg-white rounded-xl text-black py-2 px-6'>
              Services
            </button>
            <button className='bg-transparent border-2 border-white rounded-xl py-2 px-6 text-white  to-[#563169]'>
              Our work
            </button>
          </div>
        </div>

        {/* Image à droite */}
        <div className="right w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <Image src={shape} alt="shape" className='w-64 md:w-96 h-auto' />
        </div>

      </div>
    </section>
  );
}

export default Hero;
