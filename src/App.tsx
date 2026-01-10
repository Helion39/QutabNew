import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AffiliateRegister from './pages/affiliate/AffiliateRegister';
import AffiliatePending from './pages/affiliate/AffiliatePending';
import AffiliateLogin from './pages/affiliate/AffiliateLogin';
import AffiliateDashboard from './pages/affiliate/AffiliateDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAffiliateLoggedIn, setIsAffiliateLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/affiliate/register" element={<AffiliateRegister />} />
        <Route path="/affiliate/login" element={<AffiliateLogin setIsAffiliateLoggedIn={setIsAffiliateLoggedIn} />} />
        <Route path="/affiliate/pending" element={<AffiliatePending setIsAffiliateLoggedIn={setIsAffiliateLoggedIn} />} />
        <Route
          path="/affiliate/dashboard/*"
          element={
            isAffiliateLoggedIn ? <AffiliateDashboard /> : <Navigate to="/affiliate/login" />
          }
        />
        <Route
          path="/dashboard/*"
          element={
            isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;