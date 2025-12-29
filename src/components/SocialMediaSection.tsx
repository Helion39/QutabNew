import MaterialIcon from './MaterialIcon';
import QTB_Insta from 'figma:asset/ca12904086ed4472b74adb4709352801501ca1ba.png';

export default function SocialMediaSection() {
  return (
    <div className="py-20 bg-[#fffbef] border-b-4 border-black overflow-hidden lg:min-h-[calc(100vh-84px)] lg:flex lg:items-center" id="social-media">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="relative bg-[#bddcee] border-4 border-black py-6 md:py-8 px-10 md:px-16 shadow-[12px_12px_0px_0px_#000000]">
          {/* Diagonal pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
              backgroundPosition: '0 0, 10px 10px',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block bg-white border-2 border-black px-4 py-1.5 shadow-[4px_4px_0px_0px_#000000] mb-4">
                <span className="text-black font-bold uppercase tracking-wider text-sm">
                  Ikuti Perjalanan Kami
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-black leading-none uppercase tracking-tighter mb-4">
                SOSIAL <br />
                <span
                  className="text-white bg-black px-4 py-1 inline-block transform -rotate-2 mt-2"
                  style={{ textShadow: '2px 2px 0 #ffafcc' }}
                >
                  MEDIA KAMI
                </span>
              </h2>

              <p className="text-black text-lg font-bold bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_#000000] mb-6 leading-relaxed max-w-lg">
                Dapatkan update terkini tentang distribusi hewan Qurban, cerita peternak, dan dokumentasi langsung dari lapangan. Jangan sampai ketinggalan momen kebaikan.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-3 bg-white text-black px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="uppercase tracking-wider text-sm">Instagram</span>
                </button>

                <button className="flex items-center gap-3 bg-white text-black px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="uppercase tracking-wider text-sm">Facebook</span>
                </button>

                <button className="flex items-center gap-3 bg-white text-black px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span className="uppercase tracking-wider text-sm">TikTok</span>
                </button>

                <button className="flex items-center gap-3 bg-white text-black px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="uppercase tracking-wider text-sm">YouTube</span>
                </button>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[560px] lg:w-[300px] lg:h-[620px] bg-black rounded-[3rem] border-[10px] lg:border-[14px] border-black shadow-[4px_4px_0px_0px_#ffffff] lg:shadow-[8px_8px_0px_0px_#ffffff] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-105">

                {/* Notch - more prominent and realistic */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[45%] h-8 bg-black rounded-b-3xl z-40 flex justify-center items-center">
                  <div className="w-14 h-1 bg-gray-700 rounded-full mt-1" />
                </div>

                {/* Phone screen */}
                <div className="bg-white h-full w-full overflow-hidden flex flex-col rounded-[2.2rem] relative">
                  {/* Status bar - simplified, notch area */}
                  <div className="h-11 bg-black flex justify-between items-center px-8 shrink-0 z-10">
                    <span className="font-bold text-xs text-white">12:30</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-black border border-white rounded-full" />
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Screen content - Instagram Screenshot */}
                  <div className="flex-1 w-full bg-white relative overflow-hidden">
                    <img
                      src={QTB_Insta}
                      alt="Qurban Tanpa Batas Instagram Feed"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Home indicator bar - iPhone style */}
                  <div className="h-6 bg-black flex justify-center items-center shrink-0">
                    <div className="w-32 h-1 bg-white rounded-full" />
                  </div>
                </div>

                {/* Side buttons - more realistic placement */}
                <div className="absolute top-28 -left-[14px] w-[3px] h-8 bg-gray-800 rounded-l-sm" />
                <div className="absolute top-40 -left-[14px] w-[3px] h-14 bg-gray-800 rounded-l-sm" />
                <div className="absolute top-[13.5rem] -left-[14px] w-[3px] h-14 bg-gray-800 rounded-l-sm" />
                <div className="absolute top-40 -right-[14px] w-[3px] h-20 bg-gray-800 rounded-r-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
