import Image from "next/image";

import PartnerCard from "@/components/PartnerCard";

export default function Home() {
  return (
    <>
    <div className="hero">
      <video className="video-bg" autoPlay muted loop>
        <source src="/videos/videoFront.mp4" type="video/mp4" />
      </video>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Home</h1>
      </div>
    </div>

    <div className="spacer"></div>
    
    <div className="container-xl lg:container m-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-end">

       <PartnerCard 
        nome="Capretto"
        logo="/images/a2.jpg" />
        <PartnerCard 
        nome="Cascina Allegra"
        logo="/images/a2.jpg" />
        <PartnerCard 
        nome="Sulin"
        logo="/images/a2.jpg" />
     
      </div>
    </div>

    <div className="spacer"></div>
    </>
  );
}