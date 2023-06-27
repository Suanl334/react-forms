import SearchNotes from './SearchNotes'
import NotesContainer from './NotesContainer'
import NewNoteForm from './NewNoteForm'


function App() {
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
