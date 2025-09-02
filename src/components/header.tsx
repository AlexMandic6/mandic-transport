import Image from "next/image";

function header() {
  return (
    <div
      className="bg-midnight h-16 text-white flex items-center px-4 gap-2
"
    >
      <Image src="/logo-scania.svg" alt="Scania Logo" width={40} height={40} />
      <p>header</p>
    </div>
  );
}
export default header;
