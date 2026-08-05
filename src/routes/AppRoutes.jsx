import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Departments from '../pages/Departments'
import Projects from '../pages/Projects'
import Tourism from '../pages/Tourism'
import CitizenCorner from '../pages/CitizenCorner'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import ServiceDetail from '../pages/ServiceDetail'
import DepartmentDetail from '../pages/DepartmentDetail'


import Complaint from '../pages/Complaint'
import CityMapPage from '../pages/CityMapPage'
import GardensPage from '../pages/GardensPage'

import PaymentForm from '../pages/PaymentForm'
import ApplicationForm from '../pages/ApplicationForm'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/citizen-corner" element={<CitizenCorner />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tourism" element={<Tourism />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      <Route path="/complaint" element={<Complaint />} />
<Route path="/city-map" element={<CityMapPage />} />
<Route path="/gardens" element={<GardensPage />} />

<Route path="/services/:slug" element={<ServiceDetail />} />
<Route path="/departments/:slug" element={<DepartmentDetail />} />

<Route path="/services/:slug/pay" element={<PaymentForm />} />
<Route path="/services/:slug/apply" element={<ApplicationForm />} />
    </Routes>
  )
}

export default AppRoutes