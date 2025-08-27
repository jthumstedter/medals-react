export default function Medal(props){

    // console.log(props.country);

    return (
        <div className="medal">
            <p className="medalName">{props.type} medals: </p>
            <div className="medalButtons">
                {props.country[props.type] > 0 ? 
                <button onClick={() => props.decrement(props.country.id, props.type)}>-</button> : 
                <button disabled>-</button>
                }
                <p>{props.country[props.type]}</p>
                <button onClick={() => props.increment(props.country.id, props.type)}>+</button>
            </div>
        </div>
    );
    
}