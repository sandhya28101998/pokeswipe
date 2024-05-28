import React from "react";
import "./allcards.css";

function Allcards({ pokemon, loading }) {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className="card" key={item.id}>
                <div className="image">
                  <img src={item.sprites.front_default} alt={item.name} />
                </div>
                <div className="card-title">
                  <h1 className="name">{item.name}</h1>
                </div>
                <div className="category">
                  {item.abilities.map((poke) => {
                    return (
                      <>
                        <div className="group" key={poke.id}>
                          <p>{poke.ability.name}</p>
                        </div>
                      </>
                    );
                  })}

                  {item.types.map((poke) => {
                    return (
                      <>
                        <div className="group1" key={poke.id}>
                          <p>{poke.type.name}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="button-li">
                  <button className="action">DISLIKE</button>
                  <button className="action">LIKE</button>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Allcards;
