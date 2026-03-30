"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Hook up to your email service / API here
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-dark text-white">
      {/* Hero */}
      <section className="bg-midnight px-6 md:px-12 py-16 md:py-24">
        <p className="text-gold text-[10px] uppercase tracking-widest mb-3">
          Get in touch
        </p>
        <h1 className="text-3xl md:text-4xl font-medium max-w-xl leading-snug">
          Let&apos;s talk about your next shipment.
        </h1>
      </section>

      {/* Gold divider */}
      <div className="h-0.5 bg-gold" />

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact details + map */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-gold text-[10px] uppercase tracking-widest mb-5">
                Contact details
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-gold">📞</span>
                  <a
                    href="tel:+385993308093"
                    className="text-gray-300 text-sm hover:text-gold transition-colors"
                  >
                    +385 99 330 8093
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold">✉️</span>
                  <a
                    href="mailto:info@mandic-transport.com"
                    className="text-gray-300 text-sm hover:text-gold transition-colors"
                  >
                    info@mandic-transport.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold">📍</span>
                  <span className="text-gray-300 text-sm">Zagreb, Croatia</span>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-lg overflow-hidden border border-white/10 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89101.55!2d15.9819!3d45.8150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d701f4b6e775%3A0x9e9b7b9f9b9b9b9b!2sZagreb%2C%20Croatia!5e0!3m2!1sen!2shr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <p className="text-gold text-[10px] uppercase tracking-widest mb-5">
              Send a message
            </p>

            {submitted ? (
              <div className="bg-midnight border border-gold/20 rounded-lg p-8 text-center">
                <div className="text-3xl mb-4">✅</div>
                <h2 className="text-white font-medium mb-2">Message sent!</h2>
                <p className="text-gray-400 text-sm">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-midnight border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-midnight border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your shipment..."
                    rows={5}
                    className="bg-midnight border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>
                <button
                  disabled={
                    !formData.name || !formData.email || !formData.message
                  }
                  onClick={handleSubmit}
                  className="bg-gold hover:bg-gold/80 text-midnight font-semibold text-sm px-6 py-3 rounded transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gold"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
