import React, { useState } from "react";

function Todo(props) {
    const [isEditing, setEditing] = useState(false);

    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <input id={props.id} className="todo-edit" value={newName} onChange={handleChange} placeholder={"Edit ''" + props.name +"''"} type="text"/>
            </div>
            <div className="btn-group">
                <button type="button" className="btn cancel" onClick={() => setEditing(false)}>
                    Cancel
                </button>
                <button type="submit" className="btn btn__primary save">
                    Save
                </button>
            </div>
        </form>
    )

    const viewTemplate = (
        <div className="stack-small">
            <div className="checkbox">
                <input id={props.id} defaultChecked={props.completed}  onChange={() => props.toggleTaskCompleted(props.id)} type="checkbox"/>
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button className="btn" onClick={() => setEditing(true)}>
                    Edit
                </button>
                <button className="btn delete" onClick={() => props.deleteTask(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    )

    return(
        <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    )
}

export default Todo;