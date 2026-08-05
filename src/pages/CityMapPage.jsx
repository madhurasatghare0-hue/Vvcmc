import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/common/PageHeader'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

function CityMapPage() {
  const { language } = useLanguage()
  const t = translations[language].pageHeaders.cityMap

  return (
    <div>
      <Navbar />
      <PageHeader title={t.title} subtitle={t.subtitle} breadcrumb={t.title} />

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[520px]">
            <iframe
              title="Vasai Virar City Map"
              src="https://www.google.com/maps?q=Vasai-Virar,+Maharashtra&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CityMapPage