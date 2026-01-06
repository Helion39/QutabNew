import MaterialIcon from './MaterialIcon';

export default function MissionSection() {
  return (
    <div className="py-20 bg-white border-b-4 border-black overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className="relative border-4 border-black shadow-[8px_8px_0px_0px_#000000] bg-[#ffafcc] p-2"
            data-aos="slide-right"
          >
            <img
              alt="Indonesian farmer smiling with farm animals near a rustic shack"
              className="object-cover w-full h-full border-2 border-black hover:scale-105 transition-all duration-500"
              src="/indonesian_farmer_with_animals.webp"
            />
            <div
              className="absolute -bottom-6 -right-6 bg-white border-4 border-black p-4 max-w-xs shadow-[4px_4px_0px_0px_#000000] hidden md:block z-10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="text-black font-bold italic text-sm">
                "Ketika ibadah dititipkan pada yang amanah, hati pun menjadi lebih tenang."
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col pt-10 lg:pt-0" data-aos="slide-left">
            <h2 className="lg:text-6xl font-black leading-tight uppercase tracking-tighter text-[40px] mb-2" style={{ fontFamily: 'var(--font-gangnam)', color: '#ffa2e3' }}>
              Tentang Kami
            </h2>

            <div className="inline-flex items-center gap-2 text-black font-black uppercase tracking-wide text-base bg-[#ffafcc] w-fit px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_#000000] mb-8">
              ZIS Indosat - Meluaskan dan Mengabadikan Kebaikan
            </div>

            <p className="text-black text-base font-medium border-l-4 border-black pl-4 mb-4">
              ZIS Indosat telah lebih dari <strong>20 tahun</strong> hadir untuk menjaga amanah ZIS umat dengan pengelolaan yang bertanggung jawab, profesional, dan penuh kepedulian.
            </p>

            <p className="text-black text-base font-medium border-l-4 border-black pl-4 mb-4">
              Melalui program <strong>QUTAB (Qurban Tanpa Batas)</strong>, kami membantu Anda menunaikan ibadah qurban dengan cara yang lebih mudah, murah, dan berdampak—tanpa mengurangi esensi syariahnya. Setiap hewan dipastikan sehat dan layak, setiap proses dijalankan sesuai ketentuan, dan setiap amanah disalurkan tepat sasaran.
            </p>

            <p className="text-black text-base font-medium border-l-4 border-black pl-4 mb-4">
              Kami percaya, qurban bukan sekadar menyembelih hewan, tetapi tentang menyampaikan niat baik hingga benar-benar dirasakan manfaatnya oleh saudara-saudara kita di penjuru Indonesia.
            </p>

            <div className="bg-[#fffbef] border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000000] mt-2">
              <p className="text-black text-sm font-medium">
                Untuk menjaga kualitas dan kepercayaan, ZIS Indosat bekerja sama dengan <strong>PT SCUI</strong> sebagai pelaksana program, serta didukung fasilitas <strong>Tabung Qurban BMT Berkah Nurul Taqwa (BBNT)</strong>, agar ibadah Anda terkelola dengan rapi, transparan, dan dapat dipertanggungjawabkan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div
                className="flex flex-col gap-2 p-4 bg-[#ffafcc] border-2 border-black shadow-[4px_4px_0px_0px_#000000]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <MaterialIcon icon="verified" className="text-black text-3xl" />
                <span className="font-black text-lg text-black">Menjaga Amanah Ibadah</span>
              </div>

              <div
                className="flex flex-col gap-2 p-4 bg-[#bddcee] border-2 border-black shadow-[4px_4px_0px_0px_#000000]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <MaterialIcon icon="public" className="text-black text-3xl" />
                <span className="font-black text-lg text-black">Menghadirkan Qurban yang Berdampak bagi Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
