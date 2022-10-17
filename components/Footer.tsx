/* eslint-disable react/no-unescaped-entities */
import FacebookIcon from './icons/logo-facebook.svg';
import Instagramicon from './icons/logo-instagram.svg';
import TwitterIcon from './icons/logo-twitter.svg';
function Footer() {

  return (
    <div className='py-[4rem]'>
      <div className='flex gap-[1rem] flex-col items-center justify-center'>
        <div className='flex items-center gap-[2rem] cursor-pointer'>
          <div className='w-[2.5rem]'>
            <FacebookIcon />
          </div>
          <div className='w-[2.5rem]'>
            <Instagramicon />
          </div>
          <div className='w-[2.5rem]'>
            <TwitterIcon />
          </div>
        </div>
        <div className='flex items-center justify-center text-center'>
          <span className="cursor-pointer px-4 md:text-2xl text-md hover:text-[#a1899a]">Boss Spaces</span>
          <span className="cursor-pointer px-4 md:text-2xl text-md hover:text-[#a1899a] border-x-2 border-black">Boss Casting</span>
          <span className="cursor-pointer px-4 md:text-2xl text-md hover:text-[#a1899a]">Eden Casting Studios</span>
        </div>
        <div className='text-center'>
          <p className="text-4xl">logo</p>
          <p className="mt-[1rem]">Best Practice</p>
        </div>
        <div className='text-center'>
          <span className="cursor-pointer px-4 hover:text-[#a1899a]">T & C's</span>
          <span className="cursor-pointer px-4  hover:text-[#a1899a] border-x-2 border-black">Privacy</span>
          <span className="cursor-pointer px-4 hover:text-[#a1899a]">Cookies</span>
          <p>© 2022 Danny Wu.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer