import Image from "next/image";
import ImageSlider from "@/components/imageSlider";
import FleetHeading from "@/components/fleetHeading";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/scania-truck3.jpg"
          alt="Scania truck image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          loading="eager"
        />
      </div>

      <FleetHeading />
      {/* Slider */}
      <ImageSlider />
    </>
  );
}
