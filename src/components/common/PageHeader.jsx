import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-gradient-to-r from-green to-green-dark py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-white/60 text-xs mb-4">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gold">{breadcrumb}</span>
        </div>
        <h1 className="font-heading font-bold text-white text-3xl md:text-4xl mb-2">
          {title}
        </h1>
        {subtitle && <p className="text-white/70 text-sm max-w-xl">{subtitle}</p>}
      </div>
    </section>
  )
}

export default PageHeader
