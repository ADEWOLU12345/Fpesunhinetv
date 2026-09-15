import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            FPE SUNSHINE TV
          </h2>

          <p className="mt-4 text-gray-300">
            Join No 1 SUNSHINE TV📺
          </p>
          <p className="mt-2 text-gray-300 font-semibold font">
            here is to get Latest Memo 📄 News  📰 and Updates in Federal Polytechnic Ede and it's environments Adverts 🛍️ Memes 🥳 Campus Gist 🥱 Giveaway 💰 Trending videos 🎬 Comedy 🤣 Cruise 🫣 MCM&WCW 📸🕺🏻💃 Birthday Wishes 🎂 and Lots more💯
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/news"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                News
              </Link>
            </li>

            <li>
              <Link
                to="/sug"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Student Union Government
              </Link>
            </li>

            <li>
              <Link
                to="/campus-gist"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Campus Gist
              </Link>
            </li>

            <li>
              <Link
                to="/admission"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Admission
              </Link>
            </li>

            <li>
              <Link
                to="/entertainment"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Entertainment
              </Link>
            </li>

            <li>
              <Link
                to="/jobs"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="space-y-4 text-2xl cursor-pointer flex flex-wrap cursor-pointer text-gray-300 hover:text-blue-400 roll-col-1 gap-4">

            <a href="https://www.facebook.com/Fpesunshinetv Fpe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaFacebook />
              Facebook
            </a>

            <a href="https://www.instagram.com/fpe_sunshinetv?igsh=bGVrOGs1a3F0ZnI=" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaInstagram />
              Instagram
            </a>

            <a href="https://wa.me/message/KLVHPYXI35QYI1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaWhatsapp />
              Whatsapp
            </a>

            <a href="https://www.tiktok.com/@fpe.sunshine.tv?_t=ZM-8uEMfVR28Bx&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaTiktok />
              TikTok
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 p-8 py-5 text-center text-gray-400">
        © 2026 FPE Sunshine TV. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;