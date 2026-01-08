import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Mock data
const mockUser = {
    firstName: 'Darmawan',
    lastName: 'misterzaQ',
    email: 'dmisterzaq@gmail.com',
    whatsapp: '087772014731',
    instagram: 'https://instagram.com/misterzaq',
    tiktok: '',
    bankName: 'BCA',
    bankAccount: '1234567890',
    bankHolder: 'Darmawan',
};

export default function AffiliateProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(mockUser);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // TODO: API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    const handleLogout = () => {
        navigate('/affiliate/login');
    };

    const tabs = [
        { id: 'dashboard', label: 'Dasbor', path: '/affiliate/dashboard' },
        { id: 'referrals', label: 'Referral Saya', path: '/affiliate/dashboard/referrals' },
        { id: 'commission', label: 'Komisi', path: '/affiliate/dashboard/commission' },
        { id: 'profile', label: 'Profil', path: '/affiliate/dashboard/profile' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-['Space_Grotesk']">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/Logo_Qutab.png" alt="Qutab" className="h-8" />
                            <span className="text-sm font-medium text-gray-500">Affiliator</span>
                        </Link>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">{formData.firstName} {formData.lastName}</span>
                            <button
                                onClick={handleLogout}
                                className="text-sm text-gray-500 hover:text-gray-700"
                            >
                                Keluar
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-8">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.id}
                                to={tab.path}
                                className={`py-4 text-sm font-medium border-b-2 -mb-px ${tab.id === 'profile'
                                    ? 'border-pink-600 text-pink-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-6">Profil Saya</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {success && (
                            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded text-sm">
                                Profil berhasil diperbarui!
                            </div>
                        )}

                        {/* Name Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nama Depan
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nama Belakang
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                        </div>

                        {/* Email - Read only */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                readOnly
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-500"
                            />
                            <p className="mt-1 text-xs text-gray-500">Email tidak dapat diubah</p>
                        </div>

                        {/* WhatsApp */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                No. WhatsApp
                            </label>
                            <input
                                type="tel"
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>

                        {/* Social Media */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Link Instagram
                                </label>
                                <input
                                    type="url"
                                    value={formData.instagram}
                                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Link TikTok
                                </label>
                                <input
                                    type="url"
                                    value={formData.tiktok}
                                    onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                        </div>

                        {/* Bank Info Section */}
                        <div className="pt-4 border-t border-gray-200">
                            <h3 className="text-sm font-medium text-gray-900 mb-4">Rekening Pembayaran Komisi</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nama Bank
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.bankName}
                                        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                                        placeholder="BCA, Mandiri, BRI, dll"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Nomor Rekening
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.bankAccount}
                                            onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Nama Pemilik Rekening
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.bankHolder}
                                            onChange={(e) => setFormData({ ...formData, bankHolder: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Password Change */}
                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Password</h3>
                                    <p className="text-xs text-gray-500">Ubah password akun Anda</p>
                                </div>
                                <button
                                    type="button"
                                    className="px-3 py-1.5 text-sm text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50"
                                >
                                    Ubah Password
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 px-4 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
                        >
                            {loading ? 'Menyimpan...' : 'Simpan Profil'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
