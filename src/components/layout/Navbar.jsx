import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, User } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  const navLinks = [
  { name: t.nav.home, path: '/' },
  { name: t.nav.about, path: '/about' },
  { name: t.nav.services, path: '/services' },
  { name: t.nav.departments, path: '/departments' },
  { name: t.nav.citizenCorner, path: '/citizen-corner' },
  { name: t.nav.tourism, path: '/tourism' },
]

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 flex items-center justify-center">
            <img
              src={logo}
              alt="VVMC Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="font-heading font-bold text-lg text-navy">Vasai Virar</p>
            <p className="text-xs text-navy/60">Mahanagar Pallika</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-green ${
                  isActive
                    ? 'text-green border-b-2 border-green pb-1'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-green hover:text-green transition-colors"
          >
            <Globe size={16} />
            {language === 'en' ? 'मराठी' : 'English'}
          </button>
          <Link
            to="/login"
            className="flex items-center gap-2 bg-green hover:bg-green-dark text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            <User size={16} />
            {t.nav.login}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="lg:hidden text-navy" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-3 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium ${
                location.pathname === link.path ? 'text-green' : 'text-navy'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2 text-sm text-gray-700 w-fit"
          >
            <Globe size={16} />
            {language === 'en' ? 'मराठी' : 'English'}
          </button>
          <Link to="/login" className="bg-green text-white text-center px-4 py-2 rounded-full font-semibold">
            {t.nav.login}
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar