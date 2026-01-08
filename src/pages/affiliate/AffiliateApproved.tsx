import { Link } from 'react-router-dom';
import { PartyPopper, Info, ArrowRight, Star } from 'lucide-react';

export default function AffiliateApproved() {
    return (
        <div className="min-h-screen bg-[#fffbef] relative overflow-x-hidden">
            {/* Background Pattern */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-[900px]">
                    <div className="bg-white border-4 border-black relative overflow-hidden">
                        {/* Decorative Top Border */}
                        <div className="h-3 w-full flex border-b-4 border-black">
                            <div className="w-1/2 h-full bg-[#ffafcc] border-r-4 border-black"></div>
                            <div className="w-1/2 h-full bg-[#bddcee]"></div>
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-7 lg:p-8">
                            {/* Success Icon & Title */}
                            <div className="flex flex-col items-center text-center mb-5">
                                <div className="mb-3 relative">
                                    {/* Icon Circle */}
                                    <div className="w-16 h-16 bg-[#bddcee] border-4 border-black rounded-full flex items-center justify-center text-black">
                                        <PartyPopper className="w-10 h-10" strokeWidth={2.5} />
                                    </div>
                                    {/* Decorative Stars */}
                                    <Star
                                        className="absolute -top-2 -right-5 w-7 h-7 text-[#ffafcc] fill-[#ffafcc]"
                                    />
                                    <Star
                                        className="absolute -bottom-2 -left-5 w-5 h-5 text-[#ffafcc] fill-[#ffafcc]"
                                    />
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 uppercase leading-[0.9]">
                                    Selamat!<br />
                                    <span className="text-black inline-block transform -rotate-2 bg-[#ffafcc] px-3 border-2 border-black shadow-[4px_4px_0px_0px_#000000] mt-2">
                                        Anda Diterima!
                                    </span>
                                </h1>

                                {/* Welcome Message */}
                                <p className="text-sm md:text-base font-bold text-black max-w-lg mt-2">
                                    Pendaftaran Anda sebagai affiliator Qutab telah disetujui!
                                </p>
                            </div>

                            {/* Info Box */}
                            <div className="bg-[#fffbef] border-2 border-black p-3.5 md:p-4 shadow-[4px_4px_0px_0px_#000000] mb-5">
                                <div className="flex gap-3">
                                    <Info className="w-5 h-5 text-black flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                    <p className="text-sm md:text-base font-bold leading-relaxed text-black">
                                        Anda sekarang memiliki akses ke dashboard affiliator. Dapatkan{' '}
                                        <span className="bg-[#ffafcc] px-1.5 font-black border border-black">link referral</span>{' '}
                                        dan mulai promosikan Qutab!
                                    </p>
                                </div>
                            </div>

                            {/* Next Steps */}
                            <div className="mb-6">
                                <div className="inline-block bg-black text-white px-4 py-2 border-2 border-transparent shadow-[3px_3px_0px_0px_#000000] mb-3 transform -rotate-1">
                                    <h3 className="text-sm font-bold uppercase tracking-widest">Yang Dapat Anda Lakukan:</h3>
                                </div>

                                <div className="space-y-2.5">
                                    {/* Step 1 */}
                                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-white p-3 border-2 border-black hover:bg-[#fffbef] transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#bddcee] text-black border-2 border-black flex items-center justify-center text-lg font-black">
                                            1
                                        </div>
                                        <p className="font-bold text-sm md:text-base text-black">
                                            Masuk ke dashboard untuk mendapatkan link referral unik Anda
                                        </p>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-white p-3 border-2 border-black hover:bg-[#fffbef] transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#ffafcc] text-black border-2 border-black flex items-center justify-center text-lg font-black">
                                            2
                                        </div>
                                        <p className="font-bold text-sm md:text-base text-black">
                                            Bagikan link ke teman, keluarga, dan followers Anda
                                        </p>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-white p-3 border-2 border-black hover:bg-[#fffbef] transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#bddcee] text-black border-2 border-black flex items-center justify-center text-lg font-black">
                                            3
                                        </div>
                                        <p className="font-bold text-sm md:text-base text-black">
                                            Dapatkan komisi dari setiap pembelian melalui link Anda!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="text-center">
                                <Link
                                    to="/affiliate/dashboard"
                                    className="inline-block w-full sm:w-auto bg-[#ffafcc] text-black border-4 border-black px-8 py-3 text-base md:text-lg font-black uppercase tracking-wide shadow-[8px_8px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        Masuk ke Dashboard
                                        <ArrowRight className="w-5 h-5" strokeWidth={3} />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#bddcee] border-t-2 border-black"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
