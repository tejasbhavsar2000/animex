import { useEffect, useState } from 'react';
import './App.css';
import Anime from './Anime'


const App = () => {

  const [anime,setanime] = useState([]);
  const [query, setquery] = useState('adventure');
  const [search, setSearch] = useState("")

  useEffect(()=>{
    console.log('effect has been run');
    getAnime();
  }, [query]);

  const getAnime = async ()=>{
    const response = await fetch(
      'https://kitsu.io/api/edge/anime?filter[categories]='+query
      );
    const data = await response.json();
    console.log(data.data);
    setanime(data.data);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e =>{
    e.preventDefault();
    setquery(search);
  };

  return (
        <div className = "App">
          <form className="search-form" onSubmit={getSearch}>
            <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
            <button className="search-button" type="submit" >
              Search
            </button>
          </form>
          <div className="animes">
            {anime.map(a => (
              <Anime key= {a.attributes.canonicalTitle} title={a.attributes.canonicalTitle} image={a.attributes.posterImage.medium}/>
            ))}
            </div>
        </div>
      );
  }
  

export default App;
