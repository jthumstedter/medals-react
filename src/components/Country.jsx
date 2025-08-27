import Medal from "./Medal";

export default function Country(props) {

    // function increment(){
    //     setGold(gold + 1);
    // }
    function getTotalCountryMedals(){
        let total = 0;
        props.medals.map((medal) => (
            total += props.country[medal.name]
        ))
        return total;
    }

    

    return ( 
        <div className="card">
            <div className="card-header">
                <h2>{props.country.name}</h2>
                <h3>{getTotalCountryMedals()}</h3>
                <button onClick={() => props.onDelete(props.country.id)}>X</button>
            </div>
            <div className="card-body">
                {props.medals.map((medal) => (
                    <Medal key={medal.id + props.country.name} type={medal.name} country={props.country} increment={props.increment} decrement={props.decrement}/>
                ))}
                {/* <p>Gold medals: {props.country.gold}</p> */}
                {/* <button onClick={increment}>+</button> */}
            </div>
        </div>
    );
}