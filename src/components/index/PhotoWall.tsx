import Image from 'next/image';
import { FC } from 'react';

const PhotoItem: FC<{ src: string }> = ({ src }) => (
  <div className="h-[300px] overflow-hidden w-[400px] shrink-0">
    <Image
      src={src}
      alt="Car"
      className="hover:-mt-[300px]"
      width={400}
      height={600}
    />
  </div>
);

export const PhotoWall: FC = () => (
  <section className="w-full overflow-hidden justify-items-start flex">
    <PhotoItem src="/car-1.jpeg" />
    <PhotoItem src="/car-2.jpeg" />
    <PhotoItem src="/car-3.jpeg" />
    <PhotoItem src="/car-4.jpeg" />
    <PhotoItem src="/car-5.jpeg" />
  </section>
);
