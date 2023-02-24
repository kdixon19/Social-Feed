import React, { useState } from 'react';
import "./LikeButton.css"



const LikeButton = () => {

    const [buttonClass, setButtonClass] = useState('inactive')

    function handleClick () {
        if (buttonClass === 'inactive') {
            setButtonClass('activeLike');
        }
        else {
            setButtonClass('inactive');
        }
    }
    return (
       <div>
            <button className={buttonClass} onClick = {handleClick}>LIKE</button>
       </div>
    );
}
 
export default LikeButton;