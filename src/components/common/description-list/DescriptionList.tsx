import { FC, ReactNode } from 'react';

interface DescriptionListProps {
  groups: [string, ReactNode][][];
}

export const DescriptionList: FC<DescriptionListProps> = ({ groups }) => (
  <dl className="my-4 text-left text-sm font-light leading-loose">
    {groups.map((group) => (
      <>
        {group.map(([key, value]) => {
          return (
            <div key={key} className="inline">
              <dt className="inline after:content-[':'] after:mr-1 uppercase font-bold">
                {key}
              </dt>
              <dd className="inline after:content-['/'] after:mx-2 after:text-black/50">
                {value}
              </dd>
            </div>
          );
        })}
        <br />
      </>
    ))}
  </dl>
);
