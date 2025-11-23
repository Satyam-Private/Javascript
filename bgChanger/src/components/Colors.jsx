import React from 'react'
import Mybutton from './Mybutton';

const Colors = ({handleClick}) => {
    const darkColors = [
        "Black",
        "DimGray",
        "DarkSlateGray",
        "MidnightBlue",
        "DarkOliveGreen",
        "DarkSlateBlue",
        "Maroon"
    ];
    return (
        <div className='flex flex-wrap justify-between bg-white p-2 border-1 rounded-2xl '> 
            { 
                darkColors.map((color , id ) => ( 
                    <Mybutton key = {id} colorName =  {color} handleClick={handleClick}/>
                ))
            }
        
        </div>
    )
}

export default Colors