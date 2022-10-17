import type { NextPage } from 'next'
import NavBar from 'components/NavBar';
import Gallery from 'components/Gallery';
import Footer from 'components/Footer';

const Home: NextPage = () => {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home
