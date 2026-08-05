import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import PageHeader from '../components/common/PageHeader'
import { citizenLinks } from '../data/citizenCorner'
import { faqs } from '../data/faqs'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const colorMap = {
  green: { icon: 'text-green', bg: 'bg-green-light' },
  gold: { icon: 'text-gold-dark', bg: 'bg-gold-light' },
}

function CitizenCorner() {
  const [openFaq, setOpenFaq] = useState(null)
  const { language } = useLanguage()
  const pageT = translations[language].pageHeaders.citizenCorner
  const t = translations[language].citizenCorner

  return (
    <div>
      <Navbar />
      <PageHeader title={pageT.title} subtitle={pageT.subtitle} breadcrumb={pageT.title} />

      {/* Quick Links grid */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-navy text-2xl mb-8">
            {t.quickLinksTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {citizenLinks.map((link) => {
              const Icon = link.icon
              const colors = colorMap[link.color]
              return (
                <div
                  key={link.title}
                  className="group bg-graybg border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={colors.icon} size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-base mb-1.5">
                    {language === 'mr' ? link.title_mr : link.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {language === 'mr' ? link.description_mr : link.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="bg-graybg py-14">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-navy text-2xl mb-2">{t.faqTitle}</h2>
            <p className="text-gray-500 text-sm">{t.faqSubtitle}</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-heading font-medium text-navy text-sm">
                      {language === 'mr' ? faq.question_mr : faq.question}
                    </span>
                    <ChevronDown
                      className={`text-green flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      size={18}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-sm leading-relaxed px-5 pb-5">
                        {language === 'mr' ? faq.answer_mr : faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CitizenCorner