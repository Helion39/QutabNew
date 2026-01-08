import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MaterialIcon from '../../../components/MaterialIcon';

interface AffiliateDashboardLayoutProps {
    children: ReactNode;
}

export default function AffiliateDashboardLayout({ children }: AffiliateDashboardLayoutProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    // Mock data - will come from backend
    const affiliateData = {
        name: 'Ahmad Wijaya',
        email: 'ahmad@example.com',
        referralLink: 'https://qutab.id/r/AHMAD123',
    };

    const handleLogout = () => {
        navigate('/affiliate/login');
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(affiliateData.referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="flex h-screen overflow-hidden bg-[#fffbef] dark:bg-[#2d1b24]">
            {/* Sidebar */}
            <aside className="w-72 bg-white dark:bg-[#3d2531] border-r border-gray-100 dark:border-gray-800 flex flex-col flex-shrink-0 z-20 h-full">
                {/* Brand / Logo Area */}
                <div className="p-6 flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[#bddcee] flex items-center justify-center text-black">
                        <MaterialIcon icon="handshake" className="filled text-2xl" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg tracking-tight text-[#4a2c3a] dark:text-white leading-tight">
                            Qutab<br />Affiliator
                        </h1>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">
                    <Link
                        to="/affiliate/dashboard"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${isActive('/affiliate/dashboard')
                            ? 'bg-[#ffe1ed] dark:bg-[#ffafcc]/20 text-[#ef9bb8] dark:text-white font-semibold'
                            : 'hover:bg-[#ffe1ed] dark:hover:bg-gray-800 text-[#7d5a6a] dark:text-gray-300'
                            }`}
                    >
                        <MaterialIcon
                            icon="dashboard"
                            className={isActive('/affiliate/dashboard') ? 'filled text-[#ffafcc] dark:text-[#ffafcc]' : 'group-hover:text-[#ffafcc]'}
                        />
                        <span className="font-medium text-sm">Dasbor</span>
                    </Link>

                    <Link
                        to="/affiliate/dashboard/referrals"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${isActive('/affiliate/dashboard/referrals')
                            ? 'bg-[#ffe1ed] dark:bg-[#ffafcc]/20 text-[#ef9bb8] dark:text-white font-semibold'
                            : 'hover:bg-[#ffe1ed] dark:hover:bg-gray-800 text-[#7d5a6a] dark:text-gray-300'
                            }`}
                    >
                        <MaterialIcon
                            icon="group"
                            className={isActive('/affiliate/dashboard/referrals') ? 'filled text-[#ffafcc] dark:text-[#ffafcc]' : 'group-hover:text-[#ffafcc]'}
                        />
                        <span className="font-medium text-sm">Referral Saya</span>
                    </Link>

                    <Link
                        to="/affiliate/dashboard/commission"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${isActive('/affiliate/dashboard/commission')
                            ? 'bg-[#ffe1ed] dark:bg-[#ffafcc]/20 text-[#ef9bb8] dark:text-white font-semibold'
                            : 'hover:bg-[#ffe1ed] dark:hover:bg-gray-800 text-[#7d5a6a] dark:text-gray-300'
                            }`}
                    >
                        <MaterialIcon
                            icon="payments"
                            className={isActive('/affiliate/dashboard/commission') ? 'filled text-[#ffafcc] dark:text-[#ffafcc]' : 'group-hover:text-[#ffafcc]'}
                        />
                        <span className="font-medium text-sm">Komisi</span>
                    </Link>

                    <div className="mt-6 px-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Pengaturan</p>
                        <Link
                            to="/affiliate/dashboard/profile"
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${isActive('/affiliate/dashboard/profile')
                                ? 'bg-[#ffe1ed] dark:bg-[#ffafcc]/20 text-[#ef9bb8] dark:text-white font-semibold'
                                : 'hover:bg-[#ffe1ed] dark:hover:bg-gray-800 text-[#7d5a6a] dark:text-gray-300'
                                }`}
                        >
                            <MaterialIcon icon="person" className={isActive('/affiliate/dashboard/profile') ? 'filled text-[#ffafcc]' : 'group-hover:text-[#ffafcc]'} />
                            <span className="font-medium text-sm">Profil Saya</span>
                        </Link>
                        <a
                            href="#"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#ffe1ed] dark:hover:bg-gray-800 text-[#7d5a6a] dark:text-gray-300 transition-colors group"
                        >
                            <MaterialIcon icon="help" className="group-hover:text-[#ffafcc]" />
                            <span className="font-medium text-sm">Pusat Bantuan</span>
                        </a>
                    </div>
                </nav>

                {/* Referral Link Quick Copy */}
                <div className="px-4 pb-2">
                    <div className="bg-[#bddcee]/20 dark:bg-[#bddcee]/10 rounded-xl p-4 border border-[#bddcee]/30">
                        <p className="text-xs font-semibold text-[#7d5a6a] dark:text-gray-400 uppercase tracking-wider mb-2">Link Referral Anda</p>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                readOnly
                                value={affiliateData.referralLink}
                                className="flex-1 text-xs bg-white dark:bg-[#2d1b24] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-[#4a2c3a] dark:text-white truncate"
                            />
                            <button
                                onClick={handleCopyLink}
                                className="size-9 flex items-center justify-center bg-[#ffafcc] hover:bg-[#ef9bb8] text-white rounded-lg transition-colors"
                            >
                                <MaterialIcon icon={copied ? 'check' : 'content_copy'} className="text-[16px]" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* User Profile Footer */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-[#fffbef] dark:bg-black/20">
                    <Link to="/affiliate/dashboard/profile" className="flex items-center gap-3 mb-4 hover:bg-white/50 dark:hover:bg-white/5 p-2 rounded-lg transition-colors">
                        <div
                            className="size-10 rounded-full bg-[#bddcee] flex items-center justify-center text-black font-bold"
                        >
                            {affiliateData.name.charAt(0)}
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <p className="text-sm font-bold text-[#4a2c3a] dark:text-white truncate">{affiliateData.name}</p>
                            <p className="text-xs text-[#ffafcc] dark:text-[#ffafcc] font-medium">Affiliator</p>
                        </div>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 h-10 bg-white dark:bg-[#3d2531] border border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 text-red-400 dark:text-red-400 rounded-lg text-sm font-semibold transition-all"
                    >
                        <MaterialIcon icon="logout" className="text-[18px]" />
                        Keluar
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Header */}
                <header className="h-20 px-8 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#2d1b24]/80 backdrop-blur-md sticky top-0 z-10">
                    {/* Breadcrumbs / Title */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-[#7d5a6a] dark:text-gray-400">
                            <Link to="/" className="hover:text-[#ffafcc] transition-colors">Beranda</Link>
                            <MaterialIcon icon="chevron_right" className="text-[14px]" />
                            <span className="text-[#4a2c3a] dark:text-white font-medium">
                                {location.pathname === '/affiliate/dashboard' && 'Dasbor'}
                                {location.pathname === '/affiliate/dashboard/referrals' && 'Referral Saya'}
                                {location.pathname === '/affiliate/dashboard/commission' && 'Komisi'}
                                {location.pathname === '/affiliate/dashboard/profile' && 'Profil'}
                            </span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="size-10 rounded-full bg-white dark:bg-[#3d2531] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#7d5a6a] dark:text-gray-300 hover:bg-[#ffe1ed] dark:hover:bg-gray-800 transition-colors relative">
                            <MaterialIcon icon="notifications" />
                            <span className="absolute top-2 right-2 size-2 bg-[#ffafcc] rounded-full border border-white dark:border-[#3d2531]"></span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">{children}</div>
            </main>
        </div>
    );
}
