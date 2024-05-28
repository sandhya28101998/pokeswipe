function Swipe({ pokemon }) {
  const handleLike = (img, name) => {
    console.log("pokeId: " + img);
    console.log("pokeName: " + name);
  };
  return (
    <div>
      {pokemon.map((item) => {
        return (
          <view style={{ alignSelf: "center", position: "absolute" }}>
            <div className="card" key={item.id}>
              <div className="image">
                <img src={item.sprites.front_default} alt={item.name} />
              </div>
              <div className="card-title">
                <h1 className="name">{item.name}</h1>
                <p>{item.id}</p>
              </div>
              <div className="button-li">
                <button
                  className="action"
                  onClick={() => {
                    console.log("no");
                  }}
                >
                  DISLIKE
                </button>
                <button
                  className="action"
                  onClick={(even) =>
                    handleLike(item.sprites.front_default, item.name)
                  }
                >
                  LIKE
                </button>
              </div>
            </div>
          </view>
        );
      })}
    </div>
  );
}

export default Swipe;
