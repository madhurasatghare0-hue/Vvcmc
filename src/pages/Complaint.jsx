import { useState } from 'react'
import { Send } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/common/PageHeader'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

function Complaint() {
  const [form, setForm] = useState({ name: '', mobile: '', ward: '', category: '', description: '' })
  const { language } = useLanguage()
  const pageT = translations[language].pageHeaders.complaint
  const t = translations[language].complaintPage

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — static frontend. Wire this to an API once available.
    console.log('Complaint submitted:', form)
  }

  return (
    <div>
      <Navbar />
      <PageHeader title={pageT.title} subtitle={pageT.subtitle} breadcrumb={pageT.title} />

      <section className="bg-white py-14">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-graybg border border-gray-100 rounded-2xl p-8">
            <h2 className="font-heading font-bold text-navy text-xl mb-6">{t.formTitle}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.name}</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder={t.namePlaceholder} required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.mobile}</label>
                <input
                  type="tel" name="mobile" value={form.mobile} onChange={handleChange}
                  placeholder={t.mobilePlaceholder} required pattern="[0-9]{10}"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.ward}</label>
                <input
                  type="text" name="ward" value={form.ward} onChange={handleChange}
                  placeholder={t.wardPlaceholder} required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.category}</label>
                <select
                  name="category" value={form.category} onChange={handleChange} required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green"
                >
                  <option value="" disabled>—</option>
                  {t.categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-navy text-sm font-medium mb-1.5 block">{t.description}</label>
                <textarea
                  name="description" value={form.description} onChange={handleChange}
                  placeholder={t.descriptionPlaceholder} required rows={5}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-navy outline-none focus:border-green resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white font-semibold text-sm py-3 rounded-full transition-colors"
              >
                {t.submit}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Complaint