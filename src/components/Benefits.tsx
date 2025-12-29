import MaterialIcon from './MaterialIcon';
import { Wallet, Hand, Handshake } from 'lucide-react';

export default function Benefits() {
  return (
    <div className="relative bg-[#fffbef] border-b-4 border-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="mb-10 text-center max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-6xl font-black text-black mb-4 tracking-tighter leading-none uppercase"
            data-aos="fade-down"
          >
            Kenapa Memilih{' '}
            <span className="relative inline-block px-3 bg-[#ffafcc] border-3 border-black shadow-[3px_3px_0px_0px_#000000] transform -rotate-1">
              Qurban Tanpa Batas?
            </span>
          </h2>
          <p
            className="text-black text-lg font-bold border-2 border-black bg-white inline-block p-3 shadow-[3px_3px_0px_0px_#000000] mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Mendefinisikan ulang pengalaman Qurban: Murah. Mudah. Berdampak.
          </p>
        </div>

        {/* Benefits Cards - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {/* Card 1 - Murah */}
          <div className="relative bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000000] p-6 py-10 transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-1 group">
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#ffafcc] border-2 border-black flex items-center justify-center text-sm font-black shadow-[2px_2px_0px_0px_#000000] z-20 text-black">
              01
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              {/* Icon */}
              <div className="relative">
                <div className="w-20 h-20 bg-[#ffc7dd] border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000000] relative z-10">
                  <Wallet className="w-10 h-10 text-black fill-current" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tighter">
                  Murah
                </h3>
                <p className="text-black text-sm font-medium leading-relaxed mb-6">
                  Harga terjangkau karena bersumber langsung dari peternak lokal, tanpa perantara.
                </p>
                <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider border-2 border-black">
                  <MaterialIcon icon="verified" className="text-sm" />
                  Harga Terjangkau
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Mudah */}
          <div className="relative bg-[#bddcee] border-3 border-black shadow-[4px_4px_0px_0px_#000000] p-6 py-10 transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-1 group">
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#ffafcc] border-2 border-black flex items-center justify-center text-sm font-black shadow-[2px_2px_0px_0px_#000000] z-20 text-black">
              02
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              {/* Icon */}
              <div className="relative">
                <div className="w-20 h-20 bg-white border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000000] relative z-10">
                  <Hand className="w-10 h-10 text-black fill-current" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tighter">
                  Mudah
                </h3>
                <p className="text-black text-sm font-medium leading-relaxed mb-6">
                  Perjalanan digital yang mulus dari memilih hewan hingga laporan distribusi.
                </p>
                <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#ffafcc] text-black text-xs font-bold uppercase tracking-wider border-2 border-black">
                  Platform Digital
                  <MaterialIcon icon="devices" className="text-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Berdampak */}
          <div className="relative bg-[#ffafcc] border-3 border-black shadow-[4px_4px_0px_0px_#000000] p-6 py-10 transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-1 group">
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border-2 border-black flex items-center justify-center text-sm font-black shadow-[2px_2px_0px_0px_#000000] z-20 text-black">
              03
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              {/* Icon */}
              <div className="relative">
                <div className="w-20 h-20 bg-[#bddcee] border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000000] relative z-10">
                  <Handshake className="w-10 h-10 text-black fill-current" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tighter">
                  Berdampak
                </h3>
                <p className="text-black text-sm font-medium leading-relaxed mb-6">
                  Mendukung kesejahteraan peternak lokal dan ekonomi pedesaan.
                </p>
                <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider border-2 border-black">
                  <MaterialIcon icon="volunteer_activism" className="text-sm" />
                  Dampak Sosial
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
