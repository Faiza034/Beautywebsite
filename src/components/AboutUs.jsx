import tube from "../assets/sections/about-tube.png";
import woman from "../assets/sections/about-woman.jpg";
import leafTop from "../assets/sections/about-leaf-top.jpg";
import whiteSm from "../assets/hero/sphere-white-sm.png";
import swirlLg from "../assets/hero/sphere-swirl-lg.png";

/**
 * The gradient band is 1440x656 on desktop. The tube and leaves deliberately
 * overhang it (top/bottom), exactly like the design.
 * On mobile the tube + model sit side-by-side above the copy.
 */
export default function AboutUs() {
  return (
    <section id="about" className="relative mt-36 bg-white pb-16 sm:mt-44 lg:mb-[15.8vw] lg:mt-[17.4vw] lg:pb-0">
      <div className="relative bg-gradient-to-r from-lav-400 to-lav-200 lg:aspect-[1440/656]">
        {/* leaf that pokes above the band, top-right */}
        <img
          src={leafTop}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-full right-0 w-20 sm:w-28 lg:w-[11.8%]"
        />

        {/* Images. `contents` lets them position against the band on desktop. */}
        <div className="flex items-end justify-between lg:contents">
          <img
            src={tube}
            alt="Golden cream tube surrounded by gold leaves"
            loading="lazy"
            className="-mt-16 w-[46%] max-w-[260px] sm:-mt-24 lg:absolute lg:left-0 lg:top-[-19.8%] lg:mt-0 lg:w-[33.3%] lg:max-w-none"
          />
          <img
            src={woman}
            alt="Woman smoothing cream onto her shoulder"
            loading="lazy"
            className="w-[46%] max-w-[260px] [mask-image:linear-gradient(to_right,transparent,black_18%)]
                       lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[27.8%] lg:max-w-none"
          />
        </div>

        {/* Decorative spheres (desktop) */}
        <img src={whiteSm} alt="" aria-hidden="true" className="pointer-events-none absolute hidden lg:block lg:left-[46.1%] lg:top-[23%] lg:w-[5.4%]" />
        <img src={swirlLg} alt="" aria-hidden="true" className="pointer-events-none absolute hidden lg:block lg:left-[36.7%] lg:top-[75.5%] lg:w-[10.2%]" />

        {/* Copy */}
        <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-6 py-10 text-center text-navy lg:absolute lg:left-[40.5%] lg:top-[19%] lg:mx-0 lg:w-[31%] lg:max-w-none lg:p-0">
          <h2 className="font-condensed text-display-lg font-medium">About Us</h2>
          <p className="mt-4 font-condensed text-lead font-medium text-navy/85 lg:mt-[2.4vw]">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using.
          </p>
          <a href="#about" className="btn-navy mt-7 lg:mt-[3.4vw] lg:h-[min(4.5vw,65px)] lg:w-[min(13.5vw,194px)] lg:text-[length:min(1.5vw,22px)]">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
