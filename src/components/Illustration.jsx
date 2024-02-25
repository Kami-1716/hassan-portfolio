import illustration from '../assets/illustration.svg'

function Illustration() {
  return (
    <div className='min-h-[650px] max-w-[1440px] mx-auto h-full px-4 py-14 md:py-28 md:pl-14 flex items-center'>
      <div className='flex flex-col md:flex-row gap-y-3 md:gap-x-4 items-center justify-center h-full'>
        <div className='flex-1'>
          <h1 className='text-4xl font-extrabold uppercase'>
            Illustration
          </h1>
          <p className='text-[#191919] tracking-widest w-full font-semibold text-[20px] md:w-[75%] mt-6'>
            In illustration, I start with rough sketches and capture them with a camera or mobile device. Then, I transfer the image to Adobe Illustrator to trace outlines. After that, I add colors and shades to enhance the illustration's visual appeal.
          </p>
          <p className='text-[#191919] tracking-widest w-full font-semibold text-[20px] md:w-[75%] mt-6'>
            Certainly! In illustration, the process can involve starting with images instead of sketches. Adding the image into the Adobe Illustrator, trace outlines, and then add colors and shades to refine the illustration.
          </p>
          <div className='my-8 text-center md:text-left'>
            <button className='border-[2px] border-black hover:bg-black hover:text-white text-[20px] font-semibold mt-6 text-black rounded-full px-3 py-3 md:px-4 md:my-4 tracking-widest'>
              More Details
            </button>
          </div>
        </div>
        <div className='flex-1'>
          <img src={illustration} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Illustration