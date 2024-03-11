
import React, {useContext, useState, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import plus from '../plus.png'
import './AddNote.css'

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"", description:"",tag:""});
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"",tag:""});
        props.showAlert("Note Updated!","success")
    };
    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    const ref=useRef(null);
    const refclick=()=>{
        ref.current.click();
    }
    return (
        <div>
            <div className="tool"><img src={plus} alt="plus" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={refclick}/>
                <span className="tooltiptext">Add Note</span>
            </div>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Add Note
            </button>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Note</h1>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Title
                            </label>
                            <input
                                value={note.title}
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                aria-describedby="emailHelp"
                                onChange={onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Description
                            </label>
                            <textarea
                                value={note.description}
                                className="form-control"
                                id="description"
                                name="description"
                                rows="4"
                                onChange={onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">
                                Tag
                            </label>
                            <input
                                value={note.tag}
                                type="text"
                                className="form-control"
                                id="tag"
                                name="tag"
                                onChange={onChange}
                            />
                            
                        </div>
                        
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleClick} data-bs-dismiss="modal">Add</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
