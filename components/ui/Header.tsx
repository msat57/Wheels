"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo / Site name */}
      <Link href="/" className="text-xl font-bold text-teal-700">
        Dallas Wheels
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
      <nav className="hidden md:flex gap-6">
        <Link href="#hero">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#fleet">Fleet & Team</Link>
        <Link href="#vintage">Vintage</Link>
        <Link href="#used">Used Bikes</Link>
        <Link href="#partners">Partners</Link>
        <Link href="#why">Why Us</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 md:hidden">
          <Link href="#hero" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#fleet" onClick={() => setIsOpen(false)}>Fleet & Team</Link>
          <Link href="#vintage" onClick={() => setIsOpen(false)}>Vintage</Link>
          <Link href="#used" onClick={() => setIsOpen(false)}>Used Bikes</Link>
          <Link href="#partners" onClick={() => setIsOpen(false)}>Partners</Link>
          <Link href="#why" onClick={() => setIsOpen(false)}>Why Us</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
