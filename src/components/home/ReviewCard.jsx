import React from 'react'
import { cn } from '../../lib/utils';

export const ReviewCard = (props) => {

    const {onClick,active, image,name,type} = props || {};

  return (
    <>
    <button onClick={onClick} className={cn("inline-flex justify-start items-center border border-primary rounded-[20px] py-[1px] px-5 gap-[13px] w-full md:w-[300px] lg:w-[400px] xl:w-[491px]",active && "bg-gradient-primary")}>
        <img src={image} alt="" className='rounded-full' />
        <div className={cn("font-semibold text-accent", active && "text-white")}>
            <h4 className='text-start'>{name}</h4>
            <p className='text-start'>{type}</p>
        </div>
    </button>
    </>
  )
}
