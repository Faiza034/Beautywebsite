import logo from "../assets/hero/logo.png";
import leaf from "../assets/sections/footer-leaf.png";
import news1 from "../assets/sections/news-1.jpg";
import news2 from "../assets/sections/news-2.jpg";
import { FaFacebook, FaPinterest, FaWhatsapp, FaSquareInstagram } from "react-icons/fa6";

const SOCIAL = [
  { label: "Facebook", Icon: FaFacebook, href: "#" },
  { label: "Pinterest", Icon: FaPinterest, href: "#" },
  { label: "WhatsApp", Icon: FaWhatsapp, href: "#" },
  { label: "Instagram", Icon: FaSquareInstagram, href: "#" },
];
const EXPLORE = [
  { label: "Home", href: "#home" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
  { label: "Services", href: "#services" },
];
const NEWS = [
  { img: news1, date: "June 14, 2024", title: "Anti-Aging Cream" },
  { img: news2, date: "June 14, 2024", title: "Night Cream" },
];

const heading = "font-poppins text-[length:clamp(1.4rem,2.43vw,2.2rem)] font-semibold text-navy";
const linkText = "font-poppins text-[length:clamp(1rem,1.65vw,1.5rem)] font-medium text-navy/70";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-lav-400 to-lav-200 px-5 pb-8 pt-12 sm:px-8 lg:px-[4.9vw] lg:pb-[2.4vw] lg:pt-[6vw]">
      <img
        src={leaf}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-32 sm:w-44 lg:w-[20vw]"
      />

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <a href="#home">
            <img src={logo} alt="Beautify" className="h-7 w-auto lg:h-auto lg:w-[min(7.2vw,104px)]" />
          </a>
          <div className="flex items-center gap-4 lg:mr-[4.5vw] lg:gap-[1.6vw]">
            <span className="font-poppins text-base font-medium text-navy lg:text-[length:min(1.58vw,23px)]">Follow us</span>
            <ul className="flex items-center gap-3 lg:gap-[1.2vw]">
              {SOCIAL.map(({ label, Icon, href }) => (
                <li key={label}>
                  <a href={href} aria-label={label} className="block text-navy transition hover:text-gold">
                    <Icon className="h-8 w-8 lg:h-[min(2.9vw,42px)] lg:w-[min(2.9vw,42px)]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-[4.2vw] lg:grid-cols-[23.1%_42.9%_1fr] lg:gap-0">
          <nav aria-label="Footer">
            <h3 className={heading}>Explore</h3>
            <ul className="mt-4 space-y-2 lg:mt-[1.3vw] lg:space-y-[0.7vw]">
              {EXPLORE.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={`${linkText} transition hover:text-navy`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div id="contact-details">
            <h3 className={heading}>About Us</h3>
            <ul className="mt-4 space-y-2 lg:mt-[1.3vw] lg:space-y-[0.7vw]">
              <li className={linkText}>(456) 789-12301</li>
              <li className={linkText}>
                <a href="mailto:info@modrino.co.uk" className="hover:text-navy">
                  info@modrino.co.uk
                </a>
              </li>
              <li className={linkText}>South 13th street</li>
              <li className={linkText}>New york America</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className={heading}>Recent News</h3>
            <ul className="mt-4 space-y-3 lg:mt-[1.3vw] lg:space-y-[0.9vw]">
              {NEWS.map((n) => (
                <li key={n.title} className="flex items-center gap-4 lg:gap-[1.2vw]">
                  <img src={n.img} alt="" className="h-14 w-20 shrink-0 object-cover lg:h-[min(4.7vw,68px)] lg:w-[min(6.9vw,100px)]" />
                  <div className="font-poppins text-navy">
                    <p className="text-xs lg:text-[length:min(1.1vw,16px)]">{n.date}</p>
                    <p className="text-base font-medium lg:text-[length:min(1.45vw,21px)]">{n.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center font-poppins text-sm font-semibold text-ink/80 lg:mt-[2.6vw] lg:text-[length:min(1.4vw,20px)]">
          © {new Date().getFullYear()} Beautify. All rights reserved
        </p>
      </div>
    </footer>
  );
}
