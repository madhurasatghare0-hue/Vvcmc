import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { noticeCategories } from '../../data/notices'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function NoticeBoard() {
  const [activeTab, setActiveTab] = useState(noticeCategories[0].key)
  const { language } = useLanguage()
  const t = translations[language].noticeBoard

  const activeCategory =
    noticeCategories.find(
      (category) => category.key === activeTab
    ) || { items: [] }

    const displayedItems = activeCategory.items.slice(0, 10)

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy">
              {t.title}
            </h2>

            <p className="mt-2 text-gray-500">
              {t.subtitle}
            </p>
          </div>

          <button className="hidden md:block text-green font-semibold hover:underline">
            {t.viewAll}
          </button>
        </div>

        {/* Tabs */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-graybg">
          <div className="flex flex-wrap">

            {noticeCategories.map((category) => {
              const isActive = category.key === activeTab

              return (
                <button
                  key={category.key}
                  onClick={() => setActiveTab(category.key)}
                  className={`relative flex-1 min-w-[180px] px-6 py-5 text-center font-heading font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-navy'
                      : 'text-gray-500 hover:bg-white hover:text-navy'
                  }`}
                >
                  {language === 'mr'
                    ? category.label_mr
                    : category.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gold" />
                  )}
                </button>
              )
            })}

          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {activeCategory.items.length === 0 ? (

            <div className="col-span-2 py-12 text-center text-gray-400">
              {t.noNotices}
            </div>

          ) : (

            activeCategory.items.map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-gray-100 bg-graybg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-lg"
              >

                {/* Date */}
                <p className="mb-2 text-xs font-semibold text-gray-500">
                  {item.date}
                </p>

                {/* Title */}
                <h3 className="mb-4 pr-10 font-heading text-base font-semibold leading-snug text-navy line-clamp-3">
                  {language === 'mr'
                    ? item.title_mr
                    : item.title}
                </h3>

                {/* File Info */}
                <p className="text-xs text-gray-500">
                  {t.fileSize}:
                  <span className="font-medium text-navy">
                    {' '}
                    {item.fileSize}
                  </span>

                  {' • '}

                  {t.fileFormat}:
                  <span className="font-medium text-navy">
                    {' '}
                    {item.fileFormat}
                  </span>
                </p>

                {/* Arrow */}
                <ChevronRight
                  size={24}
                  className="absolute right-6 top-6 text-gold-dark transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

            ))

          )}

        </div>

      </div>
    </section>
  )
}

export default NoticeBoard