import { ArrowRight } from 'lucide-react'
import { liveStats } from '../../data/liveStats'
import { newsItems } from '../../data/newsItems'
import { alerts } from '../../data/alerts'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

const alertTheme = {
  red: 'bg-red-50 border-l-4 border-red-400',
  amber: 'bg-amber-50 border-l-4 border-amber-400',
  green: 'bg-green-light border-l-4 border-green',
}
const alertIconColor = {
  red: 'text-red-500',
  amber: 'text-amber-500',
  green: 'text-green',
}

function LiveDashboard() {
  const { language } = useLanguage()
  const t = translations[language].liveDashboard
  const common = translations[language].common

  return (
    <section className="bg-graybg py-14 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green animate-pulse" />
            <div>
              <h2 className="text-navy font-heading font-semibold text-xl">{t.title}</h2>
              <p className="text-gray-500 text-sm">{t.subtitle}</p>
            </div>
          </div>
          <button className="border border-gray-200 bg-white text-navy text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:border-green hover:text-green">
            {common.viewFullDashboard}
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {liveStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.key} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <Icon className="text-green mb-3" size={22} />
                <p className="text-navy font-heading font-bold text-2xl">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1">{t[stat.key]}</p>
                {stat.tagKey && <p className={`text-xs font-medium mt-0.5 ${stat.tagColor}`}>{t[stat.tagKey]}</p>}
              </div>
            )
          })}
        </div>

        {/* News + Alerts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Latest News */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-navy font-heading font-semibold text-lg">{t.latestNews}</h3>
              <button className="text-gray-400 text-sm flex items-center gap-1 hover:text-green">
                {common.viewAll} <ArrowRight size={14} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {newsItems.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-green-light flex-shrink-0" />
                  <div>
                    <p className="text-navy font-medium text-sm leading-snug">{item.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Alerts */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-navy font-heading font-semibold text-lg">{t.importantAlerts}</h3>
              <button className="text-gray-400 text-sm flex items-center gap-1 hover:text-green">
                {common.viewAll} <ArrowRight size={14} />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {alerts.map((alert) => {
                const Icon = alert.icon
                return (
                  <div key={alert.title} className={`rounded-lg p-4 ${alertTheme[alert.theme]}`}>
                    <div className="flex gap-3">
                      <Icon className={alertIconColor[alert.theme]} size={20} />
                      <div>
                        <p className="text-navy font-medium text-sm">{alert.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{alert.description}</p>
                        <p className="text-gray-400 text-xs mt-1">{alert.date}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveDashboard