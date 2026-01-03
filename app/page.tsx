"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaWhatsapp,
  FaUmbrellaBeach,
  FaSwimmingPool,
  FaStar,
} from "react-icons/fa";

export default function VillaLandingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    nights: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    setIsSending(true);
    const text =
      `Halo, saya ingin booking Private Villa Bali 🌴%0A%0A` +
      `Nama: ${form.name}%0A` +
      `No HP: ${form.phone}%0A` +
      `Tanggal Check-in: ${form.date}%0A` +
      `Jumlah Malam: ${form.nights}%0A` +
      `Catatan: ${form.message}`;

    const url = `https://wa.me/6281326305609?text=${text}`;
    window.open(url, "_blank");
    setTimeout(() => setIsSending(false), 800);
  };

  return (
    <main className="bg-neutral-950 text-white overflow-hidden">
      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center px-6 md:px-16 relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl text-center"
        >

          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-5">
            Boddington <span className="italic">Villas</span>
          </h1>
          <h1 className="text-2xl md:text-2xl font-semibold tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Luxury Private Villa <span className="italic">in Bali</span>
          </h1>
          <p className="mt-6 text-neutral-200 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Rasakan ketenangan, privasi, dan kemewahan dalam satu villa
            eksklusif dengan pemandangan tropis Bali.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-3 rounded-full bg-white text-black font-medium"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/6281326305609"
              target="_blank"
              className="px-8 py-3 rounded-full border border-white/30"
            >
              WhatsApp
            </a>
          </div>
          <p>istrikuu sayaaang,  ini yang mass buatt</p>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl mb-12 text-center"
          >
            Villa Gallery
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              "https://images.unsplash.com/photo-1613553483056-c8cb4c5d2a7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1560448075-bb485b067938",
              "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={`${src}?auto=format&fit=crop&w=900&q=80`}
                  alt="Private Villa Bali"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* FINAL REVEAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-16 text-center"
          >
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Setiap sudut villa dirancang untuk kenyamanan, privasi, dan
              kemewahan terbaik di Bali.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-28 px-6 md:px-16 bg-neutral-950">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl mb-16 text-center">
            Villa Facilities
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaSwimmingPool />,
                title: "Private Pool",
                desc: "Kolam renang pribadi dengan privasi penuh",
              },
              {
                icon: <FaStar />,
                title: "Luxury Spa",
                desc: "Spa & relaksasi langsung di area villa",
              },
              {
                icon: <FaUmbrellaBeach />,
                title: "High Speed WiFi",
                desc: "Internet cepat untuk work & streaming",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="bg-neutral-900 rounded-3xl p-8"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 md:px-16 bg-neutral-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-12">Exclusive Services</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid md:grid-cols-2 gap-10"
          >
            {[
              {
                title: "24/7 Personal Service",
                desc: "Tim kami siap membantu kebutuhan Anda kapan saja selama menginap",
              },
              {
                title: "Airport Pickup",
                desc: "Penjemputan bandara nyaman & private",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-neutral-800 rounded-3xl p-10"
              >
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 md:px-16 bg-neutral-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl mb-10 text-center">
            Booking Villa
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              onChange={handleChange}
              placeholder="Nama"
              className="input"
            />
            <input
              name="phone"
              onChange={handleChange}
              placeholder="No WhatsApp"
              className="input"
            />
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="input"
            />
            <input
              name="nights"
              onChange={handleChange}
              placeholder="Jumlah Malam"
              className="input"
            />
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Catatan tambahan"
              className="input md:col-span-2"
            />
          </div>
          <motion.button
            onClick={handleBooking}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={isSending ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.4 }}
            className="mt-8 w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 transition rounded-full py-4 text-lg font-medium"
          >
            <FaWhatsapp />{" "}
            {isSending ? "Menghubungi WhatsApp..." : "Booking via WhatsApp"}
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-neutral-500 text-sm">
        © 2026 Private Villa Bali · All Rights Reserved
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .input {
          background: #0a0a0a;
          border: 1px solid #262626;
          padding: 14px 18px;
          border-radius: 9999px;
          color: white;
          outline: none;
        }
        .input:focus {
          border-color: #22c55e;
        }
      `}</style>
    </main>
  );
}
