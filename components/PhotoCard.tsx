import Image from 'next/image';
import React from 'react';


interface PhotoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}


const PhotoCard: React.FC<PhotoCardProps> = ({ title, description, imageUrl }) => {
    return(
        <div className="mt-2">
            <a href="#" className="block max-w-lg p-6 flex flex-row  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
                <div className='flex items-center ml-auto'>
                    <Image src={imageUrl} width={600} height={600} alt='photo card' />
                </div>
            </a>
        </div>

    );
}

export default PhotoCard;
