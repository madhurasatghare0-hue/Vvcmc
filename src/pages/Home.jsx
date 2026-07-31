import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/sections/HeroSection'
import QuickLinks from '../components/sections/QuickLinks'
import LiveDashboard from '../components/sections/LiveDashboard'
import FeaturedServices from '../components/sections/FeaturedServices'
import AboutVVMC from '../components/sections/AboutVVMC'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <QuickLinks />
      {/* <LiveDashboard /> */}
      <FeaturedServices />
      <AboutVVMC/>
    </div>
  )
}
export default Home