import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)]">
      <Image
        src="/scania.jpg"
        alt="Scania truck image"
        fill
        objectFit="cover"
        priority
        loading="eager"
      />
    </div>
  );
}
