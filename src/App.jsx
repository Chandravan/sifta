import { useEffect, useState } from "react";

const navAboutItems = [
  "Mission Statement",
  "Our Team",
  "Reports and Resources",
  "Career",
  "Donate Us",
];

const navServiceItems = [
  {
    label: "Consultant",
    subItems: [
      "Proposal Development",
      "Program Management",
      "Capacity Building",
      "R Evolution",
      "Legal Matter",
    ],
  },
  { label: "Human Resource" },
  { label: "ECCE, FLN and Nutrition" },
  { label: "TLM" },
  {
    label: "Life Skill Education",
    subItems: [
      "Stitching",
      "Beauty Parlor",
      "Digital Literacy",
      "Mithila Painting",
    ],
  },
];

const heroSlides = [
  {
    title: "Education with dignity and local leadership",
    description:
      "We partner with communities to improve foundational learning, livelihoods, and social inclusion at scale.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80",
    badge: "Community Learning",
  },
  {
    title: "Skills that create income and confidence",
    description:
      "From stitching to digital literacy, our life-skill programs support young women and families with practical pathways.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    badge: "Livelihood Programs",
  },
  {
    title: "Data-backed projects, human-first delivery",
    description:
      "We blend consulting, monitoring, and capacity building to make social projects measurable and sustainable.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    badge: "Program Excellence",
  },
];

const impactStats = [
  { label: "Program Verticals", value: 5, suffix: "+" },
  { label: "Specialized Modules", value: 14, suffix: "+" },
  { label: "Consulting Tracks", value: 5, suffix: "" },
  { label: "Community First", value: 100, suffix: "%" },
];

const serviceShowcase = [
  {
    title: "Consultant",
    description:
      "Proposal Development, Program Management, Capacity Building, R Evolution, and Legal Matter support.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    chips: ["Strategy", "Governance", "Execution"],
  },
  {
    title: "Human Resource",
    description:
      "People systems, role architecture, and talent development for social organizations and field teams.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    chips: ["Hiring", "Training", "Performance"],
  },
  {
    title: "ECCE, FLN and Nutrition",
    description:
      "Integrated support for early childhood care, foundational literacy and numeracy, and nutrition awareness.",
    image:
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=900&q=80",
    chips: ["ECCE", "FLN", "Nutrition"],
  },
  {
    title: "TLM",
    description:
      "Designing and distributing teaching-learning materials that help classrooms become engaging and inclusive.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80",
    chips: ["Activity Kits", "Classroom Aids", "Assessment Tools"],
  },
  {
    title: "Life Skill Education",
    description:
      "Stitching, Beauty Parlor, Digital Literacy, and Mithila Painting tracks for dignified livelihood outcomes.",
    image:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&fit=crop&w=900&q=80",
    chips: ["Stitching", "Beauty", "Digital", "Art"],
  },
];

const lifeSkillTracks = [
  "Stitching",
  "Beauty Parlor",
  "Digital Literacy",
  "Mithila Painting",
];

const aboutHighlights = [
  {
    heading: "Mission Statement",
    content:
      "Connecting People, Creating Opportunity through practical, local, and inclusive action.",
  },
  {
    heading: "Our Team",
    content:
      "Educators, consultants, mobilizers, and trainers committed to long-term social transformation.",
  },
  {
    heading: "Reports and Resources",
    content:
      "Transparent documentation of what we do, what works, and where we are improving.",
  },
  {
    heading: "Career",
    content:
      "Join our on-ground and strategy teams to co-build stronger communities.",
  },
  {
    heading: "Donate Us",
    content:
      "Support our community programs and help unlock opportunities for more families.",
  },
];

function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    let frameId = 0;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 4;
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end]);

  return (
    <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
      {count}
      {suffix}
    </p>
  );
}

function Arrow({ open = false }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactUsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="/" className="inline-flex items-center">
            <img
              src="/sita-logo.jpeg"
              alt="SITA logo"
              className="h-12 w-auto rounded-lg sm:h-14"
            />
          </a>
          <a
            href="/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Back To Home
          </a>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-10">
        <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
              Proposal Development
            </p>
            <h1 className="mt-4 text-3xl text-slate-900 sm:text-4xl">
              Contact Us For Consultant Support
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Share your project details and our consultant team will connect
              with you for proposal development, planning, and execution
              support.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  contact@sita.org
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Support Hours
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  Monday to Saturday
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl text-slate-900">Send Your Requirement</h2>
            <form className="mt-5 space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your proposal requirement"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                Submit Inquiry
              </button>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}

function App() {
  const isContactUsPage =
    typeof window !== "undefined" &&
    window.location.pathname.toLowerCase() === "/contact-us";

  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(true);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    if (isContactUsPage) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isContactUsPage]);

  useEffect(() => {
    if (isContactUsPage || !showNewsletterPopup) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowNewsletterPopup(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isContactUsPage, showNewsletterPopup]);

  const getServiceSubItemHref = (serviceLabel, subItemLabel) => {
    if (
      serviceLabel === "Consultant" &&
      subItemLabel === "Proposal Development"
    ) {
      return "/contact-us";
    }

    return "#services";
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    const sanitizedEmail = subscriberEmail.trim();

    if (!sanitizedEmail) {
      setPopupMessage("Please enter your email address.");
      return;
    }

    setPopupMessage("Thanks for subscribing. We will reach out soon.");
    window.setTimeout(() => {
      setShowNewsletterPopup(false);
      setPopupMessage("");
    }, 900);
  };

  if (isContactUsPage) {
    return <ContactUsPage />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      {showNewsletterPopup ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"
            onClick={() => setShowNewsletterPopup(false)}
            aria-label="Close popup background"
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#f8f4ee] p-6 shadow-2xl shadow-black/30 sm:p-10"
          >
            <button
              type="button"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-2xl text-slate-700 transition hover:bg-white"
              onClick={() => setShowNewsletterPopup(false)}
              aria-label="Close popup"
            >
              x
            </button>

            <div className="flex flex-col items-center text-center">
              <img
                src="/sita-logo.jpeg"
                alt="SITA logo"
                className="h-20 w-auto rounded-lg border border-slate-200 bg-white p-1"
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Stay Connected
              </p>
              <h2
                id="newsletter-title"
                className="mt-3 text-3xl leading-tight text-slate-900 sm:text-4xl"
              >
                Subscribe To Our Newsletter
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                Be the first to know about new programs, field stories, and
                community opportunities.
              </p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="mx-auto mt-6 w-full max-w-md space-y-3"
            >
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={subscriberEmail}
                onChange={(event) => {
                  setSubscriberEmail(event.target.value);
                  if (popupMessage) {
                    setPopupMessage("");
                  }
                }}
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black"
              >
                Confirm
              </button>
              {popupMessage ? (
                <p className="text-center text-sm text-emerald-700">
                  {popupMessage}
                </p>
              ) : null}
            </form>
          </section>
        </div>
      ) : null}

      <header className="fade-up sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a href="#top" className="inline-flex items-center">
            <img
              src="/sita-logo.jpeg"
              alt="Social Integration for Together Action logo"
              className="h-14 w-auto rounded-xl sm:h-16"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            <a
              href="#top"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
            >
              Home
            </a>

            <div className="group relative">
              <button className="inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700">
                About Us
                <Arrow />
              </button>
              <div className="pointer-events-none absolute left-0 top-full z-30 mt-2 w-72 translate-y-2 rounded-2xl border border-slate-200 bg-white/95 p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="space-y-1">
                  {navAboutItems.map((item) => (
                    <li key={item}>
                      <a
                        href="#about"
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-700"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative">
              <button className="inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700">
                Services
                <Arrow />
              </button>
              <div className="pointer-events-none absolute right-0 top-full z-30 mt-2 max-h-[70vh] w-[26rem] translate-y-2 overflow-y-auto rounded-2xl border border-slate-200 bg-white/95 p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="space-y-2">
                  {navServiceItems.map((item) => (
                    <div
                      key={item.label}
                      className="group/item rounded-xl border border-slate-100 bg-slate-50/70 p-3"
                    >
                      <a
                        href="#services"
                        className="flex items-center justify-between text-sm font-semibold text-slate-800 transition hover:text-sky-700"
                      >
                        <span>{item.label}</span>
                        {item.subItems ? (
                          <span className="text-slate-500 transition group-hover/item:text-sky-700">
                            <ChevronRight />
                          </span>
                        ) : null}
                      </a>
                      {item.subItems ? (
                        <ul className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover/item:mt-2 group-hover/item:max-h-48 group-hover/item:border-t group-hover/item:border-slate-200 group-hover/item:pt-2 group-hover/item:opacity-100 group-focus-within/item:mt-2 group-focus-within/item:max-h-48 group-focus-within/item:border-t group-focus-within/item:border-slate-200 group-focus-within/item:pt-2 group-focus-within/item:opacity-100">
                          {item.subItems.map((subItem) => (
                            <li key={subItem}>
                              <a
                                href={getServiceSubItemHref(
                                  item.label,
                                  subItem
                                )}
                                className="block rounded-md px-2 py-1 text-xs text-slate-600 transition hover:bg-orange-50 hover:text-orange-700"
                              >
                                {subItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#services"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
            >
              Programs
            </a>
            <a
              href="#donate"
              className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Donate
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>

        {mobileMenuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-slate-200 px-4 py-4 lg:hidden"
          >
            <div className="space-y-3">
              <a
                className="block rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                href="#top"
              >
                Home
              </a>
              <div className="rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen((current) => !current)}
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold text-slate-700"
                >
                  About Us
                  <Arrow open={mobileAboutOpen} />
                </button>
                {mobileAboutOpen ? (
                  <ul className="space-y-1 border-t border-slate-100 px-3 py-2">
                    {navAboutItems.map((item) => (
                      <li key={item}>
                        <a
                          href="#about"
                          className="block rounded px-2 py-1 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((current) => !current)}
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold text-slate-700"
                >
                  Services
                  <Arrow open={mobileServicesOpen} />
                </button>
                {mobileServicesOpen ? (
                  <div className="space-y-2 border-t border-slate-100 px-3 py-2">
                    {navServiceItems.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-md bg-slate-50 p-2"
                      >
                        <a
                          href="#services"
                          className="text-sm font-semibold text-slate-800 hover:text-sky-700"
                        >
                          {item.label}
                        </a>
                        {item.subItems ? (
                          <ul className="mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <li key={subItem}>
                                <a
                                  href={getServiceSubItemHref(
                                    item.label,
                                    subItem
                                  )}
                                  className="text-xs text-slate-600 hover:text-orange-700"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <a
                href="#contact"
                className="block rounded-lg bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top" className="flex flex-1 flex-col gap-8 pt-0">
        <section className="fade-up relative isolate overflow-hidden border-b border-slate-200/70">
          <div className="relative h-[72vh] min-h-[560px] w-full overflow-hidden bg-slate-900">
            {heroSlides.map((slide, index) => (
              <article
                key={slide.title}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === activeSlide
                    ? "z-10 scale-100 opacity-100"
                    : "z-0 scale-105 opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/55 to-slate-900/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20" />
              </article>
            ))}

            <div className="relative z-20 flex h-full items-end px-4 pb-12 sm:px-7 lg:px-12">
              <div className="w-full">
                <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                  Social Integration for Together Action
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-white sm:text-6xl">
                  Connecting People Creating Opportunity
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-lg">
                  {heroSlides[activeSlide].description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#services"
                    className="rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                  >
                    Explore Services
                  </a>
                  <a
                    href="#about"
                    className="rounded-xl border border-white/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    About Us
                  </a>
                  <a
                    id="donate"
                    href="#contact"
                    className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
                  >
                    Donate Us
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                        index === activeSlide
                          ? "border-white/70 bg-white text-slate-900"
                          : "border-white/35 bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {slide.badge}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 right-4 z-20 flex items-center gap-2 rounded-full bg-black/35 px-2 py-1 backdrop-blur-sm sm:right-7 lg:right-12">
              {heroSlides.map((slide, index) => (
                <button
                  key={`${slide.title}-dot`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeSlide ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="fade-up grid gap-4 border-b border-slate-200/70 bg-white/70 px-4 py-6 backdrop-blur-sm sm:grid-cols-2 sm:px-7 lg:grid-cols-4 lg:px-12">
          {impactStats.map((item) => (
            <article
              key={item.label}
              className="border-l-2 border-slate-200/80 pl-4 first:border-l-0 first:pl-0"
            >
              <CountUp end={item.value} suffix={item.suffix} />
              <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
            </article>
          ))}
        </section>

        <section
          id="services"
          className="fade-up rounded-3xl border border-slate-200/70 bg-white/90 p-7 shadow-xl shadow-slate-200/60"
        >
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl text-slate-900 sm:text-3xl">Services</h2>
            <p className="text-sm text-slate-500">
              Consulting, education, and livelihood action
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceShowcase.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
                <div className="relative p-4">
                  <h3 className="text-xl text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fade-up grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            id="about"
            className="rounded-3xl border border-slate-200/70 bg-white/90 p-7 shadow-xl shadow-slate-200/60"
          >
            <h2 className="text-2xl text-slate-900 sm:text-3xl">About Us</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Community-driven design, transparent execution, and measurable
              outcomes.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <article
                  key={item.heading}
                  className="rounded-xl border border-sky-100 bg-gradient-to-b from-sky-50 to-white p-4"
                >
                  <h3 className="text-lg text-slate-900">{item.heading}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.content}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-orange-50 p-7 shadow-xl shadow-emerald-100/60">
            <h2 className="text-2xl text-slate-900">Life Skill Education</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Our life-skill tracks are designed to build confidence,
              employability, and entrepreneurship.
            </p>
            <ul className="mt-5 space-y-3">
              {lifeSkillTracks.map((track) => (
                <li
                  key={track}
                  className="flex items-center justify-between rounded-xl border border-white/80 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <span>{track}</span>
                  <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs text-sky-700">
                    Track
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Enroll / Partner
            </a>
          </aside>
        </section>
      </main>

      <footer
        id="contact"
        className="fade-up relative mt-8 overflow-hidden border-t border-slate-700/70 bg-slate-950 text-white"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8"></div>

          <div className="mt-10 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-semibold text-white">Quick Links</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#top" className="transition hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition hover:text-white">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Core Programs</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Consultant</li>
                <li>Human Resource</li>
                <li>ECCE, FLN and Nutrition</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Life Skill Education
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Stitching</li>
                <li>Beauty Parlor</li>
                <li>Digital Literacy</li>
                <li>Mithila Painting</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Contact</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Email: contact@sita.org</li>
                <li>Support: Mon - Sat</li>
                <li>Focus: Community Impact</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>(c) 2026 SITA. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-medium text-slate-300">Follow us:</p>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-300 transition hover:text-blue-300"
              >
                Facebook
              </a>
              <span className="text-slate-500">|</span>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-300 transition hover:text-red-300"
              >
                YouTube
              </a>
              <span className="text-slate-500">|</span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-300 transition hover:text-sky-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
