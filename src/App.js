import SearchNotes from './SearchNotes'
import NotesContainer from './NotesContainer'
import NewNoteForm from './NewNoteForm'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:4000/notes`)
      const data = await res.json()

      console.log(data)
    }

    fetchTask()
  }, [])

  return (
    <div>
      <h1>all the notes!</h1>
      <SearchNotes />
      <div className="notes-main">
        <NotesContainer />
        <NewNoteForm />
      </div>
    </div>
  );
}


export default App;
