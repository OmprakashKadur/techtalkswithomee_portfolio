"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        style={{ height: "64px" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--text-primary)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <span>&lt;</span>
            <span>techtalks</span>
            <span style={{ color: "var(--accent)" }}> /</span>
            <span>&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <div
            className="hide-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-8)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                  color:
                    pathname === link.href
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    pathname === link.href
                      ? "var(--accent)"
                      : "var(--text-secondary)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hire Me Button (Desktop) */}
          <a
            href="https://wa.me/919964185119"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm hide-mobile"
          >
            Hire Me →
          </a>

          {/* Mobile Hamburger */}
          <button
            className="hide-desktop"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "8px",
              zIndex: 60,
            }}
          >
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "var(--text-primary)",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(45deg) translateY(5px)"
                  : "none",
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "var(--text-primary)",
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "var(--text-primary)",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--black)",
              zIndex: 45,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-10)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "32px",
                    fontWeight: 700,
                    color:
                      pathname === link.href
                        ? "var(--accent)"
                        : "var(--text-primary)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.a
              href="https://wa.me/919964185119"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{ marginTop: "var(--space-8)" }}
            >
              Hire Me →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
