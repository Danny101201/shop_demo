/* eslint-disable react/no-unescaped-entities */

import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView } from 'react-intersection-observer';
interface CardProps {
  user: UserInfo
}
function Card({ user }: CardProps) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log({ entry, inView })
  return (
    <div className={`w-full ${inView && "animate__animated  animate__fadeIn"}`} ref={ref} >
      <div className="relative h-[400px] bg-cover bg-center" style={{ background: 'url(https://picsum.photos/1000)' }}>
        <div className=' h-full  bg-[#00000080] text-white flex items-center justify-center opacity-0 hover:opacity-100 transition cursor-pointer'>
          <div>
            <div className="division_holder_size">Height: 5' 11" · 180cm</div>
            <div className="division_holder_size">Chest: 36" · 91cm</div>
            <div className="division_holder_size">Waist: 31" · 79cm</div>
            <div className="division_holder_size">Suit: 36R</div>
            <div className="division_holder_size">Inside Leg: 32" · 81cm</div>
            <div className="division_holder_size">Collar: 16" · 41cm</div>
            <div className="division_holder_size">Shoe: 10</div>
            <div className="division_holder_size">Hair: Black</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-2 pr-2 text-2xl">
        <p >Danny</p>
        <FontAwesomeIcon icon={faHeart} cursor="pointer" />
      </div>
    </div >
  )

}

export default Card