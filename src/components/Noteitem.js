import React, {useContext} from "react";
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div style={{display: 'flex', position: 'absolute', right: '0', transform: 'translateY(-90%)'}}>
            <span className="badge rounded-pill bg-secondary">{note.tag}</span>
          </div>
            <div className="d-flex align-items-center">
                <h5 className="card-title">{note.title}</h5>
                <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Note Deleted","sucess")}}></i>
                <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>updateNote(note)}></i>
            </div>
          <p className="card-text">
            {note.description}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
