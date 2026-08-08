// these are just like parameter
// the simple exaple for porps if 

function Greeting(props){
   return (
   <>
    <p>Hello my name is</p>
    <br />
    <h1>prope.name</h1></>
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