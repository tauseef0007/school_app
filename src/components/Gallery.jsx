export default function Gallery() {
  return (
    <div className="py-14 px-6">
      <h2 className="text-3xl text-center font-bold mb-6">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4,5,6].map((img) => (
          <img
            key={img}
            src={`/images/${img}.jpg`}
            alt={`Gallery image ${img}`}   // ✅ FIX again
            className="rounded-lg hover:scale-110 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}