import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import RegistrationContact from '@/pages/RegistrationContact'
import Teams from '@/pages/Teams'
import Venue from '@/pages/Venue'
import VisitShanghai from '@/pages/VisitShanghai'
import HighlightDetail from '@/pages/HighlightDetail'
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
        <Route path="registration" element={<RegistrationContact />} />
        <Route path="teams" element={<Teams />} />
        <Route path="venue" element={<Venue />} />
        <Route path="visit-shanghai" element={<VisitShanghai />} />
        <Route path="highlight/:id" element={<HighlightDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
