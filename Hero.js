
import React from "react";
const Hero = ({ herName })=> {
if(herName === 'Joker') {
    throw new Error('Not a hero');
}
return (
    <div>
        {herName}
    </div>
)
}
export default Hero;