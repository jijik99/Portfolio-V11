/* ============================================================
   FOND ANIMÉ — Étoile de naissance des Joestar (Joestar Birthmark)
   Symbole iconique de la lignée Joestar :
   - Étoile à 5 branches stylisée avec aura de Stand / Hamon
   - Ondes de résonance cosmiques violettes / or / magenta
   - Particules d'énergie stellaire et « ゴゴゴ » flottants
   ============================================================ */

const BG = (() => {
  const cvs = document.getElementById("bgCanvas");
  const c = cvs.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W = 0, H = 0, DPR = 1, t = 0, boost = 0;
  // Position de l'étoile Joestar (légèrement décentrée comme sur l'épaule gauche des Joestar)
  let starPos = { x: 0.65, y: 0.40 };

  const GLYPHS = ["ゴ", "ゴ", "ド", "ド", "★", "✦"];
  const COLORS = ["#c77dff", "#ff4fa3", "#ffd23f", "#9d4edd", "#2ee8a0"];
  let parts = [];

  function resize() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = cvs.width = Math.floor(innerWidth * DPR);
    H = cvs.height = Math.floor(innerHeight * DPR);
    cvs.style.width = innerWidth + "px";
    cvs.style.height = innerHeight + "px";

    // Adapter la position de l'étoile selon mobile / desktop
    starPos = innerWidth < 800 ? { x: 0.50, y: 0.35 } : { x: 0.68, y: 0.42 };

    const count = innerWidth < 700 ? 12 : 22;
    parts = Array.from({ length: count }, () => spawn(true));
  }

  function spawn(initial) {
    const size = (20 + Math.random() * 55) * DPR;
    return {
      x: Math.random() * W,
      y: initial ? Math.random() * H : H + size,
      size,
      vy: (0.2 + Math.random() * 0.45) * DPR,
      ph: Math.random() * Math.PI * 2,
      rot: (-0.3 + Math.random() * 0.6),
      g: GLYPHS[(Math.random() * GLYPHS.length) | 0],
      col: COLORS[(Math.random() * COLORS.length) | 0],
      a: 0.12 + Math.random() * 0.35,
    };
  }

  // Tracer le polygone d'une étoile à 5 branches
  function pathStar(cx, cy, outerRadius, innerRadius, rotation = 0) {
    const spikes = 5;
    const step = Math.PI / spikes;
    c.beginPath();
    for (let i = 0; i < 2 * spikes; i++) {
      const r = (i % 2 === 0) ? outerRadius : innerRadius;
      const angle = i * step - Math.PI / 2 + rotation;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) c.moveTo(x, y);
      else c.lineTo(x, y);
    }
    c.closePath();
  }

  /* ------------------------------------------------------------
     RENDU DE L'ÉTOILE JOESTAR & AURA HAMON
     ------------------------------------------------------------ */
  function drawJoestarStar() {
    const cx = starPos.x * W;
    const cy = starPos.y * H;
    const minDim = Math.min(W, H);

    // Respiration de l'onde Joestar
    const breathe = Math.sin(t * 0.025) * 0.06;
    const currentBoost = boost;
    const baseRadius = (minDim * 0.22) * (1 + breathe + currentBoost * 0.35);
    const innerRatio = 0.42;
    const rotation = -0.12 + Math.sin(t * 0.015) * 0.03; // Légère inclinaison canon JoJo

    c.save();

    // 1. Halo cosmique diffus (Stand Aura)
    const glowRadius = baseRadius * (2.4 + currentBoost * 1.2);
    const gradGlow = c.createRadialGradient(cx, cy, baseRadius * 0.2, cx, cy, glowRadius);
    gradGlow.addColorStop(0, `rgba(255, 79, 163, ${0.28 + currentBoost * 0.3})`);
    gradGlow.addColorStop(0.35, `rgba(157, 78, 221, ${0.18 + currentBoost * 0.25})`);
    gradGlow.addColorStop(0.7, `rgba(255, 210, 63, ${0.08 + currentBoost * 0.15})`);
    gradGlow.addColorStop(1, "rgba(11, 2, 20, 0)");

    c.fillStyle = gradGlow;
    c.beginPath();
    c.arc(cx, cy, glowRadius, 0, Math.PI * 2);
    c.fill();

    // 2. Ondes de résonance concentriques (Cercles d'Hamon)
    const ringCount = 3;
    for (let i = 1; i <= ringCount; i++) {
      const ringR = (baseRadius * 0.8 + ((t * 0.8 + i * 80) % (baseRadius * 2.5))) * (1 + currentBoost * 0.5);
      const ringAlpha = Math.max(0, 0.25 - (ringR / (baseRadius * 3.2))) * (1 + currentBoost);
      c.strokeStyle = i % 2 === 0 ? `rgba(255, 210, 63, ${ringAlpha})` : `rgba(255, 79, 163, ${ringAlpha})`;
      c.lineWidth = (2 + currentBoost * 2) * DPR;
      c.beginPath();
      c.arc(cx, cy, ringR, 0, Math.PI * 2);
      c.stroke();
    }

    // 3. Faisceaux de l'étoile Joestar émanant des 5 branches
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2 / 5) - Math.PI / 2 + rotation;
      const rayLen = minDim * (0.6 + currentBoost * 0.4);
      const gradRay = c.createLinearGradient(cx, cy, cx + Math.cos(angle) * rayLen, cy + Math.sin(angle) * rayLen);
      gradRay.addColorStop(0, `rgba(255, 210, 63, ${0.25 + currentBoost * 0.3})`);
      gradRay.addColorStop(0.5, `rgba(199, 125, 255, ${0.12 + currentBoost * 0.2})`);
      gradRay.addColorStop(1, "rgba(11, 2, 20, 0)");

      c.strokeStyle = gradRay;
      c.lineWidth = (3 + currentBoost * 5) * DPR;
      c.beginPath();
      c.moveTo(cx, cy);
      c.lineTo(cx + Math.cos(angle) * rayLen, cy + Math.sin(angle) * rayLen);
      c.stroke();
    }

    // 4. L'Étoile Joestar principale (La marque de naissance canon)
    pathStar(cx, cy, baseRadius, baseRadius * innerRatio, rotation);

    // Dégradé pourpre Joestar profond / rose magenta / cœur doré
    const gradStar = c.createRadialGradient(cx, cy, baseRadius * 0.1, cx, cy, baseRadius);
    gradStar.addColorStop(0, `rgba(255, 220, 100, ${0.85 + currentBoost * 0.15})`);
    gradStar.addColorStop(0.3, `rgba(255, 79, 163, ${0.75 + currentBoost * 0.2})`);
    gradStar.addColorStop(0.75, `rgba(123, 44, 191, ${0.65 + currentBoost * 0.25})`);
    gradStar.addColorStop(1, `rgba(42, 10, 74, ${0.8 + currentBoost * 0.2})`);

    c.fillStyle = gradStar;
    c.shadowColor = currentBoost > 0.4 ? "#ffd23f" : "#ff4fa3";
    c.shadowBlur = (25 + currentBoost * 35) * DPR;
    c.fill();

    // Contour manga marqué
    c.shadowBlur = 0;
    c.strokeStyle = `rgba(255, 210, 63, ${0.7 + currentBoost * 0.3})`;
    c.lineWidth = (3.5 + currentBoost * 2) * DPR;
    c.stroke();

    // 5. Cœur stellaire étincelant (reflet de l'âme du Stand)
    pathStar(cx, cy, baseRadius * 0.32, baseRadius * 0.32 * innerRatio, rotation);
    c.fillStyle = `rgba(255, 245, 180, ${0.7 + currentBoost * 0.3})`;
    c.shadowColor = "#ffd23f";
    c.shadowBlur = 15 * DPR;
    c.fill();

    c.restore();
  }

  /* ------------------------------------------------------------
     GLYPHES ET ÉTINCELLES FLOTTANTES
     ------------------------------------------------------------ */
  function glyphs() {
    c.textAlign = "center";
    c.textBaseline = "middle";

    for (const p of parts) {
      p.y -= p.vy * (1 + boost * 5);
      const wob = Math.sin(t * 0.02 + p.ph);
      const x = p.x + wob * 5 * DPR;
      const s = p.size * (1 + Math.sin(t * 0.07 + p.ph) * 0.06);

      c.save();
      c.translate(x, p.y);
      c.rotate(p.rot + wob * 0.03);

      if (p.g === "★" || p.g === "✦") {
        c.font = `${s * 0.8}px "Anton", sans-serif`;
      } else {
        c.font = `${s}px "Dela Gothic One", sans-serif`;
      }

      c.globalAlpha = Math.min(1, p.a + boost * 0.4);
      c.lineWidth = s * 0.12;
      c.strokeStyle = "#0b0214";
      c.lineJoin = "round";
      c.strokeText(p.g, 0, 0);
      c.fillStyle = p.col;
      c.fillText(p.g, 0, 0);
      c.restore();

      if (p.y < -p.size) {
        Object.assign(p, spawn(false));
      }
    }
  }

  function frame() {
    t++;
    boost *= 0.94;
    c.clearRect(0, 0, W, H);

    drawJoestarStar();
    glyphs();

    if (!reduce) requestAnimationFrame(frame);
  }

  addEventListener("resize", resize);
  resize();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => frame());
  } else {
    frame();
  }

  return {
    pulse(v = 1) {
      boost = Math.min(1.2, boost + v);
    },
    setFocus(x, y) {
      starPos = { x, y };
    },
  };
})();
