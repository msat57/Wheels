"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo / Site name */}
      <Link href="/" className="flex items-center gap-2">
  <svg width="40" height="40" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#004080" strokeWidth="3"/>
    <circle cx="50" cy="50" r="25" fill="none" stroke="#004080" strokeWidth="2"/>
    <g stroke="#004080" strokeWidth="2">
      <line x1="50" y1="5" x2="50" y2="95"/>
      <line x1="5" y1="50" x2="95" y2="50"/>
      <line x1="14.6" y1="14.6" x2="85.4" y2="85.4"/>
      <line x1="85.4" y1="14.6" x2="14.6" y2="85.4"/>
    </g>
    <text x="50" y="58" textAnchor="middle" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#004080">D</text>
  </svg>
  <span className="text-xl font-bold text-teal-700">Dallas Wheels</span>
</Link>

      {/* Hamburger button (mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 focus:outline-none"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="#services">Services</Link>
        <Link href="#fleet">Fleet</Link>
        <Link href="#vintage">Vintage</Link>
        <Link href="#used">Used Bikes</Link>
        <Link href="#partners">Partners</Link>
        <Link href="#why">Why Us</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 md:hidden">
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#fleet" onClick={() => setIsOpen(false)}>Fleet</Link>
          <Link href="#vintage" onClick={() => setIsOpen(false)}>Vintage</Link>
          <Link href="#used" onClick={() => setIsOpen(false)}>Used Bikes</Link>
          <Link href="#partners" onClick={() => setIsOpen(false)}>Partners</Link>
          <Link href="#why" onClick={() => setIsOpen(false)}>Why Us</Link>
          <Link href="#gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
