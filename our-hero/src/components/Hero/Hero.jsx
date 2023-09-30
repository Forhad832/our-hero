import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ data }) => {
    const {id, name, image_caption, imgae, job, company } = data;

    console.log(data);
    return (
        <div className='bg-slate-200'>

            
            <figure>
                <img className='w-full h-72 lg:h-56 object-fill' src={imgae} alt="" />
                <figcaption className='text-sm px-4 mb-3 text-slate-600'>{image_caption}</figcaption>
            </figure>
            <div className='px-4 text-center'>
            <h3 className='text-xl font-bold mb-1'>Name : <span className='text-xl font-bold'>{name}</span>
            </h3>
            <h4 className='text-sm text-slate-500 tracking-wide'>{job}</h4>
            <h4 className='text-sm text-slate-500 tracking-wide'>{company}</h4>
            
            </div>
            <Link className='btn mt-3 w-full text-white btn-ghost bg-primary ' to={`/${id}`}>About More...</Link>
        </div>
    );
};

export default Hero;