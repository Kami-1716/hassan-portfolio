import LogoDesignImg from '../assets/logoDesign.svg'
import logoSmallImage from '../assets/logoSmallImage.svg'

function LogoDesign() {
  return (
    <div id='logoDesign' className='min-h-[650px] max-w-[1440px] mx-auto h-full px-4 py-14 md:py-28 md:pl-14 flex items-center'>
      <div className='flex flex-col md:flex-row gap-y-3 md:gap-x-4 items-center justify-center h-full'>
        <div className='flex-1'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-4xl font-extrabold uppercase'>
              Illustration
            </h1>
            <img src={logoSmallImage} alt="" className='mb-2' />
          </div>
          <p className='text-[#191919] tracking-widest w-full font-semibold text-[20px] md:w-[75%] mt-6'>
            I start by researching the client's industry and audience, then sketch out rough ideas. Next, I create the logo digitally with specified colors. Finally, I make mockups to show the client how the logo will look in real-world situations.
          </p>
          <p className='text-[#191919] tracking-widest w-full font-semibold text-[20px] md:w-[75%] mt-6'>
            I use Adobe Illustrator for logo design from sketching to digital creation, then Adobe Photoshop for crafting mockups to demonstrate real-world application.
          </p>
          <div className='my-8 text-center md:text-left'>
            <button className='border-[2px] border-black hover:bg-black hover:text-white text-[20px] font-semibold mt-6 text-black rounded-full px-3 py-3 md:px-4 md:my-4 tracking-widest'>
              More Details
            </button>
          </div>
        </div>
        <div className='flex-1'>
          <img src={LogoDesignImg} alt="" />
        </div>
      </div>

    </div>
  )
}

export default LogoDesign