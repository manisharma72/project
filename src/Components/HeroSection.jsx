import { useState } from "react";

const HeroSection = () => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for ${service} near ${location}`);
  };

  const servicesList = ["Plumber", "Electrician", "Mechanic", "Carpenter", "Painter", "Maid", "Tutor"];

  return (
    <section className="relative h-screen flex items-center justify-center text-white" id="home">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/images/city.jpg" alt="City" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Find Trusted Services <span className="text-yellow-400">Near You</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200">
          Verified local providers & civic services at your fingertips. Fast, reliable & easy to book.
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto bg-white rounded-3xl p-5 shadow-xl text-gray-800"
        >
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="flex-1 p-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          >
            <option value="">Select Service</option>
            {servicesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="flex-1 p-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800 font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
