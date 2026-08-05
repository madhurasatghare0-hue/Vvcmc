// import { Link } from 'react-router-dom'
// import { ChevronRight } from 'lucide-react'

// function PageHeader({ title, subtitle, breadcrumb }) {
//   return (
//     <section className="bg-gradient-to-r from-green to-green-dark py-14">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center gap-2 text-white/60 text-xs mb-4">
//           <Link to="/" className="hover:text-white">Home</Link>
//           <ChevronRight size={12} />
//           <span className="text-gold">{breadcrumb}</span>
//         </div>
//         <h1 className="font-heading font-bold text-white text-3xl md:text-4xl mb-2">
//           {title}
//         </h1>
//         {subtitle && <p className="text-white/70 text-sm max-w-xl">{subtitle}</p>}
//       </div>
//     </section>
//   )
// }

// export default PageHeader

















// import { Link } from 'react-router-dom'
// import { ChevronRight, Home } from 'lucide-react'
// import heroBg from '../../assets/images/hero-bg.jpg'

// function PageHeader({ title, subtitle, breadcrumb }) {
//   return (
//     <section className="relative overflow-hidden h-[350px]">

//       {/* Background */}
//       <img
//         src={heroBg}
//         alt=""
//         className="absolute inset-0 w-full h-full "
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#005A34] via-[#00693d]/50 to-transparent" />

//       {/* Decorative Dots */}
//       <div className="absolute top-10 left-12 grid grid-cols-4 gap-2 opacity-20">
//         {Array.from({ length: 16 }).map((_, i) => (
//           <span
//             key={i}
//             className="w-1.5 h-1.5 rounded-full bg-white"
//           />
//         ))}
//       </div>

//       {/* Circle */}
//       <div className="absolute top-28 left-[42%] w-6 h-6 rounded-full border-[3px] border-yellow-400 opacity-70" />

//       {/* Wave Line */}
//       <div className="absolute bottom-16 left-10">
//         <svg width="80" height="24" fill="none" viewBox="0 0 90 30">
//           <path
//             d="M0 15 Q10 0 20 15 T40 15 T60 15 T80 15"
//             stroke="#FFD54A"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">

//         {/* Breadcrumb */}
//         <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">

//           <Home size={16} className="text-white" />

//           <Link
//             to="/"
//             className="text-white text-sm hover:text-yellow-300"
//           >
//             Home
//           </Link>

//           <ChevronRight
//             size={14}
//             className="text-white/70"
//           />

//           <span className="text-yellow-400 text-sm">
//             {breadcrumb}
//           </span>

//         </div>

//         {/* Title */}
//         <h1 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
//           {title}
//         </h1>

//         {/* Underline */}
//         <div className="w-20 h-1 bg-yellow-400 rounded-full mt-4 mb-4" />

//         {/* Subtitle */}
//         {subtitle && (
//           <p className="max-w-lg text-base md:text-lg text-white/85 leading-8">
//             {subtitle}
//           </p>
//         )}

//       </div>

//       {/* Bottom Wave */}
//       <svg
//         className="absolute bottom-0 left-0 w-full h-16"
//         viewBox="0 0 1440 120"
//         preserveAspectRatio="none"
//       >
//         <path
//           fill="#fff"
//           d="
//             M0,60
//             C220,110
//             420,10
//             720,60
//             C980,110
//             1180,20
//             1440,60
//             L1440,120
//             L0,120
//             Z
//           "
//         />
//       </svg>

//     </section>
//   )
// }

// export default PageHeader

















import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import defaultHeroBg from '../../assets/images/hero-bg.jpg'

function PageHeader({
  title,
  subtitle,
  breadcrumb,
  backgroundImage = defaultHeroBg,
}) {
  return (
    <section className="relative overflow-hidden h-[350px]">

      {/* Background */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#005A34] via-[#00693d]/50 to-transparent" />

      {/* Decorative Dots */}
      <div className="absolute top-10 left-12 grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
        ))}
      </div>

      {/* Circle */}
      <div className="absolute top-28 left-[42%] w-6 h-6 rounded-full border-[3px] border-yellow-400 opacity-70" />

      {/* Wave */}
      <div className="absolute bottom-16 left-10">
        <svg width="80" height="24" fill="none" viewBox="0 0 90 30">
          <path
            d="M0 15 Q10 0 20 15 T40 15 T60 15 T80 15"
            stroke="#FFD54A"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 w-fit">
          <Home size={16} className="text-white" />

          <Link to="/" className="text-white text-sm hover:text-yellow-300">
            Home
          </Link>

          <ChevronRight size={14} className="text-white/70" />

          <span className="text-yellow-400 text-sm">
            {breadcrumb}
          </span>
        </div>

        <h1 className="mt-5 text-4xl md:text-5xl font-bold text-white">
          {title}
        </h1>

        <div className="w-20 h-1 bg-yellow-400 rounded-full mt-4 mb-4" />

        {subtitle && (
          <p className="max-w-lg text-white/90 leading-8">
            {subtitle}
          </p>
        )}
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-16"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          d="M0,60 C220,110 420,10 720,60 C980,110 1180,20 1440,60 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  )
}

export default PageHeader