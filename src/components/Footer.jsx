import FooterBg from '../assets/FooterBg.svg';

function Footer() {
  const divStyle = {
    backgroundImage: `url(${FooterBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div>
      <div style={divStyle} className='min-h-[266px] flex items-center justify-center flex-col'>
        <h1 className='text-4xl text-white font-extrabold text-center'>
          LET’S CONNECT TOGETHER
        </h1>
        <div className='flex text-white gap-x-2 mt-4'>
          <p>
            hassanswork2@gmail.com
          </p>
          <a href='#header'>Go Back Home</a>
        </div>

      </div>
      <div className='min-h-[46px] bg-black text-white text-center flex items-center justify-center'>
        <p>
          © 2021 Muhammad Hassan Maqsood. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer