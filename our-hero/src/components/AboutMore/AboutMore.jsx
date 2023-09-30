import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AboutMore = () => {

    const [newData, setNewData] = useState([]);
    console.log(newData);
    const [routes, setRoute] = useState({});
   

    const saveData = useParams();
    console.log(saveData);
    useEffect(() => {
        const main = newData.filter(e => e.id == saveData.id)[0];

        setRoute(main)
    }, [newData])
    useEffect(() => {
        fetch('heros.json')
            .then(res => res.json())
            .then(data => setNewData(data));
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h2 className='text-center text-3xl font-medium my-12'>About More Our Hero Mr {routes?.name}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 py-12'>
                <div className='col-span-8'>
                    {
                        routes?.bio?.map((e, i) => (
                            <p className='text-lg mb-4' key={i}>{e}</p>
                        ))
                    }
                    <div>
                        <h3 className='text-xl font-bold'>Skills :</h3>
                        <div className='grid grid-cols-6 gap-4'>
                        {
                        routes?.skills?.map((e,i)=>(
                            <p className='bg-primary rounded-lg text-white text-center p-1' key={i}>{e}</p>
                        ))
                    }
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <img className='h-96 mb-3' src={routes?.imgae} alt="" />
                    <h4 className=''><span className='text-lg font-medium'>Name</span> :{routes?.name}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Job</span> :{routes?.job}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Company</span> :{routes?.company}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Born</span> :{routes?.born}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Maritial status</span> :{routes?.married}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Website</span> : <a href={`${routes?.website}`}>{routes?.website}</a></h4>
                </div>

            </div>
        </div>
    );
};

export default AboutMore;