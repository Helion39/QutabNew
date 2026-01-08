import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import FontTestPage from './components/FontTestPage';
import HeroFontTest from './components/HeroFontTest';

// Affiliate Pages
import AffiliateLogin from './pages/affiliate/AffiliateLogin';
import AffiliateRegister from './pages/affiliate/AffiliateRegister';
import AffiliatePending from './pages/affiliate/AffiliatePending';
import AffiliateApproved from './pages/affiliate/AffiliateApproved';
import AffiliateRejected from './pages/affiliate/AffiliateRejected';
import AffiliateDashboard from './pages/affiliate/AffiliateDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
        <Route path="/fonts" element={<FontTestPage />} />
        <Route path="/hero-fonts" element={<HeroFontTest />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/dashboard/*"
          element={
            isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />
          }
        />

        {/* Affiliate Routes */}
        <Route path="/affiliate/login" element={<AffiliateLogin />} />
        <Route path="/affiliate/register" element={<AffiliateRegister />} />
        <Route path="/affiliate/pending" element={<AffiliatePending />} />
        <Route path="/affiliate/approved" element={<AffiliateApproved />} />
        <Route path="/affiliate/rejected" element={<AffiliateRejected />} />
        <Route path="/affiliate/dashboard/*" element={<AffiliateDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
