import DestinationCard from "@/components/DestinationCard";

const destinations = [
  {
    title: "Bali",
    description: "Sun, sand, and romance for beach-loving couples",
    image: "/image/bali.png",
  },
  {
    title: "Maldives",
    description: "Where every sunset is a promise of love",
    image: "/image/maldives.png",
  },
  {
    title: "Dubai",
    description: "For the couple that loves luxury",
    image: "/image/dubai.png",
  },
  {
    title: "Thailand",
    description: "For the couple that loves tropical escapes",
    image: "/image/thailand.png",
  },
];

export default function DestinationsPage() {
  return (
    <section className="w-full bg-[#F8F2EC] py-16">
      <div className="max-w-6xl mx-auto text-center px-4">

        {/* Heading */}
        <h2 className="font-reminder text-[60px] md:text-[67px] font-normal text-[#1E2452]">
          30 Sundays curated destinations
        </h2>
        {/* Subtitle */}
        <p className="text-[#6A6D7C] mt-4 max-w-3xl mx-auto font-medium text-lg">
          Trade your couch for these hotspots—where couples trend instead of tweets!
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {destinations.map((item) => (
            <DestinationCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
