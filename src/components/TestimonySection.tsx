import ReactPlayer from 'react-player';

export default function TestimonySection() {
  // Placeholder URL - replace with actual video URL (YouTube, Vimeo, or file)
  const videoUrl = ''; // e.g., 'https://www.youtube.com/watch?v=VIDEO_ID'

  return (
    <section id="testimony" className="relative bg-[#fffbef] border-b-4 border-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tighter leading-none uppercase">
            Testimoni Muzakki
          </h2>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            {videoUrl ? (
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                controls
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg">
                Video akan ditambahkan
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

