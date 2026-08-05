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









// import { useState, useRef } from 'react'
// import {
//   ChevronLeft, ChevronRight, MapPin, Users, Camera, Calendar,
//   Clock, Ticket, Leaf,
// } from 'lucide-react'
// import { useInView } from 'react-intersection-observer'
// import CountUpModule from 'react-countup'
// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'
// import { attractions, discoverCategories } from '../data/tourism'
// import { mustKnowItems, whyVisitItems } from '../data/tourismInfo'
// import { useLanguage } from '../context/LanguageContext'
// import { translations } from '../data/translations'
// import fort from '../assets/images/fort.jpg'

// const CountUp = CountUpModule.default || CountUpModule

// const heroStats = [
//   { icon: MapPin, value: 25, suffix: '+', color: 'text-green', bg: 'bg-green-light', key: 'destinations', noteKey: 'destinationsNote' },
//   { icon: Users, value: 1, suffix: 'M+', color: 'text-gold-dark', bg: 'bg-gold-light', key: 'visitors', noteKey: 'visitorsNote' },
//   { icon: Camera, value: 100, suffix: '+', color: 'text-accent-purple', bg: 'bg-navy-mist', key: 'photoSpots', noteKey: 'photoSpotsNote' },
//   { icon: Calendar, value: 50, suffix: '+', color: 'text-accent-pink', bg: 'bg-green-light', key: 'events', noteKey: 'eventsNote' },
// ]

// function Tourism() {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const { language } = useLanguage()
//   const t = translations[language].tourism
//   const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 })
//   const scrollRef = useRef(null)

//   const scrollByCard = (dir) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
//     }
//   }

//   return (
//     <div>
//       <Navbar />

//       <section className="relative bg-graybg overflow-hidden">
//         <div className="relative h-[380px] md:h-[420px]">
//           <img src={fort} alt="" className="w-full h-full object-cover" />
//           <div className="absolute inset-0  to-transparent" />

//           <button
//             onClick={() => scrollByCard(-1)}
//             className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-gray-50 z-10"
//           >
//             <ChevronLeft size={18} />
//           </button>
//           <button
//             onClick={() => scrollByCard(1)}
//             className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-gray-50 z-10"
//           >
//             <ChevronRight size={18} />
//           </button>

//           <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-10">
//             <p className="font-heading italic text-green text-xl mb-1">{t.heroTitle1}</p>
//             <h1 className="font-heading font-extrabold text-navy text-4xl md:text-5xl mb-3 leading-tight">
//               {t.heroTitle2}
//             </h1>
//             <p className="text-navy font-heading font-semibold text-lg mb-2 max-w-sm">{t.heroHeadline}</p>
//             <p className="text-gray-600 text-sm max-w-sm mb-4">{t.heroDescription}</p>
//             <div className="flex gap-2">
//               <span className="w-6 h-2 rounded-full bg-green" />
//               <span className="w-2 h-2 rounded-full bg-gray-300" />
//               <span className="w-2 h-2 rounded-full bg-gray-300" />
//             </div>
//           </div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6 -mt-10">
//           <div
//             ref={statsRef}
//             className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100"
//           >
//             {heroStats.map((stat) => {
//               const Icon = stat.icon
//               return (
//                 <div key={stat.key} className="p-5 flex items-center gap-3">
//                   <div className={`w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0`}>
//                     <Icon className={stat.color} size={20} />
//                   </div>
//                   <div>
//                     <p className="font-heading font-bold text-navy text-lg leading-none">
//                       {statsInView ? <CountUp end={stat.value} duration={2} /> : 0}{stat.suffix}
//                     </p>
//                     <p className="text-navy text-xs font-medium mt-1">{t.stats[stat.key]}</p>
//                     <p className="text-gray-400 text-[11px]">{t.stats[stat.noteKey]}</p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="bg-graybg pt-14 pb-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="font-heading font-bold text-navy text-xl flex items-center gap-2">
//               <Leaf className="text-green" size={18} />
//               {t.featuredDestinations}
//             </h2>
//             <button className="text-green text-sm font-medium flex items-center gap-1 hover:underline">
//               {t.viewAllPlaces}
//               <ChevronRight size={14} />
//             </button>
//           </div>

//           <div className="relative">
//             <button
//               onClick={() => scrollByCard(-1)}
//               className="hidden md:flex absolute -left-4 top-[45%] -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center text-navy hover:bg-gray-50 z-10"
//             >
//               <ChevronLeft size={16} />
//             </button>

//             <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-2 scroll-smooth snap-x" style={{ scrollbarWidth: 'none' }}>
//               {attractions.map((place) => {
//                 const Icon = place.icon
//                 const mapsQuery = encodeURIComponent(`${place.name} Vasai Virar`)
//                 return (
//                   <a
//                     key={place.name}
//                     href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex-shrink-0 w-64 snap-start bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
//                   >
//                     <div className="relative h-36">
//                       {place.image ? (
//                         <img
//                           src={place.image}
//                           alt={language === 'mr' ? place.name_mr : place.name}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gradient-to-br from-green-light to-gold-light flex items-center justify-center">
//                           <Icon className="text-green" size={32} />
//                         </div>
//                       )}
//                       <span className="absolute top-3 left-3 bg-green text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
//                         {language === 'mr' ? place.badge_mr : place.badge}
//                       </span>
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-heading font-semibold text-navy text-sm mb-1">
//                         {language === 'mr' ? place.name_mr : place.name}
//                       </h3>
//                       <p className="flex items-center gap-1 text-gray-400 text-xs mb-2">
//                         <MapPin size={11} />
//                         {language === 'mr' ? place.location_mr : place.location}
//                       </p>
//                       <p className="text-gray-500 text-xs leading-relaxed mb-3">
//                         {language === 'mr' ? place.description_mr : place.description}
//                       </p>
//                       <div className="flex items-center gap-3 text-[11px] text-gray-400 border-t border-gray-100 pt-2.5">
//                         <span className="flex items-center gap-1"><Clock size={11} /> {place.duration}</span>
//                         <span className="flex items-center gap-1"><Ticket size={11} /> {language === 'mr' ? place.entryFee_mr : place.entryFee}</span>
//                       </div>
//                     </div>
//                   </a>
//                 )
//               })}
//             </div>

//             <button
//               onClick={() => scrollByCard(1)}
//               className="hidden md:flex absolute -right-4 top-[45%] -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center text-navy hover:bg-gray-50 z-10"
//             >
//               <ChevronRight size={16} />
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="bg-graybg pb-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="font-heading font-bold text-navy text-xl flex items-center gap-2 mb-6">
//             <Leaf className="text-green" size={18} />
//             {t.discoverByCategory}
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {discoverCategories.map((cat) => {
//               const Icon = cat.icon
//               const isActive = activeCategory === cat.key
//               return (
//                 <button
//                   key={cat.key}
//                   onClick={() => setActiveCategory(isActive ? 'all' : cat.key)}
//                   className={`bg-white border rounded-xl p-5 flex flex-col items-center gap-2 transition-all duration-300 ${
//                     isActive ? 'border-green shadow-md' : 'border-gray-100 hover:shadow-md'
//                   }`}
//                 >
//                   <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center">
//                     <Icon className="text-green" size={18} />
//                   </div>
//                   <span className="text-navy text-sm font-medium">
//                     {language === 'mr' ? cat.label_mr : cat.label}
//                   </span>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="bg-graybg pb-14">
//         <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
//           <div>
//             <h2 className="font-heading font-bold text-navy text-xl flex items-center gap-2 mb-5">
//               <Leaf className="text-green" size={18} />
//               {t.mustKnow}
//             </h2>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {mustKnowItems.map((item, i) => {
//                 const Icon = item.icon
//                 return (
//                   <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3">
//                     <div className="w-9 h-9 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
//                       <Icon className="text-green" size={16} />
//                     </div>
//                     <div>
//                       <p className="text-navy text-xs font-semibold">
//                         {language === 'mr' ? item.label_mr : item.label}
//                       </p>
//                       <p className="text-navy text-sm font-medium mt-0.5">
//                         {language === 'mr' ? item.value_mr : item.value}
//                       </p>
//                       {item.note && (
//                         <p className="text-gray-400 text-[11px] mt-0.5">
//                           {language === 'mr' ? item.note_mr : item.note}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           <div>
//             <h2 className="font-heading font-bold text-navy text-xl flex items-center gap-2 mb-5">
//               <Leaf className="text-green" size={18} />
//               {t.tourismMap}
//             </h2>
//             <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[340px]">
//               <iframe
//                 title="Vasai Virar Tourism Map"
//                 src="https://www.google.com/maps?q=Vasai-Virar,+Maharashtra&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-green-light/50 py-14">
//         <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="font-heading font-bold text-navy text-2xl flex items-center gap-2 mb-6">
//               <Leaf className="text-green" size={20} />
//               {t.whyVisit}
//             </h2>
//             <div className="grid sm:grid-cols-2 gap-5">
//               {whyVisitItems.map((item, i) => {
//                 const Icon = item.icon
//                 return (
//                   <div key={i} className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
//                       <Icon className="text-green" size={18} />
//                     </div>
//                     <div>
//                       <p className="font-heading font-semibold text-navy text-sm">
//                         {language === 'mr' ? item.title_mr : item.title}
//                       </p>
//                       <p className="text-gray-600 text-xs mt-1 leading-relaxed">
//                         {language === 'mr' ? item.desc_mr : item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-3">
//             {attractions.slice(0, 5).map((place, i) => (
//               <div
//                 key={place.name}
//                 className={`rounded-xl overflow-hidden h-28 ${i === 0 ? 'col-span-2 row-span-2 h-full' : ''}`}
//               >
//                 {place.image ? (
//                   <img
//                     src={place.image}
//                     alt={language === 'mr' ? place.name_mr : place.name}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gradient-to-br from-green-light to-gold-light" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Tourism