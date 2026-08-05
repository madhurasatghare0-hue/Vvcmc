import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/common/PageHeader'
import { allServices } from '../data/allServices'
import { useLanguage } from '../context/LanguageContext'

function PaymentForm() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const service = allServices.find((s) => s.slug === slug)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ propertyId: '', name: '', amount: '' })

  if (!service) return <Navigate to="/services" replace />

  const title = language === 'mr' ? service.title_mr : service.title

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <Navbar />
      <PageHeader title={`Pay ${title}`} subtitle="Complete your payment securely" breadcrumb={title} />

      <section className="bg-white py-14">
        <div className="max-w-lg mx-auto px-6">
          <Link to={`/services/${slug}`} className="inline-flex items-center gap-1.5 text-green text-sm font-medium mb-8 hover:underline">
            <ArrowLeft size={15} />
            Back to {title}
          </Link>

          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle2 className="text-green mx-auto mb-4" size={48} />
              <h2 className="font-heading font-semibold text-navy text-lg mb-2">Payment Successful</h2>
              <p className="text-gray-500 text-sm mb-6">
                A receipt for ₹{form.amount || '0'} has been generated for {form.name || 'your account'}.
              </p>
              <Link to="/services" className="text-green text-sm font-semibold hover:underline">
                Back to all services
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-graybg border border-gray-100 rounded-2xl p-7 flex flex-col gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Property / Connection ID</label>
                <input
                  required
                  value={form.propertyId}
                  onChange={(e) => setForm({ ...form, propertyId: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-navy outline-none focus:border-green"
                  placeholder="e.g. VV-0012345"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-navy outline-none focus:border-green"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Amount (₹)</label>
                <input
                  required
                  type="number"
                  min="1"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-navy outline-none focus:border-green"
                  placeholder="Amount due"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-green hover:bg-green-dark text-white font-semibold text-sm py-3 rounded-full transition-colors"
              >
                Proceed to Pay
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PaymentForm