import { useState, useEffect } from 'react';
import XhrCache from '@spirit-fish/xhr-cache';

const PIKACHU = `https://pokeapi.co/api/v2/pokemon/pikachu`;

function App() {
  // 1. Whenever initializing data, never assume it's not present.
  const [data, setData] = useState(XhrCache.get(PIKACHU));

  useEffect(() => {
    // 2. Whenever fetching data, always check it's not already fetched.
    if (!!data) return;

    (async () => {
      const response = await fetch(PIKACHU);
      setData(await response.json());
    })();
  }, [data]);

  console.log("App.js - WILL RENDER");

  return (
    <div className="App">
      {!!data ? (<h1>App is Ready</h1>) : (<h1>App is Loading</h1>)}
    </div>
  );
}

export default App;
