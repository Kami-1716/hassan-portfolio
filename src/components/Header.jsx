import React from 'react';
import heroImage from '../assets/Example.svg';
import graphicDesiger from '../assets/designer.svg';
import Button from './Button';
import Illustration from './Illustration';
import LogoDesign from './LogoDesign';
import CherryOnTop from './CherryOnTop';
import Footer from './Footer';
import UiDesign from './UiDesign';

const Header = () => {
  const divStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div id='header'>
      <div style={divStyle} className='min-h-[650px]'>
        <header className="header">
          <ul className='text-white flex flex-wrap justify-center gap-x-8 pt-16 whitespace-nowrap tracking-widest'>
            <li>
              <a href="#logoDesign" className='hover:underline'>Logo Design</a>
            </li>
            <li>
              <a href="#uiDesign" className='hover:underline'>Ui/Ux Design</a>
            </li>
            <li>
              <a href="#illustration" className='hover:underline'>Illustrations</a>
            </li>
            <li>
              <a href="#cherrOnTop" className='hover:underline'>Cherry On Top</a>
            </li>
          </ul>
        </header>
        <div className='max-w-[1440px] mx-auto h-full px-4 py-14 md:py-28 md:px-14'>
          <div className='flex flex-col gap-y-3'>
            <img src={graphicDesiger} alt="" height='100px' className='w-auto max-w-[648px]' />
            <div>
              <p className='text-[#E9E9E9] tracking-widest'>Logo Design | Ui/Ux Design | Illustrations</p>
            </div>
            <div className=" mt-8 font-extrabold text-[35px] text-[#858585] flex justify-start flex-wrap gap-x-1 tracking-wider">
              Muhammad
              <span className="text-white m-0 p-0">Hassan</span>
              Maqsood
            </div>
            {/* outline button */}
            <div>
              <Button />
            </div>
          </div>
        </div>
      </div>
      <Illustration />
      <UiDesign />
      <LogoDesign />
      <CherryOnTop />
      <Footer />
    </div >
  );
};

export default Header;
