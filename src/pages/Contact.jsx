import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/common/PageHeader'
import { contactDetails } from '../data/contactInfo'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const iconMap = { address: MapPin, phone: Phone, email: Mail, hours: Clock }

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const { language } = useLanguage()
  const pageT = translations[language].pageHeaders.contact
  const t = translations[language].contactPage

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — static frontend. Wire this to an API/email service once available.
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      <Navbar />
      <PageHeader title={pageT.title} subtitle={pageT.subtitle} breadcrumb={pageT.title} />

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Left: Contact info + map */}
          <div>
            <h2 className="font-heading font-bold text-navy text-2xl mb-6">{t.getInTouch}</h2>
            <div className="flex flex-col gap-4 mb-8">
              {contactDetails.map((item) => {
                const Icon = iconMap[item.key]
                return (
                  <div key={item.key} className="flex items-start gap-4 bg-graybg border border-gray-100 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                      <Icon className="text-green" size={18} />
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm">
                        {language === 'mr' ? item.label_mr : item.label}
                      </p>
                      <p className="text-gray-500 text-sm mt-0.5">
                        {language === 'mr' && item.value_mr ? item.value_mr : item.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Live map embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64">
              <iframe
                title="VVMC Office Location"
                src="https://www.google.com/maps?q=Vasai-Virar,+Maharashtra&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-graybg border border-gray-100 rounded-2xl p-8">
            <h2 className="font-heading font-bold text-navy text-xl mb-6">{t.formTitle}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t.subjectPlaceholder}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.message}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  required
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white font-semibold text-sm py-3 rounded-full transition-colors"
              >
                {t.send}
                <Send size={16} />
              </button>
              {submitted && (
                <p className="text-green text-xs text-center font-medium">
                  {language === 'mr' ? 'तुमचा संदेश यशस्वीरित्या पाठवला गेला!' : 'Your message has been sent successfully!'}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact