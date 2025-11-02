import { useEffect, useRef } from "react";

export const HistoryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Ancient scrolls and clock elements
    const scrolls: any[] = [];
    const gears: any[] = [];
    
    for (let i = 0; i < 40; i++) {
      scrolls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 30 + 20,
        height: Math.random() * 40 + 30,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    for (let i = 0; i < 6; i++) {
      gears.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 40 + 30,
        teeth: 8,
        rotation: 0,
        speed: (Math.random() - 0.5) * 0.02,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(250, 248, 255, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gears (clock elements)
      gears.forEach((gear) => {
        ctx.save();
        ctx.translate(gear.x, gear.y);
        ctx.rotate(gear.rotation);

        // Gear body
        ctx.beginPath();
        for (let i = 0; i < gear.teeth * 2; i++) {
          const angle = (i * Math.PI) / gear.teeth;
          const radius = i % 2 === 0 ? gear.radius : gear.radius * 0.85;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, gear.radius);
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.4)");
        gradient.addColorStop(1, "rgba(14, 165, 233, 0.1)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = "rgba(59, 130, 246, 0.5)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();

        gear.rotation += gear.speed;
      });

      // Draw scrolls
      scrolls.forEach((scroll) => {
        ctx.save();
        ctx.translate(scroll.x, scroll.y);
        ctx.rotate(scroll.rotation);

        // Scroll paper
        ctx.fillStyle = "rgba(236, 201, 75, 0.2)";
        ctx.fillRect(-scroll.width / 2, -scroll.height / 2, scroll.width, scroll.height);
        ctx.strokeStyle = "rgba(180, 130, 40, 0.4)";
        ctx.lineWidth = 2;
        ctx.strokeRect(-scroll.width / 2, -scroll.height / 2, scroll.width, scroll.height);

        // Lines on scroll
        ctx.strokeStyle = "rgba(180, 130, 40, 0.3)";
        ctx.lineWidth = 1;
        for (let i = 0; i < 3; i++) {
          const lineY = -scroll.height / 4 + (i * scroll.height) / 4;
          ctx.beginPath();
          ctx.moveTo(-scroll.width / 3, lineY);
          ctx.lineTo(scroll.width / 3, lineY);
          ctx.stroke();
        }

        ctx.restore();

        scroll.x += scroll.vx;
        scroll.y += scroll.vy;
        scroll.rotation += scroll.rotationSpeed;

        if (scroll.x < -50) scroll.x = canvas.width + 50;
        if (scroll.x > canvas.width + 50) scroll.x = -50;
        if (scroll.y < -50) scroll.y = canvas.height + 50;
        if (scroll.y > canvas.height + 50) scroll.y = -50;
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

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-50" style={{ zIndex: 0 }} />;
};
