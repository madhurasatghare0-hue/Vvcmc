import Navbar from '../components/layout/Navbar'
import PageHeader from '../components/common/PageHeader'
import AboutVVMC from '../components/sections/AboutVVMC'
import { motion } from 'framer-motion'
import { historyMilestones } from '../data/history'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

function About() {
  const { language } = useLanguage()
  const pageT = translations[language].pageHeaders.about
  const historyT = translations[language].history

  return (
    <div>
      <Navbar />
      <PageHeader
        title={pageT.title}
        subtitle={pageT.subtitle}
        breadcrumb={pageT.title}
      />

      <AboutVVMC />

      {/* Our History */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-green font-semibold text-sm mb-2 tracking-wide uppercase">
              {historyT.eyebrow}
            </p>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-3">
              {historyT.title}
            </h2>
            <p className="text-gray-500 text-sm">
              {historyT.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-green-light md:-translate-x-1/2" />

            <div className="flex flex-col gap-10">
              {historyMilestones.map((item, i) => {
                const isLeft = i % 2 === 0
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`relative flex items-start md:items-center gap-6 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year dot */}
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-green text-white font-heading font-bold text-xs flex items-center justify-center shadow-md">
                      {item.year}
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 bg-graybg border border-gray-100 rounded-2xl p-6 md:max-w-md ${
                        isLeft ? 'md:mr-auto' : 'md:ml-auto'
                      }`}
                    >
                      <h3 className="font-heading font-semibold text-navy text-base mb-1.5">
                        {language === 'mr' ? item.title_mr : item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {language === 'mr' ? item.description_mr : item.description}
                      </p>
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