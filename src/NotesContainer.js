// import SingleNote from './SingleNote'
import { useEffect, useState } from 'react';
 
function NotesContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/notes')
      .then(r => r.json())
      .then(data => {
        setData(data);
      })
  }, [])

  return (
    <div>
      {data.map(item => (
        <ul key={item.id}>
          <li>{item.content}</li>
        </ul>
      ))}
    </div>
  )
}

export default NotesContainer
