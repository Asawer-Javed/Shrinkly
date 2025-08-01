import HeroBg from "@/public/Hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeroBg.src})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">
          Simplify Your Links
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-6 text-white">
          Shrinkly helps you transform long, messy URLs into clean and compact
          links in seconds. Whether you&#39;re sharing on social media,
          messaging, or emails — make your links look great.
        </p>

        <a
          href="#shorten"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
        >
          Try Now
        </a>
      </div>
    </section>
  );
}
