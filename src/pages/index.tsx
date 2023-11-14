import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Characteristics from '@/components/Characteristics'
import Carrusel from '@/components/Carrusel'
import Rentals from '@/components/Rentals'
import Footer from '@/components/Footer'
import Cubes from '@/components/Cubes'
import Map from '@/components/Map'
import WspIcon from '@/components/WspIcon'

export default function Home() {
  return (
    <div className={`flex flex-col w-screen items-center justify-center`}>
      <Contact />
      <Header />
      <Carrusel />
      <Characteristics />
      <Rentals name="rentals" />
      <Cubes name="cubes" />
      <Map name='map' />
      <Footer />
      <WspIcon />
    </div>
  )
}