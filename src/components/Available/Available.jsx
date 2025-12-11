import { useEffect, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Available = () => {
  const [availablePlayers, setAvailablePlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);
  return (
    <div>
      {/* <h1>Available Players</h1> */}

      <div className=" grid  grid-cols-3 gap-10">
        {
        availablePlayers.map((player) => (
          <AvailablePlayers player={player} key={player.id}></AvailablePlayers>))
        }
      </div>
    </div>
  );
};

export default Available;
