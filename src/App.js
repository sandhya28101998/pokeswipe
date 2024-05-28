import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Wellcome from "./Components/Welcome/Wellcome";

import Allcards from "./Components/AllCards/allCards";
//import Swipe from "./Components/Swipe/Swipe";
function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      //console.log(result.data);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    const pokeFun = async () => {
      setLoading(true);
      const res = await axios.get(url);
      getPokemon(res.data.results);
      setLoading(false);
    };
    pokeFun();
  }, [url]);

  return (
    <div className="App">
      {/* <Swipe pokemon={pokeData} /> */}
      <div>
        <Wellcome />
        <Allcards pokemon={pokeData} loading={loading} />
      </div>
    </div>
  );
}

export default App;
