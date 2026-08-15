/* ============================================================
   Interactions: constellations, scroll reveal, marquee loop.
   All decorative — no need to edit to change site text.
   ============================================================ */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Constellations (SVG) ----
     Renders a discreet field of dots joined by thin lines into any
     element with class .js-constellations. Density via data-count. */
  function buildConstellations(host) {
    const count = parseInt(host.dataset.count || "26", 10);
    const linkDist = parseFloat(host.dataset.link || "26"); // in viewBox units
    const W = 100, H = 100; // viewBox units; SVG scales to fill
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("aria-hidden", "true");
    svg.style.display = "block";

    // Points
    const pts = [];
    for (let i = 0; i < count; i++) {
      pts.push({ x: Math.random() * W, y: Math.random() * H, r: 0.28 + Math.random() * 0.55 });
    }

    // Lines between near points
    const gLines = document.createElementNS(svgNS, "g");
    gLines.setAttribute("stroke", "#AFA9EC");
    gLines.setAttribute("stroke-width", "0.11");
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.hypot(dx, dy);
        if (d < linkDist) {
          const line = document.createElementNS(svgNS, "line");
          line.setAttribute("x1", pts[i].x.toFixed(2));
          line.setAttribute("y1", pts[i].y.toFixed(2));
          line.setAttribute("x2", pts[j].x.toFixed(2));
          line.setAttribute("y2", pts[j].y.toFixed(2));
          line.setAttribute("opacity", (0.34 * (1 - d / linkDist) + 0.05).toFixed(2));
          gLines.appendChild(line);
        }
      }
    }
    svg.appendChild(gLines);

    // Dots (stars)
    const gDots = document.createElementNS(svgNS, "g");
    gDots.setAttribute("fill", "#F5F3EE");
    pts.forEach((p, i) => {
      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", p.x.toFixed(2));
      c.setAttribute("cy", p.y.toFixed(2));
      c.setAttribute("r", p.r.toFixed(2));
      c.setAttribute("fill", i % 4 === 0 ? "#AFA9EC" : "#F5F3EE");
      c.setAttribute("opacity", (0.4 + Math.random() * 0.35).toFixed(2));
      if (!reduceMotion) {
        const anim = document.createElementNS(svgNS, "animate");
        anim.setAttribute("attributeName", "opacity");
        const base = 0.35 + Math.random() * 0.3;
        anim.setAttribute("values", `${base};${(base + 0.35).toFixed(2)};${base}`);
        anim.setAttribute("dur", `${(3 + Math.random() * 4).toFixed(1)}s`);
        anim.setAttribute("repeatCount", "indefinite");
        anim.setAttribute("begin", `${(Math.random() * 3).toFixed(1)}s`);
        c.appendChild(anim);
      }
      gDots.appendChild(c);
    });
    svg.appendChild(gDots);

    host.appendChild(svg);
  }

  /* ---- Scroll reveal ---- */
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ---- Marquee: duplicate track so translateX(-50%) loops seamlessly ---- */
  function setupMarquee() {
    document.querySelectorAll(".marquee__track").forEach((track) => {
      track.innerHTML = track.innerHTML + track.innerHTML;
    });
  }

  /* ---- Click-to-play YouTube ----
     Nothing is requested from YouTube until the visitor clicks: no third-party
     cookie, no iframe, no thumbnail fetch (the poster is a local image).
     The iframe uses youtube-nocookie.com. */
  function setupVideo() {
    document.querySelectorAll(".js-yt").forEach((host) => {
      const btn = host.querySelector(".video__play");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const id = host.dataset.ytId;
        if (!id) return;
        const iframe = document.createElement("iframe");
        iframe.src =
          "https://www.youtube-nocookie.com/embed/" +
          encodeURIComponent(id) +
          "?autoplay=1&rel=0";
        iframe.title = host.dataset.ytTitle || "Video";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;
        host.innerHTML = "";
        // drops the poster veil/label overlay once the player is in
        host.classList.add("is-playing");
        host.appendChild(iframe);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".js-constellations").forEach(buildConstellations);
    setupMarquee();
    setupReveal();
    setupVideo();
  });
})();
