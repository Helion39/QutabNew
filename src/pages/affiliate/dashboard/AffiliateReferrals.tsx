import MaterialIcon from '../../../components/MaterialIcon';

// Mock data - will come from backend
const mockReferrals = [
    { id: 1, name: 'Budi Santoso', email: 'budi@email.com', product: 'Kambing Premium', date: '2026-01-05', commission: 50000, status: 'paid' },
    { id: 2, name: 'Siti Aminah', email: 'siti@email.com', product: 'Sapi Patungan', date: '2026-01-04', commission: 50000, status: 'paid' },
    { id: 3, name: 'Ahmad Yusuf', email: 'ahmad@email.com', product: 'Kambing Standard', date: '2026-01-03', commission: 50000, status: 'pending' },
    { id: 4, name: 'Dewi Lestari', email: 'dewi@email.com', product: 'Kambing Premium', date: '2026-01-02', commission: 50000, status: 'paid' },
    { id: 5, name: 'Rudi Hartono', email: 'rudi@email.com', product: 'Sapi Premium', date: '2026-01-01', commission: 50000, status: 'paid' },
];

export default function AffiliateReferrals() {
    return (
        <div className="p-8 pb-20 bg-[#fffbef] dark:bg-[#2d1b24]">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-[#4a2c3a] dark:text-white tracking-tight">
                        Referral Saya
                    </h2>
                    <p className="text-[#7d5a6a] dark:text-gray-400">
                        Daftar semua customer yang membeli melalui link referral Anda
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-[#ffafcc]/20 flex items-center justify-center">
                                <MaterialIcon icon="group" className="text-[#ffafcc] text-2xl" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#4a2c3a] dark:text-white">{mockReferrals.length}</p>
                                <p className="text-sm text-[#7d5a6a] dark:text-gray-400">Total Referral</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                <MaterialIcon icon="check_circle" className="text-green-500 text-2xl" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#4a2c3a] dark:text-white">
                                    {mockReferrals.filter(r => r.status === 'paid').length}
                                </p>
                                <p className="text-sm text-[#7d5a6a] dark:text-gray-400">Sudah Dibayar</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#3d2531] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
                                <MaterialIcon icon="schedule" className="text-yellow-500 text-2xl" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#4a2c3a] dark:text-white">
                                    {mockReferrals.filter(r => r.status === 'pending').length}
                                </p>
                                <p className="text-sm text-[#7d5a6a] dark:text-gray-400">Pending</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Referrals Table */}
                <div className="bg-white dark:bg-[#3d2531] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                        <h3 className="font-bold text-[#4a2c3a] dark:text-white">Semua Referral</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-black/20 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    <th className="px-6 py-3">Nama</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Produk</th>
                                    <th className="px-6 py-3">Tanggal</th>
                                    <th className="px-6 py-3">Komisi</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                {mockReferrals.map((referral) => (
                                    <tr key={referral.id} className="hover:bg-gray-50 dark:hover:bg-black/10 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-[#bddcee] flex items-center justify-center text-black font-bold text-sm">
                                                    {referral.name.charAt(0)}
                                                </div>
                                                <span className="text-sm font-medium text-[#4a2c3a] dark:text-white">{referral.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-[#7d5a6a] dark:text-gray-400">{referral.email}</td>
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
