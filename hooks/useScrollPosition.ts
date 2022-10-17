import { useEffect, useState } from "react"
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScrollTop = () => {
    setScrollPosition(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollTop)
    return () => {
      window.removeEventListener('scroll', handleScrollTop)
    }
  }, [])
  return scrollPosition
}

export default useScrollPosition