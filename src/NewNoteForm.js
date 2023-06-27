import { useState } from 'react';

function NewNoteForm() {

  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = e.target.elements.content.value;

    setNotes([...notes, inputValue]);

    e.target.reset();
  }

  return (
    <div className="form-container">
      <form className="the-form" onSubmit={handleSubmit}>
        <label id="content-input">
          content: <input type="text" name="content"/>
        </label>
        <input type="submit" value="add new note"/>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  )
}

export default NewNoteForm
