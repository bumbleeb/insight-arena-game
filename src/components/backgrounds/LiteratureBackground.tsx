import { useEffect, useRef } from "react";

export const LiteratureBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Books and letters
    const books: any[] = [];
    const letters: any[] = [];
    
    for (let i = 0; i < 30; i++) {
      books.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 40 + 30,
        height: Math.random() * 60 + 40,
        rotation: Math.random() * 0.4 - 0.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        color: `hsl(${Math.random() * 60 + 300}, 80%, 60%)`,
      });
    }

    const letterChars = ['A', 'B', 'C', 'Q', 'W', 'E', 'R', 'T', 'Y'];
    for (let i = 0; i < 50; i++) {
      letters.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: letterChars[Math.floor(Math.random() * letterChars.length)],
        size: Math.random() * 20 + 15,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(250, 248, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw books
      books.forEach((book) => {
        ctx.save();
        ctx.translate(book.x, book.y);
        ctx.rotate(book.rotation);

        // Book cover
        const gradient = ctx.createLinearGradient(-book.width / 2, 0, book.width / 2, 0);
        gradient.addColorStop(0, book.color.replace('60%', '50%'));
        gradient.addColorStop(1, book.color);
        ctx.fillStyle = gradient;
        ctx.fillRect(-book.width / 2, -book.height / 2, book.width, book.height);

        // Book spine
        ctx.fillStyle = book.color.replace('60%', '30%');
        ctx.fillRect(-book.width / 2 - 5, -book.height / 2, 5, book.height);

        // Book details
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 2;
        ctx.strokeRect(-book.width / 2 + 5, -book.height / 2 + 5, book.width - 10, book.height - 10);

        ctx.restore();

        book.x += book.vx;
        book.y += book.vy;

        if (book.x < -50) book.x = canvas.width + 50;
        if (book.x > canvas.width + 50) book.x = -50;
        if (book.y < -50) book.y = canvas.height + 50;
        if (book.y > canvas.height + 50) book.y = -50;
      });

      // Draw floating letters
      letters.forEach((letter) => {
        ctx.save();
        ctx.translate(letter.x, letter.y);
        ctx.rotate(letter.rotation);
        ctx.font = `${letter.size}px serif`;
        ctx.fillStyle = `rgba(236, 72, 153, ${letter.opacity})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(letter.char, 0, 0);
        ctx.restore();

        letter.x += letter.vx;
        letter.y += letter.vy;
        letter.rotation += letter.rotationSpeed;

        if (letter.x < -50) letter.x = canvas.width + 50;
        if (letter.x > canvas.width + 50) letter.x = -50;
        if (letter.y < -50) letter.y = canvas.height + 50;
        if (letter.y > canvas.height + 50) letter.y = -50;
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
