import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import logo from "../assets/hero/logo.png";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      aria-label="Main"
      className="relative z-40 flex items-center justify-between px-5 py-5 sm:px-8
                 lg:absolute lg:inset-x-0 lg:top-[7.6%] lg:justify-start lg:p-0 lg:pl-[5.5%]"
      initial={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#home" className="shrink-0">
        <img src={logo} alt="Beautify" className="h-7 w-auto lg:h-auto lg:w-[min(7.2vw,104px)]" />
      </a>

      {/* Desktop links */}
      <ul className="hidden items-center font-poppins text-nav font-medium lg:ml-[min(15.7vw,226px)] lg:flex lg:-translate-y-2 lg:gap-[min(2.3vw,33px)]">
        {LINKS.map((l, i) => (
          <li key={l.label}>
            <a
              href={l.href}
              className={`transition-opacity hover:opacity-70 ${i === 0 ? "text-white" : "text-black"}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md bg-white/50 lg:hidden"
      >
        <motion.span
          className="h-0.5 w-5 bg-navy"
          animate={open ? { translateY: 7, rotate: 45 } : { translateY: 0, rotate: 0 }}
          transition={{ duration: 0.25 }}
        />
        <motion.span
          className="h-0.5 w-5 bg-navy"
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="h-0.5 w-5 bg-navy"
          animate={open ? { translateY: -7, rotate: -45 } : { translateY: 0, rotate: 0 }}
          transition={{ duration: 0.25 }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            className="absolute right-5 top-[68px] w-48 rounded-lg bg-white p-2 font-poppins text-base font-medium shadow-xl sm:right-8 lg:hidden"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {LINKS.map((l, i) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-4 py-2.5 ${i === 0 ? "bg-navy text-white" : "text-navy hover:bg-mist"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
