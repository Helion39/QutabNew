export default function WhatIsQutab() {
    return (
        <section id="what-is-qutab" className="relative bg-[#fffbef] border-b-4 border-black overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2
                        className="text-4xl md:text-6xl font-black mb-4 tracking-tighter leading-none uppercase"
                        style={{ fontFamily: 'var(--font-gangnam)', color: '#ff6b9d' }}
                    >
                        Apa itu Qurban Tanpa Batas?
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Description */}
                    <div data-aos="fade-right">
                        <p className="text-xl md:text-2xl text-black font-bold leading-relaxed mb-6">
                            <span className="text-[#ff6b9d]">Qurban Tanpa Batas</span> adalah program ibadah qurban yang
                            menghubungkan muzakki (pemberi qurban) dengan penerima manfaat di seluruh
                            pelosok Indonesia.
                        </p>
                        <p className="text-lg text-black font-medium leading-relaxed mb-6">
                            Kami bermitra langsung dengan peternak lokal untuk menyediakan hewan qurban
                            berkualitas dengan harga terjangkau, sekaligus memberdayakan ekonomi pedesaan.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="inline-block bg-[#ffafcc] text-black font-bold px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_#000000] text-sm uppercase">
                                Transparan
                            </span>
                            <span className="inline-block bg-[#ffafcc] text-black font-bold px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_#000000] text-sm uppercase">
                                Amanah
                            </span>
                            <span className="inline-block bg-[#ffafcc] text-black font-bold px-4 py-2 border-2 border-black shadow-[2px_2px_0px_0px_#000000] text-sm uppercase">
                                Berdampak
                            </span>
                        </div>
                    </div>

                    {/* Right - Bento Stats Card */}
                    <div className="border-4 border-black shadow-[8px_8px_0px_0px_#ffafcc] overflow-hidden" data-aos="fade-left" data-aos-delay="200">
                        {/* 21 Years - Top */}
                        <div className="bg-[#bddcee] text-[#ff6b9d] p-8 text-center border-b-4 border-black">
                            <div className="text-7xl md:text-8xl font-black mb-2">21+</div>
                            <div className="text-xl md:text-2xl font-bold uppercase tracking-wider">
                                Tahun Beroperasi
                            </div>
                            <p className="text-base mt-3 text-[#ff6b9d]/80">
                                Dalam Filantropi Islam Indonesia
                            </p>
                        </div>

                        {/* Bottom Stats - No gap */}
                        <div className="grid grid-cols-2">
                            <div className="bg-white p-6 text-center border-t-4 border-r-2 border-black">
                                <div className="text-4xl md:text-5xl font-black text-black mb-1">25+</div>
                                <div className="text-sm font-bold uppercase text-black">Lokasi Distribusi</div>
                            </div>
                            <div className="bg-white p-6 text-center border-t-4 border-l-2 border-black">
                                <div className="text-4xl md:text-5xl font-black text-black mb-1">100+</div>
                                <div className="text-sm font-bold uppercase text-black">Peternak Mitra</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

