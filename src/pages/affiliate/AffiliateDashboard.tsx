import { Routes, Route, Navigate } from 'react-router-dom';
import AffiliateDashboardLayout from './dashboard/AffiliateDashboardLayout';
import AffiliateDashboardHome from './dashboard/AffiliateDashboardHome';
import AffiliateReferrals from './dashboard/AffiliateReferrals';
import AffiliateCommission from './dashboard/AffiliateCommission';
import AffiliateProfilePage from './dashboard/AffiliateProfilePage';

export default function AffiliateDashboard() {
    return (
        <AffiliateDashboardLayout>
            <Routes>
                <Route path="/" element={<AffiliateDashboardHome />} />
                <Route path="/referrals" element={<AffiliateReferrals />} />
                <Route path="/commission" element={<AffiliateCommission />} />
                <Route path="/profile" element={<AffiliateProfilePage />} />
                <Route path="*" element={<Navigate to="/affiliate/dashboard" replace />} />
            </Routes>
        </AffiliateDashboardLayout>
    );
}
