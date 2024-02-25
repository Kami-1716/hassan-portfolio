import uiImage from '../assets/uiImage.svg';

function UiDesign() {
  return (
    <div className='bg-[#191919]' id='uiDesign'>
      <div className='min-h-[650px] max-w-[1440px] mx-auto h-full px-4 py-14 md:py-28 md:pl-14 flex items-center '>
        <div className='flex flex-col md:flex-row gap-y-3 md:gap-x-4 items-center justify-center h-full'>
          <div className='flex-1'>
            <h1 className='text-4xl text-white font-extrabold uppercase'>
              UI/UX DESIGN
            </h1>
            <p className='text-white tracking-widest w-full font-semibold text-[20px] md:w-[75%] mt-6'>
              In UI/UX design, I start by researching the client's brief, gathering insights and requirements. Next, I establish the color scheme to align with the project's goals and branding. Then, I create individual components and buttons necessary for the design's functionality. Finally, I integrate these elements into the overall design, ensuring a cohesive and user-friendly interface.
            </p>
            <div className='my-8 text-center md:text-left'>
              <button className='border-[2px] border-white hover:bg-white hover:text-black text-[20px] font-semibold mt-6 text-white rounded-full px-3 py-3 md:px-4 md:my-4 tracking-widest'>
                More Projects
              </button>
            </div>
          </div>
          <div className='flex-1'>
            <img src={uiImage} alt="" height='798px' className='mr-0' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default UiDesign