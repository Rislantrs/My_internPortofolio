import React from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const essentialLinks = [
    {
      title: "LinkedIn Profile",
      description: "Connect with me professionally on LinkedIn for networking and career updates.",
      href: "https://www.linkedin.com/in/m-rislan-tristansyah-96669a294/",
      label: "linkedin.com/in/m-rislan-tristansyah",
      badge: "Professional Network",
      icon: (
        <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      ctaText: "Kunjungi LinkedIn",
      accentBorder: "hover:border-sky-500/50 hover:shadow-sky-500/10",
      accentBadge: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    },
    {
      title: "GitHub Repositories",
      description: "Explore my source code, open-source projects, and technical experiments.",
      href: "https://github.com/Rislantrs",
      label: "github.com/Rislantrs",
      badge: "Source Code & Projects",
      icon: (
        <svg className="w-6 h-6 text-slate-100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
      ctaText: "Buka GitHub",
      accentBorder: "hover:border-slate-400/50 hover:shadow-slate-400/10",
      accentBadge: "bg-slate-500/10 text-slate-300 border-slate-500/20",
    },
    {
      title: "Curriculum Vitae (CV / Resume)",
      description: "Download or view my updated academic resume, internship records, and credentials.",
      href: "https://www.rislantrs.me/assets/M%20Rislan%20Tristansyah-resume.pdf",
      label: "M Rislan Tristansyah - Resume.pdf",
      badge: "Official Document",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      ctaText: "Lihat / Unduh CV (PDF)",
      accentBorder: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
      accentBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    },
    {
      title: "Booking & 1-on-1 Consultation",
      description: "Schedule a virtual meeting, mentorship discussion, or project briefing directly on my calendar.",
      href: "https://calendly.com/rislantristansyah",
      label: "calendly.com/rislantristansyah",
      badge: "Schedule a Meeting",
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      ctaText: "Jadwalkan Diskusi",
      accentBorder: "hover:border-amber-500/50 hover:shadow-amber-500/10",
      accentBadge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    },
  ];

  const secondaryLinks = [
    {
      title: "Credly Credentials",
      role: "Google Gemini & Alibaba ACA Certified",
      href: "https://www.credly.com/users/m-rislan-tristansyah",
      badge: "Verified Badges",
      iconColor: "text-indigo-400",
    },
    {
      title: "Medium Tech Blog",
      role: "AI, Cloud & Networking Articles",
      href: "https://medium.com/@rislantristansyah",
      badge: "@rislantristansyah",
      iconColor: "text-rose-400",
    },
    {
      title: "Interactive Web Showcase",
      role: "Main Portfolio & 3D Interactive Web",
      href: "https://www.rislantrs.me/",
      badge: "rislantrs.me",
      iconColor: "text-cyan-400",
    },
  ];

  const skills = [
    {
      category: "Artificial Intelligence & ML",
      items: ["Generative AI (Gemini)", "Python", "Neural Networks", "Groq API / LLM Integrations", "Data Modeling"],
    },
    {
      category: "Modern Web Engineering",
      items: ["Next.js (App Router)", "React.js", "TypeScript", "Tailwind CSS", "Flask", "RESTful APIs", "MySQL"],
    },
    {
      category: "Cloud & Infrastructure",
      items: ["Cloudflare Pages & Workers", "Alibaba Cloud (ACA Certified)", "Docker Basics", "Linux Administration", "CI/CD"],
    },
    {
      category: "Telecommunications & Networking",
      items: ["Network Architecture", "Routing & Switching", "IoT Protocols", "Wireless Systems", "Kearsipan Digital"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40"></div>
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/3 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 font-bold tracking-tight text-slate-100 hover:text-cyan-400 transition-colors">
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-sm font-black">
              R
            </span>
            <span>M Rislan Tristansyah</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#profile" className="hover:text-slate-100 transition-colors">Profil</a>
            <a href="#links" className="hover:text-slate-100 transition-colors">Tautan Penting</a>
            <a href="#contact" className="hover:text-slate-100 transition-colors">Kirim Pesan</a>
            <a href="#skills" className="hover:text-slate-100 transition-colors">Keahlian</a>
            <a href="#capstone" className="hover:text-slate-100 transition-colors">Capstone</a>
            <a href="#articles" className="hover:text-slate-100 transition-colors">Artikel</a>
          </nav>

          <a
            href="https://calendly.com/rislantristansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-500/20 flex items-center gap-1.5"
          >
            <span>Book a Call</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main Single-Page Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col gap-20">
        
        {/* 1. HERO & PROFIL SINGKAT */}
        <section id="profile" className="pt-4 scroll-mt-24">
          <div className="p-6 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="flex flex-col gap-6">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for Internship, Collaboration & Research</span>
              </div>

              {/* Title & Introduction */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  M Rislan Tristansyah
                </h1>
                <p className="text-lg sm:text-xl font-medium text-cyan-400">
                  Creative Developer & AI Enthusiast • Telecommunication Systems Student
                </p>
                <p className="text-sm sm:text-base text-slate-400">
                  Universitas Pendidikan Indonesia (UPI) • Semester 7
                </p>
              </div>

              {/* Bio Description */}
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl space-y-3 border-t border-slate-800/80 pt-5">
                <p>
                  Saya adalah mahasiswa tingkat akhir di program studi <strong>Sistem Telekomunikasi, Universitas Pendidikan Indonesia</strong> dengan fokus riset dan ketertarikan mendalam pada bidang <strong>Kecerdasan Buatan (Artificial Intelligence)</strong>, jaringan komputasi awan (Cloud Computing), serta pengembangan aplikasi web modern yang bersih dan efisien.
                </p>
                <p>
                  Memiliki pengalaman magang di <strong>Dinas Kearsipan dan Perpustakaan (Bidang P3K)</strong> yang berkontribusi dalam pencapaian <em>Juara 1 Simpul Jaringan Terbaik Nasional</em>, serta aktif di kepengurusan himpunan <strong>HMST</strong> departemen profesi & kejuruan.
                </p>
              </div>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#links"
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
                >
                  <span>Lihat Tautan & Kontak</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="https://www.rislantrs.me/assets/M%20Rislan%20Tristansyah-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Unduh CV Lengkap</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TAUTAN PENTING (ESSENTIAL LINKS HUB) */}
        <section id="links" className="scroll-mt-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-slate-800 pb-4">
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">01 / Connection Hub</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Tautan Penting & Kontak</h2>
              <p className="text-sm text-slate-400">
                Pintu masuk utama untuk melihat rekam jejak profesional, kode sumber, dokumen kurikulum vitae, dan jadwal konsultasi.
              </p>
            </div>

            {/* 4 Main Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {essentialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all duration-300 shadow-md flex flex-col justify-between gap-4 ${item.accentBorder} hover:-translate-y-1`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${item.accentBadge}`}>
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{item.label}</p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span>{item.ctaText}</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Badges & Portals */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {secondaryLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60 transition-all flex items-center justify-between text-left group"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 truncate">{link.title}</p>
                    <p className="text-[11px] text-slate-400 truncate">{link.role}</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                    {link.badge}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 2. KIRIM PESAN LANGSUNG (DYNAMIC FEATURE VIA WEB3FORMS) */}
        <section id="contact" className="scroll-mt-24">
          <ContactForm />
        </section>

        {/* 3. KEAHLIAN & FOKUS TEKNOLOGI */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-slate-800 pb-4">
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">03 / Technical Skills</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Keahlian & Fokus yang Dibangun</h2>
              <p className="text-sm text-slate-400">
                Teknologi, metodologi, dan standar sistem yang secara konsisten saya pelajari dan terapkan dalam berbagai proyek nyata.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. RUANG KOSONG / PLACEHOLDER CAPSTONE PROJECT */}
        <section id="capstone" className="scroll-mt-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-slate-800 pb-4">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold">04 / Future Project</span>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Proyek Masa Depan (Capstone Project)</h2>
                <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-medium">
                  Placeholder / In Development
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Ruang khusus untuk proyek akhir / capstone utama yang sedang dirancang dan dikembangkan.
              </p>
            </div>

            {/* Capstone Placeholder Container */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/30 text-center flex flex-col items-center justify-center gap-4 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-1">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>

              <div className="max-w-xl space-y-2">
                <h3 className="text-xl font-bold text-slate-100">
                  AI-Driven Telecommunication & Smart Network Optimization
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Proyek capstone ini akan mengintegrasikan algoritma model kecerdasan buatan untuk menganalisis performa bandwidth, pendeteksian anomali transmisi sinyal data, serta visualisasi dashboard real-time berbasis Next.js dan Cloudflare Edge.
                </p>
              </div>

              {/* Progress Milestones Placeholder */}
              <div className="w-full max-w-lg grid grid-cols-3 gap-2 pt-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 font-mono">
                  <span className="text-[10px] text-emerald-400 block font-bold">FASE 1</span>
                  Riset Konsep
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-amber-500/30 text-amber-300 font-mono">
                  <span className="text-[10px] text-amber-400 block font-bold">FASE 2</span>
                  Model & API
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 font-mono">
                  <span className="text-[10px] text-slate-500 block font-bold">FASE 3</span>
                  Deployment
                </div>
              </div>

              <div className="mt-2 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Dokumentasi dan live demo repositori akan ditautkan di sini setelah pengujian selesai.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. RUANG KOSONG / PLACEHOLDER ARTIKEL & TULISAN */}
        <section id="articles" className="scroll-mt-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-slate-800 pb-4">
              <span className="text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold">05 / Writings & Publications</span>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Artikel & Tulisan Teknis</h2>
                <a
                  href="https://medium.com/@rislantristansyah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 font-medium hover:bg-rose-500/20 transition-colors flex items-center gap-1"
                >
                  <span>Medium Profile</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-slate-400">
                Dokumentasi tulisan, catatan riset, dan analisis seputar AI, web engineering, dan telekomunikasi.
              </p>
            </div>

            {/* Articles Placeholders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 flex flex-col justify-between gap-4 group hover:border-rose-500/40 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>DRAFT ARTICLE #01</span>
                    <span className="text-rose-400">Upcoming</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-200 group-hover:text-rose-300 transition-colors">
                    Membangun Website Cepat & Ramah SEO dengan Next.js App Router
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pembahasan mendalam seputar pemisahan layout.tsx, server components, serta alur static export menuju Cloudflare Pages.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3">
                  Topik: Web Engineering • Deployment
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 flex flex-col justify-between gap-4 group hover:border-rose-500/40 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>DRAFT ARTICLE #02</span>
                    <span className="text-rose-400">Upcoming</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-200 group-hover:text-rose-300 transition-colors">
                    Eksplorasi Generative AI dalam Otomasi Sistem Telekomunikasi
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Penerapan model Gemini dan LLM inference berlatensi rendah untuk pemrosesan informasi jaringan telekomunikasi.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3">
                  Topik: Artificial Intelligence • Gemini
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 flex flex-col justify-between gap-4 group hover:border-rose-500/40 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>DRAFT ARTICLE #03</span>
                    <span className="text-rose-400">Upcoming</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-200 group-hover:text-rose-300 transition-colors">
                    Arsitektur Cloud Computing & Standar Kearsipan Digital Nasional
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Studi kasus dan pembelajaran dari praktik integrasi infrastruktur jaringan simpul arsip nasional.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3">
                  Topik: Cloud • Simpul Jaringan
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong>M Rislan Tristansyah</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.rislantrs.me" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              rislantrs.me
            </a>
            <span>•</span>
            <a href="https://github.com/Rislantrs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/m-rislan-tristansyah-96669a294/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
