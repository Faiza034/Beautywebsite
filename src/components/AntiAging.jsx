import jar from "../assets/sections/anti-aging-cream.jpg";
import leaf from "../assets/sections/leaf-branch-right.png";
import { FiArrowRight } from "react-icons/fi";

export default function AntiAging() {
  return (
    <section id="blog" className="relative bg-white px-5 py-12 sm:px-8 lg:px-0 lg:py-[7.4vw]">
      <img
        src={leaf}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-24 sm:w-32 lg:top-[1.9vw] lg:w-[14.6vw]"
      />

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:items-start lg:gap-0">
        <img
          src={jar}
          alt="Golden anti-aging cream jar with a swirl of cream"
          loading="lazy"
          className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
        />

        <div className="mx-auto flex w-full max-w-[560px] flex-col items-center text-center lg:mx-0 lg:max-w-none lg:pt-[7.7vw] lg:pr-[5.6vw]">
          <div className="lg:w-full lg:max-w-[560px] lg:self-center">
            <h2 className="font-condensed text-display-lg font-medium text-navy">Anti-Aging Cream</h2>
            <div className="mt-5 space-y-3 font-condensed text-lead font-medium text-navy/85 lg:mt-[1.5vw]">
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              </p>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of
              </p>
            </div>
          </div>

          <a href="#blog" className="btn-navy mt-8 font-condensed text-xl lg:mt-[3.4vw]">
            Read more <FiArrowRight aria-hidden="true" className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
