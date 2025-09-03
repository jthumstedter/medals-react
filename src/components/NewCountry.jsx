import {useState} from "react";
import "./NewCountry.css";
import trigger from "../assets/trigger.svg";

export default function NewCountry(props) {
    const [name, setName] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(name);
        hideDialog();
    }
    function hideDialog(){
        setName("");
        setShowDialog(false);
    }
    function handleKeyUp(e) {
        e.keyCode === 27 && hideDialog();
      }
    return (
        <>
        {showDialog ? (
            <form onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
                <div id="overlay" onClick={hideDialog}></div>
                <div id="dialog">
                    <header>Enter New Country Name</header>
                    <div>
                        <input 
                        id="name" 
                        type="text"
                        placeholder="new country"
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <div>
                        <button
                            disabled={name.trim().length === 0}
                            type="submit"
                            id="save"
                        >
                            Save
                        </button>
                    </div>
                    <div>
                        <button id="cancel" type="button" onClick={hideDialog}>Cancel</button>
                    </div>
                </div>
            </form>) : (
                <img src={trigger} alt="New Country" id="trigger" onClick={() => setShowDialog(true)}/>
            )}
        </>
    )
}