import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * GSAPParallax Component
 * Smoothly shifts an element vertically as it scrolls through the viewport.
 */
export function GSAPParallax({
  children,
  className,
  yPercent = 25,
  scrub = 1,
}: {
  children: ReactNode;
  className?: string;
  yPercent?: number;
  scrub?: number | boolean;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -yPercent },
        {
          yPercent: yPercent,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: scrub,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [yPercent, scrub]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

/**
 * GSAPScrollRotate Component
 * Rotates an element (like a decorative badge or circle) as it scrolls.
 */
export function GSAPScrollRotate({
  children,
  className,
  rotation = 360,
}: {
  children: ReactNode;
  className?: string;
  rotation?: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        rotation: rotation,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [rotation]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
