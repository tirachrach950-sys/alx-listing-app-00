import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";

const filterLabels = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Pet Friendly",
  "Mountain View",
];

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="h-[60vh] bg-cover bg-center flex flex-col justify-center px-10 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg max-w-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* FILTERS */}
      <section className="px-10 py-6 flex gap-3 overflow-x-auto">
        {filterLabels.map((label, index) => (
          <Pill key={index} title={label} />
        ))}
      </section>

      {/* PROPERTY LISTINGS */}
      <section className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </section>
    </div>
  );
}

