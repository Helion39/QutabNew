import { useState } from 'react';
import MaterialIcon from '../../../components/MaterialIcon';

// Mock data - will come from backend
const mockStats = {
    totalClicks: 234,
    totalReferrals: 12,
    totalCommission: 600000,
    pendingCommission: 150000,
};

const mockRecentReferrals = [
    { id: 1, name: 'Budi Santoso', product: 'Kambing Premium', date: '2026-01-05', commission: 50000, status: 'paid' },
    { id: 2, name: 'Siti Aminah', product: 'Sapi Patungan', date: '2026-01-04', commission: 50000, status: 'paid' },
    { id: 3, name: 'Ahmad Yusuf', product: 'Kambing Standard', date: '2026-01-03', commission: 50000, status: 'pending' },
];

export default function AffiliateDashboardHome() {
    const [copied, setCopied] = useState(false);
    const referralLink = 'https://qutab.id/r/AHMAD123';

    const handleCopyLink = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="p-8 pb-20 bg-[#fffbef] dark:bg-[#2d1b24]">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Welcome Section */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-[#4a2c3a] dark:text-white tracking-tight">
                        Selamat datang, Affiliator! 🎉
                    </h2>
                    <p className="text-[#7d5a6a] dark:text-gray-400">
                        Berikut ringkasan performa affiliate Anda
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="size-12 rounded-xl bg-[#bddcee]/20 flex items-center justify-center">
                                <MaterialIcon icon="ads_click" className="text-[#bddcee] text-2xl" />
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase">Total</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-[#4a2c3a] dark:text-white">{mockStats.totalClicks}</span>
                            <span className="text-sm text-[#7d5a6a] dark:text-gray-400">Klik Link</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="size-12 rounded-xl bg-[#ffafcc]/20 flex items-center justify-center">
                                <MaterialIcon icon="group" className="text-[#ffafcc] text-2xl" />
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase">Total</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-[#4a2c3a] dark:text-white">{mockStats.totalReferrals}</span>
                            <span className="text-sm text-[#7d5a6a] dark:text-gray-400">Referral</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="size-12 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                <MaterialIcon icon="payments" className="text-green-500 text-2xl" />
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase">Earned</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                                Rp {mockStats.totalCommission.toLocaleString('id-ID')}
                            </span>
                            <span className="text-sm text-[#7d5a6a] dark:text-gray-400">Total Komisi</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="size-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
                                <MaterialIcon icon="schedule" className="text-yellow-500 text-2xl" />
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase">Pending</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                                Rp {mockStats.pendingCommission.toLocaleString('id-ID')}
                            </span>
                            <span className="text-sm text-[#7d5a6a] dark:text-gray-400">Menunggu Payout</span>
                        </div>
                    </div>
                </div>

                {/* Referral Link Card */}
                <div className="bg-gradient-to-br from-[#bddcee] to-[#9bc7de] rounded-2xl p-8 text-black">
                    <h3 className="text-2xl font-bold mb-2">Link Referral Anda</h3>
                    <p className="mb-6 text-black/70">
                        Bagikan link ini ke teman, keluarga, dan followers Anda. Setiap pembelian melalui link ini akan memberikan komisi untuk Anda!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            readOnly
                            value={referralLink}
                            className="flex-1 px-4 py-3 rounded-lg bg-white border-2 border-black/20 text-black font-bold text-sm sm:text-base"
                        />
                        <button
                            onClick={handleCopyLink}
                            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-[#ffafcc] text-black font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-2 border-black/20"
                        >
                            <MaterialIcon icon={copied ? 'check' : 'content_copy'} />
                            {copied ? 'Tersalin!' : 'Salin Link'}
                        </button>
                    </div>
                </div>

                {/* Recent Referrals Table */}
                <div className="bg-white dark:bg-[#3d2531] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                        <h3 className="font-bold text-[#4a2c3a] dark:text-white">Referral Terbaru</h3>
                        <a href="/affiliate/dashboard/referrals" className="text-sm font-medium text-[#ffafcc] hover:text-[#ef9bb8] transition-colors">
                            Lihat Semua →
                        </a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-black/20 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    <th className="px-6 py-3">Nama</th>
                                    <th className="px-6 py-3">Produk</th>
                                    <th className="px-6 py-3">Tanggal</th>
                                    <th className="px-6 py-3">Komisi</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                {mockRecentReferrals.map((referral) => (
                                    <tr key={referral.id} className="hover:bg-gray-50 dark:hover:bg-black/10 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-[#4a2c3a] dark:text-white">{referral.name}</td>
                                        <td className="px-6 py-4 text-sm text-[#7d5a6a] dark:text-gray-400">{referral.product}</td>
                                        <td className="px-6 py-4 text-sm text-[#7d5a6a] dark:text-gray-400">{referral.date}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-[#4a2c3a] dark:text-white">
                                            Rp {referral.commission.toLocaleString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${referral.status === 'paid'
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                    }`}
                                            >
                                                {referral.status === 'paid' ? 'Dibayar' : 'Pending'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
