import React from 'react'
import { Festival } from '../types/festivals';
import SliderImage from './SliderImage';

interface FestivalInfoProps {
    festival: Festival;
}

const FestivalInfo = ({festival}: FestivalInfoProps) => {

    return (
    <div className='my-20'>
        <SliderImage festival={festival}/>
        <hr className='my-10'/>
        <div className='flex-col text-center gap-x-8'>
            <div className='py-10 mx-20 bg-blue-600 text-white rounded-3xl'>
                <span className='text-5xl font-bold mb-2 hover:text-6xl hover:transition-all hover:cursor-pointer hover:content after:transition-all'>{festival.title}</span>
                <br/>
                <span className='mb-5'>
                    {festival.start} - {festival.end}<br/>
                    Genre: <strong>{festival.type}</strong><br/>
                    Location: <strong>{festival.location}</strong>
                </span>
            </div>
            <hr className='my-10'/>
            <div className='my-10 mx-10 text-xl '>
                <p>{festival.text}</p>
            </div>
        </div>
    </div>
  )
}

export default FestivalInfo