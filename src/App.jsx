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
  { label: "ECCE and FLN" },
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

const navTlmItems = ["FolkTLM"];

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
    title: "ECCE and FLN",
    description:
      "Integrated support for early childhood care and foundational literacy and numeracy.",
    image:
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=900&q=80",
    chips: ["ECCE", "FLN"],
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
      "Connecting people and creating opportunity through practical, local, and inclusive action.",
  },
  {
    heading: "Inclusive Development",
    content:
      "We focus on education, nutrition, and life-skill opportunities for underserved and marginalized communities.",
  },
  {
    heading: "Collaborative Approach",
    content:
      "SITA works with communities, institutions, and partners to build resilient ecosystems for long-term social progress.",
  },
  {
    heading: "Specialized Services",
    content:
      "Consultancy, ECE/FLN learning materials, curriculum implementation, human resource support, and life-skills promotion.",
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

function isContactUsRouteActive() {
  if (typeof window === "undefined") {
    return false;
  }

  const currentPath = window.location.pathname.toLowerCase();
  return currentPath === "/contact-us";
}

function isDonationRouteActive() {
  if (typeof window === "undefined") {
    return false;
  }

  const currentPath = window.location.pathname.toLowerCase();
  return currentPath === "/donation";
}

function isOurTeamRouteActive() {
  if (typeof window === "undefined") {
    return false;
  }

  const currentPath = window.location.pathname.toLowerCase();
  return currentPath === "/our-team";
}

function isCareerRouteActive() {
  if (typeof window === "undefined") {
    return false;
  }

  const currentPath = window.location.pathname.toLowerCase();
  return currentPath === "/career";
}

function isFolkTlmRouteActive() {
  if (typeof window === "undefined") {
    return false;
  }

  const currentPath = window.location.pathname.toLowerCase();
  return currentPath === "/tlm/folktlm";
}

function isAboutUsRouteActive() {
  if (typeof window === "undefined") {
    return false;
  }

  const currentPath = window.location.pathname.toLowerCase();
  return currentPath === "/about-us";
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
              className="h-14 w-auto origin-left scale-x-125 rounded-lg sm:h-16"
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

function DonationPage() {
  const [donorName, setDonorName] = useState("");
  const [donorMobile, setDonorMobile] = useState("");
  const [donorAddress, setDonorAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [includePurpose, setIncludePurpose] = useState(false);
  const [donorPurpose, setDonorPurpose] = useState("");
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const amountValue = Number(amount);
  const isAmountInvalid = !amount || Number.isNaN(amountValue) || amountValue <= 0;

  const handleOpenPaymentPopup = () => {
    const sanitizedName = donorName.trim();
    const sanitizedMobile = donorMobile.trim();
    const sanitizedAddress = donorAddress.trim();
    const numericMobile = sanitizedMobile.replace(/\D/g, "");

    if (!sanitizedName) {
      setPaymentStatus("Please enter your name.");
      return;
    }

    if (numericMobile.length < 10) {
      setPaymentStatus("Please enter a valid mobile number.");
      return;
    }

    if (!sanitizedAddress) {
      setPaymentStatus("Please enter your address.");
      return;
    }

    if (isAmountInvalid) {
      setPaymentStatus("Please enter a valid donation amount.");
      return;
    }

    setPaymentStatus("");
    setShowPaymentPopup(true);
  };

  const handlePaymentDone = () => {
    setPaymentStatus("Payment marked as done. Thank you for your contribution.");
    setShowPaymentPopup(false);
  };

  const handlePaymentCancel = () => {
    setShowPaymentPopup(false);
  };

  useEffect(() => {
    if (!showPaymentPopup) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowPaymentPopup(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showPaymentPopup]);

  const qrCodeUrl = "/fake-qr.svg";

  return (
    <div className="min-h-screen bg-slate-50">
      {showPaymentPopup ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px]"
            onClick={() => setShowPaymentPopup(false)}
            aria-label="Close payment popup background"
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-popup-title"
            className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-7"
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xl text-slate-700 transition hover:bg-slate-100"
              onClick={() => setShowPaymentPopup(false)}
              aria-label="Close payment popup"
            >
              x
            </button>
            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Step 2
            </p>
            <h2 id="payment-popup-title" className="mt-3 text-2xl text-slate-900">
              Scan QR And Pay
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Pay <span className="font-semibold text-slate-800">INR {amountValue}</span>{" "}
              using UPI or use bank transfer details below.
            </p>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <img
                src={qrCodeUrl}
                alt="Donation payment QR code"
                className="mx-auto h-52 w-52 rounded-lg border border-slate-200 bg-white p-2 sm:h-64 sm:w-64"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-800">
                Bank Transfer Details
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p>
                  Account Name: <span className="font-semibold">SITA Foundation</span>
                </p>
                <p>
                  Account Number: <span className="font-semibold">123456789012</span>
                </p>
                <p>
                  IFSC Code: <span className="font-semibold">SBIN0001234</span>
                </p>
                <p>
                  Bank Name: <span className="font-semibold">State Bank of India</span>
                </p>
                <p>
                  Branch: <span className="font-semibold">Patna Main Branch</span>
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={handlePaymentCancel}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handlePaymentDone}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Done
              </button>
            </div>

            {paymentStatus ? (
              <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                {paymentStatus}
              </p>
            ) : null}
          </section>
        </div>
      ) : null}

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="/" className="inline-flex items-center">
            <img
              src="/sita-logo.jpeg"
              alt="SITA logo"
              className="h-14 w-auto origin-left scale-x-125 rounded-lg sm:h-16"
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
          <article className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-sky-50 p-6 shadow-lg shadow-orange-100/40 sm:p-8">
            <div className="pointer-events-none absolute -left-16 top-10 h-36 w-36 rounded-full bg-orange-200/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 right-8 h-40 w-40 rounded-full bg-sky-200/50 blur-2xl" />
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700">
                Support SITA
              </p>
              <h1 className="mt-4 max-w-xl text-3xl leading-tight text-slate-900 sm:text-4xl">
                Your Donation Creates Real Impact
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Every contribution supports learning, livelihood, and community
                development programs. Choose your amount, pay using QR, or
                transfer directly using bank details.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  UPI QR Payment
                </span>
                <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                  Bank Transfer Available
                </span>
              </div>

              <ol className="mt-7 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-xs font-semibold text-white">
                    1
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Enter Donor Details
                    </p>
                    <p className="text-xs text-slate-600">
                      Add name, mobile, address, amount and optional purpose.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-700 text-xs font-semibold text-white">
                    2
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Scan Fake QR And Pay
                    </p>
                    <p className="text-xs text-slate-600">
                      Click payment button to open QR popup.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white">
                    3
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Use Bank Transfer Option
                    </p>
                    <p className="text-xs text-slate-600">
                      Check account number and IFSC in payment popup.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl text-slate-900">Donate Now</h2>
            <form
              className="mt-5 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                handleOpenPaymentPopup();
              }}
            >
              <label htmlFor="donor-name" className="block space-y-2">
                <span className="text-sm font-semibold text-slate-700">Name</span>
                <input
                  id="donor-name"
                  type="text"
                  value={donorName}
                  onChange={(event) => {
                    setDonorName(event.target.value);
                    if (paymentStatus) {
                      setPaymentStatus("");
                    }
                  }}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                />
              </label>

              <label htmlFor="donor-mobile" className="block space-y-2">
                <span className="text-sm font-semibold text-slate-700">Mobile</span>
                <input
                  id="donor-mobile"
                  type="tel"
                  value={donorMobile}
                  onChange={(event) => {
                    setDonorMobile(event.target.value);
                    if (paymentStatus) {
                      setPaymentStatus("");
                    }
                  }}
                  placeholder="Enter mobile number"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                />
              </label>

              <label htmlFor="donor-address" className="block space-y-2">
                <span className="text-sm font-semibold text-slate-700">Address</span>
                <textarea
                  id="donor-address"
                  rows={3}
                  value={donorAddress}
                  onChange={(event) => {
                    setDonorAddress(event.target.value);
                    if (paymentStatus) {
                      setPaymentStatus("");
                    }
                  }}
                  placeholder="Enter your address"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                />
              </label>

              <label htmlFor="donation-amount" className="block space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Donation Amount (INR)
                </span>
                <input
                  id="donation-amount"
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(event) => {
                    setAmount(event.target.value);
                    if (paymentStatus) {
                      setPaymentStatus("");
                    }
                  }}
                  placeholder="Enter amount"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                />
              </label>

              <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={includePurpose}
                  onChange={(event) => setIncludePurpose(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                Add purpose
              </label>

              {includePurpose ? (
                <label htmlFor="donor-purpose" className="block space-y-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Purpose
                  </span>
                  <textarea
                    id="donor-purpose"
                    rows={4}
                    value={donorPurpose}
                    onChange={(event) => setDonorPurpose(event.target.value)}
                    placeholder="Write donation purpose"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
                </label>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                Payment
              </button>

              {paymentStatus && !showPaymentPopup ? (
                <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">
                  {paymentStatus}
                </p>
              ) : null}
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}

function OurTeamPage() {
  const boardMembers = [
    {
      initials: "RK",
      name: "Rajesh Kumar",
      role: "Board Chair",
      description: "Guides governance, partnerships, and long-term strategy.",
    },
    {
      initials: "PM",
      name: "Priya Mishra",
      role: "Finance Advisor",
      description: "Supports transparent budgeting and accountability systems.",
    },
    {
      initials: "AS",
      name: "Amit Sinha",
      role: "Education Lead",
      description: "Strengthens ECCE, FLN, and quality learning interventions.",
    },
    {
      initials: "NS",
      name: "Neha Sharma",
      role: "Livelihood Mentor",
      description: "Supports skill-building pathways for women and youth.",
    },
  ];

  const members = [
    { initials: "SK", name: "Sanjay Kumar", role: "Program Manager" },
    { initials: "PG", name: "Pooja Gupta", role: "Community Coordinator" },
    { initials: "VD", name: "Vikas Das", role: "Field Mobilizer" },
    { initials: "RN", name: "Ritu Nand", role: "Training Facilitator" },
    { initials: "MK", name: "Manoj Kumar", role: "Monitoring Associate" },
    { initials: "AD", name: "Anita Devi", role: "Women Group Mentor" },
    { initials: "DK", name: "Deepak Kumar", role: "Operations Associate" },
    { initials: "SS", name: "Soni Sharma", role: "Digital Literacy Trainer" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="/" className="inline-flex items-center">
            <img
              src="/sita-logo.jpeg"
              alt="SITA logo"
              className="h-14 w-auto origin-left scale-x-125 rounded-lg sm:h-16"
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
        <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-7 text-white shadow-2xl shadow-slate-900/35 sm:p-10">
          <div className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl" />
          <div className="relative">
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
              Leadership & Governance
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-5xl">
              Meet The People Building SITA
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
              We are educators, community professionals, and social development
              leaders working together to make every program practical,
              inclusive, and measurable on the ground.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">14+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-300">
                  Years Of Leadership
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">4</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-300">
                  Board Members
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">8</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-300">
                  Core Team Members
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-7 grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-72 md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                  alt="Chief Executive Officer portrait"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                <p className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  Chief Executive Officer
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <p className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                  CEO
                </p>
                <h2 className="mt-3 text-2xl text-slate-900">Dr. Kavita Sinha</h2>
                <div className="mt-4 rounded-2xl border border-orange-100 bg-orange-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">
                    Brief Description
                  </p>
                  <p className="mt-1 text-sm font-medium leading-6 text-slate-700">
                    Community-first leader focused on education, livelihoods,
                    and women-led development.
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Bio: With 14+ years in social sector leadership, Dr. Kavita
                  has led multi-district programs in foundational learning,
                  nutrition, and skill development. She works closely with
                  grassroots teams to design programs that are measurable,
                  sustainable, and locally owned.
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-7">
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-200/50 blur-2xl" />
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80"
                alt="Secretary portrait"
                className="h-56 w-full rounded-2xl object-cover sm:h-64"
              />
              <div className="mt-5">
                <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Secretary
                </p>
                <h2 className="mt-3 text-2xl text-slate-900">Anupam Verma</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Oversees coordination, compliance, and program execution
                  across field teams. Ensures smooth communication between
                  community units, board, and implementation partners.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Program Coordination
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    Compliance & Reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Partner Communication
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-7 max-w-6xl rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/70 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl text-slate-900 sm:text-3xl">Board Members</h2>
            <p className="text-sm text-slate-500">
              Governance and strategic direction
            </p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {boardMembers.map((member) => (
              <article
                key={member.name}
                className="group rounded-2xl border border-slate-200 bg-slate-50/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white transition group-hover:scale-105">
                  {member.initials}
                </span>
                <h3 className="mt-3 text-lg text-slate-900">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-7 max-w-6xl rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/70 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl text-slate-900 sm:text-3xl">Members</h2>
            <p className="text-sm text-slate-500">
              Core implementation and field support team
            </p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, index) => (
              <article
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-sky-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                    {member.initials}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                    #{index + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-base text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{member.role}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function CareerPage() {
  const openings = [
    {
      title: "Program Coordinator",
      type: "Full Time",
      location: "Patna, Bihar",
      description:
        "Lead field coordination, partner communication, and day-to-day delivery across education and livelihood projects.",
    },
    {
      title: "Field Mobilizer",
      type: "Field Role",
      location: "Darbhanga, Bihar",
      description:
        "Mobilize community groups, support beneficiaries, and maintain program participation at village level.",
    },
    {
      title: "Training Facilitator",
      type: "Contract",
      location: "Hybrid",
      description:
        "Deliver life-skill and digital literacy sessions with practical, hands-on learning methods.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="/" className="inline-flex items-center">
            <img
              src="/sita-logo.jpeg"
              alt="SITA logo"
              className="h-14 w-auto origin-left scale-x-125 rounded-lg sm:h-16"
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
        <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-orange-50 p-7 shadow-xl shadow-slate-200/60 sm:p-10">
          <p className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Career
          </p>
          <h1 className="mt-4 text-3xl text-slate-900 sm:text-4xl">
            Build Impact With SITA
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Join our team to strengthen education, livelihood, and community-led
            development programs across Bihar.
          </p>
        </section>

        <section className="mx-auto mt-7 grid max-w-6xl gap-5 lg:grid-cols-3">
          {openings.map((opening) => (
            <article
              key={opening.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {opening.type}
                </span>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold text-sky-700">
                  {opening.location}
                </span>
              </div>
              <h2 className="mt-4 text-xl text-slate-900">{opening.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {opening.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-7 max-w-6xl rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-100/60 sm:p-7">
          <h2 className="text-2xl text-slate-900">How To Apply</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Send your resume and a short profile to{" "}
            <a
              href="mailto:careers@sita.org"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2"
            >
              careers@sita.org
            </a>{" "}
            with the role title in the email subject.
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            You can also share your profile through our{" "}
            <a
              href="/contact-us"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2"
            >
              Contact Us
            </a>{" "}
            page.
          </p>
        </section>
      </main>
    </div>
  );
}

function FolkTlmPage() {
  const subjectResources = [
    {
      subject: "Hindi",
      videoUrl: "https://www.youtube.com/results?search_query=folk+tlm+hindi",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      subject: "Math",
      videoUrl: "https://www.youtube.com/results?search_query=folk+tlm+math",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      subject: "EVS",
      videoUrl: "https://www.youtube.com/results?search_query=folk+tlm+evs",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ];
  const [tlmViewMode, setTlmViewMode] = useState("card");

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="/" className="inline-flex items-center">
            <img
              src="/sita-logo.jpeg"
              alt="SITA logo"
              className="h-14 w-auto origin-left scale-x-125 rounded-lg sm:h-16"
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
        <section className="mx-auto max-w-6xl rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-7 shadow-xl shadow-slate-200/60 sm:p-10">
          <p className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            TLM Resource
          </p>
          <h1 className="mt-4 text-3xl text-slate-900 sm:text-4xl">
            TLM (Teacher Learning Materials)
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            FolkTLM ke liye subject-wise resources yahan milenge. Har subject ke
            liye video link aur PDF link diya gaya hai.
          </p>
        </section>

        <section className="mx-auto mt-7 max-w-6xl">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl text-slate-900">Subject Resources</h2>
            <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setTlmViewMode("card")}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                  tlmViewMode === "card"
                    ? "bg-sky-700 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Card View
              </button>
              <button
                type="button"
                onClick={() => setTlmViewMode("list")}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                  tlmViewMode === "list"
                    ? "bg-sky-700 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                List View
              </button>
            </div>
          </div>

          {tlmViewMode === "card" ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {subjectResources.map((resource) => (
                <article
                  key={resource.subject}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Subject
                  </p>
                  <h2 className="mt-2 text-2xl text-slate-900">{resource.subject}</h2>

                  <div className="mt-5 flex flex-col gap-2">
                    <a
                      href={resource.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800"
                    >
                      Video Link
                    </a>
                    <a
                      href={resource.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      PDF Link
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
              <ul className="divide-y divide-slate-200">
                {subjectResources.map((resource) => (
                  <li
                    key={resource.subject}
                    className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Subject
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        {resource.subject}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <a
                        href={resource.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                      >
                        Video Link
                      </a>
                      <a
                        href={resource.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        PDF Link
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="/" className="inline-flex items-center">
            <img
              src="/sita-logo.jpeg"
              alt="SITA logo"
              className="h-14 w-auto origin-left scale-x-125 rounded-lg sm:h-16"
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
        <section
          id="mission"
          className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 sm:p-10"
        >
          <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            About SITA
          </p>
          <h1 className="mt-4 text-3xl text-slate-900 sm:text-4xl">About Us</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Social Integration for Together Action (SITA) is a collective of
            experienced and committed professionals dedicated to advancing
            inclusive and sustainable community development. Our mission is to
            uplift education, improve nutrition, and expand life skill
            opportunities, particularly for underserved and marginalized groups.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            At SITA, we believe that meaningful change happens when communities
            come together. By fostering collaboration and participation, we
            strive to build stronger, more resilient communities that can achieve
            long-term social progress.
          </p>
        </section>

        <section className="mx-auto mt-7 max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 sm:p-10">
          <h2 className="text-2xl text-slate-900 sm:text-3xl">Our Services</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We offer a wide range of specialized services designed to support
            organizations, institutions, and development initiatives:
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              Consultancy Services: Including proposal development, capacity
              building, program research and evaluation, and impact analysis.
            </li>
            <li>
              Education Solutions: Development of teaching-learning materials for
              Early Childhood Education (ECE) and Foundational Literacy and
              Numeracy (FLN).
            </li>
            <li>
              Curriculum Development and Program Implementation: Designing and
              executing effective, context-driven educational and social programs.
            </li>
            <li>
              Human Resource Support: Providing skilled professionals for the
              development sector.
            </li>
            <li>
              Life Skills Promotion: Empowering adolescent girls and women with
              essential life skills to enhance their confidence, independence,
              and resilience.
            </li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Through our integrated approach, SITA works to create opportunities
            that enable individuals and communities to thrive. We are committed
            to driving positive change by combining expertise, innovation, and a
            deep understanding of grassroots realities.
          </p>
        </section>

        <section
          id="reports"
          className="mx-auto mt-7 max-w-6xl rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-orange-50 p-7 shadow-xl shadow-emerald-100/60 sm:p-10"
        >
          <h2 className="text-2xl text-slate-900 sm:text-3xl">
            Reports and Resources
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Documentation, case studies, and learning resources from our field
            programs are organized here to support transparent and measurable
            development outcomes.
          </p>
        </section>
      </main>
    </div>
  );
}

function App() {
  const isContactUsPage = isContactUsRouteActive();
  const isDonationPage = isDonationRouteActive();
  const isOurTeamPage = isOurTeamRouteActive();
  const isCareerPage = isCareerRouteActive();
  const isFolkTlmPage = isFolkTlmRouteActive();
  const isAboutUsPage = isAboutUsRouteActive();

  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTlmOpen, setMobileTlmOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopTlmOpen, setDesktopTlmOpen] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(true);
  const [subscriberName, setSubscriberName] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscriberOrganization, setSubscriberOrganization] = useState("");
  const [subscriberContact, setSubscriberContact] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const countStorageKey = "sita-visitor-count";
    const sessionStorageKey = "sita-visitor-counted";

    const storedCountRaw = window.localStorage.getItem(countStorageKey);
    const parsedStoredCount = Number.parseInt(storedCountRaw ?? "0", 10);
    let nextCount = Number.isNaN(parsedStoredCount) || parsedStoredCount < 0
      ? 0
      : parsedStoredCount;
    const isAlreadyCountedInSession =
      window.sessionStorage.getItem(sessionStorageKey) === "true";

    if (!isAlreadyCountedInSession) {
      nextCount += 1;
      window.localStorage.setItem(countStorageKey, String(nextCount));
      window.sessionStorage.setItem(sessionStorageKey, "true");
    }

    setVisitorCount(nextCount);
  }, []);

  useEffect(() => {
    if (
      isContactUsPage ||
      isDonationPage ||
      isOurTeamPage ||
      isCareerPage ||
      isFolkTlmPage ||
      isAboutUsPage
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [
    isContactUsPage,
    isDonationPage,
    isOurTeamPage,
    isCareerPage,
    isFolkTlmPage,
    isAboutUsPage,
  ]);

  useEffect(() => {
    if (
      isContactUsPage ||
      isDonationPage ||
      isOurTeamPage ||
      isCareerPage ||
      isFolkTlmPage ||
      isAboutUsPage ||
      !showNewsletterPopup
    ) {
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
  }, [
    isContactUsPage,
    isDonationPage,
    isOurTeamPage,
    isCareerPage,
    isFolkTlmPage,
    isAboutUsPage,
    showNewsletterPopup,
  ]);

  const getServiceSubItemHref = (serviceLabel, subItemLabel) => {
    return "/contact-us";
  };

  const getTlmItemHref = (itemLabel) => {
    if (itemLabel === "FolkTLM") {
      return "/tlm/folktlm";
    }

    return "#top";
  };

  const getAboutItemHref = (itemLabel) => {
    if (itemLabel === "Mission Statement") {
      return "/about-us#mission";
    }

    if (itemLabel === "Our Team") {
      return "/our-team";
    }

    if (itemLabel === "Reports and Resources") {
      return "/about-us#reports";
    }

    if (itemLabel === "Career") {
      return "/career";
    }

    if (itemLabel === "Donate Us") {
      return "/donation";
    }

    return "/about-us";
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    const sanitizedName = subscriberName.trim();
    const sanitizedEmail = subscriberEmail.trim();
    const sanitizedContact = subscriberContact.trim();

    if (!sanitizedName) {
      setPopupMessage("Please enter your name.");
      return;
    }
    if (!sanitizedEmail) {
      setPopupMessage("Please enter your email address.");
      return;
    }
    if (!sanitizedContact) {
      setPopupMessage("Please enter your contact number.");
      return;
    }

    setPopupMessage("Thanks for subscribing. We will reach out soon.");
    window.setTimeout(() => {
      setShowNewsletterPopup(false);
      setSubscriberName("");
      setSubscriberEmail("");
      setSubscriberOrganization("");
      setSubscriberContact("");
      setPopupMessage("");
    }, 900);
  };

  if (isContactUsPage) {
    return <ContactUsPage />;
  }

  if (isOurTeamPage) {
    return <OurTeamPage />;
  }

  if (isCareerPage) {
    return <CareerPage />;
  }

  if (isFolkTlmPage) {
    return <FolkTlmPage />;
  }

  if (isAboutUsPage) {
    return <AboutUsPage />;
  }

  if (isDonationPage) {
    return <DonationPage />;
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
                className="h-24 w-auto scale-x-125 rounded-lg border border-slate-200 bg-white p-1"
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
                type="text"
                name="name"
                autoComplete="name"
                required
                value={subscriberName}
                onChange={(event) => {
                  setSubscriberName(event.target.value);
                  if (popupMessage) {
                    setPopupMessage("");
                  }
                }}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
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
              <input
                type="text"
                name="organization"
                autoComplete="organization"
                value={subscriberOrganization}
                onChange={(event) => {
                  setSubscriberOrganization(event.target.value);
                  if (popupMessage) {
                    setPopupMessage("");
                  }
                }}
                placeholder="Organization (optional)"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
              <input
                type="tel"
                name="contact"
                autoComplete="tel"
                required
                value={subscriberContact}
                onChange={(event) => {
                  setSubscriberContact(event.target.value);
                  if (popupMessage) {
                    setPopupMessage("");
                  }
                }}
                placeholder="Enter contact number"
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
              className="h-16 w-auto origin-left scale-x-125 rounded-xl sm:h-20"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            <a
              href="#top"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
            >
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setDesktopAboutOpen(true)}
              onMouseLeave={() => setDesktopAboutOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={desktopAboutOpen}
                className="inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
              >
                About Us
                <Arrow open={desktopAboutOpen} />
              </button>
              <div
                className={`absolute left-0 top-full z-30 w-72 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl transition-all duration-200 ${
                  desktopAboutOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <ul className="space-y-1">
                  {navAboutItems.map((item) => (
                    <li key={item}>
                      <a
                        href={getAboutItemHref(item)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-700"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={desktopServicesOpen}
                className="inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
              >
                Services
                <Arrow open={desktopServicesOpen} />
              </button>
              <div
                className={`absolute right-0 top-full z-30 max-h-[70vh] w-[26rem] overflow-y-auto rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl transition-all duration-200 ${
                  desktopServicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <div className="space-y-2">
                  {navServiceItems.map((item) => (
                    <div
                      key={item.label}
                      className="group/item rounded-xl border border-slate-100 bg-slate-50/70 p-3"
                    >
                      <a
                        href="/contact-us"
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
                        <ul className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover/item:mt-2 group-hover/item:max-h-48 group-hover/item:border-t group-hover/item:border-slate-200 group-hover/item:pt-2 group-hover/item:opacity-100">
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

            <div
              className="relative"
              onMouseEnter={() => setDesktopTlmOpen(true)}
              onMouseLeave={() => setDesktopTlmOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={desktopTlmOpen}
                className="inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
              >
                TLM
                <Arrow open={desktopTlmOpen} />
              </button>
              <div
                className={`absolute left-0 top-full z-30 w-56 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl transition-all duration-200 ${
                  desktopTlmOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <ul className="space-y-1">
                  {navTlmItems.map((item) => (
                    <li key={item}>
                      <a
                        href={getTlmItemHref(item)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-700"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#services"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
            >
              Programs
            </a>
            <a
              href="/donation"
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
                          href={getAboutItemHref(item)}
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
                          href="/contact-us"
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
              <div className="rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => setMobileTlmOpen((current) => !current)}
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold text-slate-700"
                >
                  TLM
                  <Arrow open={mobileTlmOpen} />
                </button>
                {mobileTlmOpen ? (
                  <ul className="space-y-1 border-t border-slate-100 px-3 py-2">
                    {navTlmItems.map((item) => (
                      <li key={item}>
                        <a
                          href={getTlmItemHref(item)}
                          className="block rounded px-2 py-1 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <a
                href="/donation"
                className="block rounded-lg bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                Donate
              </a>
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
                    href="/donation"
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
              <a
                key={service.title}
                href="/contact-us"
                className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
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
              </a>
            ))}
          </div>
        </section>

        <section className="fade-up space-y-5">
          <div
            id="about"
            className="rounded-3xl border border-slate-200/70 bg-white/90 p-7 shadow-xl shadow-slate-200/60"
          >
            <h2 className="text-2xl text-slate-900 sm:text-3xl">About Us</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Quick highlights about SITA. For full details, visit the dedicated
              About Us page.
            </p>
            <a
              href="/about-us"
              className="mt-4 inline-flex rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Read Full About Us
            </a>
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
                  <a href="/about-us" className="transition hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/career" className="transition hover:text-white">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Core Programs</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Consultant</li>
                <li>Human Resource</li>
                <li>ECCE and FLN</li>
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

          <div className="mt-6 grid gap-3 border-t border-white/10 pt-4 text-xs text-slate-400 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <p className="text-xs font-medium text-slate-300 sm:justify-self-start">
              Visitors:{" "}
              {visitorCount !== null ? visitorCount.toLocaleString("en-IN") : "--"}
            </p>
            <p className="sm:justify-self-center">(c) 2026 SITA. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-2 sm:justify-self-end">
              <p className="text-xs font-medium text-slate-300">Follow us:</p>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 transition hover:text-blue-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#1877F2]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.8.2-1 1-1z" />
                </svg>
                Facebook
              </a>
              <span className="text-slate-500">|</span>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 transition hover:text-red-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#FF0000]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M21.8 8.1a3 3 0 0 0-2.1-2.1C17.8 5.5 12 5.5 12 5.5s-5.8 0-7.7.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 1.7 12c0 1.3.1 2.7.5 3.9a3 3 0 0 0 2.1 2.1c1.9.5 7.7.5 7.7.5s5.8 0 7.7-.5a3 3 0 0 0 2.1-2.1c.4-1.3.5-2.6.5-3.9s-.1-2.7-.5-3.9zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
                YouTube
              </a>
              <span className="text-slate-500">|</span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 transition hover:text-sky-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#0A66C2]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5A2.5 2.5 0 1 1 6.5 3a2.5 2.5 0 0 1 0 5.5zM4.5 9.8h4v10.7h-4V9.8zM10.8 9.8h3.8v1.6h.1c.5-.9 1.8-1.9 3.8-1.9 4.1 0 4.8 2.5 4.8 5.8v5.2h-4v-4.6c0-1.1 0-2.6-1.7-2.6s-1.9 1.3-1.9 2.5v4.7h-4V9.8z" />
                </svg>
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
