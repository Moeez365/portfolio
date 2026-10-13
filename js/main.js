/**
 * Portfolio Interactive Controller — Moeez (Full-Stack Developer)
 * Handles mobile navigation menu, active section scroll spy, and clipboard actions.
 */

let emailCopyTimeout;

async function copyEmailAddress() {
  const email = "moeeznadeem58@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    const label = document.getElementById("email-btn-label");
    if (label) {
      label.textContent = "Email copied";
      clearTimeout(emailCopyTimeout);
      emailCopyTimeout = setTimeout(() => {
        label.textContent = email;
      }, 2200);
    }
  } catch {
    window.location.href = "mailto:" + email;
  }
}

// Expose globally for inline onclick fallback if needed
window.copyEmailAddress = copyEmailAddress;

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // 0. Initialize GSAP, ScrollTrigger, ScrollSmoother & ScrollToPlugin (Buttery Smooth Scroll)
  let smoother = null;
  if (typeof gsap !== "undefined") {
    const pluginsToRegister = [];
    if (typeof ScrollTrigger !== "undefined")
      pluginsToRegister.push(ScrollTrigger);
    if (typeof ScrollSmoother !== "undefined")
      pluginsToRegister.push(ScrollSmoother);
    if (typeof ScrollToPlugin !== "undefined")
      pluginsToRegister.push(ScrollToPlugin);

    if (pluginsToRegister.length) {
      gsap.registerPlugin(...pluginsToRegister);
    }

    if (
      !prefersReducedMotion &&
      typeof ScrollSmoother !== "undefined" &&
      document.getElementById("smooth-wrapper") &&
      document.getElementById("smooth-content")
    ) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.35, // Buttery 1.35s inertia lag on desktop wheel/trackpad
        effects: true,
        smoothTouch: 0.1, // Subtle touch smoothing on mobile
        normalizeScroll: true,
      });
    }
  }

  const header = document.querySelector("header");
  const menuButton = document.querySelector(
    'button[aria-label="Toggle Navigation Menu"]',
  );
  const menuIcon = menuButton?.querySelector(".material-symbols-outlined");
  const navItems = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Stack", "#stack"],
    ["Selected Work", "#selected-work"],
    ["Contact", "#contact"],
  ];

  // 1. Mobile Navigation Drawer
  if (header && menuButton && !document.getElementById("mobile-menu")) {
    const mobileMenu = document.createElement("nav");
    mobileMenu.id = "mobile-menu";
    mobileMenu.className = "mobile-menu md:hidden";
    mobileMenu.setAttribute("aria-label", "Mobile navigation");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.innerHTML =
      navItems
        .map(
          ([label, href]) =>
            `<a href="${href}" data-path="${href.slice(1)}">${label}</a>`,
        )
        .join("") +
      `<a class="mobile-menu-cta" href="https://wa.me/923083811132?text=Hi%20Moeez,%20I'd%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">Hire Me</a>`;
    header.appendChild(mobileMenu);
    menuButton.setAttribute("aria-controls", "mobile-menu");
    menuButton.setAttribute("aria-expanded", "false");

    const setMenuOpen = (open) => {
      mobileMenu.classList.toggle("is-open", open);
      mobileMenu.setAttribute("aria-hidden", String(!open));
      menuButton.setAttribute("aria-expanded", String(open));
      if (menuIcon) menuIcon.textContent = open ? "close" : "menu";
    };

    menuButton.addEventListener("click", () => {
      setMenuOpen(!mobileMenu.classList.contains("is-open"));
    });

    mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });
  }

  // 1b. Buttery Smooth Anchor Link Scrolling via GSAP ScrollSmoother / ScrollToPlugin
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href === "#") {
        event.preventDefault();
        if (smoother) {
          smoother.scrollTo(0, true);
        } else if (
          typeof gsap !== "undefined" &&
          typeof ScrollToPlugin !== "undefined"
        ) {
          gsap.to(window, { duration: 1, scrollTo: 0, ease: "power3.inOut" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      event.preventDefault();
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
      if (smoother) {
        smoother.scrollTo(targetEl, true, "top 64px");
      } else if (
        typeof gsap !== "undefined" &&
        typeof ScrollToPlugin !== "undefined"
      ) {
        gsap.to(window, {
          duration: 1.05,
          scrollTo: { y: targetEl, offsetY: 64 },
          ease: "power3.inOut",
        });
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 2. Sticky Header & Section Scroll Spy
  const navLinks = document.querySelectorAll('header a[href^="#"]');
  const sections = [...document.querySelectorAll("section[id]")];
  const updateHeader = () => {
    const scrollTop = smoother ? smoother.scrollTop() : window.scrollY;
    header?.classList.toggle("is-scrolled", scrollTop > 8);
    const current =
      sections.findLast(
        (section) => section.getBoundingClientRect().top <= 120,
      ) || sections[0];
    navLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        current && link.getAttribute("href") === `#${current.id}`,
      );
    });
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.addEventListener("scroll", updateHeader);
  }

  // 3. Copy Email Button Listener
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn && !copyEmailBtn.hasAttribute("onclick")) {
    copyEmailBtn.addEventListener("click", copyEmailAddress);
  }

  // 4. GSAP Crossed X-Marquee Ribbons (Opposite Directions)
  const tickerTrack = document.getElementById("diagonal-ticker-track");
  const tickerTrackReverse = document.getElementById(
    "diagonal-ticker-track-reverse",
  );

  if ((tickerTrack || tickerTrackReverse) && typeof gsap !== "undefined" && !prefersReducedMotion) {
    const activeTweens = [];

    // Ribbon 1 (Electric Orange): Moves Left -> Right
    if (tickerTrack) {
      gsap.set(tickerTrack, { xPercent: -50 });
      activeTweens.push(
        gsap.to(tickerTrack, {
          xPercent: 0,
          duration: 24,
          ease: "none",
          repeat: -1,
        }),
      );
    }

    // Ribbon 2 (Acid Lime Crossing): Moves Right -> Left (Opposite)
    if (tickerTrackReverse) {
      gsap.set(tickerTrackReverse, { xPercent: 0 });
      activeTweens.push(
        gsap.to(tickerTrackReverse, {
          xPercent: -50,
          duration: 24,
          ease: "none",
          repeat: -1,
        }),
      );
    }

    // Subtle scroll-velocity acceleration via ScrollTrigger for both crossing ribbons
    if (typeof ScrollTrigger !== "undefined" && activeTweens.length > 0) {
      ScrollTrigger.create({
        onUpdate(self) {
          const velocity = Math.min(Math.abs(self.getVelocity()) / 450, 3.5);
          if (velocity > 0.15) {
            gsap.to(activeTweens, {
              timeScale: 1 + velocity,
              duration: 0.2,
              overwrite: true,
              onComplete: () => {
                gsap.to(activeTweens, {
                  timeScale: 1,
                  duration: 0.9,
                  ease: "power2.out",
                });
              },
            });
          }
        },
      });
    }
  }

  // 4b. Whole-Page GSAP Scroll-Triggered Reveal Animations (Appear While in View)
  const initScrollRevealAnimations = () => {
    if (
      typeof gsap === "undefined" ||
      typeof ScrollTrigger === "undefined" ||
      prefersReducedMotion
    ) {
      return;
    }

    // 1. Universal Section Headers & Accent Lines (Sections 01 to 05)
    document.querySelectorAll("main section[id]").forEach((section) => {
      if (section.id === "selected-work") return; // Handled by dedicated pinned interactive timeline
      const marker = section.querySelector(
        ".font-code-sm.uppercase, .font-label-caps.uppercase",
      );
      const markerLine = section.querySelector(".h-px.w-12, .h-px");
      const heading = section.querySelector("h2");
      const subtitle = section.querySelector("p");

      if (markerLine) {
        gsap.from(markerLine, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      const textHeaders = [marker, heading, subtitle].filter(Boolean);
      if (textHeaders.length) {
        gsap.from(textHeaders, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
          y: 35,
          opacity: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      }
    });

    // 2. Section 01: Identity / About Narrative & Specification Sheet
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const narrativeCol = aboutSection.querySelector(".lg\\:col-span-7");
      const specSheet = aboutSection.querySelector(".lg\\:col-span-5");

      if (narrativeCol) {
        const paragraphs = narrativeCol.querySelectorAll("p");
        const badges = narrativeCol.querySelectorAll(".pt-space-sm > div");

        if (paragraphs.length) {
          gsap.from(paragraphs, {
            scrollTrigger: {
              trigger: narrativeCol,
              start: "top 82%",
              once: true,
            },
            y: 30,
            opacity: 0,
            delay:2,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
        }

        if (badges.length) {
          gsap.from(badges, {
            scrollTrigger: {
              trigger: narrativeCol,
              start: "top 78%",
              once: true,
            },
            y: 20,
            opacity: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "back.out(1.2)",
            clearProps: "transform,opacity",
          });
        }
      }

      if (specSheet) {
        gsap.from(specSheet, {
          scrollTrigger: {
            trigger: specSheet,
            start: "top 82%",
            once: true,
          },
          y: 45,
          scale: 0.98,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });

        const specRows = specSheet.querySelectorAll(
          ".divide-y > div, [data-location]",
        );
        if (specRows.length) {
          gsap.from(specRows, {
            scrollTrigger: {
              trigger: specSheet,
              start: "top 80%",
              once: true,
            },
            x: 24,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            delay: 0.15,
            ease: "power2.out",
            clearProps: "transform,opacity",
          });
        }
      }
    }

    // 3. Section 02: Capabilities / Services Tabular Cards
    const serviceCards = document.querySelectorAll("#services .group");
    if (serviceCards.length) {
      serviceCards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.75,
          delay: (index % 2) * 0.06,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      });
    }

    // 4. Section 03: Arsenal / Domain Cards
    const stackCards = document.querySelectorAll("#stack .grid > div");
    if (stackCards.length) {
      gsap.from(stackCards, {
        scrollTrigger: {
          trigger: "#stack .grid",
          start: "top 82%",
          once: true,
        },
        y: 48,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    }

    // 5. Crossed Kinetic Marquee Ribbons
    const tickerWrap = document.querySelector(".diagonal-ticker-wrap");
    if (tickerWrap) {
      gsap.from(tickerWrap, {
        scrollTrigger: {
          trigger: tickerWrap,
          start: "top 85%",
          once: true,
        },
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    }

    // 6. Section 04: Pinned Decaying Transition Project Showcase (Landing Page Native)
    const projectsSection = document.getElementById("selected-work");
    const decayStage = document.getElementById("selected-work-stage");
    const decayTitle = document.getElementById("projects-decay-title");
    const decayTitleLayer = document.getElementById("decay-title-layer");
    const decayStickyHeader = document.getElementById("decay-sticky-header");
    const dispNode = document.getElementById("decay-displacement");
    const turbNode = document.getElementById("decay-turbulence");
    const blurNode = document.getElementById("decay-blur");
    const telemetryBar = document.getElementById("decay-telemetry-bar");
    const counterActive = document.getElementById("decay-counter-active");

    const card1 = document.getElementById("decay-card-1");
    const card2 = document.getElementById("decay-card-2");
    const card3 = document.getElementById("decay-card-3");

    if (
      projectsSection &&
      decayStage &&
      decayTitle &&
      card1 &&
      card2 &&
      !prefersReducedMotion
    ) {
      const mm = gsap.matchMedia();

      // DESKTOP BREAKPOINT (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        gsap.set(card1, {
          x: -420,
          y: -160,
          rotation: -12,
          scale: 0.9,
          opacity: 0,
        });

        gsap.set(card2, {
          x: 420,
          y: -90,
          rotation: 14,
          scale: 0.9,
          opacity: 0,
        });

        if (card3) {
          gsap.set(card3, {
            y: 160,
            opacity: 0,
          });
        }

        const decayTl = gsap.timeline({
          scrollTrigger: {
            trigger: projectsSection,
            start: "top top",
            end: "+=1600px", // Crisp, compact tactile scrub control
            pin: true,
            pinSpacing: true, // Explicit block pin spacing
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              if (telemetryBar) telemetryBar.style.width = `${Math.round(p * 100)}%`;
              if (counterActive) {
                counterActive.textContent = p > 0.55 ? "02" : "01";
              }
            },
          },
        });

        // ── PHASE 1 → PHASE 2: ROTTEN SVG DISTORTION & THEME BLEND ──
        decayTl
          .to(dispNode, {
            attr: { scale: 65 },
            duration: 0.8,
            ease: "power2.inOut",
          }, 0.1)
          .to(turbNode, {
            attr: { baseFrequency: "0.038 0.028" },
            duration: 0.8,
            ease: "power1.inOut",
          }, 0.1)
          .to(blurNode, {
            attr: { stdDeviation: 2.2 },
            duration: 0.6,
            ease: "power2.in",
          }, 0.2)
          .to(decayTitle, {
            scale: 1.12,
            letterSpacing: "0.08em",
            opacity: 0.2,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0.1)
          .to(decayTitleLayer, {
            autoAlpha: 0,
            scale: 1.25,
            duration: 0.4,
            ease: "power2.in",
          }, 0.7)
          .to(decayStickyHeader, {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          }, 0.65)

        // ── PHASE 3: COMPACT DUAL PROJECT CARDS ENTRANCE ──
          .to(card1, {
            x: 0,
            y: 0,
            rotation: -2.5,
            scale: 1,
            opacity: 1,
            duration: 0.75,
            ease: "back.out(1.5)",
          }, 0.7)
          .to(card2, {
            x: 0,
            y: 0,
            rotation: 2.5,
            skewX: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }, 0.9);

        if (card3) {
          decayTl.to(card3, {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "back.out(1.3)",
          }, 1.1);
        }

        decayTl.to({}, { duration: 0.5 });
      });

      // MOBILE & TABLET BREAKPOINT (< 1024px)
      mm.add("(max-width: 1023px)", () => {
        gsap.set(card1, {
          y: 350,
          rotation: -6,
          scale: 0.9,
          opacity: 0,
        });

        gsap.set(card2, {
          x: 350,
          rotation: 10,
          opacity: 0,
        });

        if (card3) {
          gsap.set(card3, {
            y: 120,
            opacity: 0,
          });
        }

        const decayTl = gsap.timeline({
          scrollTrigger: {
            trigger: projectsSection,
            start: "top top",
            end: "+=1100px", // Snappy compact scroll for mobile
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              if (telemetryBar) telemetryBar.style.width = `${Math.round(p * 100)}%`;
              if (counterActive) {
                counterActive.textContent = p > 0.55 ? "02" : "01";
              }
            },
          },
        });

        decayTl
          .to(dispNode, {
            attr: { scale: 50 },
            duration: 0.7,
            ease: "power2.inOut",
          }, 0.1)
          .to(turbNode, {
            attr: { baseFrequency: "0.035 0.025" },
            duration: 0.7,
            ease: "power1.inOut",
          }, 0.1)
          .to(decayTitle, {
            scale: 1.1,
            opacity: 0.2,
            duration: 0.7,
            ease: "power2.inOut",
          }, 0.1)
          .to(decayTitleLayer, {
            autoAlpha: 0,
            scale: 1.2,
            duration: 0.4,
            ease: "power2.in",
          }, 0.6)
          .to(decayStickyHeader, {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          }, 0.6)
          .to(card1, {
            y: 0,
            rotation: -2,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.4)",
          }, 0.65)
          .to(card2, {
            x: 0,
            rotation: 2.5,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
          }, 0.95);

        if (card3) {
          decayTl.to(card3, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          }, 1.15);
        }

        decayTl.to({}, { duration: 0.45 });
      });
    }

    // 7. Section 05: Contact / CTA Terminal Card
    const contactCard = document.querySelector(
      "#contact .bg-surface-container-low",
    );
    if (contactCard) {
      gsap.from(contactCard, {
        scrollTrigger: {
          trigger: contactCard,
          start: "top 82%",
          once: true,
        },
        y: 48,
        scale: 0.98,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      const contactContent = contactCard.querySelectorAll(
        "h2, p, .pt-space-sm, .pt-space-lg > div",
      );
      if (contactContent.length) {
        gsap.from(contactContent, {
          scrollTrigger: {
            trigger: contactCard,
            start: "top 80%",
            once: true,
          },
          y: 25,
          opacity: 0,
          duration: 0.65,
          stagger: 0.08,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      }
    }

    // 8. Footer (Brand Narrative, Navigation, Contact & Rights)
    const footer = document.querySelector("footer");
    if (footer) {
      const footerElements = footer.querySelectorAll(".grid > div, .pt-space-lg");
      if (footerElements.length) {
        gsap.from(footerElements, {
          scrollTrigger: {
            trigger: footer,
            start: "top 88%",
            once: true,
          },
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      }
    }
  };

  initScrollRevealAnimations();
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }

  // 5. GSAP Electric Orange Cursor Follower (PC Only, Offset + Color Shift)
  const cursorFollower = document.getElementById("cursor-follower");
  const isDesktopPointer = window.matchMedia(
    "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
  ).matches;

  if (cursorFollower && isDesktopPointer && !prefersReducedMotion) {
    let hasMoved = false;
    const OFFSET_X = 36;
    const OFFSET_Y = 36;

    if (typeof gsap !== "undefined") {
      gsap.set(cursorFollower, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(cursorFollower, "x", {
        duration: 0.3,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(cursorFollower, "y", {
        duration: 0.3,
        ease: "power3.out",
      });

      window.addEventListener(
        "mousemove",
        (event) => {
          const targetX = event.clientX + OFFSET_X;
          const targetY = event.clientY + OFFSET_Y;

          if (!hasMoved) {
            hasMoved = true;
            gsap.set(cursorFollower, { x: targetX, y: targetY });
            cursorFollower.classList.add("is-visible");
          }
          xTo(targetX);
          yTo(targetY);
        },
        { passive: true },
      );
    } else {
      window.addEventListener(
        "mousemove",
        (event) => {
          const targetX = event.clientX + OFFSET_X;
          const targetY = event.clientY + OFFSET_Y;
          cursorFollower.classList.add("is-visible");
          cursorFollower.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
        },
        { passive: true },
      );
    }

    document.addEventListener("mouseleave", () => {
      cursorFollower.classList.remove("is-visible");
      hasMoved = false;
    });

    const interactiveTargets = "a, button, [role='button']";
    const coloredTargets =
      ".hero-right, #selected-work, .hero-kicker, .bg-primary, #services .group, #projects-container article, [data-location]";

    document.addEventListener("mouseover", (event) => {
      if (event.target.closest(interactiveTargets)) {
        cursorFollower.classList.add("is-hover");
      }
      if (event.target.closest(coloredTargets)) {
        cursorFollower.classList.add("is-over-accent");
      }
    });

    document.addEventListener("mouseout", (event) => {
      if (event.target.closest(interactiveTargets)) {
        cursorFollower.classList.remove("is-hover");
      }
      if (event.target.closest(coloredTargets)) {
        cursorFollower.classList.remove("is-over-accent");
      }
    });
  }

  // 6. GSAP Preloader ("MOEEZ.") — Unified Stretch & Disappear + Hero One-by-One Reveal
  const preloader = document.getElementById("preloader");
  if (preloader) {
    if (typeof gsap === "undefined" || prefersReducedMotion) {
      preloader.classList.add("is-done");
    } else {
      const preloaderContent = preloader.querySelector(".preloader-content");
      const chars = preloader.querySelectorAll(".preloader-char");
      const tag = preloader.querySelector(".preloader-tag");
      const progressWrap = preloader.querySelector(".preloader-progress-wrap");
      const progressBar = document.getElementById("preloader-bar");
      const countEl = document.getElementById("preloader-count");

      // Hero elements to reveal one by one
      const heroKicker = document.querySelector(".hero-section .hero-kicker");
      const heroTitle = document.querySelector(".hero-section h1");
      const heroSubtitle = document.querySelector(
        ".hero-section .hero-subtitle",
      );
      const heroButtons = document.querySelectorAll(".hero-left a");
      const heroPortrait = document.querySelector(
        ".hero-section .portrait-frame img",
      );

      // Lock scroll briefly while preloader runs
      document.body.style.overflow = "hidden";
      if (smoother) smoother.paused(true);

      // Fail-safe unlock in case of unexpected interruption
      const failSafeTimer = setTimeout(() => {
        preloader.classList.add("is-done");
        document.body.style.overflow = "";
        if (smoother) smoother.paused(false);
      }, 4500);

      // Set initial states for Preloader & Hero elements
      gsap.set(chars, { yPercent: 110, opacity: 0 });
      gsap.set([tag, progressWrap], { opacity: 0, y: 14 });
      if (header) gsap.set(header, { opacity: 0, y: -32 });
      if (heroKicker) gsap.set(heroKicker, { opacity: 0, y: 28 });
      if (heroTitle) gsap.set(heroTitle, { opacity: 0, y: 44 });
      if (heroSubtitle) gsap.set(heroSubtitle, { opacity: 0, x: -24 });
      if (heroButtons.length) gsap.set(heroButtons, { opacity: 0, y: 24 });
      if (heroPortrait)
        gsap.set(heroPortrait, { opacity: 0, y: 64, scale: 0.94 });

      const counterState = { val: 0 };
      const masterTl = gsap.timeline({
        onComplete: () => {
          clearTimeout(failSafeTimer);
          preloader.classList.add("is-done");
          document.body.style.overflow = "";
          if (smoother) smoother.paused(false);
          if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
        },
      });

      // Phase A: Preloader "MOEEZ." Entrance & Progress Count (00% -> 100%)
      masterTl
        .to([tag, progressWrap], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
        })
        .to(
          chars,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.06,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .to(
          progressBar,
          {
            scaleX: 1,
            duration: 1.0,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          counterState,
          {
            val: 100,
            duration: 1.0,
            ease: "power2.inOut",
            onUpdate: () => {
              if (countEl) {
                countEl.textContent =
                  String(Math.round(counterState.val)).padStart(2, "0") + "%";
              }
            },
          },
          "<",
        )
        // Phase B: Top & Bottom Stretch Only, Then Disappears
        .to(
          preloaderContent,
          {
            scaleY: 1.25,
            duration: 0.18,
            ease: "power2.out",
          },
          "+=0.1",
        )
        .to(
          preloaderContent,
          {
            scaleY: 0,
            opacity: 0,
            duration: 0.45,
            ease: "expo.in",
          },
        )
        .to(
          preloader,
          {
            scaleY: 0,
            duration: 0.56,
            ease: "expo.inOut",
          },
          "-=0.38",
        );

      // Phase C: Hero Section One-by-One Staggered Reveal
      if (header) {
        masterTl.to(
          header,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.45",
        );
      }
      if (heroKicker) {
        masterTl.to(
          heroKicker,
          {
            opacity: 1,
            y: 0,
            duration: 0.48,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.32",
        );
      }
      if (heroTitle) {
        masterTl.to(
          heroTitle,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.3",
        );
      }
      if (heroSubtitle) {
        masterTl.to(
          heroSubtitle,
          {
            opacity: 1,
            x: 0,
            duration: 0.52,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.35",
        );
      }
      if (heroButtons.length) {
        masterTl.to(
          heroButtons,
          {
            opacity: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.14,
            ease: "back.out(1.4)",
            clearProps: "transform,opacity",
          },
          "-=0.32",
        );
      }
      if (heroPortrait) {
        masterTl.to(
          heroPortrait,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.55",
        );
      }
    }
  }
});

