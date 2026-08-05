import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, FileCheck, Clock } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/common/PageHeader'
import { allServices } from '../data/allServices'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

function ServiceDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const t = translations[language].serviceDetail
  const common = translations[language].common

  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div>
        <Navbar />
        <div className="py-24 text-center text-gray-400">Service not found.</div>
        <Footer />
      </div>
    )
  }

  const Icon = service.icon
  const title = language === 'mr' ? service.title_mr : service.title
  const description = language === 'mr' ? service.description_mr : service.description

  return (
    <div>
      <Navbar />
      <PageHeader title={title} subtitle={description} breadcrumb={title} />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-green text-sm font-medium mb-8 hover:underline">
            <ArrowLeft size={16} />
            {t.backToServices}
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center">
              <Icon className="text-green" size={26} />
            </div>
            <h1 className="font-heading font-bold text-navy text-2xl">{title}</h1>
          </div>

          <div className="bg-graybg border border-gray-100 rounded-2xl p-7 mb-6">
            <h2 className="font-heading font-semibold text-navy text-lg mb-3">{t.overview}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-graybg border border-gray-100 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-green" size={20} />
                <h2 className="font-heading font-semibold text-navy text-base">{t.howToApply}</h2>
              </div>
              <ol className="flex flex-col gap-3">
                {t.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green text-white text-xs flex items-center justify-center font-semibold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-graybg border border-gray-100 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <FileCheck className="text-gold-dark" size={20} />
                <h2 className="font-heading font-semibold text-navy text-base">{t.documentsRequired}</h2>
              </div>
              <ul className="flex flex-col gap-2.5">
                {t.documents.map((doc, i) => (
                  <li key={i} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-gold-dark">•</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between bg-green-light rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3">
              <Clock className="text-green" size={20} />
              <div>
                <p className="text-navy text-sm font-semibold">{t.processingTime}</p>
                <p className="text-gray-600 text-xs">{t.processingTimeValue}</p>
              </div>
            </div>
          </div>

          {service.actionType === 'pay' && (
  <Link
    to={`/services/${service.slug}/pay`}
    className="w-full block text-center bg-green hover:bg-green-dark text-white font-semibold text-sm py-3.5 rounded-full transition-colors"
  >
    {language === 'mr' ? 'आता भरा' : 'Pay Now'}
  </Link>
)}
{service.actionType === 'apply' && (
  <Link
    to={`/services/${service.slug}/apply`}
    className="w-full block text-center bg-green hover:bg-green-dark text-white font-semibold text-sm py-3.5 rounded-full transition-colors"
  >
    {t.applyNow}
  </Link>
)}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServiceDetail