"use client";
import Image from "next/image";

export default function ItineraryCardsDynamic() {
  const itineraries = [
    {
      id: 1,
      couple: "Ruby & Vineet",
      coupleDesc:
        "Wanted to stay in unique accommodations right in the middle of nature.",
      title: "6 Nights/ 7 Days in Bali",
      stay: "4N Ubud, 2N Seminyak Gili – 1 Night",
      description:
        "Stayed in Northern Bali at a treehouse and a private pool villa. Promised to never stay in hotels again.",
      images: [
        "/image/big1.png",
        "/image/image 29.png",
        "/image/image 30.png",
      ],
      icon: "/image/emoji.png",
    },
    {
      id: 2,
      couple: "Sakshi & Shubham",
      coupleDesc:
        "Wanted to spend time at the beautiful white sand beaches of Gili.",
      title: "7 Nights/ 8 Days in Bali",
      stay: "2N Seminyak | 1N Nusa Penida | 3N Gili",
      description:
        "They now recommend Gili island for beaches instead of Kuta, Bali beaches to everyone!",
      images: [
        "/image/imagebig.png",
        "/image/image 27.png",
        "/image/image 28.png",
      ],
     icon: "/image/emoji.png",
    },
  
  ];

  return (
    <section className="w-full bg-[#F8F2EC] py-16  justify-center">
      <div className="max-w-523xl flex flex-col mx-auto px-4 ">

        {/* Heading */}
        <h2 className="font-reminder text-[60px] md:text-[67px] font-normal text-[#1E2452] text-center mb-4">
          Real couples, real itineraries
        </h2>

        <p className="text-[#6A6D7C] mt-1 max-w-5xl mx-auto font-medium text-lg text-center mb-12">
          Every trip tells a story. Browse itineraries created for real couples and find ideas to spark your next adventure.
        </p>

        {/* Dynamic Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {itineraries.map((card) => (
            <div
              key={card.id}
              className="w-[650px] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden p-2 flex gap-4"
            >
              {/* LEFT BIG IMAGE */}
              <div className="relative w-[40%] h-[340px] rounded-xl overflow-hidden">
                <Image
                  src={card.images[0]}
                  alt="big"
                  fill
                  className="object-cover"
                />

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* overlay text */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">{card.couple}</p>
                  <p className="text-sm w-40 leading-tight">{card.coupleDesc}</p>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-[55%]">

                {/* TOP IMAGES (2 horizontal) */}
                <div className="flex gap-2 h-[110px] mb-3">
                  <div className="relative w-1/2 h-full rounded-lg overflow-hidden">
                    <Image
                      src={card.images[1]}
                      alt="small1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-1/2 h-full rounded-lg overflow-hidden">
                    <Image
                      src={card.images[2]}
                      alt="small2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-[#1E2452]">
                  {card.title}
                </h3>

                {/* LOCATION */}
                <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                  📍 {card.stay}
                </p>

                {/* DESCRIPTION BOX */}
                <div className="flex">
                 <div className="h-22 w-2 bg-amber-600 mt-3"></div>
                <div className="mt-3 bg-[#FFF6E6] p-4 rounded-tr-xl rounded-br-xl border  flex gap-3">
                  
                  <Image src={card.icon} alt="icon" width={10} height={10} className="object-cover  mt-4 relative w-10 h-5 rounded-lg overflow-hidden"/>
                  <p className="text-gray-700 text-sm leading-tight">
                    {card.description}
                  </p>
                </div>
                </div>

                {/* LINK */}
                <p className="text-pink-600 font-semibold mt-3 cursor-pointer">
                  View Itinerary
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
