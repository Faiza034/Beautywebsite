import leaf from "../assets/sections/leaf-branch-left.png";
import sun from "../assets/sections/thumb-sun.jpg";
import antiAging from "../assets/sections/thumb-anti-aging.jpg";
import night from "../assets/sections/thumb-night.jpg";
import hydrating from "../assets/sections/thumb-hydrating.jpg";
import brightening from "../assets/sections/thumb-brightening.jpg";
import soothing from "../assets/sections/thumb-soothing.jpg";

const COPY = "It is a long established fact that a reader will be distracted by the readable content of a page when.";

const PRODUCTS = [
  { title: "Sun Creams", img: sun },
  { title: "Anti-Aging Creams", img: antiAging },
  { title: "Night Creams", img: night },
  { title: "Hydrating Creams", img: hydrating },
  { title: "Brightening Creams", img: brightening },
  { title: "Soothing Creams", img: soothing },
].map((p) => ({ ...p, copy: COPY }));

export default function FeaturedProducts() {
  return (
    <section id="services" className="relative bg-white px-5 pb-16 pt-14 sm:px-8 lg:px-0 lg:pb-[10.5vw] lg:pt-[10vw]">
      <img
        src={leaf}
        alt=""
        aria-hidden="true"
        className="pointer-events-none mx-auto mb-4 block w-20 sm:w-28 sm:mb-6 lg:absolute lg:left-0 lg:top-[5.8vw] lg:mx-0 lg:mb-0 lg:w-[28.5vw]"
      />

      <h2 className="text-center font-condensed text-display-lg font-medium text-navy lg:relative lg:translate-x-[0.3vw]">
        Our Featured Products
      </h2>

      <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-[9.2vw] lg:gap-x-0 lg:gap-y-[7.4vw] lg:pl-[5.9vw] lg:pr-[3.8vw]">
        {PRODUCTS.map((p) => (
          <li key={p.title} className="flex items-start gap-4 lg:gap-[3%]">
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              className="aspect-[197/186] w-28 shrink-0 object-cover sm:w-[34%] lg:w-[30.3%]"
            />
            <div className="min-w-0 lg:max-w-[24vw]">
              <h3 className="text-card font-medium text-navy">{p.title}</h3>
              <p className="mt-1.5 text-body font-medium text-ink">{p.copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
