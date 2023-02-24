import React, { useState } from 'react';
import "./DislikeButton.css"

const DislikeButton = () => {

    const [buttonClass, setButtonClass] = useState('inactive')
    
    function handleClick () {
        if (buttonClass === 'inactive') {
            setButtonClass('activeDislike');
        }
        else {
            setButtonClass('inactive');
        }
    }

    return ( 
        <div>
            <button className={buttonClass} onClick = {handleClick}>DISLIKE</button>
        </div>
     );
}
 
export default DislikeButton;