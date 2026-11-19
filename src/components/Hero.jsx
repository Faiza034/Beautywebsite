import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./Navbar.jsx";

import ellipse from "../assets/hero/ellipse.png";
import ring from "../assets/hero/ring.png";
import podium from "../assets/hero/bottles-podium.png";
import wash from "../assets/hero/bottle-wash.png";
import slim from "../assets/hero/bottle-slim.png";
import flowerSmall from "../assets/hero/flower-small.png";
import flowerBig from "../assets/hero/flower-big.png";
import swirlLg from "../assets/hero/sphere-swirl-lg.png";
import swirlSm from "../assets/hero/sphere-swirl-sm.png";
import goldLg from "../assets/hero/sphere-gold-lg.png";
import goldSm from "../assets/hero/sphere-gold-sm.png";
import whiteLg from "../assets/hero/sphere-white-lg.png";
import whiteMd from "../assets/hero/sphere-white-md.png";
import whiteSm from "../assets/hero/sphere-white-sm.png";

/**
 * Every decorative image is positioned with percentages taken from the
 * 1440x872 design, so the whole composition scales as one piece.
 *   place(x, y, w, boxW, boxH) -> { left, top, width } in %
 */
const place = (x, y, w, boxW, boxH) => ({
  left: `${(x / boxW) * 100}%`,
  top: `${(y / boxH) * 100}%`,
  width: `${(w / boxW) * 100}%`,
});
const inProducts = (x, y, w) => place(x, y, w, 820, 872); // right-hand product box
const inHero = (x, y, w) => place(x, y, w, 1440, 872); // whole hero

const EASE = [0.22, 1, 0.36, 1];

/**
 * A decorative image that fades/scales in once, then (optionally) settles
 * into a slow, infinite idle loop — a gentle float, sway, or spin.
 * All motion is skipped in favour of a plain fade when the visitor has
 * "reduce motion" turned on at the OS level.
 */
function Deco({ src, style, className = "", delay = 0, idle, reduceMotion }) {
  const enter = { opacity: 1, scale: 1, y: 0, rotate: 0 };
  const transition = { opacity: { duration: 0.7, delay, ease: EASE }, scale: { duration: 0.7, delay, ease: EASE } };

  if (!reduceMotion && idle) {
    Object.assign(enter, idle.to);
    transition[idle.prop] = { duration: idle.duration, repeat: Infinity, ease: "easeInOut", delay: delay + 0.7 };
  }

  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      draggable="false"
      style={style}
      className={`pointer-events-none absolute h-auto max-w-none ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={enter}
      transition={transition}
    />
  );
}

const floatY = (distance, duration) => ({ prop: "y", to: { y: [0, -distance, 0] }, duration });
const swayRotate = (deg, duration) => ({ prop: "rotate", to: { rotate: [-deg, deg, -deg] }, duration });

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <header id="home" className="relative z-20 bg-gradient-to-r from-lav-400 to-lav-200 pb-[14%] lg:pb-0">
      <div className="relative lg:aspect-[1440/872]">
        <Navbar />

        {/* Left-hand decorative spheres (desktop layout only) */}
        <div className="hidden lg:block">
          <Deco src={goldSm} style={inHero(2, 152, 64)} delay={0.3} idle={floatY(10, 5)} reduceMotion={reduceMotion} />
          <Deco src={whiteLg} style={inHero(344, 104, 239)} delay={0.15} idle={floatY(14, 6.5)} reduceMotion={reduceMotion} />
          <Deco src={whiteSm} style={inHero(13, 736, 130)} delay={0.45} idle={floatY(9, 4.5)} reduceMotion={reduceMotion} />
        </div>

        {/* Headline + CTA */}
        <div className="relative z-20 px-5 pb-8 pt-6 sm:px-8 lg:static lg:p-0">
          <motion.h1
            className="font-condensed text-hero text-navy lg:absolute lg:left-[5.5%] lg:top-[28.5%] lg:z-20"
            initial="hidden"
            animate="show"
            variants={
              reduceMotion
                ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }
                : { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }
            }
          >
            {["Enhance", "your Natural", "Radiance"].map((line, i) => (
              <motion.span
                key={line}
                className={`block ${i === 0 ? "font-light" : "font-bold"}`}
                variants={
                  reduceMotion
                    ? undefined
                    : { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } } }
                }
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.a
            href="#services"
            className="btn-navy mt-8 lg:absolute lg:left-[5.75%] lg:top-[77.5%] lg:z-20 lg:mt-0 lg:h-[min(4.5vw,65px)] lg:w-[min(13.4vw,193px)] lg:text-[length:min(1.5vw,22px)]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Order Now
          </motion.a>
        </div>

        {/* Product composition */}
        <motion.div
          className="relative mx-auto w-full max-w-[520px] aspect-[820/872] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[56.94%] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Deco src={ellipse} style={inProducts(25, 0, 795)} delay={0} reduceMotion={reduceMotion} />
          <Deco
            src={ring}
            style={inProducts(0, 0, 820)}
            delay={0.1}
            idle={!reduceMotion && { prop: "rotate", to: { rotate: 360 }, duration: 60 }}
            reduceMotion={reduceMotion}
          />
          <Deco src={podium} style={inProducts(100, 152, 720)} delay={0.25} reduceMotion={reduceMotion} />
          <Deco src={wash} style={inProducts(336, 263, 484)} delay={0.35} idle={floatY(6, 5.5)} reduceMotion={reduceMotion} />
          <Deco src={slim} style={inProducts(482, 478, 149)} delay={0.42} idle={floatY(5, 5)} reduceMotion={reduceMotion} />
          <Deco src={swirlLg} style={inProducts(222, 18, 184)} delay={0.2} idle={floatY(8, 6)} reduceMotion={reduceMotion} />
          <Deco src={whiteMd} style={inProducts(643, 4, 177)} delay={0.3} idle={floatY(10, 5.2)} reduceMotion={reduceMotion} />
          <Deco src={swirlSm} style={inProducts(262, 772, 100)} delay={0.5} idle={floatY(7, 4.8)} reduceMotion={reduceMotion} />
          <Deco src={goldLg} style={inProducts(0, 708, 164)} delay={0.38} idle={floatY(9, 5.6)} reduceMotion={reduceMotion} />
          <Deco src={flowerSmall} style={inProducts(404, 592, 110)} delay={0.55} idle={swayRotate(4, 6)} reduceMotion={reduceMotion} />
          <Deco src={flowerBig} style={inProducts(636, 546, 190)} className="z-10" delay={0.6} idle={swayRotate(3, 7)} reduceMotion={reduceMotion} />
        </motion.div>
      </div>
    </header>
  );
}
