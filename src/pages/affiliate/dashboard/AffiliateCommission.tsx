import MaterialIcon from '../../../components/MaterialIcon';

// Mock data - will come from backend
const mockCommissionHistory = [
    { id: 1, amount: 200000, date: '2026-01-01', status: 'paid', method: 'Bank Transfer', note: 'Payout Desember 2025' },
    { id: 2, amount: 150000, date: '2025-12-01', status: 'paid', method: 'Bank Transfer', note: 'Payout November 2025' },
    { id: 3, amount: 100000, date: '2025-11-01', status: 'paid', method: 'Bank Transfer', note: 'Payout Oktober 2025' },
];

const mockSummary = {
    totalEarned: 600000,
    pendingPayout: 150000,
    nextPayoutDate: '1 Februari 2026',
    minimumPayout: 100000,
};

export default function AffiliateCommission() {
    return (
        <div className="p-8 pb-20 bg-[#fffbef] dark:bg-[#2d1b24]">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-[#4a2c3a] dark:text-white tracking-tight">
                        Komisi Saya
                    </h2>
                    <p className="text-[#7d5a6a] dark:text-gray-400">
                        Kelola dan pantau pendapatan affiliate Anda
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                <MaterialIcon icon="account_balance_wallet" className="text-green-500 text-2xl" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-green-600 dark:text-green-400">
                                    Rp {mockSummary.totalEarned.toLocaleString('id-ID')}
                                </p>
                                <p className="text-sm text-[#7d5a6a] dark:text-gray-400">Total Penghasilan</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
                                <MaterialIcon icon="schedule" className="text-yellow-500 text-2xl" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                                    Rp {mockSummary.pendingPayout.toLocaleString('id-ID')}
                                </p>
                                <p className="text-sm text-[#7d5a6a] dark:text-gray-400">Pending Payout</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-[#bddcee]/20 flex items-center justify-center">
                                <MaterialIcon icon="event" className="text-[#bddcee] text-2xl" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-[#4a2c3a] dark:text-white">
                                    {mockSummary.nextPayoutDate}
                                </p>
                                <p className="text-sm text-[#7d5a6a] dark:text-gray-400">Payout Berikutnya</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-[#ffafcc]/20 flex items-center justify-center">
                                <MaterialIcon icon="savings" className="text-[#ffafcc] text-2xl" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-[#4a2c3a] dark:text-white">
                                    Rp {mockSummary.minimumPayout.toLocaleString('id-ID')}
                                </p>
                                <p className="text-sm text-[#7d5a6a] dark:text-gray-400">Minimum Payout</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payout Request Card */}
                <div className="bg-gradient-to-br from-[#ffafcc] to-[#ef9bb8] rounded-2xl p-8 text-white">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Siap untuk Payout?</h3>
                            <p className="text-white/80">
                                Anda memiliki <span className="font-bold">Rp {mockSummary.pendingPayout.toLocaleString('id-ID')}</span> yang siap dicairkan.
                                Minimum payout adalah Rp {mockSummary.minimumPayout.toLocaleString('id-ID')}.
                            </p>
                        </div>
                        <button
                            className={`inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg font-bold shadow-lg transition-all ${mockSummary.pendingPayout >= mockSummary.minimumPayout
                                    ? 'bg-white text-[#ef9bb8] hover:shadow-xl hover:-translate-y-1'
                                    : 'bg-white/50 text-white/70 cursor-not-allowed'
                                }`}
                            disabled={mockSummary.pendingPayout < mockSummary.minimumPayout}
                        >
                            <MaterialIcon icon="account_balance" />
                            Request Payout
                        </button>
                    </div>
                </div>

                {/* Commission History Table */}
                <div className="bg-white dark:bg-[#3d2531] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                        <h3 className="font-bold text-[#4a2c3a] dark:text-white">Riwayat Payout</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-black/20 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    <th className="px-6 py-3">Tanggal</th>
                                    <th className="px-6 py-3">Jumlah</th>
                                    <th className="px-6 py-3">Metode</th>
                                    <th className="px-6 py-3">Keterangan</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                {mockCommissionHistory.map((payout) => (
                                    <tr key={payout.id} className="hover:bg-gray-50 dark:hover:bg-black/10 transition-colors">
                                        <td className="px-6 py-4 text-sm text-[#7d5a6a] dark:text-gray-400">{payout.date}</td>
                                        <td className="px-6 py-4 text-sm font-bold text-green-600 dark:text-green-400">
                                            Rp {payout.amount.toLocaleString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-[#7d5a6a] dark:text-gray-400">{payout.method}</td>
                                        <td className="px-6 py-4 text-sm text-[#7d5a6a] dark:text-gray-400">{payout.note}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex px-2.5 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                                Dibayar
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
