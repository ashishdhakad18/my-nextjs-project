import DestinationsPage from "./destinations/page";

export default function Home() {
  return (
  <>
    <div className="w-full min-h-screen relative overflow-hidden">

   
      <video
        src="/video/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

     
      <div className="absolute inset-0 bg-black/30"></div>

     
      <header className="relative z-10 w-full flex flex-col items-center">
       
        <div className="w-full bg-[#FD014F] text-white text-center py-3 text-sm">
          30 Sundays raises $770k to bring unique experiences to Indian couples
        </div>

        <nav className=" bg-[#FBF5F0] mt-[16px] px-10 py-3 rounded-full flex items-center justify-between w-[80%] shadow-md">
          <div className="flex items-center gap-2">
            <img src="image/icon 2.svg" alt="logo" className="w-10" />
            <div className="flex flex-col gap-0 leading-tight">
            <p className="text-small text-black">30</p>
            <span className="text-small text-black" >Sundays</span>
            </div>
          </div>

          <ul className="flex gap-10 text-black font-medium font-semibold items-center">
            <li className="text-[#EF3A6D] relative">
              Home
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#EF3A6D]"></span>
            </li>
            <li>Blog</li>
            <li>Destinations</li>
            <li>About</li>
          </ul>

 <button className=" bg-[#FD014F] h-12 w-60 text-white px-8 py-3 rounded-full text-lg font-medium">
          Contact Us
        </button>

        </nav>
      </header>

  
      <div className="relative z-10 flex items-center justify-center flex-col h-[70vh] text-center px-4">
        <h1 className="font-reminder text-white text-6xl md:text-7xl leading-tight">
          Saving Relationships, <br />
          One Vacation at a Time!
        </h1>

        <button className="mt-8 bg-[#FD014F] h-12 w-60 text-white px-8 py-3 rounded-full text-lg font-medium">
          Book a Call
        </button>
      </div>

    </div>
<section className="w-full bg-[#F8F2EC] py-10 border-t border-blue-300">
  <div className="max-w-5xl mx-auto flex items-center justify-center gap-20 px-4">

  
    <div className="flex items-center gap-3">
      <img src="/image/Star Coin.svg" alt="Google" className="w-12" />

      <div>
        <p className="text-[18px] font-semibold text-gray-800">4.6/5</p>
        <p className="text-sm text-gray-500">Google reviews</p>
      </div>
    </div>


    <div className="w-px h-10 bg-gray-300 hidden md:block"></div>

    <div className="flex items-center gap-3">
      <img src="/image/run by.svg" alt="Award" className="w-12" />

      <div>
        <p className="text-[18px] font-semibold text-gray-800">Run by</p>
        <p className="text-sm text-gray-500">IIT-IIM, Apple team</p>
      </div>
    </div>
  </div>
</section>

<section className="w-full bg-[#F8F2EC] py-16">
  <div className="max-w-6xl mx-auto text-center px-4">

   
    <h2 className="font-reminder text-[60px] md:text-[67px] font-normal text-[#1E2452]">
      Why were the perfect match
    </h2>


    <p className="text-[#6A6D7C] mt-4 max-w-3xl mx-auto font-medium text-lg">
      Overwhelmed by itineraries that leave you no time to relax together?<br />
      Suspect your friendly travel agent isn t so friendly to your wallet? Then give us a try!
    </p>


    <div className="mt-12 flex flex-wrap justify-center gap-6">


      <div className="w-[340px] bg-white rounded-2xl shadow-sm p-6 flex gap-4 relative overflow-hidden border border-gray-100">
        
        <div className="absolute left-[50%] top-0 -translate-x-1/2 w-4 h-4 bg-[#FBF7F3] rounded-b-full"></div>
        <div className="absolute left-[50%] bottom-0 -translate-x-1/2 w-4 h-4 bg-[#FBF7F3] rounded-t-full"></div>

        <img src="/image/couple.png" className="w-12 h-12" />
        <div className="flex flex-col">
          <h3 className="font-semibold flex text-left text-[#1E2452]">Made for Couples</h3>
          <p className="text-sm text-[#666C99] flex text-left mt-1 w-40">
            Vacations curated solely with couples in mind
          </p>
        </div>
      </div>

   
      <div className="w-[340px] bg-white rounded-2xl shadow-sm p-6 flex gap-4 relative overflow-hidden border border-gray-100">
        <div className="absolute left-[50%] top-0 -translate-x-1/2 w-4 h-4 bg-[#FBF7F3] rounded-b-full"></div>
        <div className="absolute left-[50%] bottom-0 -translate-x-1/2 w-4 h-4 bg-[#FBF7F3] rounded-t-full"></div>

        <img src="/image/cash.png" className="w-12 h-12" />
        <div>
          <h3 className="font-semibold flex text-left text-[#1E2452]">Price Transparency</h3>
          <p className="text-sm flex text-left text-[#6A6D7C] mt-1">
            Only travel company to provide a split of Flights, Hotels & Activities
          </p>
        </div>
      </div>

    
      <div className="w-[340px] bg-white rounded-2xl shadow-sm p-6 flex gap-4 relative overflow-hidden border border-gray-100">
        <div className="absolute left-[50%] top-0 -translate-x-1/2 w-4 h-4 bg-[#FBF7F3] rounded-b-full"></div>
        <div className="absolute left-[50%] bottom-0 -translate-x-1/2 w-4 h-4 bg-[#FBF7F3] rounded-t-full"></div>

        <img src="/image/security.png" className="w-12 h-12" />
        <div className="px-2">
          <h3 className="font-semibold  flex text-left text-[#1E2452]">No Tourist Traps</h3>
          <p className="text-sm flex text-left text-[#6A6D7C] mt-1">
            Only 8+ rated hotels; hand-picked authentic activities
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<DestinationsPage/>

</>


  );
}
