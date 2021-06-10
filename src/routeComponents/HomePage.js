import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import "bootstrap/dist/css/bootstrap.min.css";

const publicKey = "c7dbb9aaf046c6e7dc40db5aebfffabd";
const privateKey = "94b44e6503b2e1660c4e2136da55279f3c61d314";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

function Homepage() {
  const [characterslist, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
        );

        setCharacters([response.data.data]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  return <div>Marvel</div>;
}

export default Homepage;
