function Footer(){
    let email = "bilalelectric@gmail.com";
    let Number = "0345-345345";
    let Type = "Electric Store";


    // Hwew we are returning the jsx function
    return (

        // Frangments
        <>
        <ul>
            <li>{email}</li>
            <li>{Number}</li>
            <li>{Type}</li>
        </ul>
        </>
    );
}

export default Footer;