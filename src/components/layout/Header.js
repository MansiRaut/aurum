"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold tracking-tight text-yellow-600">aurum</div>

        {/* Right: Explore Button + Hamburger */}
        <div className="flex items-center space-x-4">
          <Link
            href="#membership"
            className="hidden md:inline-block border border-white text-white px-5 py-2 rounded transition hover:bg-white/10"
          >
            Explore Membership
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="w-8 h-8 flex items-center justify-center focus:outline-none transition-transform duration-200 transform hover:scale-110 text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Shared menu for mobile & desktop when open */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white text-blue-950 border-t border-gray-200 shadow-md z-40">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row md:justify-center md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link href="#" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Home</Link>
            <Link href="#about" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">About</Link>
            <Link href="#membership" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Membership</Link>
            <Link href="#events" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Events</Link>
            <Link href="#blogs" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Blog</Link>
            <Link href="#podcast" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Podcast</Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">Contact</Link>
          </div>
        </div>
      )}


    </header>
  );
}
