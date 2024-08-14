import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
function App() {
  
  const [characters, setCharacters] = useState([]);

  const [error, setError] = useState(null);
 
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch(err => {
 
        setError(err);
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <div className="characters-list">
        {characters.map(character => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

