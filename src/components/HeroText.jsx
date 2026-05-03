import { useState, useEffect } from "react";

const texts = [
  "Excellence in Education",
  "Building Future Leaders",
  "Smart Learning Environment",
];

export default function HeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-white mt-3 text-lg">
      {texts[index]}
    </p>
  );
}