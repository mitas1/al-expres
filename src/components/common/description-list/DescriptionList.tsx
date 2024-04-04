import { FC, ReactNode } from 'react';

interface DescriptionListProps {
  groups: [string, ReactNode][][];
}

export const DescriptionList: FC<DescriptionListProps> = ({ groups }) => (
  <div className="my-4 text-center md:text-left text-sm font-light leading-loose">
    {groups.map((group, index) => (
      <div key={index}>
        {group.map(([key, value]) => {
          return (
            <div key={key} className="inline text-xs">
              <div className="inline after:content-[':'] after:mr-1 uppercase font-bold">
                {key}
              </div>
              <div className="inline after:content-['/'] after:mx-2 after:text-black/50">
                {value}
              </div>
            </div>
          );
        })}
      </div>
    ))}
  </div>
);
