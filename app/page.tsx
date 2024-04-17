import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const Home: React.FC = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Find Out What's New? In
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center"> Share Prompt</span>
            </h1>

            <div className="grid grid-cols-2 gap-4">
                <PhotoCard title='You can now edit  prompt' description='It now possible to edit your prompt with just a few clicks from your profile screen'  imageUrl='/assets/images/edit_prompt.png'/>
                <PhotoCard title='You can Search for Prompt' description='You can search for related prompt based on a topic query or tag'  imageUrl='/assets/images/searchforprompt.png'/>
                <PhotoCard title='Creating is now easier' description='We have made creating a prompt easier than before'  imageUrl='/assets/images/create_prompt.png'/>
                <PhotoCard title='View other prompt' description='We have added a copy button to not just view but also support easy copying of others prompt'  imageUrl='/assets/images/view_other_user_prompt.png'/>
            </div>
        </section>
    );
};

export default Home;

