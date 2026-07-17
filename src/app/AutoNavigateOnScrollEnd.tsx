"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type Props = {
  /** Where to send the user when they hit the end of the page */
  to: string;
  /** Only fire below this viewport width (px). Default 768 = mobile/tablet portrait. */
  maxWidth?: number;
  /** Pixels of "lead time" before the footer would enter view. Bigger = triggers earlier. */
  leadPx?: number;
};

/**
 * Drop this once inside a page's <main>. On mobile, when the visitor scrolls
 * far enough that the footer is about to appear, we navigate them to `to`
 * instead of letting them scroll into the footer.
 *
 * Renders nothing — it's just a scroll listener.
 */
export default function AutoNavigateOnScrollEnd({
  to,
  maxWidth = 768,
  leadPx = 80,
}: Props) {
  const router = useRouter();
  const triggered = useRef(false);
  const ticking = useRef(false);

  useEffect(() => {
    const isMobile = () => window.matchMedia(`(max-width: ${maxWidth}px)`).matches;

    function check() {
      ticking.current = false;
      if (triggered.current || !isMobile()) return;

      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top + window.scrollY;
      const viewportBottom = window.scrollY + window.innerHeight;

      if (viewportBottom >= footerTop - leadPx) {
        triggered.current = true;
        router.push(to);
      }
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(check);
      }
    }

    // In case the page loads already scrolled near the bottom (rare, but cheap to check)
    check();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [router, to, maxWidth, leadPx]);

  return null;
}
