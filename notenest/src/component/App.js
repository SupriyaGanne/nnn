import React from "react";
import Header from "./Header.js"
import Footer from "./Footer.js"
import Note from "./Note.js";
import notes from "../notes.js";
function App(){
  return (
  <div>
    <Header/>
   
    {notes.map(noteItem =>
      <Note
      key={noteItem.id}
      title={noteItem.title}
      content={noteItem.content}

      />

    )}
    
  
    <Footer/>
  </div>
  );
}
export default App;