"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const isSubmittingRef = useRef(false);

  // Cooldown timer to prevent rapid spam submissions
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Anti-Double Click / Rapid Spam Lock
    if (isSubmittingRef.current || status === "loading") {
      return;
    }

    // 2. Cooldown Guard
    if (cooldown > 0) {
      setStatus("error");
      setErrorMessage(`Harap tunggu ${cooldown} detik sebelum mengirim pesan berikutnya.`);
      return;
    }

    // 3. Honeypot Anti-Bot Shield Check
    if (botcheck) {
      // Silently pretend success to deceive automated spam scrapers
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      return;
    }

    // 4. Strict Input Trimming & Empty Space Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorMessage("Semua kolom wajib diisi dan tidak boleh hanya berisi spasi kosong.");
      return;
    }

    if (trimmedName.length < 2) {
      setStatus("error");
      setErrorMessage("Nama terlalu pendek (minimal 2 karakter).");
      return;
    }

    // 5. Strict Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Format alamat email tidak valid (contoh: nama@domain.com).");
      return;
    }

    if (trimmedMessage.length < 5) {
      setStatus("error");
      setErrorMessage("Isi pesan terlalu pendek (minimal 5 karakter).");
      return;
    }

    // Lock submission state
    isSubmittingRef.current = true;
    setStatus("loading");
    setErrorMessage("");

    // 6. Network Timeout Guard with AbortController (10 Seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d1fb27de-4e5e-43f8-94aa-f631dd53dc6e",
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `[Portofolio Web] Pesan Baru dari ${trimmedName}`,
          from_name: "Portofolio M Rislan Tristansyah",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setCooldown(20); // 20s anti-spam cooldown after successful send
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Gagal mengirim pesan. Silakan coba beberapa saat lagi.");
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      setStatus("error");
      if (err.name === "AbortError") {
        setErrorMessage("Koneksi timeout (lebih dari 10 detik). Harap periksa jaringan internet Anda.");
      } else {
        setErrorMessage("Terjadi gangguan koneksi internet. Silakan coba beberapa saat lagi.");
      }
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm shadow-xl relative overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Live &amp; Hardened Contact System
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Kirim Pesan Langsung (Direct Contact Form)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Formulir dinamis ini terhubung langsung ke sistem email backend dengan proteksi anti-spam, validasi input berlapis, dan keamanan koneksi real-time.
          </p>
        </div>

        {status === "success" && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3 animate-fadeIn">
            <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-bold text-emerald-200">Pesan Berhasil Terkirim!</p>
              <p className="text-xs text-emerald-300/90 mt-0.5">
                Terima kasih! Notifikasi pesan Anda sudah langsung masuk ke inbox email saya. Saya akan segera membalasnya.
              </p>
              {cooldown > 0 && (
                <p className="text-[11px] font-mono text-emerald-400 mt-2">
                  Proteksi anti-spam aktif: tombol kirim dapat digunakan kembali dalam {cooldown} detik.
                </p>
              )}
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
            <svg className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-bold text-rose-200">Peringatan Input / Pengiriman</p>
              <p className="text-xs text-rose-300/90 mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Honeypot Invisible Anti-Bot Shield (Hidden from real human users) */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            checked={botcheck}
            onChange={(e) => setBotcheck(e.target.checked)}
            className="hidden"
            style={{ display: "none" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="name" className="block text-xs font-semibold text-slate-300">
                  Nama Lengkap <span className="text-cyan-400">*</span>
                </label>
                <span className="text-[10px] text-slate-400 font-mono">
                  {formData.name.length}/100
                </span>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                placeholder="Contoh: Budi Pratama"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300">
                  Alamat Email <span className="text-cyan-400">*</span>
                </label>
                <span className="text-[10px] text-slate-400 font-mono">
                  {formData.email.length}/100
                </span>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={100}
                value={formData.email}
                onChange={handleChange}
                placeholder="budi@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="message" className="block text-xs font-semibold text-slate-300">
                Isi Pesan / Pertanyaan <span className="text-cyan-400">*</span>
              </label>
              <span className={`text-[10px] font-mono ${formData.message.length > 1800 ? "text-amber-400 font-bold" : "text-slate-400"}`}>
                {formData.message.length}/2000
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={2000}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tulis pesan atau pertanyaan Anda di sini (maksimal 2000 karakter)..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-y"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading" || cooldown > 0}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Memvalidasi &amp; Mengirim...</span>
              </>
            ) : cooldown > 0 ? (
              <span>Tunggu ({cooldown}s)</span>
            ) : (
              <>
                <span>Kirim Pesan Sekarang</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
