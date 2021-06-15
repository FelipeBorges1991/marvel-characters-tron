import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import md5 from "md5";

const publicKey = "c7dbb9aaf046c6e7dc40db5aebfffabd";
const privateKey = "94b44e6503b2e1660c4e2136da55279f3c61d314";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

function CharacterDetails() {
  const [state, setState] = useState({
    name: "",
    description: "",
    thumbnail: "",
    modified: "",
    comics: [],
    stories: [],
    events: [],
  });

  // Equivalente a usar o props.match.params.id
  const { id } = useParams();

  useEffect(() => {
    async function fetchSingleCharacter() {
      try {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/characters/{characterId}?ts=${time}&apikey=${publicKey}&hash=${hash}`
        );
        console.log(response);
        setState([response.data.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchSingleCharacter();
  }, [id]);

  return (
    <div style={{ backgroundColor: "#303841", color: "#eeeeee" }}>
      <div
        className="container justify-content-center d-flex align-items-center"
        style={{ minHeight: "700px" }}
      >
        <div
          className="card align-items-center mt-4 mb-4"
          style={{
            minWidth: "34rem",
            maxWidth: "34rem",
            backgroundColor: "#00adb5",
          }}
        >
          <img
            src={state.thumbnail}
            className="card-img-top"
            alt="User Profile"
          />
          <div className="card-body text-center d-flex flex-column">
            <h5 className="card-title" style={{ color: "#eeeeee" }}>
              {state.name}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails
