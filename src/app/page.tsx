import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)]">
      <Image
        src="/scania-truck3.jpg"
        alt="Scania truck image"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
        loading="eager"
      />
    </div>
  );
}
