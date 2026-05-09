import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Tournament2025 from '@/pages/Tournament2025'
import RegistrationContact from '@/pages/RegistrationContact'
import Teams from '@/pages/Teams'
import Venue from '@/pages/Venue'
import VisitShanghai from '@/pages/VisitShanghai'
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="2025-tournament" element={<Tournament2025 />} />
        <Route path="registration" element={<RegistrationContact />} />
        <Route path="teams" element={<Teams />} />
        <Route path="venue" element={<Venue />} />
        <Route path="visit-shanghai" element={<VisitShanghai />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
