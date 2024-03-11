
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "https://inotebackend-vdau.onrender.com"
    const notesInitial = [];
      const [notes, setNotes] = useState(notesInitial);

      //get all notes
      const getNotes = async ()=>{
        //api call
        if(localStorage.getItem('token')){
          const url = `${host}/api/notes/fetchallnotes`;
          const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          });
          const json = await response.json();
          setNotes(json);
        }
        else{
          setNotes([]);
        } 
      }

      //add note
      const addNote = async (title, description, tag)=>{
        //api call
        const url = `${host}/api/notes/addnote`;
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag})
        });
        getNotes();
      }

      //delete note
      const deleteNote = async (id)=>{
        //api call
        const url = `${host}/api/notes/deletenote/${id}`;
        await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
        });
        getNotes();
      }

      //edit a note
      const editNote = async (id, title, description, tag)=>{
        //api call
        const url = `${host}/api/notes/updatenote/${id}`;
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag})
        });
        
        

        //Logic to edit
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title=title;
                element.description=description;
                element.tag=tag;
            }  
        }
      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;