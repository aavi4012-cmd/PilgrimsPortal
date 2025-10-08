import { Header } from './components/Header';
import { Hero } from './components/home/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import BookingPage from './components/booking';
import AdminDashboard from './components/AdminDashboard';
import { AdminDashboardSafetyAlerts } from './components/admin/AdminDashboardSafetyAlerts';
import { CameraMonitoring } from './components/CameraMonitoring';
import IncidentManagement from './components/IncidentManagement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/sign/SignupModal';
import LoginPage from './components/sign/login';
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8FAFC]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Stats />
                <About />
                <Features />
                <Testimonials />
                <DownloadSection />
              </>
            } />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/incidents" element={<IncidentManagement />} />
            <Route path="/admin/notifications" element={<AdminDashboardSafetyAlerts />} />
            <Route path="/admin/cameras" element={<CameraMonitoring />} />
            <Route path="/sign/SignupModal" element={<SignupPage />} />
            <Route path="/sign/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
