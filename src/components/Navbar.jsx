import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center gap-3">
  <img
    src="/images/logo.png"
    alt="School Logo"
    className="h-20 w-20 object-contain"
  />

  <h1 className="text-xl md:text-4xl font-bold text-blue-900">
    Citizen Educational Academy
  </h1>
</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-semibold items-center">

        <li className="hover:text-blue-600 cursor-pointer">Home</li>

        {/* ABOUT DROPDOWN */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-blue-600">
            About
          </span>

          <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            
            <p className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              About Us
            </p>

            <p className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              Principal Message
            </p>

            <p className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              Facilities
            </p>

          </div>
        </li>

        <li className="hover:text-blue-600 cursor-pointer">Admission</li>
        <li className="hover:text-blue-600 cursor-pointer">Gallery</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Toggle */}
      <div
        className="md:hidden cursor-pointer text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-3 z-50">

          <p className="cursor-pointer">Home</p>

          {/* Mobile About Dropdown */}
          <div>
            <p
              className="cursor-pointer"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About ⬇
            </p>

            {aboutOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <p>About Us</p>
                <p>Principal Message</p>
                <p>Facilities</p>
              </div>
            )}
          </div>

          <p>Admission</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>
      )}
    </div>
  );
}