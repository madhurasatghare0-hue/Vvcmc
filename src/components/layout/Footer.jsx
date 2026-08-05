import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import {
  footerQuickLinks,
  footerDepartments,
  emergencyNumbers,
} from '../../data/footerLinks'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="bg-navy text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="VVMC Logo"
                className="w-12 h-12 object-contain"
              />

              <div>
                <p className="font-heading font-bold text-base">
                  Vasai Virar
                </p>
                <p className="text-white/60 text-xs">
                  Mahanagar Pallika
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {t.about}
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 text-gold">
              {t.quickLinks}
            </h3>

            <ul className="flex flex-col gap-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {language === 'mr' ? link.label_mr : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 text-gold">
              {t.departments}
            </h3>

            <ul className="flex flex-col gap-2.5">
              {footerDepartments.map((dept) => (
                <li
                  key={dept.label}
                  className="text-white/70 text-sm"
                >
                  {language === 'mr'
                    ? dept.label_mr
                    : dept.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 text-gold">
              {t.contactUs}
            </h3>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-2.5 text-white/70 text-sm">
                <MapPin
                  size={16}
                  className="flex-shrink-0 mt-0.5 text-gold"
                />
                <span>{t.address}</span>
              </div>

              <div className="flex items-center gap-2.5 text-white/70 text-sm">
                <Phone
                  size={16}
                  className="flex-shrink-0 text-gold"
                />
                <a
                  href="tel:02502340100"
                  className="hover:text-white"
                >
                  0250-2340100
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-white/70 text-sm">
                <Mail
                  size={16}
                  className="flex-shrink-0 text-gold"
                />
                <a
                  href="mailto:info@vvmc.gov.in"
                  className="hover:text-white"
                >
                  info@vvmc.gov.in
                </a>
              </div>
            </div>

            <h3 className="font-heading font-semibold text-sm mb-3 text-gold">
              {t.emergencyNumbers}
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {emergencyNumbers.map((item) => (
                <div
                  key={item.label}
                  className="text-xs text-white/70"
                >
                  {language === 'mr'
                    ? item.label_mr
                    : item.label}
                  :{' '}
                  <span className="text-white font-semibold">
                    {item.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Vasai Virar Mahanagar Palika.{' '}
            {t.copyright}
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-white/50 text-xs hover:text-white"
            >
              {t.privacyPolicy}
            </Link>

            <Link
              to="/terms"
              className="text-white/50 text-xs hover:text-white"
            >
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer