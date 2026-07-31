import CountUpModule from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'
import { leadership, visionMission, quickStats } from '../../data/aboutVVMC'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

const CountUp = CountUpModule.default || CountUpModule

const statKeyMap = ['populationServed', 'wards', 'schools', 'hospitals']

function AboutVVMC() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section className="bg-graybg py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-green font-semibold text-sm mb-2 tracking-wide uppercase">{t.eyebrow}</p>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-3">{t.title}</h2>
          <p className="text-gray-500 text-sm">{t.subtitle}</p>
        </div>

        {/* Leadership messages */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm relative"
            >
              <Quote className="text-gold-light absolute top-6 right-6" size={36} fill="currentColor" />
              <div className="flex items-center gap-4 mb-4">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-green-light"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center text-white font-heading font-semibold text-lg flex-shrink-0">
                    {person.initials}
                  </div>
                )}
                <div>
                  <p className="font-heading font-semibold text-navy text-base">{person.name}</p>
                  <p className="text-gray-400 text-xs">
                    {language === 'mr' ? person.designation_mr : person.designation}
                  </p>
                  <p className="text-green text-xs font-medium mt-0.5">
                    {language === 'mr' ? person.role_mr : person.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {language === 'mr' ? person.message_mr : person.message}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {visionMission.map((item, i) => (
            <div key={i} className={`rounded-2xl p-7 ${i === 0 ? 'bg-gold-dark' : 'bg-green'}`}>
              <h3 className="font-heading font-semibold text-white text-lg mb-3">
                {i === 0 ? t.vision : t.mission}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {language === 'mr' ? item.description_mr : item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick stats strip */}
        <div
          ref={ref}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100"
        >
          {quickStats.map((stat, i) => (
            <div key={stat.label} className="p-6 text-center">
              <p className="font-heading font-bold text-navy text-3xl mb-1">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                {stat.suffix}
              </p>
              <p className="text-gray-500 text-xs">{t[statKeyMap[i]]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutVVMC