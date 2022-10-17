import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faBars, faCaretDown, faSearch, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import useScrollPosition from 'hooks/useScrollPosition'
function NavBar() {
  const windowScrollTop = useScrollPosition()
  return (
    <div className="animate__animated  animate__fadeIn fixed top-0 bg-[#ffffff60] z-[999999]">
      {
        windowScrollTop > 800 &&
        (
          <a href="#" className='animate__animated  animate__fadeIn'>
            <FontAwesomeIcon className='fixed right-0 top-[50vh] translate-y-[-50%] text-[2rem] mr-4' icon={faChevronUp} cursor="pointer" />
          </a>
        )
      }

      <div className="w-screen md:px-14 px-5 py-2">
        <div className="flex items-center justify-between">
          <div className="md:flex hidden gap-2 items-center justify-between px-4  whitespace-nowrap border border-black">
            <p className='uppercase'>find a mondel</p>
            <FontAwesomeIcon icon={faCaretDown} cursor="pointer" />
          </div>
          <FontAwesomeIcon icon={faSearch} cursor="pointer" className='text-[2rem] md:hidden block' />
          {/* 123/55 */}
          <div className="relative w-[8rem] h-[5rem] overflow-hidden translate-x-[-60px]">
            <img src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/cb9d5c6f-da0e-4c76-b2bd-13140ac213fc" alt="" className="absoulate top-0 left-0 inset-0 object-cover object-center" />
          </div>
          <FontAwesomeIcon icon={faBars} cursor="pointer" className='text-[2rem]' />
        </div>
        <ul className="flex items-center justify-center gap-[1rem] mt-4">
          <li className="bg-[#a1899a] text-white px-2 cursor-pointer">MAINBOARD</li>
          <li className="cursor-pointer">NEW FACES</li>
          <li className="cursor-pointer">DEVELOPMENT</li>
          <li className="cursor-pointer">LIFESTYLE</li>
          <li className="cursor-pointer">ORIGINALS</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar