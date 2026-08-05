import { nationalStateLeaders } from '../../data/leadershipRibbon'
import { leadership as vvmcLeadership } from '../../data/aboutVVMC'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function Leadership() {
  const { language } = useLanguage()
  const t = translations[language].leadership

  return (
    <section className="relative py-12 bg-gradient-to-b from-white via-graybg to-green-light/30 overflow-hidden">

      {/* Background */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-light rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-light rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-green font-semibold uppercase tracking-[0.25em] text-xs mb-2">
            {t.eyebrow}
          </p>

          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
            {t.nationalStateTitle}
          </h2>

          <div className="w-20 h-1 bg-gold rounded-full mx-auto mt-4"></div>
        </div>

        {/* National & State Leaders */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-4 mb-12">
  {nationalStateLeaders.map((person) => (
    <div
      key={person.name}
      className="flex-1 min-w-[160px] text-center group"
    >
      <div className="relative w-20 h-20 mx-auto">
        <div className="absolute inset-0 rounded-full bg-green-light blur-xl opacity-30 group-hover:opacity-60 transition"></div>

        <img
          src={person.photo}
          alt={person.name}
          className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 text-lg font-heading font-semibold text-navy leading-tight">
        {person.name}
      </h3>

      <p className="mt-1 text-sm text-green leading-tight">
        {language === 'mr' ? person.title_mr : person.title}
      </p>
    </div>
  ))}
</div>

        {/* Divider */}
        <div className="flex items-center mb-10">
          <div className="flex-1 h-px bg-gray-300"></div>

          <div className="mx-4 bg-green text-white px-5 py-2 rounded-full text-sm font-semibold shadow">
            {t.vvmcTitle}
          </div>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* VVMC Leadership */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {vvmcLeadership.map((person) => (
            <div
              key={person.name}
              className="group text-center"
            >
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full bg-green-light blur-xl opacity-30 group-hover:opacity-60 transition"></div>

                <img
                  src={person.photo}
                  alt={person.name}
                  className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h4 className="mt-3 text-lg font-heading font-semibold text-navy">
                {person.name}
              </h4>

              <p className="mt-1 text-sm text-green">
                {language === 'mr'
                  ? person.designation_mr
                  : person.designation}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Leadership