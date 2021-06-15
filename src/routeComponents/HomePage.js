import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import "bootstrap/dist/css/bootstrap.min.css";

import CharacterCard from "../components/CharacterCard";

const publicKey = "c7dbb9aaf046c6e7dc40db5aebfffabd";
const privateKey = "94b44e6503b2e1660c4e2136da55279f3c61d314";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

function Homepage() {
  const [charactersList, setCharacters] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
        );

        setCharacters([response.data.data]);
        if (list.length <= 0) {
          setList(charactersList);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchCharacters();
  }, [list, charactersList]);

  return (
    <div className="container">
      {list.map((item, pos) => {
        return (
          <div className="container" key={pos}>
            <CharacterCard key={item.id} item={item}></CharacterCard>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
