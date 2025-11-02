import { useEffect, useRef } from "react";

export const ScienceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // DNA helix-like particles and atoms
    const particles: any[] = [];
    const atoms: any[] = [];
    
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: `hsl(${200 + Math.random() * 60}, 80%, 60%)`,
      });
    }

    for (let i = 0; i < 5; i++) {
      atoms.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 30,
        orbitRadius: 40,
        angle: Math.random() * Math.PI * 2,
        speed: 0.02,
        electrons: 3,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(250, 248, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw atoms with orbiting electrons
      atoms.forEach((atom) => {
        // Nucleus
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(atom.x, atom.y, 0, atom.x, atom.y, atom.radius);
        gradient.addColorStop(0, "rgba(147, 51, 234, 0.8)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0.3)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // Electrons
        for (let i = 0; i < atom.electrons; i++) {
          const electronAngle = atom.angle + (i * Math.PI * 2) / atom.electrons;
          const ex = atom.x + Math.cos(electronAngle) * atom.orbitRadius;
          const ey = atom.y + Math.sin(electronAngle) * atom.orbitRadius;
          
          ctx.beginPath();
          ctx.arc(ex, ey, 5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(59, 130, 246, 0.9)";
          ctx.fill();
          ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        atom.angle += atom.speed;
        atom.x += Math.sin(atom.angle * 0.1) * 0.5;
        atom.y += Math.cos(atom.angle * 0.1) * 0.3;

        if (atom.x < -50) atom.x = canvas.width + 50;
        if (atom.x > canvas.width + 50) atom.x = -50;
        if (atom.y < -50) atom.y = canvas.height + 50;
        if (atom.y > canvas.height + 50) atom.y = -50;
      });

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-60" style={{ zIndex: 0 }} />;
};
