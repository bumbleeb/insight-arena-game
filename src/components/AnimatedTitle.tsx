import { useEffect, useState } from "react";

export const AnimatedTitle = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const fullText = "BrainQuest";

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % 1);
      } else {
        setDisplayText(
          isDeleting
            ? fullText.substring(0, displayText.length - 1)
            : fullText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <div className="relative inline-block">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        {displayText}
        <span className="animate-pulse text-primary">|</span>
      </h1>
      <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-full animate-pulse-slow" />
    </div>
  );
};
