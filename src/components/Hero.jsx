import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-3xl px-6">

          <span className="bg-red-600 px-4 py-2 rounded-full font-semibold">
            🔴 Campus Website
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            FPE SUNSHINE TV
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200">
            *Join No 1 SUNSHINE TV📺*
            here is to get *Latest Memo 📄 News  📰 and Updates* in *FPE* and it's *environments* *Adverts* 🛍️ *Memes* 🥳 *Campus Gist* 🥱 *Giveaway* 💰 *Trending videos* 🎬 *Comedy* 🤣 *Cruise* 🫣 *MCM&WCW* 📸🕺🏻💃 *Birthday Wishes* 🎂 and *Lots more*💯
            Federal Polytechnic Ede.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              to="/news"
              className="bg-red-600 px-8 py-4 rounded-lg hover:bg-red-700 font-semibold"
            >
              Latest News
            </Link>

            <a
              href="https://TikTok.com/fpe_sunshine_tv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-8 py-4 rounded-lg hover:bg-green-700 font-semibold"
            >
              ▶ Watch Live
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;