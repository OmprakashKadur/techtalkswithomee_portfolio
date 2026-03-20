"use client";

import { useEffect, useRef, useState } from "react";

const isTouchDevice = 
  typeof window !== "undefined" && 
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      if (!visible) setVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      setTimeout(() => {
        if (followerRef.current) {
          followerRef.current.style.left = `${e.clientX}px`;
          followerRef.current.style.top = `${e.clientY}px`;
        }
      }, 80);
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, .hoverable"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [visible]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={followerRef}
        className={`cursor-follower ${hovering ? "hovering" : ""}`}
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
