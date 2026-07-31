import { quickLinks } from '../../data/quickLinks'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

const colorMap = {
  purple: 'text-accent-purple',
  green: 'text-accent-green',
  orange: 'text-accent-orange',
  blue: 'text-accent-blue',
  pink: 'text-accent-pink',
  teal: 'text-accent-teal',
}

function QuickLinks() {
  const { language } = useLanguage()
  const t = translations[language].quickLinks

  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((item) => {
            const Icon = item.icon
            const color = colorMap[item.color]
            const label = t[item.key]
            return (
              <button
                key={item.key}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-5 flex flex-col items-center gap-2 text-center hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Icon className={color} size={22} />
                <h3 className={`font-heading font-semibold text-sm ${color}`}>
                  {label.title}
                </h3>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickLinks