import banner from "../assets/sections/premium-quality.jpg";

/* Simple line icons, drawn to match the artwork in the design. */
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };

const AloeIcon = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full" {...stroke} aria-hidden="true">
    <path d="M32 58C22 52 14 40 12 26c-1-8 2-14 7-18 3 8 8 14 13 22" />
    <path d="M32 58C42 52 50 40 52 26c1-8-2-14-7-18-3 8-8 14-13 22" />
    <path d="M32 58c-5-10-6-24 0-40 6 16 5 30 0 40z" />
    <path d="M20 40l-4-3M44 40l4-3M32 46v-8" />
  </svg>
);
const OrganicIcon = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full" {...stroke} aria-hidden="true">
    <path d="M32 60V30" />
    <path d="M32 40C22 40 16 32 16 22c10 0 16 6 16 18z" />
    <path d="M32 32c9 0 15-6 15-15-9 0-15 6-15 15z" />
    <path d="M32 26C28 20 28 12 32 5c4 7 4 15 0 21z" />
    <path d="M32 42c-1-5-4-8-8-9M32 36c2-3 5-5 9-6" />
  </svg>
);
const JojobaIcon = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full" {...stroke} aria-hidden="true">
    <rect x="12" y="26" width="26" height="30" rx="5" />
    <path d="M20 26v-6h10v6M22 20v-8a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v8" />
    <path d="M18 40h14M18 46h14" />
    <circle cx="46" cy="50" r="5" />
    <circle cx="53" cy="44" r="4" />
    <path d="M50 12v6M47 15h6M56 24v4M54 26h4" />
  </svg>
);

const INGREDIENTS = [
  { label: "Aloe Vera", Icon: AloeIcon },
  { label: "Organic", Icon: OrganicIcon },
  { label: "Jojoba Extract", Icon: JojobaIcon },
];

export default function PremiumQuality() {
  return (
    <section id="quality" className="bg-[#a8b4ce] lg:bg-transparent">
      <div className="relative lg:aspect-[1440/728]">
        <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center px-6 pb-4 pt-12 text-center text-navy sm:pt-14 lg:absolute lg:left-[4.2%] lg:top-[11%] lg:mx-0 lg:w-[33.5%] lg:max-w-none lg:p-0">
          <h2 className="font-condensed text-display-lg leading-[1.12]">
            <span className="block font-light">Premium</span>
            <span className="block font-bold">Quality Products</span>
          </h2>
          <p className="mt-4 max-w-[26rem] font-condensed text-lead font-medium text-navy/85 lg:mt-[1.6vw] lg:max-w-[26vw]">
            It is a long established fact that a reader will be distracted by the readable content of a pagek like
            readable English.
          </p>
          <p className="mt-5 font-condensed text-[length:clamp(1.3rem,2.45vw,2.2rem)] lg:mt-[1.5vw]">What’s in it?</p>

          <ul className="mt-4 flex items-start justify-center gap-8 sm:gap-10 lg:mt-[1.4vw] lg:gap-[3vw]">
            {INGREDIENTS.map(({ label, Icon }) => (
              <li key={label} className="flex flex-col items-center gap-1.5">
                <span className="block h-14 w-14 lg:h-[min(5.5vw,80px)] lg:w-[min(5.5vw,80px)]">
                  <Icon />
                </span>
                <span className="font-condensed text-base font-medium lg:text-[length:min(1.64vw,24px)]">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <img
          src={banner}
          alt="Lavender and gold skincare bottles and a jar"
          loading="lazy"
          className="block h-[320px] w-full object-cover object-[85%_center] [mask-image:linear-gradient(to_bottom,transparent,black_35%)]
                     sm:h-[440px] lg:absolute lg:inset-0 lg:h-full lg:[mask-image:none]"
        />
      </div>
    </section>
  );
}
