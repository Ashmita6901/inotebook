import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';


const Notes = (props) => {
    const context = useContext(noteContext);
    const {notes, getNotes, editNote} = context;
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')!=='null'){
            getNotes();
        }
        else{
            navigate("/login");
        }
        //eslint-disable-next-line
    },[]);

    const [note, setNote] = useState({id: "", etitle:"", edescription:"", etag:""});

    const ref = useRef(null);
    const updateNote = (currentnote)=>{
        ref.current.click();
        setNote({
            etitle: currentnote.title,
            edescription: currentnote.description,
            etag: currentnote.tag,
            id: currentnote._id
        });
    }

    const handleClick = async (e) => {
        await editNote(note.id, note.etitle, note.edescription, note.etag);
        getNotes();
        props.showAlert("Note Added!","success")
    };
    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div style={{height: `${notes.length>12 ? Math.ceil((notes.length-12)/4)*20 + 100: 100}vh`, width: '100vw', overflow:'hidden', background: '#d2d3db', left: '0', top:'0', zIndex: -1, position: 'fixed'}}></div>

        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="etitle" className="form-label">
                            Title
                        </label>
                        <input
                            value={note.etitle}
                            type="text"
                            className="form-control"
                            id="etitle"
                            name="etitle"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edescription" className="form-label">
                            Description
                        </label>
                        <textarea
                            value={note.edescription}
                            className="form-control"
                            id="edescription"
                            name="edescription"
                            rows="4"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="etag" className="form-label">
                            Tag
                        </label>
                        <input
                            value={note.etag}
                            type="text"
                            className="form-control"
                            id="etag"
                            name="etag"
                            onChange={onChange}
                        />
                        
                    </div>
                    
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleClick} data-bs-dismiss="modal">Save Changes</button>
                </div>
                </div>
            </div>
        </div>

        <div className='row my-3' style={{height: '300px'}}>
            <div className="d-flex justify-content-between" style={{paddingTop: "30px"}}>
                <h2>Your Notes</h2>
                <AddNote showAlert={props.showAlert}/>  
            </div>
            <div style={{transform: 'translate(40%,30%)'}}>{notes.length===0 && "No notes to display."}</div>
            {notes.map((note)=>{
                return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
            })}
        </div>
        </div>
    )
}

export default Notes
