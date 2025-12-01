import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function DestinationCard({ title, description, image }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-2 max-w-sm mx-auto flex flex-col items-start gap-2">
      <div className="rounded-t-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="object-cover w-full h-56"
        />
      </div>

      <h3 className=" w-20 leading-tight text-left text-xl font-semibold text-[#1E2452]">
        {title}
      </h3>

      <p className="w-60 text-left text-[#6F6F6F] ">{description}</p>

      <button className="mt-3 flex items-left text-[#FF146A] font-medium">
        View Itineraries
      </button>
    </div>
  );
}
