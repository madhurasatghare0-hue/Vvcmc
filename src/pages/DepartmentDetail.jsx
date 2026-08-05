import { useParams, Link, Navigate } from 'react-router-dom'
import { Phone, Mail, User, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/common/PageHeader'
import { departments } from '../data/departments'
import { useLanguage } from '../context/LanguageContext'

function DepartmentDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const dept = departments.find((d) => d.slug === slug)

  if (!dept) return <Navigate to="/departments" replace />

  const Icon = dept.icon
  const name = language === 'mr' ? dept.name_mr : dept.name
  const designation = language === 'mr' ? dept.designation_mr : dept.designation
  const description = language === 'mr' ? dept.description_mr : dept.description

  return (
    <div>
      <Navbar />
      <PageHeader title={name} subtitle={designation} breadcrumb={name} />

      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/departments"
            className="inline-flex items-center gap-1.5 text-green text-sm font-medium mb-8 hover:underline"
          >
            <ArrowLeft size={15} />
            Back to all departments
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-green-light flex items-center justify-center flex-shrink-0">
              <Icon className="text-green" size={26} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-navy text-2xl">{name}</h1>
              <p className="text-green text-sm font-medium mt-0.5">{designation}</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-graybg rounded-xl p-4 flex items-start gap-3">
              <User className="text-green flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Head of Department</p>
                <p className="text-sm font-medium text-navy">{designation}</p>
              </div>
            </div>
            <div className="bg-graybg rounded-xl p-4 flex items-start gap-3">
              <Phone className="text-green flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                <p className="text-sm font-medium text-navy">{dept.phone}</p>
              </div>
            </div>
            <div className="bg-graybg rounded-xl p-4 flex items-start gap-3">
              <Mail className="text-green flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Email</p>
                <p className="text-sm font-medium text-navy break-all">{dept.email}</p>
              </div>
            </div>
          </div>

          {dept.services && dept.services.length > 0 && (
            <div>
              <h2 className="font-heading font-semibold text-navy text-lg mb-4">Services Offered</h2>
              <div className="space-y-2.5">
                {dept.services.map((service) => (
                  <div key={service} className="flex items-center gap-2.5 text-gray-600 text-sm">
                    <CheckCircle2 className="text-green flex-shrink-0" size={16} />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DepartmentDetail