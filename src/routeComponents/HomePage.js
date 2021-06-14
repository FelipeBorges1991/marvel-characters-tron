import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import "bootstrap/dist/css/bootstrap.min.css";

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
      {charactersList.map((characters) => {
        return (
          <div className="card" key={characters.id}>
            <img
              className="card-img-top"
              src={characters.thumbnail}
              alt="Characters cartoons"
            />
            <div className="card-body">
              <h4 className="card-title">{characters.name}</h4>
              <a href="#!" className="btn btn-primary">
                See details
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
