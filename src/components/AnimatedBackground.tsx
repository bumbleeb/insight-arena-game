import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      angle: number;
      rotationSpeed: number;
    }> = [];

    const orbs: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      pulse: number;
    }> = [];

    const hues = [262, 220, 330, 142];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        hue: hues[Math.floor(Math.random() * hues.length)],
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.02 - 0.01,
      });
    }

    // Create glowing orbs
    for (let i = 0; i < 6; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 40,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.8 - 0.4,
        hue: hues[Math.floor(Math.random() * hues.length)],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw glowing orbs
      orbs.forEach((orb) => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        orb.pulse += 0.02;

        if (orb.x < -100) orb.x = canvas.width + 100;
        if (orb.x > canvas.width + 100) orb.x = -100;
        if (orb.y < -100) orb.y = canvas.height + 100;
        if (orb.y > canvas.height + 100) orb.y = -100;

        const pulseSize = orb.size + Math.sin(orb.pulse) * 10;
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, pulseSize);
        gradient.addColorStop(0, `hsla(${orb.hue}, 83%, 58%, 0.4)`);
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 83%, 58%, 0.15)`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 83%, 58%, 0)`);

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw particles with trails
      particles.forEach((particle) => {
        particle.angle += particle.rotationSpeed;
        particle.x += particle.speedX + Math.sin(time + particle.angle) * 0.5;
        particle.y += particle.speedY + Math.cos(time + particle.angle) * 0.5;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 83%, 58%, 0.8)`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 83%, 58%, 0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 83%, 68%, 1)`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            const opacity = 0.3 * (1 - distance / 150);
            ctx.strokeStyle = `hsla(${particle.hue}, 83%, 58%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-50"
      style={{ zIndex: 0 }}
    />
  );
};
