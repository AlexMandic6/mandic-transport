import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/scania.jpg"
      alt="Scania truck image"
      width={2048}
      height={1366}
      objectFit="cover"
      priority={true}
      loading="eager"
    />
  );
}
