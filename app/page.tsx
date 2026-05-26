import Link from "next/link";

const APP = "https://app.nextsole.co.uk";
const SIGNIN = `${APP}/login`;

// ── Icons ──────────────────────────────────────────────────────────────────

function IconCollection() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  );
}

function IconPrice() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  );
}

function IconRotation() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function IconMinus() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  );
}

// ── App mockup ────────────────────────────────────────────────────────────

function AppMockup() {
  const shoes = [
    { name: "Air Jordan 1 Retro High OG", colourway: "Bred", value: "£285", change: "+12%", dot: "bg-lime-400" },
    { name: "Nike Air Force 1 '07", colourway: "White/White", value: "£95", change: "+3%", dot: "bg-lime-400" },
    { name: "Adidas Yeezy Boost 350 V2", colourway: "Zebra", value: "£220", change: "-4%", dot: "bg-red-400" },
    { name: "Air Jordan 4 Retro", colourway: "Military Black", value: "£340", change: "+8%", dot: "bg-lime-400" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-lime-400/10 blur-3xl -z-10 scale-95" />

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-neutral-700" />
            <div className="h-3 w-3 rounded-full bg-neutral-700" />
            <div className="h-3 w-3 rounded-full bg-neutral-700" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-lg bg-neutral-800 px-3 py-1 text-xs text-neutral-500">
            <span>app.nextsole.co.uk</span>
          </div>
        </div>

        {/* App nav */}
        <div className="flex items-center justify-between border-b border-neutral-800/50 px-4 py-3">
          <span className="text-xs font-black tracking-[0.2em] uppercase text-lime-400">Nextsole</span>
          <div className="flex gap-4 text-xs text-neutral-500">
            <span className="text-white font-semibold">Collection</span>
            <span>Dashboard</span>
            <span>Settings</span>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 divide-x divide-neutral-800 border-b border-neutral-800">
          {[
            { label: "Pairs", value: "24" },
            { label: "Total value", value: "£4,820" },
            { label: "Since bought", value: "+£640" },
          ].map((s) => (
            <div key={s.label} className="p-3 text-center">
              <p className="text-xs text-neutral-500">{s.label}</p>
              <p className="mt-0.5 text-sm font-bold">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Shoe rows */}
        <div className="divide-y divide-neutral-800/50">
          {shoes.map((shoe) => (
            <div key={shoe.name} className="flex items-center gap-3 px-4 py-3">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-neutral-800 flex items-center justify-center">
                <svg width="20" height="12" viewBox="0 0 40 20" fill="none">
                  <path d="M2 14 C8 14 12 8 20 8 C28 8 32 12 38 10 L38 16 C32 16 28 14 20 14 C12 14 8 16 2 16 Z" fill="#404040"/>
                  <path d="M8 8 L14 4 L18 8" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold">{shoe.name}</p>
                <p className="text-xs text-neutral-500">{shoe.colourway}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold">{shoe.value}</p>
                <p className={`text-xs ${shoe.dot === "bg-lime-400" ? "text-lime-400" : "text-red-400"}`}>{shoe.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 px-4 py-3">
          <div className="rounded-xl bg-lime-400/10 border border-lime-500/20 px-3 py-2 flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full bg-lime-400 animate-pulse`} />
            <p className="text-xs text-lime-300 font-medium">Today&apos;s pick: Air Jordan 1 Bred — 42 days unworn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <span className="text-sm font-black tracking-[0.25em] uppercase text-lime-400">Nextsole</span>
        <div className="flex items-center gap-3">
          <Link href={SIGNIN} className="text-sm font-semibold text-neutral-400 hover:text-white transition">
            Sign in
          </Link>
          <Link
            href={SIGNIN}
            className="rounded-xl bg-lime-400 px-4 py-2 text-sm font-bold text-black hover:bg-lime-300 transition"
          >
            Get started free
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-lime-400/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-400/10 px-3 py-1.5 text-xs font-semibold text-lime-400">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
              Now live — free to start
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Track every pair.<br />
              <span className="text-lime-400">Know every value.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-lg">
              Nextsole keeps your sneaker collection organised, valued and ready to wear. Add your kicks, see what they&apos;re worth, and get a daily rotation pick.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={SIGNIN}
                className="rounded-xl bg-lime-400 px-6 py-3.5 text-base font-bold text-black hover:bg-lime-300 transition"
              >
                Start for free
              </Link>
              <Link
                href={SIGNIN}
                className="rounded-xl border border-neutral-700 px-6 py-3.5 text-base font-semibold text-neutral-300 hover:border-neutral-500 hover:text-white transition"
              >
                Sign in →
              </Link>
            </div>
            <p className="mt-4 text-sm text-neutral-600">Free for up to 8 pairs. No credit card needed.</p>
          </div>

          <div className="lg:pl-8">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <IconCollection />,
      title: "Your entire collection, in one place",
      body: "Add any sneaker in seconds — search our catalogue or enter manually. Track size, condition, purchase price and provenance for every pair.",
    },
    {
      icon: <IconPrice />,
      title: "Real market values, always current",
      body: "See what your pairs are worth today. Track price movement against what you paid and watch your portfolio grow over time.",
    },
    {
      icon: <IconRotation />,
      title: "Smart daily rotation",
      body: "Nextsole suggests which pair to wear next based on your wear history and rotation preferences. Never forget about a pair at the back of the shelf.",
    },
    {
      icon: <IconAI />,
      title: "AI-powered shoe data",
      body: "Descriptions, colourways, release dates, pack info and key tech — automatically enriched for every shoe in your collection.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lime-400 font-semibold">Features</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Everything your collection needs</h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Built for serious sneakerheads who want more than a spreadsheet.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
                {f.icon}
              </div>
              <h3 className="mt-4 text-sm font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add your kicks",
      body: "Search our sneaker catalogue or enter manually. Every pair you own, in one place.",
    },
    {
      number: "02",
      title: "Track the value",
      body: "Market pricing updates automatically. See your collection's total worth and individual gains or losses.",
    },
    {
      number: "03",
      title: "Wear smarter",
      body: "Get a daily pick based on what you haven't worn in a while. Your whole collection, actually in rotation.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lime-400 font-semibold">How it works</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Up and running in minutes</h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+2rem)] hidden sm:block w-[calc(100%-4rem)] h-px border-t border-dashed border-neutral-800" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-sm font-black text-black">
                  {step.number}
                </div>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingTable() {
  const rows = [
    { feature: "Collection size", free: "Up to 8 pairs", pro: "Unlimited" },
    { feature: "Sneaker catalogue search", free: true, pro: true },
    { feature: "Manual entry", free: true, pro: true },
    { feature: "Market price tracking", free: true, pro: true },
    { feature: "Daily rotation pick", free: true, pro: true },
    { feature: "Price history charts", free: false, pro: true },
    { feature: "CSV import & export", free: false, pro: true },
    { feature: "AI data enrichment", free: false, pro: true },
    { feature: "Gallery images", free: false, pro: true },
    { feature: "Early access features", free: false, pro: true },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 border-t border-neutral-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lime-400 font-semibold">Pricing</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Start free, upgrade when ready</h2>
          <p className="mt-4 text-neutral-400">No credit card needed to get started.</p>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-neutral-800">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-neutral-800 bg-neutral-900">
            <div className="p-5" />
            <div className="border-l border-neutral-800 p-5 text-center">
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Free</p>
              <p className="mt-2 text-2xl font-black">£0</p>
              <p className="text-xs text-neutral-500">forever</p>
              <Link
                href={SIGNIN}
                className="mt-4 block rounded-xl border border-neutral-700 px-4 py-2 text-sm font-semibold text-neutral-300 hover:border-neutral-500 hover:text-white transition text-center"
              >
                Get started
              </Link>
            </div>
            <div className="relative border-l border-neutral-800 bg-lime-400/5 p-5 text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-3 py-0.5 text-xs font-bold text-black">
                Pro
              </div>
              <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold">Pro</p>
              <p className="mt-2 text-2xl font-black">Coming soon</p>
              <p className="text-xs text-neutral-500">join the waitlist</p>
              <Link
                href={SIGNIN}
                className="mt-4 block rounded-xl bg-lime-400 px-4 py-2 text-sm font-bold text-black hover:bg-lime-300 transition text-center"
              >
                Join waitlist
              </Link>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-neutral-800/50" : ""}`}
            >
              <div className="px-5 py-3.5 text-sm text-neutral-300">{row.feature}</div>
              <div className="flex items-center justify-center border-l border-neutral-800 px-5 py-3.5">
                {typeof row.free === "boolean" ? (
                  row.free ? (
                    <span className="text-lime-400"><IconCheck /></span>
                  ) : (
                    <span className="text-neutral-700"><IconMinus /></span>
                  )
                ) : (
                  <span className="text-xs font-semibold text-neutral-300">{row.free}</span>
                )}
              </div>
              <div className="flex items-center justify-center border-l border-neutral-800 bg-lime-400/5 px-5 py-3.5">
                {typeof row.pro === "boolean" ? (
                  row.pro ? (
                    <span className="text-lime-400"><IconCheck /></span>
                  ) : (
                    <span className="text-neutral-700"><IconMinus /></span>
                  )
                ) : (
                  <span className="text-xs font-bold text-lime-400">{row.pro}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 border-t border-neutral-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <div className="pointer-events-none absolute inset-x-0 h-48 bg-lime-400/5 blur-3xl" />
        <h2 className="text-3xl font-black sm:text-5xl leading-tight">
          Your collection deserves<br />
          <span className="text-lime-400">better than a spreadsheet.</span>
        </h2>
        <p className="mt-6 text-lg text-neutral-400">
          Join collectors already tracking their kicks with Nextsole. Free to start, no credit card needed.
        </p>
        <Link
          href={SIGNIN}
          className="mt-8 inline-block rounded-xl bg-lime-400 px-8 py-4 text-base font-bold text-black hover:bg-lime-300 transition"
        >
          Start tracking for free →
        </Link>
        <p className="mt-4 text-sm text-neutral-600">Free for up to 8 pairs · Upgrade anytime</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-sm font-black tracking-[0.25em] uppercase text-lime-400">Nextsole</span>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
            <Link href={`${APP}/privacy`} className="hover:text-neutral-300 transition">Privacy Policy</Link>
            <Link href={`${APP}/terms`} className="hover:text-neutral-300 transition">Terms of Service</Link>
            <Link href={`${APP}/feedback`} className="hover:text-neutral-300 transition">Feedback</Link>
            <Link href={SIGNIN} className="hover:text-neutral-300 transition">Sign in</Link>
          </div>
          <p className="text-xs text-neutral-700">© {new Date().getFullYear()} Nextsole</p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PricingTable />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
