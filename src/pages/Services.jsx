import { useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import PageHeader from '../components/common/PageHeader'
import { serviceCategories, allServices } from '../data/allServices'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const { language } = useLanguage()
  const t = translations[language].pageHeaders.services
  const common = translations[language].common

  const filteredServices = allServices.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory
    const matchesQuery = service.title.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <div>
      <Navbar />
      <PageHeader title={t.title} subtitle={t.subtitle} breadcrumb={t.title} />

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                    activeCategory === cat.label || (cat.key === 'all' && activeCategory === 'All')
                      ? 'bg-green text-white'
                      : 'bg-graybg text-gray-600 hover:bg-green-light hover:text-green'
                  }`}
                >
                  {language === 'mr' ? cat.label_mr : cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center bg-graybg border border-gray-200 rounded-full px-4 py-2 w-full md:w-64">
              <Search className="text-gray-400 flex-shrink-0" size={16} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={common.search}
                className="flex-1 bg-transparent outline-none text-sm px-2 text-navy"
              />
            </div>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredServices.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-4">
                      <Icon className="text-green" size={22} />
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-base mb-1.5">
                      {language === 'mr' ? service.title_mr : service.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                      {language === 'mr' ? service.description_mr : service.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gold-dark group-hover:text-green transition-colors">
                      {common.applyNow}
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-sm">
                {language === 'mr' ? 'तुमच्या शोधाशी जुळणारी कोणतीही सेवा आढळली नाही.' : 'No services found matching your search.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Services