import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Departments from '../pages/Departments'
import Projects from '../pages/Projects'
import News from '../pages/News'
import Contact from '../pages/Contact'
import Login from '../pages/Login'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes