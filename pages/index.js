import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

const VIDEOS = [
  { id: "1", tag: "Highest CTR", caption: "Hook-driven review — led to highest CTR of the month.", src: "/videos/video1.mp4" },
  { id: "2", tag: "Emotional Hook", caption: "Storytelling format — emotional connection drove strong purchase intent.", src: "/videos/video2.mp4" },
  { id: "3", tag: "Aesthetic Showcase", caption: "One Piece x Careline Eyeshadow Palette — creative and colourful product showcase.", src: "/videos/video3.mp4" },
  { id: "4", tag: "Viral Trend", caption: "Trend-jacked product demo — high views in the first 48 hours.", src: "/videos/video4.mp4" },
  { id: "5", tag: "UGC Review", caption: "Authentic UGC review — high retention and strong purchase intent.", src: "/videos/video5.mp4" },
  { id: "6", tag: "Close-up Action", caption: "Produced food content for this limited time offer and focused on crave-worthy close ups, and kitchen action to show the real preparations.", src: "/videos/video6.mp4" },
  { id: "7", tag: "Event Vlog", caption: "Allure Beauty Lab 2026", src: "/videos/video7.mp4" },
  { id: "8", tag: "Brand Launch", caption: "Captured the energy of Bioten's booth launch at Beautycon 2026.", src: "/videos/video8.mp4" },
  { id: "9", tag: "Food Review", caption: "Popeyes Brioche Meal.", src: "/videos/video9.mp4" },
  { id: "10", tag: "Kollab Event", caption: "Shopee KOLLAB August 2026", src: "/videos/video10.mp4" },
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

  const doubledBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className={`${jakarta.variable} ${playfair.variable} font-sans min-h-screen relative overflow-hidden`} style={{ background: "var(--cream-bg)", color: "var(--mauve-dark)" }}>
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-10%] ambient-glow-pink"></div>
      <div className="absolute top-[40%] right-[-10%] ambient-glow-cream"></div>
      <div className="absolute bottom-[20%] left-[-15%] ambient-glow-pink"></div>

      {/* FLOATING NAVBAR */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-300">
        <div className="glass-panel-light rounded-2xl shadow-[0_8px_32px_rgba(251,161,183,0.08)] px-6 py-4 flex items-center justify-between border border-[rgba(255,255,255,0.75)]">
          <span className="font-bold text-sm md:text-base tracking-tight font-serif text-[var(--mauve-dark)]">
            @itsurgirlmilkshakexxx
          </span>
          <ul className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-wider text-[var(--mauve-muted)]">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:text-[var(--pink-accent)] transition-colors relative group py-1">
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--pink-primary)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover-lift hover-glow text-white shadow-sm"
            style={{ background: "linear-gradient(135deg, var(--pink-primary) 0%, var(--pink-accent) 100%)" }}>
            Work With Me
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center px-6 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column (Text Content) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--mauve-muted)] glass-panel-pink border border-[rgba(251,161,183,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[var(--pink-accent)] animate-pulse"></span>
              TikTok Affiliate Creator
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight font-serif text-[var(--mauve-dark)]">
              Driving Real Sales for <br />
              <span className="text-[var(--pink-accent)] relative inline-block">
                Beauty & Lifestyle
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-[var(--pink-soft)] -z-10 rounded-sm"></span>
              </span> <br />
              Brands
            </h1>
            <p className="text-base md:text-lg text-[var(--mauve-muted)] max-w-lg leading-relaxed">
              I create conversion-focused TikTok content that turns passive viewers into active buyers — prioritizing ROI over just empty views.
            </p>
            <div className="flex gap-4 flex-wrap pt-2">
              <a href="#portfolio" className="px-7 py-3.5 rounded-full font-bold text-sm hover-lift hover-glow text-white shadow-md transition-all duration-300"
                style={{ background: "linear-gradient(135deg, var(--pink-primary) 0%, var(--pink-accent) 100%)" }}>
                View My Content
              </a>
              <a href="#contact" className="px-7 py-3.5 rounded-full font-bold text-sm border-2 border-[var(--pink-primary)] text-[var(--pink-accent)] hover:bg-[var(--pink-light)] hover-lift transition-all duration-300">
                Work With Me
              </a>
            </div>
          </div>
          
          {/* Right Column (Visual Mockup Showcase) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--pink-primary)] to-[var(--gold-soft)] rounded-3xl opacity-20 blur-2xl -z-10"></div>
            
            {/* Phone-styled Image Container */}
            <div className="relative w-[280px] md:w-[320px] aspect-[9/16] rounded-[40px] p-3 bg-white shadow-[0_20px_50px_rgba(32,11,21,0.15)] border-4 border-[var(--mauve-dark)] overflow-hidden">
              <div className="w-full h-full rounded-[30px] overflow-hidden relative group">
                <img src="/photos/irish-photo.jpg" alt="Irish - TikTok Affiliate Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(32,11,21,0.5)] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-4 right-4 text-white text-left space-y-2 pointer-events-none">
                  <p className="font-bold text-sm">@itsurgirlmilkshakexxx</p>
                  <p className="text-xs text-gray-200 line-clamp-2">Authentic UGC review — high retention and strong purchase intent. 💄✨</p>
                </div>
              </div>
              
              {/* Floating Stats Badges */}
              <div className="absolute -left-6 top-[20%] glass-panel-light px-4 py-2.5 rounded-2xl shadow-lg border border-white flex items-center gap-2.5 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-8 h-8 rounded-full bg-[var(--pink-soft)] flex items-center justify-center text-[var(--pink-accent)] font-bold text-xs">📈</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-[var(--mauve-muted)] uppercase tracking-wider">Conversion</p>
                  <p className="text-xs font-extrabold text-[var(--mauve-dark)]">ROI-First</p>
                </div>
              </div>
              
              <div className="absolute -right-6 bottom-[25%] glass-panel-pink px-4 py-2.5 rounded-2xl shadow-lg border border-[rgba(251,161,183,0.4)] flex items-center gap-2.5 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                <div className="w-8 h-8 rounded-full bg-[var(--gold-soft)] flex items-center justify-center text-amber-700 font-bold text-xs">✨</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-[var(--mauve-muted)] uppercase tracking-wider">Audience</p>
                  <p className="text-xs font-extrabold text-[var(--mauve-dark)]">80% Female</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 relative bg-[var(--pink-light)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Description */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--pink-soft)] text-[var(--pink-accent)] border border-[rgba(251,161,183,0.2)]">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--mauve-dark)]">
                Focusing on Conversion, Not Just Views
              </h2>
              <p className="text-[var(--mauve-muted)] leading-relaxed">
                I'm a TikTok affiliate creator specializing in beauty, skincare, and lifestyle products. 
                My content is built around one clear goal: turning your product showcase into a real purchase decision.
              </p>
              <p className="text-[var(--mauve-muted)] leading-relaxed">
                I leverage high-retention hooks, honest storytelling, and clear calls-to-action to bridge the gap between audience attention and brand sales.
              </p>
            </div>

            {/* Right Column: Grid Dashboard */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {[
                { title: "Niche", desc: "Beauty, Skincare & Lifestyle", icon: "💄" },
                { title: "Audience", desc: "25–34 y/o, 80% Female (PH)", icon: "👩‍🦰" },
                { title: "Content Style", desc: "Storytelling, demos, hooks", icon: "🎥" },
                { title: "Positioning", desc: "Conversion-first & ROI focused", icon: "🎯" }
              ].map(({ title, desc, icon }, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-panel-light border border-[rgba(255,255,255,0.7)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover-lift flex flex-col justify-between h-[160px] text-left">
                  <div className="text-2xl">{icon}</div>
                  <div>
                    <p className="text-[10px] font-extrabold text-[var(--pink-accent)] uppercase tracking-wider mb-1">{title}</p>
                    <p className="text-xs md:text-sm font-bold text-[var(--mauve-dark)] leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 relative" style={{ background: "var(--mauve-deep)" }}>
        <div className="absolute top-[20%] right-0 ambient-glow-pink opacity-30"></div>
        <div className="absolute bottom-[20%] left-0 ambient-glow-cream opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--mauve-dark)] text-[var(--pink-accent)] border border-[rgba(251,161,183,0.15)]">
              Content Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white">
              Proof of Work
            </h2>
            <p className="text-sm text-[var(--pink-soft)] max-w-md mx-auto opacity-80">
              Real content. Real results. Every video custom-crafted to capture attention and convert.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map(({ id, caption, src, tag }) => (
              <div key={id} className="group flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(251,161,183,0.15)] bg-[var(--mauve-dark)] border border-[rgba(251,161,183,0.15)] hover:border-[rgba(251,161,183,0.4)]">
                {/* Video Container in Phone mockup */}
                <div className="relative aspect-[9/16] bg-black overflow-hidden">
                  {/* Phone Notch Mockup */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 rounded-full bg-[var(--mauve-deep)] z-20 flex items-center justify-center opacity-70">
                    <span className="w-2.5 h-2.5 rounded-full bg-black block mr-2"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black block"></span>
                  </div>
                  
                  <video src={src} controls className="w-full h-full object-cover relative z-10" />
                  
                  {/* Bottom overlay inside video */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--mauve-deep)] via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
                </div>
                
                {/* Content Description */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-3 text-left">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--pink-accent)]">
                        Video #{id}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[rgba(251,161,183,0.1)] text-[var(--pink-primary)] border border-[rgba(251,161,183,0.15)]">
                        {tag}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-200 leading-snug line-clamp-3">
                      {caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 relative bg-[var(--cream-bg)]">
        <div className="absolute top-[10%] left-[-5%] ambient-glow-pink opacity-20"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--pink-soft)] text-[var(--pink-accent)] border border-[rgba(251,161,183,0.2)]">
            How We Work Together
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[var(--mauve-dark)] mt-4 mb-16">
            Services & Packages
          </h2>

          {/* Services Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 text-left">
            {SERVICES.map(({ title, desc, tag }) => (
              <div key={title} className="glass-panel-pink rounded-3xl p-8 hover-lift shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-[rgba(251,161,183,0.2)] flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--pink-soft)] text-[var(--pink-accent)]">
                    {tag}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--mauve-dark)]">{title}</h3>
                  <p className="text-xs md:text-sm text-[var(--mauve-muted)] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Packages Card Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {PACKAGES.map(({ name, price, features, highlight }) => (
              <div key={name} className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative text-left hover-lift ${
                highlight 
                  ? "glass-panel-light border-2 border-[var(--gold-primary)] shadow-[0_20px_45px_rgba(212,175,55,0.15)] hover-glow" 
                  : "glass-panel-pink border border-[rgba(251,161,183,0.2)] shadow-sm"
              }`}>
                {highlight && (
                  <span className="absolute -top-3.5 left-6 text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full text-white shadow-md"
                    style={{ background: "linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-accent) 100%)" }}>
                    ⭐ Most Popular
                  </span>
                )}
                
                <div className="space-y-4">
                  <p className="font-extrabold text-xs uppercase tracking-wider text-[var(--mauve-muted)]">{name}</p>
                  <p className="text-3xl font-extrabold font-serif text-[var(--mauve-dark)] flex items-baseline gap-1">
                    {price}
                  </p>
                  <div className="w-full h-px bg-[rgba(251,161,183,0.2)] my-4"></div>
                  <ul className="space-y-3.5 text-xs md:text-sm">
                    {features.map(f => (
                      <li key={f} className="flex gap-2.5 items-start text-[var(--mauve-muted)] leading-snug">
                        <span className="text-[var(--pink-accent)] font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-8">
                  <a href="#contact" className="block text-center text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all duration-300 hover-lift text-white"
                    style={{ 
                      background: highlight 
                        ? "linear-gradient(135deg, var(--pink-primary) 0%, var(--pink-accent) 100%)"
                        : "linear-gradient(135deg, var(--mauve-dark) 0%, var(--mauve-muted) 100%)"
                    }}>
                    Get Started →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="py-20 overflow-hidden bg-[var(--pink-light)] border-y border-[rgba(251,161,183,0.15)] relative">
        <div className="max-w-6xl mx-auto text-center px-6 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--pink-soft)] text-[var(--pink-accent)] border border-[rgba(251,161,183,0.2)]">
            Social Proof
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[var(--mauve-dark)] mt-4">
            Brands I've Worked With
          </h2>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--pink-light)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--pink-light)] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-ticker gap-12 py-4">
            {doubledBrands.map(({ name, logo }, index) => (
              <div key={`${name}-${index}`} className="flex flex-col items-center justify-center gap-2 flex-shrink-0 group">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-[var(--pink-primary)] p-0.5 bg-white group-hover:scale-105 group-hover:border-[var(--pink-accent)] group-hover:shadow-lg transition-all duration-300">
                  <img src={logo} alt={name} className="w-full h-full object-cover rounded-full transition-all duration-300" />
                </div>
                <span className="text-[10px] font-bold text-[var(--mauve-muted)] opacity-60 group-hover:opacity-100 group-hover:text-[var(--pink-accent)] transition-all duration-300 uppercase tracking-wider">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 relative" style={{ background: "var(--cream-bg)" }}>
        <div className="absolute bottom-[10%] right-[-5%] ambient-glow-pink opacity-25"></div>
        
        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--pink-soft)] text-[var(--pink-accent)] border border-[rgba(251,161,183,0.2)]">
            Let's Collaborate
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--mauve-dark)] mt-4 mb-4">
            Let's Scale Your TikTok Sales
          </h2>
          <p className="text-xs md:text-sm text-[var(--mauve-muted)] mb-12 max-w-md mx-auto leading-relaxed">
            Ready to turn your product into a TikTok bestseller? Drop me a message and let's coordinate.
          </p>

          {/* Form Glass Card */}
          <div className="glass-panel-pink rounded-3xl p-8 md:p-10 border border-[rgba(251,161,183,0.25)] shadow-[0_20px_50px_rgba(251,161,183,0.08)] text-left mb-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { id: "name", label: "Brand / Company Name", type: "text", placeholder: "e.g. GlowSkin PH" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "hello@yourbrand.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="space-y-2">
                    <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-[var(--mauve-dark)]">{label}</label>
                    <input id={id} type={type} placeholder={placeholder} required
                      value={form[id]}
                      onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                      className="w-full rounded-2xl px-4 py-3.5 text-xs md:text-sm outline-none border border-[rgba(251,161,183,0.2)] focus:border-[var(--pink-accent)] focus:ring-1 focus:ring-[var(--pink-accent)] transition-all duration-200"
                      style={{ background: "var(--cream-light)", color: "var(--mauve-dark)" }} />
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[var(--mauve-dark)]">Message</label>
                <textarea id="message" rows={4} placeholder="Tell me about your product and campaign goals..." required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full rounded-2xl px-4 py-3.5 text-xs md:text-sm outline-none resize-none border border-[rgba(251,161,183,0.2)] focus:border-[var(--pink-accent)] focus:ring-1 focus:ring-[var(--pink-accent)] transition-all duration-200"
                  style={{ background: "var(--cream-light)", color: "var(--mauve-dark)" }} />
              </div>
              
              <button type="submit" disabled={status === "sending"}
                className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white shadow-md hover-lift transition-all duration-300 disabled:opacity-50 cursor-pointer"
                style={{ background: "linear-gradient(135deg, var(--pink-primary) 0%, var(--pink-accent) 100%)" }}>
                {status === "sending" ? "Sending Details..." : "Start Your Affiliate Campaign →"}
              </button>
              
              {status === "success" && <p className="text-sm text-center font-bold text-emerald-600">✅ Message sent! I'll get back to you soon.</p>}
              {status === "error" && <p className="text-sm text-center font-bold text-rose-500">❌ Something went wrong. Please try again.</p>}
            </form>
          </div>

          {/* Reach Out Direct / Social buttons */}
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--mauve-muted)]">Or contact directly via</p>
              <a href="mailto:irishannexxx@gmail.com" className="text-sm font-semibold text-[var(--pink-accent)] hover:underline">
                irishannexxx@gmail.com
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://www.instagram.com/itsurgirlmilkshakex/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-4 bg-white shadow-sm border border-[rgba(251,161,183,0.15)] hover-lift transition-transform">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-50 text-rose-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="ig-grad-new" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad-new)" strokeWidth="2.5" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="url(#ig-grad-new)" strokeWidth="2.5" fill="none"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad-new)"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-extrabold text-xs text-[var(--mauve-dark)] uppercase tracking-wide">Instagram</p>
                  <p className="text-xs text-[var(--mauve-muted)]">@itsurgirlmilkshakex</p>
                </div>
              </a>

              <a href="viber://chat?number=+639397946806"
                className="flex items-center gap-4 rounded-2xl p-4 bg-white shadow-sm border border-[rgba(251,161,183,0.15)] hover-lift transition-transform">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-50 text-purple-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.35A9.93 9.93 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.17c-.2.56-.99 1.03-1.62 1.16-.43.09-.99.16-2.88-.62-2.42-1-3.97-3.46-4.09-3.62-.12-.16-.97-1.29-.97-2.46 0-1.17.61-1.74.83-1.98.22-.24.48-.3.64-.3h.46c.15 0 .35-.06.55.42.2.49.69 1.69.75 1.81.06.12.1.27.02.43-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.61.99 1.31 1.6.9.8 1.66 1.05 1.9 1.17.24.12.38.1.52-.06.14-.16.59-.69.75-.93.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.56-.14 1.12z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-extrabold text-xs text-[var(--mauve-dark)] uppercase tracking-wide">Viber</p>
                  <p className="text-xs text-[var(--mauve-muted)]">09397946806</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center relative z-10" style={{ background: "var(--mauve-deep)", borderTop: "1px solid rgba(251, 161, 183, 0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <p className="text-base font-extrabold tracking-tight font-serif text-white">@itsurgirlmilkshakexxx</p>
          <p className="text-[10px] uppercase tracking-wider text-[var(--pink-primary)] font-semibold">
            TikTok Affiliate Creator · Beauty & Lifestyle
          </p>
          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} · Made with <span className="inline-block text-[var(--pink-accent)] animate-heartbeat">❤️</span> for scaling brands.
          </p>
        </div>
      </footer>
    </div>
  );
}
