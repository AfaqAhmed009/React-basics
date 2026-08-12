// these are used when the value is to be chnaged.
// for example counter and result system.

import { useState } from "react";
// this is like usestate functionality imorted from react libraries

// simple state for numbers
// As in state the original value is given then the next is updated 
function counter(){
    const [age , setage] = useState(0);
    function counterupdate(){
        setage (age + 1);  
    }
    return(
        <> <button onClick={counterupdate}></button> </> 
    );
}

//Use of state for Object
const [obj , setobj] = usestate({name : "afaq", age : 21});
// and when update update it like this
function updaete(){
        setobj({
            ...obj,
            age : 22
        })

    return (
        <div> updaete(); </div>
        );
}

// Now for arrays 
const [arr1 , setarr1] = usestate([ "Afaq ahmed", "Ahmed gul", "Moiz muddasir" ]);

function Update_array(){
        setarr1([
            ...arr1,
            "Umiar", "Murtaza", "Umar"
        ])

        return (
            <> <button onClick={Update_array}></button>  </>
        );
}
// In state we can not directly updaet the the state variable if wee do that the state will not change 
// but the chnage will not be shown on the screen for the updates to be seen on the screen 
// the state should be updated. 
// the following system will be forced 


function state(){
    const [count , setCount] = usestate(0);
    const [name , setName] = useState("Afaq Ahmed");
    const [age , setage] = useState(21);
    const [skills , setskills] = useState([]);
}
