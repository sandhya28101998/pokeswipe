import React from "react";
import "./wellcome.css";
function Wellcome() {
  return (
    <div className="wellcome">
      <h1> How to play poke'Swipe</h1>
      <div>
        <p>
          Poke'mon appear one at atime choose "Like" or "Dislike" Build your
          favorite Team
        </p>
      </div>
      <button className="start">Let's Go</button>
    </div>
  );
}

export default Wellcome;
