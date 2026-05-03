import { useState, useEffect, useCallback } from "react";

export default function HeroSlider() {
  const slides = [
    {
      image: "/images/1.jpg",
      title: "Welcome To Our School",
      subtitle: "Excellence in Education",
    },
    {
      image: "/images/2.jpg",
      title: "Smart Learning",
      subtitle: "Building Future Leaders",
    },
    {
      image: "/images/3.jpg",
      title: "Modern Campus",
      subtitle: "Best Facilities",
    },
    {
      image: "/images/4.jpg",
      title: "We Are Here",
      subtitle: "Building Future Leaders",
    },
  ];

  const [index, setIndex] = useState(0);

  // ✅ useCallback to fix dependency issue
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

 
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">

      <img
        src={slides[index].image}
        alt={slides[index].title}   
        className="w-full h-full object-cover transition duration-700"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            {slides[index].title}
          </h1>

          <p className="text-white mt-3 text-lg">
            {slides[index].subtitle}
          </p>

          <button className="mt-5 bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300">
            Apply Now
          </button>
        </div>
      </div>

      {/* LEFT */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full"
      >
        ◀
      </button>

      {/* RIGHT */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full"
      >
        ▶
      </button>

      {/* DOTS */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-yellow-400" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}