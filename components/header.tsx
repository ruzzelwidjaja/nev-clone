import React from 'react';
import Image from 'next/image'


const Header: React.FC = () => {
  return (
    <div className="w-full h-[136px] flex items-center justify-between px-[3.5vw]">
      {/* Logo */}
      <div className="logo">
        <Image
          src="/ruz.png"
          width={72}
          height={27}
          alt="Picture of the author"
        />
      </div>

      {/* Filters */}
      <div className="relative flex bg-[#f0ecec] rounded-full text-[15px] p-1">
        {/* Filter buttons */}
        <button className='py-1 px-4'>All</button>
        <button className='px-4'>About</button>
        <button className='px-4'>Projects</button>
        <button className='px-4'>Media</button>
      </div>

      {/* Contact */}
      <div className="text-[15px] leading-6 tracking-wide text-black-200">
        {/* Contact information */}
        <a href="mailto:your-email@example.com">Contact</a>
      </div>
    </div>
  );
};

export default Header;
