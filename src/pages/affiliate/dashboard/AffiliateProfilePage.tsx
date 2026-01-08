import { useState } from 'react';
import MaterialIcon from '../../../components/MaterialIcon';

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

export default function AffiliateProfilePage() {
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

    return (
        <div className="p-8 pb-20 bg-[#fffbef] dark:bg-[#2d1b24]">
            <div className="max-w-3xl mx-auto flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-[#4a2c3a] dark:text-white tracking-tight">
                        Profil Saya
                    </h2>
                    <p className="text-[#7d5a6a] dark:text-gray-400">
                        Kelola informasi akun dan rekening payout Anda
                    </p>
                </div>

                {/* Profile Form Card */}
                <div className="bg-white dark:bg-[#3d2531] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <form onSubmit={handleSubmit}>
                        {/* Personal Info Section */}
                        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="font-bold text-[#4a2c3a] dark:text-white mb-4 flex items-center gap-2">
                                <MaterialIcon icon="person" className="text-[#ffafcc]" />
                                Informasi Pribadi
                            </h3>

                            {success && (
                                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-600 dark:text-green-400 px-4 py-3 rounded-lg text-sm mb-4 flex items-center gap-2">
                                    <MaterialIcon icon="check_circle" />
                                    Profil berhasil diperbarui!
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                        Nama Depan
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-[#2d1b24] text-[#4a2c3a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffafcc]/50 focus:border-[#ffafcc]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                        Nama Belakang
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-[#2d1b24] text-[#4a2c3a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffafcc]/50 focus:border-[#ffafcc]"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    readOnly
                                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#7d5a6a] dark:text-gray-400"
                                />
                                <p className="mt-1 text-xs text-[#7d5a6a] dark:text-gray-500">Email tidak dapat diubah</p>
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                    No. WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-[#2d1b24] text-[#4a2c3a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffafcc]/50 focus:border-[#ffafcc]"
                                />
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="font-bold text-[#4a2c3a] dark:text-white mb-4 flex items-center gap-2">
                                <MaterialIcon icon="share" className="text-[#bddcee]" />
                                Media Sosial
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                        Link Instagram
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.instagram}
                                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-[#2d1b24] text-[#4a2c3a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffafcc]/50 focus:border-[#ffafcc]"
                                        placeholder="https://instagram.com/username"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                        Link TikTok
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.tiktok}
                                        onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-[#2d1b24] text-[#4a2c3a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffafcc]/50 focus:border-[#ffafcc]"
                                        placeholder="https://tiktok.com/@username"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bank Info Section */}
                        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="font-bold text-[#4a2c3a] dark:text-white mb-4 flex items-center gap-2">
                                <MaterialIcon icon="account_balance" className="text-green-500" />
                                Rekening Pembayaran Komisi
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                        Nama Bank
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.bankName}
                                        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-[#2d1b24] text-[#4a2c3a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffafcc]/50 focus:border-[#ffafcc]"
                                        placeholder="BCA, Mandiri, BRI, dll"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                            Nomor Rekening
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.bankAccount}
                                            onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
                                            className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-[#2d1b24] text-[#4a2c3a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffafcc]/50 focus:border-[#ffafcc]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#7d5a6a] dark:text-gray-400 mb-1">
                                            Nama Pemilik Rekening
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.bankHolder}
                                            onChange={(e) => setFormData({ ...formData, bankHolder: e.target.value })}
                                            className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-[#2d1b24] text-[#4a2c3a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffafcc]/50 focus:border-[#ffafcc]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Password Section */}
                        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-[#4a2c3a] dark:text-white flex items-center gap-2">
                                        <MaterialIcon icon="lock" className="text-[#7d5a6a]" />
                                        Password
                                    </h3>
                                    <p className="text-sm text-[#7d5a6a] dark:text-gray-400 mt-1">Ubah password akun Anda</p>
                                </div>
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-[#ffafcc] bg-[#ffafcc]/10 border border-[#ffafcc] rounded-lg hover:bg-[#ffafcc]/20 transition-colors"
                                >
                                    Ubah Password
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="p-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-4 bg-[#ffafcc] text-black text-sm font-bold rounded-lg hover:bg-[#ef9bb8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffafcc] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <MaterialIcon icon="sync" className="animate-spin" />
                                        Menyimpan...
                                    </>
                                ) : (
                                    <>
                                        <MaterialIcon icon="save" />
                                        Simpan Profil
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
