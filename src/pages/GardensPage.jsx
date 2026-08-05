// import Navbar from '../components/layout/Navbar'
// import Footer from '../components/layout/Footer'
// import PageHeader from '../components/common/PageHeader'
// import { gardens } from '../data/gardens'
// import { useLanguage } from '../context/LanguageContext'
// import { translations } from '../data/translations'

// function GardensPage() {
//   const { language } = useLanguage()
//   const t = translations[language].pageHeaders.gardens

//   return (
//     <div>
//       <Navbar />
//       <PageHeader title={t.title} subtitle={t.subtitle} breadcrumb={t.title} />

//       <section className="bg-white py-14">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {gardens.map((garden) => {
//               const Icon = garden.icon
//               return (
//                 <div
//                   key={garden.name}
//                   className="bg-graybg border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="h-32 bg-gradient-to-br from-green-light to-gold-light flex items-center justify-center">
//                     <Icon className="text-green" size={36} />
//                   </div>
//                   <div className="p-5">
//                     <h3 className="font-heading font-semibold text-navy text-sm mb-2">
//                       {language === 'mr' ? garden.name_mr : garden.name}
//                     </h3>
//                     <p className="text-gray-500 text-xs leading-relaxed">
//                       {language === 'mr' ? garden.description_mr : garden.description}
//                     </p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default GardensPage









import { MapPin } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/common/PageHeader'
import { gardens } from '../data/gardens'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

function GardensPage() {
  const { language } = useLanguage()
  const t = translations[language].pageHeaders.gardens

  return (
    <div>
      <Navbar />
      <PageHeader title={t.title} subtitle={t.subtitle} breadcrumb={t.title} />

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gardens.map((garden) => {
              const Icon = garden.icon
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                garden.mapQuery || garden.name
              )}`

              return (
                <div
  key={garden.name}
  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[340px]"
>
  {/* Image */}
  {garden.image ? (
    <img
      src={garden.image}
      alt={language === 'mr' ? garden.name_mr : garden.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  ) : (
    <div className="absolute inset-0 bg-gradient-to-br from-green-light to-green flex items-center justify-center">
      <Icon className="text-white" size={60} />
    </div>
  )}

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

  

  {/* Content */}
  <div className="absolute bottom-0 left-0 right-0 p-6">

    <h3 className="text-white font-heading text-2xl font-bold mb-2">
      {language === 'mr'
        ? garden.name_mr
        : garden.name}
    </h3>

    <p className="text-white/80 text-sm leading-6 mb-5">
      {language === 'mr'
        ? garden.description_mr
        : garden.description}
    </p>

    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-green-light transition"
    >
      <MapPin size={15} />
      {language === 'mr'
        ? 'नकाशावर पहा'
        : 'View on Map'}
    </a>

  </div>
</div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GardensPage