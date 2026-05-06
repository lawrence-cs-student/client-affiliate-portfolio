import { Geist } from "next/font/google";
import { useState } from "react";

const geist = Geist({ subsets: ["latin"] });

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

const VIDEOS = [
  { id: "1", caption: "Hook-driven review — led to highest CTR of the month.", src: "/videos/video1.mp4" },
  { id: "2", caption: "Storytelling format — emotional connection drove strong purchase intent.", src: "/videos/video2.mp4" },
  { id: "3", caption: "One Piece x Careline Eyeshadow Palette — creative and colourful product showcase.", src: "/videos/video3.mp4" },
  { id: "4", caption: "Trend-jacked product demo — high views in the first 48 hours.", src: "/videos/video4.mp4" },
  { id: "5", caption: "Authentic UGC review — high retention and strong purchase intent.", src: "/videos/video5.mp4" },
  { id: "6", caption: "Produced food content for this limited time offer and focused on crave-worthy close ups, and kitchen action to show the real preparations", src: "/videos/video6.mp4" },
  { id: "7", caption: "Seven107Market Launch | Shot event coverage to hype the new drop of Moringa Soap.", src: "/videos/video7.mp4" },
  { id: "8", caption: "Captured the energy of Bioten's booth launch at Beautycon 2026.", src: "/videos/video8.mp4" },
];

const SERVICES = [
  { title: "Affiliate Campaigns", desc: "Commission-based content that drives measurable sales through TikTok.", tag: "Commission-Based" },
  { title: "Sponsored TikTok Posts", desc: "Dedicated sponsored videos crafted to convert, not just entertain.", tag: "Paid Partnership" },
  { title: "Product Launch Campaigns", desc: "Full launch strategy — teaser, reveal, and follow-up content series.", tag: "Campaign" },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "₱1,500",
    features: ["1 TikTok video", "Affiliate link setup", "Basic performance report"],
  },
  {
    name: "Growth",
    price: "₱3,000",
    features: ["3 TikTok videos", "CTR & conversion tracking", "Story posts"],
    highlight: true,
  },
  {
    name: "Event",
    price: "₱2,500",
    features: ["Product Launch and Beauty Event", "4-6 hours", "1 video about the event"],
  },
];

const BRANDS = [
  { name: "Dove", logo: "/photos/dove.webp" },
  { name: "Garnier", logo: "/photos/garnier.webp" },
  { name: "Ever Bilena", logo: "/photos/ever-bilena.png" },
  { name: "Medicube", logo: "/photos/medicube.jpeg" },
  { name: "Cream Silk", logo: "/photos/cream-silk.jpg" },
  { name: "Careline", logo: "/photos/careline.jpg" },
  { name: "Maybelline", logo: "/photos/maybelline.jpg" },
  { name: "Cosrx", logo: "/photos/cosrx.jpg" },
  { name: "SKIN1004", logo: "/photos/skin1004.webp" },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "success" : "error");
  }
  return (
    <div className={geist.className} style={{ background: "#FFF0F5", color: "#3a1a2a" }}>

      {/* NAVBAR */}
      <nav style={{ background: "#FBA1B7", position: "sticky", top: 0, zIndex: 100 }}
        className="w-full shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg" style={{ color: "#FFF0F5" }}>@itsurgirlmilkshakexxx</span>
          <ul className="hidden md:flex gap-6 text-sm font-medium" style={{ color: "#FFF0F5" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:opacity-70 transition-opacity">{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="text-sm font-semibold px-4 py-2 rounded-full"
            style={{ background: "#FFDBAA", color: "#3a1a2a" }}>
            Work With Me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6"
        style={{ background: "#FFF0F5" }}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#FBA1B7" }}>
            TikTok Affiliate Creator
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-6" style={{ color: "#3a1a2a" }}>
            Driving Real Sales for <span style={{ color: "#FBA1B7" }}>Beauty & Lifestyle</span> Brands
          </h1>
          <p className="text-lg mb-8" style={{ color: "#5a2a3a" }}>
            I create conversion-focused TikTok content that turns viewers into buyers — not just followers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#portfolio" className="px-6 py-3 rounded-full font-semibold text-sm hover:opacity-80 transition-opacity"
              style={{ background: "#FBA1B7", color: "#FFF0F5" }}>
              View My Content
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full font-semibold text-sm border-2 hover:opacity-80 transition-opacity"
              style={{ borderColor: "#FBA1B7", color: "#FBA1B7" }}>
              Work With Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6" style={{ background: "#FBA1B7" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FFDBAA" }}>About Me</p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#FFF0F5" }}>Conversion-Focused, Not Just Views</h2>
            <p className="mb-6" style={{ color: "#FFF0F5" }}>
              I'm a TikTok affiliate creator specializing in beauty, skincare, and lifestyle products.
              My content is built around one goal: turning your product into a purchase decision.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                ["Niche", "Beauty, Skincare & Lifestyle"],
                ["Audience", "25–34 y/o Filipino women, 80% female"],
                ["Content Style", "storytelling, product demos, hooks"],
                ["Positioning", "Conversion-first creator — ROI over reach"],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-2">
                  <span className="font-semibold" style={{ color: "#FFDBAA" }}>{k}:</span>
                  <span style={{ color: "#FFF0F5" }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden h-72">
            <img src="/photos/irish-photo.jpg" alt="Creator photo" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6" style={{ background: "#3a1a2a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "#FBA1B7", color: "#FFF0F5" }}>Content Portfolio</span>
            <h2 className="text-4xl font-bold mt-4" style={{ color: "#FFF0F5" }}>Proof of Work</h2>
            <p className="mt-3 text-sm" style={{ color: "#FFDBAA" }}>
              Real content. Real results. Every video made to convert.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {VIDEOS.map(({ id, caption, src }) => (
              <div key={id} className="flex flex-col rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
                style={{ background: "#2a0f1a", border: "1px solid #FBA1B7" }}>
                <div style={{ aspectRatio: "9/16" }}>
                  <video src={src} controls className="w-full h-full object-cover" />
                </div>
                <div className="px-4 py-3 flex flex-col gap-1">
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FBA1B7" }}>
                    Video {id}
                  </p>
                  <p className="text-sm leading-snug" style={{ color: "#FFF0F5" }}>{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6" style={{ background: "#FBA1B7" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "#FFDBAA" }}>How We Work Together</p>
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#FFF0F5" }}>Services & Packages</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {SERVICES.map(({ title, desc, tag }) => (
              <div key={title} className="rounded-2xl p-6 flex gap-4 items-start"
                style={{ background: "rgba(255,240,245,0.15)", border: "1px solid rgba(255,255,255,0.35)" }}>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <p className="font-bold" style={{ color: "#FFF0F5" }}>{title}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: "#FFDBAA", color: "#3a1a2a" }}>{tag}</span>
                  </div>
                  <p className="text-sm" style={{ color: "#FFF0F5" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PACKAGES.map(({ name, price, features, highlight }) => (
              <div key={name} className="rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
                style={{
                  background: highlight ? "#FFF0F5" : "rgba(255,240,245,0.15)",
                  border: `2px solid ${highlight ? "#FFDBAA" : "rgba(255,255,255,0.35)"}`,
                  color: highlight ? "#3a1a2a" : "#FFF0F5",
                }}>
                {highlight && (
                  <span className="text-xs font-bold uppercase tracking-widest self-start px-2 py-0.5 rounded-full"
                    style={{ background: "#FBA1B7", color: "#FFF0F5" }}>Most Popular</span>
                )}
                <p className="font-bold text-lg">{name}</p>
                <p className="text-3xl font-bold" style={{ color: highlight ? "#FBA1B7" : "#FFDBAA" }}>{price}</p>
                <ul className="space-y-2 text-sm flex-1">
                  {features.map(f => (
                    <li key={f} className="flex gap-2 items-center">
                      <span style={{ color: highlight ? "#FBA1B7" : "#FFDBAA" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                  className="text-center text-sm font-bold px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
                  style={{
                    background: highlight ? "#FBA1B7" : "#FFF0F5",
                    color: highlight ? "#FFF0F5" : "#FBA1B7",
                  }}>
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="py-24 px-6" style={{ background: "#FFF0F5" }}>
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: "#FFDBAA", color: "#3a1a2a" }}>Social Proof</span>
          <h2 className="text-3xl font-bold mt-4 mb-3" style={{ color: "#3a1a2a" }}>Brands I've Worked With</h2>
          <p className="text-sm mb-14" style={{ color: "#5a2a3a" }}>Trusted by beauty and lifestyle brands to deliver real results.</p>
          <div className="flex flex-wrap justify-center gap-10">
            {BRANDS.map(({ name, logo }) => (
              <div key={name} className="flex flex-col items-center gap-3 group">
                <div className="rounded-full overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                  style={{ width: "90px", height: "90px", border: "4px solid #FBA1B7", outline: "4px solid #FFDBAA", outlineOffset: "3px" }}>
                  <img src={logo} alt={name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold" style={{ color: "#FBA1B7" }}>{name}</p>
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
          <p className="mb-8" style={{ color: "#FFF0F5" }}>
            Ready to turn your product into a TikTok bestseller? Reach out and let's talk.
          </p>
          <form className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
            {[
              { id: "name", label: "Brand / Company Name", type: "text", placeholder: "e.g. GlowSkin PH" },
              { id: "email", label: "Email Address", type: "email", placeholder: "hello@yourbrand.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-semibold mb-1" style={{ color: "#FFF0F5" }}>{label}</label>
                <input id={id} type={type} placeholder={placeholder} required
                  value={form[id]}
                  onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                  style={{ background: "#FFF0F5", color: "#3a1a2a" }} />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1" style={{ color: "#FFF0F5" }}>Message</label>
              <textarea id="message" rows={4} placeholder="Tell me about your product and campaign goals..." required
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                style={{ background: "#FFF0F5", color: "#3a1a2a" }} />
            </div>
            <button type="submit" disabled={status === "sending"}
              className="w-full py-3 rounded-full font-bold text-sm hover:opacity-80 transition-opacity disabled:opacity-50"
              style={{ background: "#FFDBAA", color: "#3a1a2a" }}>
              {status === "sending" ? "Sending..." : "Start Your Affiliate Campaign →"}
            </button>
            {status === "success" && <p className="text-sm text-center font-semibold" style={{ color: "#FFF0F5" }}>✅ Message sent! I'll get back to you soon.</p>}
            {status === "error" && <p className="text-sm text-center font-semibold" style={{ color: "#FFDBAA" }}>❌ Something went wrong. Please try again.</p>}
          </form>
          <div className="mt-6 flex justify-center gap-6 text-sm" style={{ color: "#FFF0F5" }}>
            <a href="mailto:irishannexxx@gmail.com" className="hover:opacity-70">irishannexxx@gmail.com</a>
            <span>|</span>
            <a href="https://tiktok.com/@itsurgirlmilkshakexxx" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
              @itsurgirlmilkshakexxx
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <p className="col-span-2 text-sm font-semibold text-center mb-1" style={{ color: "#FFF0F5" }}>Or reach me through</p>
            <a href="https://www.instagram.com/itsurgirlmilkshakex/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl px-4 py-4 transition-transform hover:scale-105 shadow-md"
              style={{ background: "#FFF0F5", color: "#3a1a2a" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)"/>
              </svg>
              <div className="text-left">
                <p className="font-bold text-sm">Instagram</p>
                <p className="text-xs" style={{ color: "#5a2a3a" }}>@itsurgirlmilkshakex</p>
              </div>
            </a>

            <a href="viber://chat?number=+639397946806"
              className="flex items-center gap-3 rounded-2xl px-4 py-4 transition-transform hover:scale-105 shadow-md"
              style={{ background: "#FFF0F5", color: "#3a1a2a" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#7360f2" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.93 9.93 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.17c-.2.56-.99 1.03-1.62 1.16-.43.09-.99.16-2.88-.62-2.42-1-3.97-3.46-4.09-3.62-.12-.16-.97-1.29-.97-2.46 0-1.17.61-1.74.83-1.98.22-.24.48-.3.64-.3h.46c.15 0 .35-.06.55.42.2.49.69 1.69.75 1.81.06.12.1.27.02.43-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.61.99 1.31 1.6.9.8 1.66 1.05 1.9 1.17.24.12.38.1.52-.06.14-.16.59-.69.75-.93.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.56-.14 1.12z"/>
              </svg>
              <div className="text-left">
                <p className="font-bold text-sm">Viber</p>
                <p className="text-xs" style={{ color: "#5a2a3a" }}>09397946806</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center" style={{ background: "#3a1a2a" }}>
        <p className="text-sm font-semibold mb-1" style={{ color: "#FBA1B7" }}>@itsurgirlmilkshakexxx</p>
        <p className="text-xs" style={{ color: "rgba(255,219,170,0.7)" }}>© {new Date().getFullYear()} · TikTok Affiliate Creator · Made with 🩷</p>
      </footer>
    </div>
  );
}
