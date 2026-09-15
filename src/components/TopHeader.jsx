import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

function TopHeader() {
  const today = new Date().toLocaleDateString("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Date */}
        <p>{today}</p>

        {/* Breaking News */}
        <marquee className="text-yellow-400 font-semibold">
          📢 *Join No 1 SUNSHINE TV📺*
           here is to get *Latest Memo 📄 News  📰 and Updates* in *FPE* and it's *environments* *Adverts* 🛍️ *Memes* 🥳 *Campus Gist* 🥱 *Giveaway* 💰 *Trending videos* 🎬 *Comedy* 🤣 *Cruise* 🫣 *MCM&WCW* 📸🕺🏻💃 *Birthday Wishes* 🎂 and *Lots more*💯
        </marquee>

        {/* Social Media */}
        <div className="flex items-center gap-4 text-lg">
          <a href="https://www.facebook.com/Fpesunshinetv Fpe"><FaFacebookF /></a>
          <a href="https://www.instagram.com/fpe_sunshinetv?igsh=bGVrOGs1a3F0ZnI="><FaInstagram /></a>
          <a href="https://www.youtube.com/@fpesunshinetv"><FaYoutube /></a>
          <a href="https://www.tiktok.com/@fpe.sunshine.tv?_t=ZM-8uEMfVR28Bx&_r=1"><FaTiktok /></a>
          <a href="https://wa.me/2347041421193">
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </div>
  );
}

export default TopHeader;