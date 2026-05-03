import { useState } from "react";

export default function TopHeader() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="bg-blue-900 text-white text-sm px-6 py-2 flex justify-between items-center">

      {/* Left side */}
      <div className="flex gap-6">

        {/* Phone */}
        <div
          className="cursor-pointer hover:underline"
          onClick={() => setShowPhone(!showPhone)}
        >
          📞 {showPhone ? "+91 9876543210" : "Show Phone"}
        </div>

        {/* Email */}
        <div
          className="cursor-pointer hover:underline"
          onClick={() => setShowEmail(!showEmail)}
        >
          ✉ {showEmail ? "school@gmail.com" : "Show Email"}
        </div>

      </div>

      {/* Right side */}
      <button className="bg-yellow-400 text-black px-4 py-1 rounded font-semibold hover:bg-yellow-300">
        Apply Now
      </button>
    </div>
  );
}