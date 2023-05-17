import React from 'react';

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline borer-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                I am a full stack developer with 5 years professional experience and 8 years experience in total. I have been programming since high school when I joined my school's robotics team as the lead programmer and since then I have considered it my calling. I know a plethora of languages and consider myself a Junior to Mid Level programmer and I am currently open to employment opportunites.
            </p>
            <br/>
            <p className="text-xl">
                In my free time I raise and train with my dog, Summer, I compete in competitive Magic the Gathering and Fighting Game tournaments, I volunteer, and I cook. 
            </p>
        </div>
    </div>
  )
}

export default About