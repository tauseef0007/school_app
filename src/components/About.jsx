export default function About() {
  return (
    <div className="py-16 px-6 grid md:grid-cols-2 gap-10">
      <img src="/images/school.jpg" alt="" className="rounded-xl shadow-lg" />

      <div>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Welcome To Citizen Educational Academy
        </h2>

        <p className="text-gray-600 leading-relaxed">
          We provide quality education with modern infrastructure and
          focus on overall student development.
        </p>

        <button className="mt-4 bg-blue-800 text-white px-5 py-2 rounded">
          Read More
        </button>
      </div>
    </div>
  );
}