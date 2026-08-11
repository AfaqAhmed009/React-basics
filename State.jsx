// these are used when the value is to be chnaged.
// for example counter and result system.

import { useState } from "react";
// this is like usestate functionality imorted from react libraries

function counter(){
    const [age , setage] = useState(0);
    function counterupdate(){
        setage (age + 1);
        
    }

    return(
        <>
            <button onClick={counterupdate}></button>
        </> 
    );
}