import Layout from '../components/layout/Layout'
import HeroSection from '../components/sections/HeroSection'
import QuickLinks from '../components/sections/QuickLinks'
import LiveDashboard from '../components/sections/LiveDashboard'
import FeaturedServices from '../components/sections/FeaturedServices'
import Leadership from '../components/sections/Leadership'
import NoticeBoard from '../components/sections/NoticeBoard'

function Home() {
  return (
    <Layout>
      <HeroSection />
      <QuickLinks />
      {/* <LiveDashboard /> */}
      <FeaturedServices />
      <NoticeBoard/>
      <Leadership />
    </Layout>
  )
}
export default Home