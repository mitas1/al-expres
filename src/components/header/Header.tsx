import Image from 'next/image';

export const Header = () => (
  <header className="h-20 flex items-center justify-center backdrop-blur-sm bg-black/70 fixed top-0 right-0 left-0 z-20">
    <div className="max-w-6xl w-full">
      <Image
        src="/al-expres.svg"
        alt="Vercel Logo"
        width={90}
        height={36}
        priority
      />
    </div>
  </header>
);
