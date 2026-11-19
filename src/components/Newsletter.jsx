import { useState } from "react";
import jar from "../assets/sections/newsletter-jar.jpg";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | done

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: send `email` to your newsletter provider / API here.
    setStatus("done");
    setEmail("");
  };

  return (
    <section id="contact" className="bg-white px-5 pt-16 sm:px-8 lg:px-0 lg:pt-[17.4vw]">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_39.2%] lg:gap-0">
        <div className="lg:pl-[7vw] lg:pr-[2vw] lg:pb-[0.6vw]">
          <h2 className="font-condensed text-display-lg font-medium text-navy">Stay Updated</h2>
          <p className="mt-4 max-w-xl font-condensed text-[length:clamp(1.1rem,2.2vw,2rem)] font-medium leading-snug text-navy lg:mt-[1.8vw] lg:max-w-[47vw]">
            Subscribe to our newsletter for latest news and blogs and for important information,stay tuned.
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex max-w-[620px] lg:mt-[2.4vw] lg:max-w-none" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="Enter Your E-mail"
              className="h-14 min-w-0 flex-1 rounded-l-md bg-mist px-5 font-condensed text-lg font-medium text-navy placeholder:text-navy/80 focus:outline focus:outline-2 focus:outline-navy sm:h-16 sm:px-7 sm:text-xl lg:h-[min(6.9vw,100px)] lg:max-w-[503px] lg:px-[2.2vw] lg:text-[length:min(2.2vw,32px)]"
            />
            <button
              type="submit"
              className="h-14 shrink-0 rounded-r-md bg-navy px-5 font-condensed text-lg font-medium text-white transition hover:bg-[#1d2454] sm:h-16 sm:px-9 sm:text-xl lg:h-[min(6.9vw,100px)] lg:w-[min(18.5vw,267px)] lg:px-0 lg:text-[length:min(2.1vw,30px)]"
            >
              Subscribe
            </button>
          </form>
          <p role="status" className={status === "done" ? "mt-3 text-base font-medium text-navy" : "sr-only"}>
            {status === "done" ? "Thanks — you’re subscribed!" : ""}
          </p>
        </div>

        <img
          src={jar}
          alt="Cream jar decorated with gold flowers"
          loading="lazy"
          className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
        />
      </div>
    </section>
  );
}
