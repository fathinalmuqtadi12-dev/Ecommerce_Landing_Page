import React from "react";


export default function Hero() {
  return (
<section id="home">



<div className="flex flex-col items-center bg-[#FFF] w-full h-screen overflow-hidden relative">
      
<picture>
  {/* Mobile */}
  <source media="(max-width: 767px)" srcSet="./src/assets/resources/decoration/bg-hero-md.png" />
  {/* Desktop */}
  <img
    src="./src/assets/resources/decoration/bg-hero.png"
    className="w-full h-auto max-w-none object-cover relative top-0 overflow-hidden "
    alt="bg-hero"
  />
</picture>
   

  
      
      <div className="hidden md:flex absolute flex-col bottom-6 sm:bottom-8 md:bottom-6 w-full max-w-sm px-4 h-20">
        <p className="hidden md:flex flex-col justify-center text-white font-elephant text-sm sm:text-lg md:text-2xl leading-[1.2em] h-16 text-center tracking-[-0.05em]">
          SCROLL TO EXPLORE
        </p>
        <svg
          width="47"
          height="16"
          viewBox="0 0 47 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 sm:w-10 md:w-[42px] h-2.5 mx-auto mt-2 animate-updown"
          >
          <path
            d="M2.50061 2.50058L23.5006 12.5006L44.5006 2.50058"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

    <div className="flex absolute top-32  flex-col  justify-center items-center leading-1 tracking-normal">
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-extrabold font-formula text-white text-center">
        Do you like cool outfits?
      </h1>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold font-formula text-white text-center mt-4">
        You're in the right place
      </h3>
    </div>
    
    </div>
    </section>
  );
}