import Image from 'next/image';
import React from 'react';

interface CreatorCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ imageUrl, name, role }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <Image className="mb-3 rounded-full mt-2 shadow-lg" src={imageUrl} alt={name} width={96} height={96} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
      </div>
    </div>
  );
}

export default CreatorCard;

