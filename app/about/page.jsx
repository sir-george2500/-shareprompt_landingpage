import CreatorCard from '@/components/CreatorCard';
import Image from 'next/image';
import React from 'react';

// Import images
import georgeMulbahImage from '../../public/assets/images/george_mulbah.png';
import princeDahnImage from '../../public/assets/images/prince_dahn.jpg';
import viewPlatformImage from '../../public/assets/images/view_platform.png';

export default function About() {
  return (
    <>
      <h1 className="font-bold text-6xl">Meet Our Team</h1>
      <div className="flex w-full flex-row items-center pl-12 pt-6">
        <div className="w-full">
          <CreatorCard name="George S Mulbah" imageUrl={georgeMulbahImage} role="Software Engineer" />
        </div>
        <div className="w-full">
          <CreatorCard name="Prince Dahn" imageUrl={princeDahnImage} role="Network Engineer" />
        </div>
      </div>

      <a href="https://share-prompts-lovat.vercel.app/" className="mt-4 items-center bg-white border mb-2 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className="object-cover w-full rounded" src={viewPlatformImage} width={600} height={600} />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Share Prompt how it started</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The emergence of Generative AI marks a remarkable milestone in human achievement. However, its potential may seem wasted if one doesn't know how to utilize the technology effectively to enhance productivity. A friend of mine recently experienced this dilemma when he purchased credits on a platform, hoping to use AI prompts to generate high-quality content efficiently. He needed the AI to craft a write-up that didn't obviously appear to be machine-generated but rather reflected his own voice. Despite his efforts, he found himself burning through his limited credits without much success. Observing his struggle, I offered to assist by refining the prompt. With a better-crafted input, the machine executed the task flawlessly. This experience sparked a realization: How many others might be facing similar challenges? What if we could share our successful prompts? It occurred to me that many prompts we struggle to formulate have likely been perfected by others. The solution was to create a platform where users can share effective AI prompts, enabling individuals to leverage collective expertise and optimize their AI interactions. Share Prompt was born.</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is Share Prompt</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Share Prompt is a web application that allows users to share and discover creative AI prompts. </p>
        </div>
      </a>
    </>
  );
}

