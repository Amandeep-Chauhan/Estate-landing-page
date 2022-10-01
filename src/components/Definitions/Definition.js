import React from "react";
import "./Definition.css";

const Definition = ({ word, category, meanings }) => {
  console.log(meanings);
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff" }}
          className="audio"
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          your browser doesn't support audio
        </audio>
      )}
      {!word ? (
        <p className="sub-title">start typing in search</p>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((items) =>
            items.definitions.map((def) => (
              <div className="single-mean">
                <p>
                  <strong>Definition: </strong>
                  {def.definition}
                </p>
                <hr />
                {def.example && (
                  <span>
                    <strong>Example: </strong>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span className="synonyms">
                    <strong>Synonyms: </strong>
                    {def.synonyms.map((syn) => `${syn}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
