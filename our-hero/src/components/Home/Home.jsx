// eslint-disable-next-line no-unused-vars
import React from 'react';
import Heros from '../Heros/Heros';

const Home = () => {
    return (
       <>
        <div className="hero min-h-screen  bg-hero-pattern" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-serif font-bold">Our Real Heros</h1>
                    <p className="mb-5">Our real heros,Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>
            </div>
        </div>
         <div className="container mx-auto px-4">
         <Heros></Heros>
         
         </div>
       </>
    );
};

export default Home;