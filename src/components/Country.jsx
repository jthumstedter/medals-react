import { useState } from "react";

function Country() {
    const [name, setName] = useState("United States");
    const [gold, setGold] = useState(0);
    function increment(){
        setGold(gold + 1);
    }
    return ( 
        <div className="card">
            <h2 className="card-header">{name}</h2>
            <div className="card-body">
                <p>Gold medals: {gold}</p>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Country;