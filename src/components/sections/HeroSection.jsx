// import { useState } from 'react'
// import {
//   ChevronLeft, ChevronRight, Search, Zap, Bot, Siren, PhoneCall,
//   MessageCircle, ArrowUp, Home, Droplet, Baby, Building2, Briefcase,
//   Heart, Megaphone, Trash2, CreditCard,
// } from 'lucide-react'
// import heroBg from '../../assets/images/hero-bg.jpg'
// import { useLanguage } from '../../context/LanguageContext'
// import { translations } from '../../data/translations'

// function HeroSection() {
//   const [slide, setSlide] = useState(0)
//   const totalSlides = 5
//   const { language } = useLanguage()
//   const t = translations[language].hero

//   const quickAccessItems = [
//     { icon: Home, label: t.qa.propertyTax },
//     { icon: Droplet, label: t.qa.waterTax },
//     { icon: Baby, label: t.qa.birthCertificate },
//     { icon: Building2, label: t.qa.buildingPermission },
//     { icon: Briefcase, label: t.qa.tradeLicense },
//     { icon: Heart, label: t.qa.marriageCertificate },
//     { icon: Megaphone, label: t.qa.complaint },
//     { icon: Trash2, label: t.qa.garbageCollection },
//     { icon: CreditCard, label: t.qa.payOnline },
//   ]

//   const trendingSearches = ['Property Tax', 'Water Bill', 'Birth Certificate', 'Trade License']

//   return (
//     <section className="relative overflow-hidden">
//       {/* Photo bg, faded from white(left) to visible(right) */}
//       <div
//         className="absolute inset-0 bg-cover bg-right"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-white/10" />

//       {/* Decorative dot grid, top-left */}
//       <div
//         className="absolute top-10 left-6 w-24 h-24 opacity-40"
//         style={{
//           backgroundImage: 'radial-gradient(circle, #4F8A5A 1.5px, transparent 1.5px)',
//           backgroundSize: '12px 12px',
//         }}
//       />

//       {/* Carousel left arrow */}
//       <button
//         onClick={() => setSlide((s) => (s === 0 ? totalSlides - 1 : s - 1))}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-gray-50"
//       >
//         <ChevronLeft size={20} />
//       </button>

//       <div className="relative z-20 max-w-7xl mx-auto w-full px-6 pt-16 pb-20 grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">
//         {/* Left content */}
//         <div className="max-w-2xl">
//           <p className="text-gray-600 text-lg mb-2">{t.welcome}</p>
//           <h1 className="font-heading font-extrabold text-6xl md:text-7xl leading-none mb-4">
//             <span className="text-navy">{t.title1} </span>
//             <span className="text-green">{t.title2}</span>
//           </h1>
//           <p className="text-gold font-heading font-semibold text-2xl mb-4">{t.tagline}</p>
//           <p className="text-gray-600 text-base mb-8 max-w-md">{t.description}</p>

          
//         </div>

//         {/* Quick Access white card */}
//         <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl">
//           <p className="flex items-center gap-2 text-navy font-heading font-semibold text-lg mb-4">
//             <Zap className="text-gold" size={18} fill="currentColor" />
//             {t.quickAccess}
//           </p>
//           <div className="grid grid-cols-3 gap-3 mb-4">
//             {quickAccessItems.map((item) => {
//               const Icon = item.icon
//               return (
//                 <button
//                   key={item.label}
//                   className="bg-white hover:bg-green-light/50 border border-gray-100 rounded-xl p-3 flex flex-col items-center gap-2 text-center transition-colors"
//                 >
//                   <div className="w-9 h-9 rounded-full bg-green-light flex items-center justify-center text-green">
//                     <Icon size={16} />
//                   </div>
//                   <span className="text-navy text-xs leading-tight font-medium">{item.label}</span>
//                 </button>
//               )
//             })}
//           </div>
         
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-15 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {Array.from({ length: totalSlides }).map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setSlide(i)}
//             className={`h-2.5 rounded-full transition-all ${
//               i === slide ? 'bg-gold w-6' : 'bg-gray-300 w-2.5'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Floating right rail */}
//       <div className="hidden xl:flex flex-col items-center gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-20">
        
//         <button className="bg-white rounded-full p-3 shadow-lg flex flex-col items-center gap-1 w-24">
//           <Siren className="text-red-500" size={18} />
//           <span className="text-navy text-[10px] font-medium">{t.emergency}</span>
//         </button>
//         <button className="bg-white rounded-full p-3 shadow-lg flex flex-col items-center gap-1 w-24">
//           <PhoneCall className="text-accent-purple" size={18} />
//           <span className="text-navy text-[10px] font-medium">{t.helpline}</span>
//         </button>
        
       
//       </div>
//     </section>
//   )
// }

// export default HeroSection











import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronLeft, ChevronRight, Search, Zap, Bot, Siren, PhoneCall,
  MessageCircle, ArrowUp, Home, Droplet, Baby, Building2, Briefcase,
  Heart, Megaphone, Trash2, CreditCard,
} from 'lucide-react'
import heroBg from '../../assets/images/hero-bg.jpg'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function HeroSection() {
  const [slide, setSlide] = useState(0)
  const totalSlides = 5
  const { language } = useLanguage()
  const t = translations[language].hero

  const quickAccessItems = [
    { icon: Home, label: t.qa.propertyTax, slug: 'property-tax' },
    { icon: Droplet, label: t.qa.waterTax, slug: 'water-tax' },
    { icon: Baby, label: t.qa.birthCertificate, slug: 'birth-certificate' },
    { icon: Building2, label: t.qa.buildingPermission, slug: 'building-permission' },
    { icon: Briefcase, label: t.qa.tradeLicense, slug: 'trade-license' },
    { icon: Heart, label: t.qa.marriageCertificate, slug: 'marriage-certificate' },
    { icon: Megaphone, label: t.qa.complaint, slug: 'complaint-registration' },
    { icon: Trash2, label: t.qa.garbageCollection, slug: 'garbage-collection' },
    { icon: CreditCard, label: t.qa.payOnline, slug: 'online-payments' },
  ]

  const trendingSearches = ['Property Tax', 'Water Bill', 'Birth Certificate', 'Trade License']

  return (
    <section className="relative overflow-hidden">
      {/* Photo bg, faded from white(left) to visible(right) */}
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-white/10" />

      {/* Decorative dot grid, top-left */}
      <div
        className="absolute top-10 left-6 w-24 h-24 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #4F8A5A 1.5px, transparent 1.5px)',
          backgroundSize: '12px 12px',
        }}
      />

      {/* Carousel left arrow */}
      <button
        onClick={() => setSlide((s) => (s === 0 ? totalSlides - 1 : s - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-gray-50"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 pt-16 pb-20 grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">
        {/* Left content */}
        <div className="max-w-2xl">
          <p className="text-gray-600 text-lg mb-2">{t.welcome}</p>
          <h1 className="font-heading font-extrabold text-6xl md:text-7xl leading-none mb-4">
            <span className="text-navy">{t.title1} </span>
            <span className="text-green">{t.title2}</span>
          </h1>
          <p className="text-gold font-heading font-semibold text-2xl mb-4">{t.tagline}</p>
          <p className="text-gray-600 text-base mb-8 max-w-md">{t.description}</p>
        </div>

        {/* Quick Access white card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl">
          <p className="flex items-center gap-2 text-navy font-heading font-semibold text-lg mb-4">
            <Zap className="text-gold" size={18} fill="currentColor" />
            {t.quickAccess}
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
          {quickAccessItems.map((item) => {
  const Icon = item.icon
  return (
    <Link
      key={item.slug}
      to={`/services/${item.slug}`}
      className="bg-white hover:bg-green-light/50 border border-gray-100 rounded-xl p-3 flex flex-col items-center gap-2 text-center transition-colors"
    >
      <div className="w-9 h-9 rounded-full bg-green-light flex items-center justify-center text-green">
        <Icon size={16} />
      </div>
      <span className="text-navy text-xs leading-tight font-medium">{item.label}</span>
    </Link>
  )
})}
          </div>
          <Link
            to="/services"
            className="w-full bg-green hover:bg-green-dark text-white font-semibold text-sm py-3 rounded-full flex items-center justify-center gap-2"
          >
            {t.viewAllServices}
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-15 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === slide ? 'bg-gold w-6' : 'bg-gray-300 w-2.5'
            }`}
          />
        ))}
      </div>

      {/* Floating right rail */}
      <div className="hidden xl:flex flex-col items-center gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button className="bg-white rounded-full p-3 shadow-lg flex flex-col items-center gap-1 w-24">
          <Siren className="text-red-500" size={18} />
          <span className="text-navy text-[10px] font-medium">{t.emergency}</span>
        </button>
        <button className="bg-white rounded-full p-3 shadow-lg flex flex-col items-center gap-1 w-24">
          <PhoneCall className="text-accent-purple" size={18} />
          <span className="text-navy text-[10px] font-medium">{t.helpline}</span>
        </button>
      </div>
    </section>
  )
}

export default HeroSection