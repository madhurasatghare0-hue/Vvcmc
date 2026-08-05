// import Navbar from '../components/layout/Navbar'
// import PageHeader from '../components/common/PageHeader'
// import AboutVVMC from '../components/sections/AboutVVMC'
// import { motion } from 'framer-motion'
// import { historyMilestones } from '../data/history'
// import { useLanguage } from '../context/LanguageContext'
// import { translations } from '../data/translations'

// function About() {
//   const { language } = useLanguage()
//   const pageT = translations[language].pageHeaders.about
//   const historyT = translations[language].history

//   return (
//     <div>
//       <Navbar />
//       <PageHeader
//         title={pageT.title}
//         subtitle={pageT.subtitle}
//         breadcrumb={pageT.title}
//       />

//       <AboutVVMC />

//       {/* Our History */}
//       <section className="bg-white py-16">
//         <div className="max-w-5xl mx-auto px-6">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <p className="text-green font-semibold text-sm mb-2 tracking-wide uppercase">
//               {historyT.eyebrow}
//             </p>
//             <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-3">
//               {historyT.title}
//             </h2>
//             <p className="text-gray-500 text-sm">
//               {historyT.subtitle}
//             </p>
//           </div>

//           <div className="relative">
//             {/* Vertical line */}
//             <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-green-light md:-translate-x-1/2" />

//             <div className="flex flex-col gap-10">
//               {historyMilestones.map((item, i) => {
//                 const isLeft = i % 2 === 0
//                 return (
//                   <motion.div
//                     key={item.year}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.4 }}
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                     className={`relative flex items-start md:items-center gap-6 ${
//                       isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
//                     }`}
//                   >
//                     {/* Year dot */}
//                     <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-green text-white font-heading font-bold text-xs flex items-center justify-center shadow-md">
//                       {item.year}
//                     </div>

//                     {/* Content card */}
//                     <div
//                       className={`flex-1 bg-graybg border border-gray-100 rounded-2xl p-6 md:max-w-md ${
//                         isLeft ? 'md:mr-auto' : 'md:ml-auto'
//                       }`}
//                     >
//                       <h3 className="font-heading font-semibold text-navy text-base mb-1.5">
//                         {language === 'mr' ? item.title_mr : item.title}
//                       </h3>
//                       <p className="text-gray-500 text-sm leading-relaxed">
//                         {language === 'mr' ? item.description_mr : item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default About


// import Navbar from '../components/layout/Navbar'
// import PageHeader from '../components/common/PageHeader'
// import AboutVVMC from '../components/sections/AboutVVMC'
// import { motion } from 'framer-motion'
// import { historyMilestones } from '../data/history'
// import { useLanguage } from '../context/LanguageContext'
// import { translations } from '../data/translations'

// import fortOutline from '../assets/images/vasai-fort-outline.png'

// function About() {
//   const { language } = useLanguage()
//   const pageT = translations[language].pageHeaders.about
//   const historyT = translations[language].history

//   return (
//     <div className="relative bg-white overflow-hidden">
//       {/* Background Illustration */}
//       <img
//         src={fortOutline}
//         alt=""
//         aria-hidden="true"
//         className="absolute left-1/2 top-60 -translate-x-1/2 w-[1100px] lg:w-[1400px] opacity-[0.05] pointer-events-none select-none z-0"
//       />

//       {/* Decorative Blur */}
//       <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-green/5 rounded-full blur-[120px] z-0" />
//       <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-green/5 rounded-full blur-[120px] z-0" />

//       <div className="relative z-10">
//         <Navbar />

//         <PageHeader
//           title={pageT.title}
//           subtitle={pageT.subtitle}
//           breadcrumb={pageT.title}
//         />

//         <AboutVVMC />

//         {/* Our History */}
//         <section className="relative py-16">
//           <div className="max-w-5xl mx-auto px-6">
//             <div className="text-center max-w-2xl mx-auto mb-14">
//               <p className="text-green font-semibold text-sm mb-2 tracking-wide uppercase">
//                 {historyT.eyebrow}
//               </p>

//               <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-3">
//                 {historyT.title}
//               </h2>

//               <p className="text-gray-500 text-sm">
//                 {historyT.subtitle}
//               </p>
//             </div>

//             <div className="relative">
//               {/* Timeline Line */}
//               <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-green/20 md:-translate-x-1/2" />

//               <div className="space-y-10">
//                 {historyMilestones.map((item, i) => {
//                   const isLeft = i % 2 === 0

//                   return (
//                     <motion.div
//                       key={item.year}
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, amount: 0.3 }}
//                       transition={{ duration: 0.5 }}
//                       className={`relative flex items-start md:items-center gap-6 ${
//                         isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
//                       }`}
//                     >
//                       {/* Year Circle */}
//                       <div className="relative z-10 w-14 h-14 rounded-full bg-green text-white flex items-center justify-center font-heading font-bold shadow-lg flex-shrink-0">
//                         {item.year}
//                       </div>

//                       {/* Card */}
//                       <div
//                         className={`flex-1 md:max-w-md ${
//                           isLeft ? 'md:mr-auto' : 'md:ml-auto'
//                         }`}
//                       >
//                         <div className="bg-white/90 backdrop-blur-md border border-green/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
//                           <h3 className="font-heading font-semibold text-navy text-lg mb-2">
//                             {language === 'mr'
//                               ? item.title_mr
//                               : item.title}
//                           </h3>

//                           <p className="text-gray-600 leading-relaxed">
//                             {language === 'mr'
//                               ? item.description_mr
//                               : item.description}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default About






import Navbar from '../components/layout/Navbar'
import PageHeader from '../components/common/PageHeader'
import AboutVVMC from '../components/sections/AboutVVMC'
import { motion } from 'framer-motion'
import { historyMilestones } from '../data/history'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

import fortOutline from '../assets/images/vasai-fort-outline .png'
import officeOutline from '../assets/images/vvmc-office-outline.png'


function About() {
  const { language } = useLanguage()
  const pageT = translations[language].pageHeaders.about
  const historyT = translations[language].history

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />

      <PageHeader
        title={pageT.title}
        subtitle={pageT.subtitle}
        breadcrumb={pageT.title}
      />

      <AboutVVMC />

      {/* ================= OUR HISTORY ================= */}
      <section className="relative py-24 overflow-hidden">

        {/* Background Blur Left */}
        <div className="absolute left-0 top-20 w-[450px] h-[450px] bg-green/5 rounded-full blur-[120px]" />

        {/* Background Blur Right */}
        <div className="absolute right-0 top-0 w-[420px] h-[420px] bg-green/5 rounded-full blur-[120px]" />

        {/* Fort Illustration */}
        <img
          src={fortOutline}
          alt=""
          aria-hidden="true"
         className="
          absolute
          -left-8
          bottom-1
          w-[260px]
          lg:w-[540px]
          opacity-95
          mix-blend-multiply
          pointer-events-none
          select-none
          z-0
          "
        />

        {/* VVMC Office Illustration */}
        <img
          src={officeOutline}
          alt=""
          aria-hidden="true"
         className="
          absolute
          -right-6
          top-8
          w-[280px]
          lg:w-[560px]
          opacity-95
          mix-blend-multiply
          pointer-events-none
          select-none
          z-0
          "
        />


        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">

            <p className="text-green font-semibold tracking-[3px] uppercase text-sm mb-2">
              {historyT.eyebrow}
            </p>

            <h2 className="font-heading font-bold text-navy text-4xl mb-3">
              {historyT.title}
            </h2>

            <p className="text-gray-500">
              {historyT.subtitle}
            </p>

          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-green/15 -translate-x-1/2" />

            <div className="space-y-12">

              {historyMilestones.map((item, i) => {

                const isLeft = i % 2 === 0

                return (

                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex items-center ${
                      isLeft
                        ? 'md:flex-row'
                        : 'md:flex-row-reverse'
                    }`}
                  >

                    {/* Year */}
                    <div className="relative z-20 flex items-center justify-center w-14 h-14 rounded-full bg-green text-white font-bold shadow-lg flex-shrink-0">
                      {item.year}
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 ${
                        isLeft
                          ? 'md:mr-14'
                          : 'md:ml-14'
                      }`}
                    >

                      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-6">

                        <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                          {language === 'mr'
                            ? item.title_mr
                            : item.title}
                        </h3>

                        <p className="text-gray-600 leading-7">
                          {language === 'mr'
                            ? item.description_mr
                            : item.description}
                        </p>

                      </div>

                    </div>

                  </motion.div>

                )
              })}

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default About