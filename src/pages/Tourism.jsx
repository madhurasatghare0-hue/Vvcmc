import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Users, Camera, Calendar, Leaf, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import CountUpModule from 'react-countup'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { tourismCategories, attractions } from '../data/tourism'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import fort from '../assets/images/fort.jpg'
import beach from '../assets/images/arnala.jpg'

const CountUp = CountUpModule.default || CountUpModule

const tourismStats = [
  { icon: MapPin, value: 25, suffix: '+', key: 'destinations' },
  { icon: Users, value: 1, suffix: 'M+', key: 'visitors' },
  { icon: Camera, value: 100, suffix: '+', key: 'photoSpots' },
  { icon: Calendar, value: 50, suffix: '+', key: 'events' },
]

function Tourism() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { language } = useLanguage()
  const t = translations[language].tourism
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const filtered =
    activeCategory === 'all' ? attractions : attractions.filter((a) => a.category === activeCategory)

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-graybg overflow-hidden py-4">
        <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] items-stretch">
          <div className="hidden lg:block h-52 xl:h-56">
            <img src={fort} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative flex flex-col items-center justify-center text-center px-6 py-6">
            <button className="absolute left-2 top-1/2 -translate-y-1/2 lg:-left-5 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-gray-50 z-10">
              <ChevronLeft size={16} />
            </button>

            <p className="font-heading italic text-green text-base mb-1">{t.heroScript}</p>
            <h1 className="font-heading font-extrabold text-navy text-3xl md:text-4xl mb-3">
              Vasai <span className="text-green">Virar</span>
            </h1>
            <p className="text-gray-500 text-sm max-w-md mb-4">{t.heroDescription}</p>
            

            <div className="flex gap-2 mt-5">
              <span className="w-2 h-2 rounded-full bg-green" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
            </div>

            <button className="absolute right-2 top-1/2 -translate-y-1/2 lg:-right-5 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-gray-50 z-10">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="hidden lg:block h-56">
            <img src={beach} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="bg-graybg py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-green font-semibold text-xs mb-1.5 tracking-wide uppercase">{t.eyebrow}</p>
            <h2 className="font-heading font-bold text-navy text-2xl">{t.title}</h2>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tourismCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-green text-white'
                    : 'bg-white text-gray-600 hover:bg-green-light hover:text-green'
                }`}
              >
                {language === 'mr' ? cat.label_mr : cat.label}
              </button>
            ))}
          </div>

          {/* Zig-zag list */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-green/20 -translate-x-1/2 hidden lg:block" />

            <div className="space-y-8">
              {filtered.map((place, index) => {
                const Icon = place.icon
                const reverse = index % 2 !== 0
                const mapsQuery = encodeURIComponent(`${place.name} Vasai Virar`)

                return (
                  <div
                    key={place.name}
                    className={`relative grid lg:grid-cols-2 gap-6 items-center ${
                      reverse ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    {/* Image or placeholder */}
                    <div className="rounded-2xl overflow-hidden shadow-lg group h-[200px]">
                      {place.image ? (
                        <img
                          src={place.image}
                          alt={language === 'mr' ? place.name_mr : place.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-green-light to-gold-light flex items-center justify-center">
                          <Icon className="text-green" size={40} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative">
                      <span className="absolute right-6 top-3 text-5xl font-bold text-gray-100">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className="font-heading text-xl font-bold text-navy mb-2.5">
                        {language === 'mr' ? place.name_mr : place.name}
                      </h3>

                      <p className="text-gray-600 text-sm leading-6 mb-4">
                        {language === 'mr' ? place.description_mr : place.description}
                      </p>
                      
                       <a
                        href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-dark transition-all duration-300"
                      >
                        {t.exploreMore}
                        <ArrowRight size={14} />
                      </a>
                    </div>

                    {/* Circle icon badge */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white border-4 border-green-light items-center justify-center shadow-lg">
                      <Icon size={24} className="text-green" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Tourism