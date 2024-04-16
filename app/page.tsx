import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Find Out What's New? In
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Share Prompt</span>
      </h1>
      <p className="desc text-center">
        Prompt-Space is an open-source tool for the modern world to create and share powerful prompts.
      </p>
    </section>
  );
};

export default Home;

