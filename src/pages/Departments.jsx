// import Navbar from '../components/layout/Navbar'
// import PageHeader from '../components/common/PageHeader'
// import { departments } from '../data/departments'
// import { useLanguage } from '../context/LanguageContext'
// import { translations } from '../data/translations'

// function Departments() {
//   const { language } = useLanguage()
//   const t = translations[language].pageHeaders.departments

//   return (
//     <div>
//       <Navbar />
//       <PageHeader title={t.title} subtitle={t.subtitle} breadcrumb={t.title} />

//       <section className="bg-white py-14">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {departments.map((dept) => {
//               const Icon = dept.icon
//               return (
//                 <div
//                   key={dept.name}
//                   className="bg-graybg border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow duration-300"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center">
//                     <Icon className="text-green" size={22} />
//                   </div>
//                   <h3 className="font-heading font-semibold text-navy text-sm">
//                     {language === 'mr' ? dept.name_mr : dept.name}
//                   </h3>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Departments

















import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/common/PageHeader'
import { departments } from '../data/departments'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

function Departments() {
  const { language } = useLanguage()
  const t = translations[language].pageHeaders.departments

  return (
    <div>
      <Navbar />
      <PageHeader title={t.title} subtitle={t.subtitle} breadcrumb={t.title} />

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {departments.map((dept) => {
              const Icon = dept.icon
              return (
                <Link
                  key={dept.slug}
                  to={`/departments/${dept.slug}`}
                  className="bg-graybg border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center">
                    <Icon className="text-green" size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm">
                    {language === 'mr' ? dept.name_mr : dept.name}
                  </h3>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Departments