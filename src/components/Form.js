import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-task" >What needs to be done?</label>
            </h2>
            <input value={name} onChange={handleChange} placeholder="new task" type="text" id="new-task" className="input_lg" name="new-task" autoComplete="off"/>
            <button type="submit" className="btn btn_lg add">
            Add
            </button>
        </form>
    )
}

export default Form;