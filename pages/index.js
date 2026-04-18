import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Metrics", href: "#metrics" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

const METRICS = [
  { label: "TikTok Followers", value: "250K+" },
  { label: "Avg. Views / Video", value: "80K" },
  { label: "Engagement Rate", value: "9.4%" },
  { label: "Click-Through Rate", value: "7.2%" },
  { label: "Conversion Rate", value: "4.8%" },
  { label: "Total Revenue Generated", value: "₱1.2M+" },
];

const CASE_STUDIES = [
  {
    brand: "GlowSkin PH",
    problem: "Low product awareness and stagnant online sales.",
    action: "3-part storytelling series + honest review hook",
    result: "180K views → 9% CTR → ₱85,000 revenue in 10 days",
  },
  {
    brand: "FitFuel Supplements",
    problem: "High cart abandonment, low TikTok presence.",
    action: "Before/after UGC + affiliate link in bio campaign",
    result: "220K views → 11% CTR → ₱120,000 revenue in 14 days",
  },
  {
    brand: "StyleHaus PH",
    problem: "New product launch with zero social traction.",
    action: "Trend-jacking + product demo with strong CTA",
    result: "95K views → 6.5% CTR → ₱48,000 revenue in 7 days",
  },
];

const VIDEOS = [
  {
    id: "1",
    caption: "Hook-driven review that hit 180K views — led to highest CTR of the month.",
    embed: "https://www.tiktok.com/embed/v2/7000000000000000001",
  },
  {
    id: "2",
    caption: "Storytelling format — emotional connection drove 11% CTR for FitFuel.",
    embed: "https://www.tiktok.com/embed/v2/7000000000000000002",
  },
  {
    id: "3",
    caption: "Trend-jacked product demo — 95K views in 48 hours for StyleHaus launch.",
    embed: "https://www.tiktok.com/embed/v2/7000000000000000003",
  },
];

const SERVICES = [
  {
    title: "Affiliate Campaigns",
    desc: "Commission-based content that drives measurable sales through TikTok.",
    tag: "Commission-Based",
  },
  {
    title: "UGC Content Creation",
    desc: "Raw, authentic user-generated content your brand can repurpose anywhere.",
    tag: "Deliverable",
  },
  {
    title: "Sponsored TikTok Posts",
    desc: "Dedicated sponsored videos crafted to convert, not just entertain.",
    tag: "Paid Partnership",
  },
  {
    title: "Product Launch Campaigns",
    desc: "Full launch strategy — teaser, reveal, and follow-up content series.",
    tag: "Campaign",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "₱5,000",
    features: ["1 TikTok video", "Affiliate link setup", "Basic performance report"],
  },
  {
    name: "Growth",
    price: "₱12,000",
    features: ["3 TikTok videos", "UGC content", "CTR & conversion tracking", "Story posts"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "₱25,000",
    features: ["6 TikTok videos", "Full campaign strategy", "Weekly reports", "Dedicated support"],
  },
];

const BRANDS = [
  "GlowSkin PH", "FitFuel Supplements", "StyleHaus PH", "NaturaBrew", "TechGadgetsPH",
];

const TESTIMONIALS = [
  {
    name: "Maria Santos",
    role: "Marketing Manager, GlowSkin PH",
    quote: "She delivered beyond expectations. Our TikTok sales tripled in two weeks. Highly recommend for any beauty brand.",
  },
  {
    name: "Carlo Reyes",
    role: "Founder, FitFuel Supplements",
    quote: "The conversion rate was insane. Real results, not just vanity metrics. Will definitely work with her again.",
  },
];

export default function Home() {
  return (
    <div className={geist.className} style={{ background: "#FFF0F5", color: "#3a1a2a" }}>

      {/* NAVBAR */}
      <nav style={{ background: "#FBA1B7", position: "sticky", top: 0, zIndex: 100 }}
        className="w-full shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg" style={{ color: "#FFF0F5" }}>@creatorname</span>
          <ul className="hidden md:flex gap-6 text-sm font-medium" style={{ color: "#FFF0F5" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:opacity-70 transition-opacity">{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            style={{ background: "#FFDBAA", color: "#3a1a2a" }}>
            Work With Me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#FBA1B7" }}>TikTok Affiliate Creator</p>
          <h1 className="text-5xl font-bold leading-tight mb-6" style={{ color: "#3a1a2a" }}>
            Driving Real Sales for <span style={{ color: "#FBA1B7" }}>Beauty & Lifestyle</span> Brands
          </h1>
          <p className="text-lg mb-8 opacity-80">
            I create conversion-focused TikTok content that turns viewers into buyers — not just followers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#case-studies"
              className="px-6 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: "#FBA1B7", color: "#FFF0F5" }}>
              View Case Studies
            </a>
            <a href="#contact"
              className="px-6 py-3 rounded-full font-semibold text-sm border-2 transition-opacity hover:opacity-80"
              style={{ borderColor: "#FBA1B7", color: "#FBA1B7" }}>
              Work With Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6" style={{ background: "#fff5f8" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FBA1B7" }}>About Me</p>
            <h2 className="text-3xl font-bold mb-4">Conversion-Focused, Not Just Views</h2>
            <p className="opacity-80 mb-6">
              I'm a TikTok affiliate creator specializing in beauty, skincare, and lifestyle products.
              My content is built around one goal: turning your product into a purchase decision.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                ["Niche", "Beauty, Skincare & Lifestyle"],
                ["Audience", "18–34 y/o Filipino women, 70% female"],
                ["Content Style", "UGC, storytelling, product demos, hooks"],
                ["Positioning", "Conversion-first creator — ROI over reach"],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-2">
                  <span className="font-semibold" style={{ color: "#FBA1B7" }}>{k}:</span>
                  <span className="opacity-80">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden h-72 flex items-center justify-center"
            style={{ background: "#FFDBAA" }}>
            <p className="text-sm opacity-60 font-medium">[ Creator Photo Here ]</p>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FBA1B7" }}>Performance</p>
          <h2 className="text-3xl font-bold mb-12">Numbers That Matter to Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {METRICS.map(({ label, value }) => (
              <div key={label} className="rounded-2xl p-6 shadow-sm"
                style={{ background: "#fff5f8", border: "1px solid #FBA1B7" }}>
                <p className="text-4xl font-bold mb-2" style={{ color: "#FBA1B7" }}>{value}</p>
                <p className="text-sm opacity-70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-24 px-6" style={{ background: "#fff5f8" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "#FBA1B7" }}>Proof of Results</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map(({ brand, problem, action, result }) => (
              <div key={brand} className="rounded-2xl p-6 shadow-sm flex flex-col gap-3"
                style={{ background: "#FFF0F5", border: "1px solid #FFDBAA" }}>
                <p className="font-bold text-lg" style={{ color: "#FBA1B7" }}>{brand}</p>
                <div>
                  <p className="text-xs font-semibold uppercase opacity-50 mb-1">Problem</p>
                  <p className="text-sm opacity-80">{problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase opacity-50 mb-1">What I Did</p>
                  <p className="text-sm opacity-80">{action}</p>
                </div>
                <div className="mt-auto pt-3 rounded-xl px-4 py-3 text-sm font-semibold"
                  style={{ background: "#FFDBAA", color: "#3a1a2a" }}>
                  🎯 {result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "#FBA1B7" }}>Content Portfolio</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Proof of Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VIDEOS.map(({ id, caption }) => (
              <div key={id} className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden h-80 flex items-center justify-center"
                  style={{ background: "#FFDBAA" }}>
                  <p className="text-sm opacity-60 font-medium text-center px-4">[ TikTok Video Embed {id} ]</p>
                </div>
                <p className="text-sm opacity-70 italic">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6" style={{ background: "#fff5f8" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "#FBA1B7" }}>How We Work Together</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Services & Packages</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {SERVICES.map(({ title, desc, tag }) => (
              <div key={title} className="rounded-2xl p-6 flex gap-4 items-start"
                style={{ background: "#FFF0F5", border: "1px solid #FBA1B7" }}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-bold">{title}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "#FFDBAA", color: "#3a1a2a" }}>{tag}</span>
                  </div>
                  <p className="text-sm opacity-70">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(({ name, price, features, highlight }) => (
              <div key={name} className="rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
                style={{
                  background: highlight ? "#FBA1B7" : "#FFF0F5",
                  border: `2px solid ${highlight ? "#FBA1B7" : "#FFDBAA"}`,
                  color: highlight ? "#FFF0F5" : "#3a1a2a",
                }}>
                <p className="font-bold text-lg">{name}</p>
                <p className="text-3xl font-bold">{price}</p>
                <ul className="space-y-2 text-sm flex-1">
                  {features.map(f => (
                    <li key={f} className="flex gap-2 items-start">
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                  className="text-center text-sm font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-80"
                  style={{
                    background: highlight ? "#FFF0F5" : "#FBA1B7",
                    color: highlight ? "#FBA1B7" : "#FFF0F5",
                  }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS & TESTIMONIALS */}
      <section id="brands" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FBA1B7" }}>Social Proof</p>
          <h2 className="text-3xl font-bold mb-10">Brands I've Worked With</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {BRANDS.map(brand => (
              <span key={brand} className="px-5 py-2 rounded-full text-sm font-semibold"
                style={{ background: "#FFDBAA", color: "#3a1a2a" }}>
                {brand}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map(({ name, role, quote }) => (
              <div key={name} className="rounded-2xl p-6 text-left"
                style={{ background: "#fff5f8", border: "1px solid #FBA1B7" }}>
                <p className="text-sm opacity-80 italic mb-4">"{quote}"</p>
                <p className="font-bold text-sm">{name}</p>
                <p className="text-xs opacity-60">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6" style={{ background: "#FBA1B7" }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FFDBAA" }}>Let's Collaborate</p>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#FFF0F5" }}>Let's Scale Your TikTok Sales</h2>
          <p className="mb-8 opacity-80" style={{ color: "#FFF0F5" }}>
            Ready to turn your product into a TikTok bestseller? Reach out and let's talk.
          </p>
          <form className="flex flex-col gap-4 text-left">
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "Brand / Company Name" },
              { id: "email", label: "Email Address", type: "email", placeholder: "hello@yourbrand.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1" style={{ color: "#FFF0F5" }}>{label}</label>
                <input id={id} type={type} placeholder={placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                  style={{ background: "#FFF0F5", color: "#3a1a2a" }} />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: "#FFF0F5" }}>Message</label>
              <textarea id="message" rows={4} placeholder="Tell me about your product and campaign goals..."
                className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                style={{ background: "#FFF0F5", color: "#3a1a2a" }} />
            </div>
            <button type="submit"
              className="w-full py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: "#FFDBAA", color: "#3a1a2a" }}>
              Start Your Affiliate Campaign →
            </button>
          </form>
          <div className="mt-8 flex justify-center gap-6 text-sm" style={{ color: "#FFF0F5" }}>
            <a href="mailto:hello@creatorname.com" className="hover:opacity-70">hello@creatorname.com</a>
            <span>|</span>
            <a href="https://tiktok.com/@creatorname" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">@creatorname</a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-xs opacity-50" style={{ background: "#FBA1B7", color: "#FFF0F5" }}>
        © {new Date().getFullYear()} @creatorname · TikTok Affiliate Creator
      </footer>
    </div>
  );
}
