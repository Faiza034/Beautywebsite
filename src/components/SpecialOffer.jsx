import banner from "../assets/sections/special-offer.jpg";
import { FiArrowRight } from "react-icons/fi";

/**
 * Desktop: the banner photo fills a 1440:711 box and the copy is laid over it.
 * Mobile/tablet: copy sits on a matching solid colour and the photo follows
 * underneath, fading in from the top.
 */
export default function SpecialOffer() {
  return (
    <section id="offer" className="bg-white">
      <div className="relative bg-[#a8b8d1] lg:aspect-[1440/711] lg:bg-transparent">
        <div className="relative z-10 px-6 pb-4 pt-10 sm:px-10 lg:absolute lg:inset-0 lg:p-0">
          <h2 className="font-condensed text-[length:clamp(2rem,8vw,3.4rem)] font-bold leading-tight text-navy lg:absolute lg:left-[3.3%] lg:top-[8.6%] lg:text-[length:min(4.3vw,62px)]">
            Special Offer!
          </h2>
          <p className="mt-1 font-condensed text-[length:clamp(1.4rem,5.5vw,2.4rem)] font-light text-navy lg:absolute lg:left-[3.5%] lg:top-[20.6%] lg:mt-0 lg:text-[length:min(3.32vw,48px)]">
            30% Discount
          </p>
          <a
            href="#services"
            className="mt-6 inline-flex items-center gap-2 font-condensed text-[length:clamp(1.3rem,5vw,2rem)] font-light text-navy transition hover:gap-3 lg:absolute lg:left-[3.5%] lg:top-[74%] lg:mt-0 lg:text-[length:min(3.05vw,44px)]"
          >
            Order Now <FiArrowRight aria-hidden="true" />
          </a>
        </div>

        <img
          src={banner}
          alt="Gold and lavender skincare jars, serums and a honey dipper"
          className="block h-[300px] w-full object-cover object-[62%_center] [mask-image:linear-gradient(to_bottom,transparent,black_35%)]
                     sm:h-[420px] lg:absolute lg:inset-0 lg:h-full lg:[mask-image:none]"
        />
      </div>
    </section>
  );
}
