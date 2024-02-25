import cherrOnTopImage1 from '../assets/cherryOnTopImage1.svg'
import cherrOnTopImage2 from '../assets/cherryOnTopImage2.svg'

function CherryOnTop() {
  return (
    <div className='bg-[#F0F0F0]' id='cherrOnTop'>
      <div className='min-h-[650px] max-w-[1440px] mx-auto h-full px-4 py-14 md:py-28 md:pl-14 flex items-center justify-center'>
        <div>
          <div className='flex items-center justify-center gap-x-3 md:gap-x-64 text-center'>
            <div>
              <img className='w-[64px] md:w-auto' src={cherrOnTopImage1} alt="" />
            </div>
            <div>
              <h1 className='md:text-[35px] text-[25px] font-extrabold'>CHERRY ON TOP </h1>
            </div>
            <div>
              <img className='w-[64px] md:w-auto' src={cherrOnTopImage2} alt="" />
            </div>
          </div>
          <p className='mt-2 text-[20px] w-full md:w-[60%] text-center mx-auto'>
            Cherry on Top : That means some extra skills in which I have some experience or passionate to do them !
          </p>
          <h1 className='text-center whitespace-normal md:text-4xl text-2xl  font-extrabold mt-10'>
            FILMMAKING/PHOTOGRAPHY | VIDEO EDITING | CALLIGRAPGHY
          </h1>
          <p className='text-center w-full md:w-[50%] text-[20px] mx-auto mt-3'>
            Outside of Graphic Design, I also pursue photography, filmmaking, video editing, and calligraphy as personal interests and occasional freelance projects. These skills enrich my creativity and offer additional avenues for expression when opportunities arise.
          </p>
        </div>

      </div>
    </div>
  )
}

export default CherryOnTop