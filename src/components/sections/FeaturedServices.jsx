import { ArrowRight } from 'lucide-react'
import { featuredServices } from '../../data/featuredServices'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import servicesBg from '../../assets/images/services-bg.png'

const colorMap = {
  green: { icon: 'text-green', bg: 'bg-green-light' },
  orange: { icon: 'text-accent-orange', bg: 'bg-gold-light' },
  pink: { icon: 'text-accent-pink', bg: 'bg-green-light' },
  blue: { icon: 'text-accent-blue', bg: 'bg-gold-light' },
  teal: { icon: 'text-accent-teal', bg: 'bg-navy-mist' },
  accentgreen: { icon: 'text-accent-green', bg: 'bg-green-light' },
  gold: { icon: 'text-gold', bg: 'bg-gold-light' },
  purple: { icon: 'text-accent-purple', bg: 'bg-navy-mist' },
}

function FeaturedServices() {
  const { language } = useLanguage()
  const common = translations[language].common

  return (
    <section
  className="relative bg-white py-16 bg-cover bg-center"
  style={{ backgroundImage: `url(${servicesBg})` }}
>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-green font-semibold text-sm mb-2 tracking-wide uppercase">
            {language === 'mr' ? 'आम्ही काय देतो' : 'What we offer'}
          </p>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-3">
            {language === 'mr' ? 'ठळक सेवा' : 'Featured Services'}
          </h2>
          <p className="text-gray-500 text-sm">
            {language === 'mr'
              ? 'व्हीव्हीएमसीकडून मिळणाऱ्या सर्व गोष्टी, श्रेणीनुसार मांडलेल्या'
              : 'Everything you need from your municipal corporation, organized by category'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featuredServices.map((service) => {
            const Icon = service.icon
            const colors = colorMap[service.color]
            return (
              <div
                key={service.title}
                className="group bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <Icon className={colors.icon} size={22} />
                </div>
                <h3 className="font-heading font-semibold text-navy text-base mb-1.5">
                  {language === 'mr' ? service.title_mr : service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {language === 'mr' ? service.description_mr : service.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 group-hover:text-green transition-colors">
                  {common.explore}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices