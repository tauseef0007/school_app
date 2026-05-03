export default function Features() {
  const data = [
    { title: "Physics Lab", img: "/images/1.jpg" },
    { title: "Sports", img: "/images/2.jpg" },
    { title: "Library", img: "/images/3.jpg" },
  ];

  return (
    <div className="bg-blue-900 text-white py-14">
      <h2 className="text-center text-3xl font-bold mb-8">
        Explore Facilities
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
            <img src={item.img} alt={item.title} />
            <h3 className="p-4 text-center font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}