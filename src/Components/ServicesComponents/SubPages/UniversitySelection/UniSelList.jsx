import React, { useState } from "react";
import { Search, MapPin, Globe } from "lucide-react";

export default function UniSelList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const universities = [
    {
      name: "Tokyo University",
      country: "Japan",
      location: "Tokyo, Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    },
    {
      name: "Kyoto University",
      country: "Japan",
      location: "Kyoto, Japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    },
    {
      name: "Harvard University",
      country: "USA",
      location: "Cambridge, Massachusetts",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    },
    {
      name: "Stanford University",
      country: "USA",
      location: "Stanford, California",
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    },
    {
      name: "University of Oxford",
      country: "UK",
      location: "Oxford, England",
      image:
        "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab1?w=800&q=80",
    },
    {
      name: "University of Cambridge",
      country: "UK",
      location: "Cambridge, England",
      image:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80",
    },
    {
      name: "University of Toronto",
      country: "Canada",
      location: "Toronto, Ontario",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    },
    {
      name: "University of British Columbia",
      country: "Canada",
      location: "Vancouver, BC",
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
    },
    {
      name: "University of Melbourne",
      country: "AUS",
      location: "Melbourne, Victoria",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    },
    {
      name: "University of Sydney",
      country: "AUS",
      location: "Sydney, NSW",
      image:
        "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?w=800&q=80",
    },
    {
      name: "National University of Singapore",
      country: "Others",
      location: "Singapore",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    },
  ];

  const countries = ["All", "Japan", "USA", "UK", "Canada", "AUS", "Others"];

  const filteredUniversities = universities.filter((uni) => {
    const matchesSearch = uni.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCountry =
      selectedCountry === "All" || uni.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <section className="px-6 py-20 my-16 mx-6 bg-gray-100 rounded-3xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 leading-tight">
          Our Partner Universities
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our network of prestigious universities across the globe. Find
          your dream institution among our trusted partners.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto mb-14">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Box */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Country Dropdown */}
            <div className="relative w-full md:w-auto min-w-[200px]">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full appearance-none px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white cursor-pointer transition-all"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country === "All" ? "All Countries" : country}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-center text-gray-600">
          Showing{" "}
          <span className="font-semibold text-emerald-600">
            {filteredUniversities.length}
          </span>{" "}
          {filteredUniversities.length === 1 ? "university" : "universities"}
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 hover:-translate-y-1"
            >
              {/* University Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-md">
                  {uni.country}
                </div>
              </div>

              {/* University Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">
                  {uni.name}
                </h3>

                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500" />
                  <p className="text-sm leading-relaxed">{uni.location}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500 text-xl font-medium">
              No universities found
            </p>
            <p className="text-gray-400 mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
