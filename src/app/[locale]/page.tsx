import Image from 'next/image';

export default function Home() {
  return (
    <section className="w-full relative h-[700px]">
      <Image
        src="/truck-1.jpeg"
        alt="Truck"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
