// these are just like parameter
// the simple exaple for porps if 

function Greeting(props){
   return (
   <>
    <p>Hello my name is</p>
    <br />
    <h1>{prop.name}</h1></>
   );
}

export default Greeting;

// and when it is called it is like

import Greeting from ".File name ";

function App (){
    return(
        <>
            <Greeting name = "afaq ahmed"/>
        </>
    );
}


// Props with number and arrays

function Fruits(props){
   return (
   <>
        <p>Following are the names of the fruits: </p>
        <br />
        <ul>
            <li>{props.name[0]}</li>
            <li>{props.name[1]}</li>
            <li>{props.name[2]}</li>
            <li>{props.name[3]}</li>
        </ul>
        
        
    </>
   );
}

export default Fruits;

// and when it is called it is like

import Fruits from ".File name ";

function App (){
    return(
        <>
            <Greeting name = {["Apple", "Grapes", "Mango"]}/>
        </>
    );
}
