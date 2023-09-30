// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';

const Heros = () => {
    const [heros,setHeros] = useState([]);

    useEffect(()=>{
        fetch('heros.json')
        .then(res=> res.json())
        .then(data => setHeros(data));
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 py-12'>
            {
                heros.map((e,i)=> <Hero key={i} data={e}></Hero>)
            }
        </div>
    );
};

export default Heros;